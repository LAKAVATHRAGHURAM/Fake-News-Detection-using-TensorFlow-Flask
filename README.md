# 📰 Fake News Detection using Machine Learning  

This project is a **Fake News Detection System** that uses **Machine Learning** and a **Flask API**.  
It predicts whether a given news text is **Real** or **Fake**, and also provides a **confidence score**.  
Additionally, a **Chrome Extension** is integrated to allow users to check news authenticity directly from their browser.  

---

## 🚀 Features
- ✅ Detects **Real** or **Fake** news based on input text.  
- ✅ Provides a **confidence score** for each prediction.  
- ✅ REST API built with **Flask** (`/predict` endpoint).  
- ✅ Easy integration with **Chrome Extension**.  
- ✅ Model trained on a dataset of real and fake news.  

---

### 1️⃣ Clone Repository
```bash
git clone https://github.com/your-username/Fake-News-Detection.git
cd Fake-News-Detection
```
### 2️⃣ Create Virtual Environment & Install Dependencies
``` bash
pip install -r requirements.txt
```
### 3️⃣ Run Flask Server
``` bash
python app.py
```
The server will run on:
👉 http://127.0.0.1:5000/predict

### 4️⃣ Test API using curl or Postman
```bash
curl -X POST http://127.0.0.1:5000/predict \
-H "Content-Type: application/json" \
-d "{\"text\":\"This is a sample news text\"}"
```

### Example Output:
``` bash
{
  "text": "This is a sample news text",
  "prediction": "Fake",
  "confidence": 0.9823
}
```



### 🌐 Chrome Extension Setup

Open Chrome → Go to chrome://extensions/
Enable Developer mode (top-right corner)
Click Load unpacked and select the extension/ folder
The extension will appear in your browser
Enter news text in the popup → Click Check → Get result instantly 🚀

### 📊 Tech Stack
Python
Flask
Scikit-learn
Chrome Extension (JavaScript, HTML, CSS)

### 👨‍💻 Author
Lakavath Raghuram
B.Tech Final Year, IIIT Kottayam
Areas of Interest: Machine Learning, Deep Learning, Computer Vision






Extension (JavaScript, HTML, CSS)
