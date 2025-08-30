from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
import pickle
import numpy as np
from tensorflow.keras.preprocessing.sequence import pad_sequences
from flask_cors import CORS     

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # allow cross-origin requests (important for Chrome extension)

# Load model and tokenizer
model = load_model("model/fake_news_model.h5")

with open("model/tokenizer.pkl", "rb") as f:
    tokenizer = pickle.load(f)

# Max length used during training
MAX_LEN = 200  

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()
        text = data.get("text")

        if not text:
            return jsonify({"error": "No text provided"}), 400

        # Convert text to sequence
        seq = tokenizer.texts_to_sequences([text])
        padded = pad_sequences(seq, maxlen=MAX_LEN)

        # Predict
        prediction = model.predict(padded)
        label = "Real" if prediction[0][0] > 0.6 else "Fake"

        return jsonify({
            "text": text,
            "prediction": label,
            "confidence": float(prediction[0][0])
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/", methods=["GET"])
def home():
    return "Fake News Detection Backend Running!"


if __name__ == "__main__":
    app.run(debug=True, port=5000)


#curl -X POST http://127.0.0.1:5000/predict -H "Content-Type: application/json" -d "{\"text\":\"This news looks suspicious\"}"
