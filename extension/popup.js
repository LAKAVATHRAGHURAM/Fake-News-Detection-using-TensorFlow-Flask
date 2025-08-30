document.getElementById("checkBtn").addEventListener("click", () => {
  const text = document.getElementById("newsInput").value;

  fetch("http://127.0.0.1:5000/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById("result").innerHTML = `
        <p><b>Prediction:</b> ${data.prediction}</p>
        <p><b>Confidence:</b> ${(data.confidence * 100).toFixed(2)}%</p>
      `;
    })
    .catch(err => {
      document.getElementById("result").innerText = "Error: " + err;
    });
});
