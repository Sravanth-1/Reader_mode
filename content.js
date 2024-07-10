let isReadingMode = false;

const toggleReadingMode = (fontSize, backgroundColor) => {
  if (isReadingMode) {
    document.body.classList.remove('reading-mode');
    document.querySelectorAll('.reading-mode-element').forEach(el => {
      el.classList.remove('reading-mode-element');
      el.style.display = '';
    });
  } else {
    document.body.classList.add('reading-mode');
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.fontSize = fontSize;
    document.querySelectorAll('header, footer, aside, nav, .ad, .sidebar, .popup').forEach(el => {
      el.classList.add('reading-mode-element');
      el.style.display = 'none';
    });
  }
  isReadingMode = !isReadingMode;
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'toggleReadingMode') {
    toggleReadingMode(request.fontSize, request.backgroundColor);
  }
});
