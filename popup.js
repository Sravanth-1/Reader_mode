document.getElementById('toggleReadingMode').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: 'toggleReadingMode',
      fontSize: document.getElementById('fontSize').value,
      backgroundColor: document.getElementById('backgroundColor').value
    });
  });
});
