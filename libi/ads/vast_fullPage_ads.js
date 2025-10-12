// Create styles dynamically for popup
var style = document.createElement('style');
style.textContent = `
  * { margin:0; padding:0; box-sizing:border-box; }
  html, body { width:100%; height:100%; overflow-x:hidden; font-family: Arial, sans-serif; }
  .popup-wrap {
    position: fixed;
    top: 0; left: 0; width: 100vw; height: 100vh;
    background-color: rgba(0,0,0,0.65);
    display: none;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    z-index: 9999;
    overflow-y: auto;
  }
  .popup {
    position: relative;
    background: #000;
    border-radius: 16px;
    max-width: 95vw;
    max-height: 85vh;
    box-shadow: 0 15px 50px rgba(0,0,0,0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 0;
  }
  .popup a {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
  .popup img {
    display: block;
    max-width: 100%;
    max-height: 85vh;
    object-fit: contain;
  }
  .btn-close {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #fff;
    color: #000;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 32px;
    text-align: center;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    transition: transform 0.3s ease;
    z-index: 10;
    user-select: none;
  }
  .btn-close:hover {
    transform: scale(1.1) rotate(90deg);
  }
  .btn-close.disabled {
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: none;
    transform: none;
  }
  .popup-timer {
    position: absolute;
    top: 12px;
    right: 60px;
    background: rgba(255, 255, 255, 0.15);
    color: #fff;
    padding: 6px 14px;
    border-radius: 20px;
    font-weight: 600;
    font-size: 1.15rem;
    letter-spacing: 0.03em;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
    user-select: none;
    min-width: 85px;
    text-align: center;
    z-index: 10;
  }
  @media (max-width: 480px) {
    .popup-wrap {
      padding: 0.5rem;
    }
    .btn-close {
      width: 24px;
      height: 24px;
      font-size: 1.2rem;
      line-height: 24px;
      top: 8px;
      right: 8px;
    }
    .popup-timer {
      font-size: 1rem;
      padding: 5px 11px;
      top: 8px;
      right: 44px;
      min-width: 70px;
    }
  }
`;
document.head.appendChild(style);

// Create popup elements
var popupWrap = document.createElement('div');
popupWrap.className = 'popup-wrap';
popupWrap.setAttribute('role', 'dialog');
popupWrap.setAttribute('aria-modal', 'true');
popupWrap.setAttribute('tabindex', '-1');
popupWrap.setAttribute('aria-label', 'Advertisement Popup');

var popup = document.createElement('div');
popup.className = 'popup';

var timerDiv = document.createElement('div');
timerDiv.className = 'popup-timer';
var secondsSpan = document.createElement('span');
secondsSpan.className = 'seconds';
timerDiv.appendChild(secondsSpan);
timerDiv.appendChild(document.createTextNode(' second(s) left'));

var btnClose = document.createElement('div');
btnClose.className = 'btn-close disabled';
btnClose.setAttribute('role', 'button');
btnClose.setAttribute('aria-label', 'Close popup');
btnClose.textContent = '×';

// Insert your banner/ad content here; example:
// var adLink = document.createElement('a');
// adLink.href = 'https://example.com';
// adLink.target = '_blank';
// var adImage = document.createElement('img');
// adImage.src = 'https://via.placeholder.com/728x90?text=Ad+Banner';
// adImage.alt = 'Advertisement Banner';
// adLink.appendChild(adImage);
// popup.appendChild(adLink);

// For demonstration, just a blank black area in popup:
popup.appendChild(timerDiv);
popup.appendChild(btnClose);
popupWrap.appendChild(popup);
document.body.appendChild(popupWrap);

// Timer functionality
var duration = 25;
var closeEnabled = false;
var timerInterval;

function startTimer() {
  duration--;
  secondsSpan.textContent = duration;
  if (duration <= 0) {
    clearInterval(timerInterval);
    closeEnabled = true;
    btnClose.classList.remove('disabled');
    btnClose.style.pointerEvents = 'auto';
  }
}

// Show popup after 1 second delay
setTimeout(function() {
  secondsSpan.textContent = duration;
  popupWrap.style.display = 'flex';
  
  timerInterval = setInterval(startTimer, 1000);
  
  btnClose.addEventListener('click', function() {
    if (!closeEnabled) {
      alert('Ad clicked! Close button not enabled yet.');
      return;
    }
    clearInterval(timerInterval);
    popupWrap.style.display = 'none';
  });
  
  popupWrap.addEventListener('click', function(e) {
    if (e.target === popupWrap && closeEnabled) {
      clearInterval(timerInterval);
      popupWrap.style.display = 'none';
    }
  });
}, 1000);