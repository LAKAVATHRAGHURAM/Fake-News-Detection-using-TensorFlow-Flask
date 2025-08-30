chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "checkNews",
    title: "Check if this news is Fake or Real",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "checkNews") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: sendSelectedText,
      args: [info.selectionText]
    });
  }
});

function sendSelectedText(text) {
  fetch("http://127.0.0.1:5000/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  })
    .then(res => res.json())
    .then(data => {
      alert(
        `Prediction: ${data.prediction}\nConfidence: ${(data.confidence * 100).toFixed(2)}%`
      );
    })
    .catch(err => alert("Error: " + err));
}
