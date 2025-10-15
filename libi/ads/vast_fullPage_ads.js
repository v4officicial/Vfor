(function() {
  // Inject CSS styles
  var css = `
    /* Reset and base styles */
    /** {
      margin: 0; padding: 0; box-sizing: border-box;
    }
    html, body {
      width: 100%; height: 100%; overflow-x: hidden;
      font-family: Arial, sans-serif;
    }*/

    /* Fullscreen overlay */
    .popup-wrap {
      position: fixed;
      top: 0; left: 0;
      width: 100vw; height: 100vh;
      background-color: rgba(0,0,0,0.65);
      display: none;
      justify-content: center;
      align-items: center;
      padding: 1rem; /* padding for viewport edges */
      z-index: 9999;
      overflow-y: auto; /* scroll if needed on small devices */
    }

    /* Popup container */
    .popup {
      position: relative;
      background: #000;
      border-radius: 16px;
      max-width: 95vw;
      max-height: 85vh;
      width: auto;
      height: auto;
      box-shadow: 0 15px 50px rgba(0,0,0,0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      padding: 0; /* no internal padding to avoid shrinking banner */
    }

    /* Banner/ad image wrapper link */
    .popup a {
      display: block;
      max-width: 100%;
      max-height: 100%;
    }

    /* Banner image adapts */
    .popup img {
      display: block;
      max-width: 100%;
      max-height: 85vh;
      width: auto;
      height: auto;
      object-fit: contain; /* fits within container, no cropping */
    }

    /* Close button styling */
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

    /* Timer badge */
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

    /* Scrollbar for mobile */
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

  var style = document.createElement('style');
  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);

  // Create popup DOM elements
  var popupWrap = document.createElement('div');
  popupWrap.className = 'popup-wrap';
  popupWrap.setAttribute('role', 'dialog');
  popupWrap.setAttribute('aria-modal', 'true');
  popupWrap.setAttribute('tabindex', '-1');
  popupWrap.setAttribute('aria-label', 'Advertisement Popup');

  var popup = document.createElement('div');
  popup.className = 'popup';

  var timer = document.createElement('div');
  timer.className = 'popup-timer';
  var timerSpan = document.createElement('span');
  timerSpan.className = 'seconds';
  timer.appendChild(timerSpan);
  timer.appendChild(document.createTextNode(' second(s) left'));

  var btnClose = document.createElement('div');
  btnClose.className = 'btn-close disabled';
  btnClose.setAttribute('role', 'button');
  btnClose.setAttribute('aria-label', 'Close popup');
  btnClose.textContent = '×'; // ×

  var link = document.createElement('a');
  link.href = 'https://chubby-tap.com/G5bIuE';
  link.target = '_blank';
  link.rel = 'noopener noreferrer';

  var img = document.createElement('img');
  img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWIxmdqoMAtFmwSR-3BzxPBM_WTDi0sLAs-QG463jj2g&s=10';
  img.alt = 'Ad Banner';

  link.appendChild(img);
  popup.appendChild(timer);
  popup.appendChild(btnClose);
  popup.appendChild(link);
  popupWrap.appendChild(popup);
  document.body.appendChild(popupWrap);

  // Timer and controls logic
  var duration = 25;
  var closeEnabled = false;
  var timerInterval;

  function startTimer() {
    duration--;
    timerSpan.textContent = duration;
    if (duration <= 0) {
      clearInterval(timerInterval);
      closeEnabled = true;
      btnClose.classList.remove('disabled');
      btnClose.style.pointerEvents = 'auto';
    }
  }

  // Show popup and start timer after 1sec delay
  setTimeout(function() {
    timerSpan.textContent = duration;
    // Fade in popup
    popupWrap.style.display = 'flex';
    popupWrap.style.opacity = 0;
    var op = 0;
    var fadeInInterval = setInterval(function() {
      if (op >= 1) clearInterval(fadeInInterval);
      popupWrap.style.opacity = op;
      op += 0.05;
    }, 20);

    timerInterval = setInterval(startTimer, 1000);

    btnClose.addEventListener('click', function() {
      if (!closeEnabled) {
        alert('Ad clicked! Close button not enabled yet.');
        return;
      }
      clearInterval(timerInterval);
      // Fade out popup
      var op = 1;
      var fadeOutInterval = setInterval(function() {
        if (op <= 0) {
          clearInterval(fadeOutInterval);
          popupWrap.style.display = 'none';
        }
        popupWrap.style.opacity = op;
        op -= 0.05;
      }, 20);
    });

    popupWrap.addEventListener('click', function(e) {
      if (e.target === popupWrap && closeEnabled) {
        clearInterval(timerInterval);
        // Fade out popup
        var op = 1;
        var fadeOutInterval = setInterval(function() {
          if (op <= 0) {
            clearInterval(fadeOutInterval);
            popupWrap.style.display = 'none';
          }
          popupWrap.style.opacity = op;
          op -= 0.05;
        }, 20);
      }
    });
  }, 1000);
})();