(function() {
  // Prefix for unique class names
  const classPrefix = 'mytopad-';
  
  // CSS styles ensuring highest priority and uniqueness
  const css = `
    .${classPrefix}popup-wrap {
      position: fixed;
      top: 0; left: 0;
      width: 100vw; height: 100vh;
      background-color: rgba(0,0,0,0.65);
      display: none;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      z-index: 2147483647 !important;
      overflow-y: auto;
    }
    .${classPrefix}popup {
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
      padding: 0;
    }
    .${classPrefix}popup a {
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
    .${classPrefix}popup img {
      display: block;
      max-width: 100%;
      max-height: 85vh;
      width: auto;
      height: auto;
      object-fit: contain;
    }
    .${classPrefix}btn-close {
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
    .${classPrefix}btn-close:hover {
      transform: scale(1.1) rotate(90deg);
    }
    .${classPrefix}btn-close.disabled {
      cursor: not-allowed;
      opacity: 0.5;
      pointer-events: none;
      transform: none;
    }
    .${classPrefix}popup-timer {
      position: absolute;
      top: 12px;
      right: 60px;
      background: rgba(255,255,255,0.15);
      color: #fff;
      padding: 6px 14px;
      border-radius: 20px;
      font-weight: 600;
      font-size: 1.15rem;
      letter-spacing: 0.03em;
      box-shadow: 0 0 8px rgba(255,255,255,0.2);
      user-select: none;
      min-width: 85px;
      text-align: center;
      z-index: 10;
    }
    @media(max-width: 480px) {
      .${classPrefix}popup-wrap {
        padding: 0.5rem;
      }
      .${classPrefix}btn-close {
        width: 24px; height: 24px; font-size: 1.2rem; line-height: 24px; top: 8px; right: 8px;
      }
      .${classPrefix}popup-timer { font-size: 1rem; padding: 5px 11px; top: 8px; right: 44px; min-width: 70px; }
    }
  `;
  
  function injectPopupAd() {
    // Prevent double-injection
    if (document.querySelector('.' + classPrefix + 'popup-wrap')) return;
    
    // Style
    const style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    document.head.prepend(style);
    
    // DOM elements
    const popupWrap = document.createElement('div');
    popupWrap.className = classPrefix + 'popup-wrap';
    popupWrap.setAttribute('role', 'dialog');
    popupWrap.setAttribute('aria-modal', 'true');
    popupWrap.setAttribute('tabindex', '-1');
    popupWrap.setAttribute('aria-label', 'Advertisement Popup');
    
    const popup = document.createElement('div');
    popup.className = classPrefix + 'popup';
    
    const timer = document.createElement('div');
    timer.className = classPrefix + 'popup-timer';
    const timerSpan = document.createElement('span');
    timerSpan.className = 'seconds';
    timer.appendChild(timerSpan);
    timer.appendChild(document.createTextNode(' second(s) left'));
    
    const btnClose = document.createElement('div');
    btnClose.className = classPrefix + 'btn-close disabled';
    btnClose.setAttribute('role', 'button');
    btnClose.setAttribute('aria-label', 'Close popup');
    btnClose.textContent = '×';
    
    const link = document.createElement('a');
    link.href = 'https://chubby-tap.com/G5bIuE';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    
    const img = document.createElement('img');
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWIxmdqoMAtFmwSR-3BzxPBM_WTDi0sLAs-QG463jj2g&s=10';
    img.alt = 'Ad Banner';
    
    link.appendChild(img);
    popup.appendChild(timer);
    popup.appendChild(btnClose);
    popup.appendChild(link);
    popupWrap.appendChild(popup);
    document.body.appendChild(popupWrap);
    
    // Timer control
    let duration = 10;
    let closeEnabled = false;
    let timerInterval;
    
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
    
    // Fade in
    setTimeout(() => {
      popupWrap.style.display = 'flex';
      popupWrap.style.opacity = 0;
      let op = 0;
      let fadeIn = setInterval(() => {
        op = Math.min(op + 0.05, 1);
        popupWrap.style.opacity = op;
        if (op >= 1) {
          clearInterval(fadeIn);
          timerSpan.textContent = duration;
          startTimer();
          timerInterval = setInterval(startTimer, 1000);
        }
      }, 20);
    }, 1000);
    
    // Fade out
    function fadeOutPopup() {
      let op = parseFloat(popupWrap.style.opacity);
      let fadeOut = setInterval(() => {
        op = Math.max(op - 0.05, 0);
        popupWrap.style.opacity = op;
        if (op <= 0) {
          clearInterval(fadeOut);
          popupWrap.style.display = 'none';
        }
      }, 20);
    }
    
    // Close button handler
    btnClose.addEventListener('click', () => {
      if (!closeEnabled) {
        alert('Ad clicked! Close button not enabled yet.');
        return;
      }
      clearInterval(timerInterval);
      fadeOutPopup();
    });
    
    // Clicking outside popup
    popupWrap.addEventListener('click', (e) => {
      if (e.target === popupWrap && closeEnabled) {
        clearInterval(timerInterval);
        fadeOutPopup();
      }
    });
    
    // MutationObserver: always restore popup if removed/hidden
    const observer = new MutationObserver(() => {
      if (!document.body.contains(popupWrap)) document.body.appendChild(popupWrap);
      popupWrap.style.display = 'flex';
      popupWrap.style.zIndex = '2147483647';
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
  
  injectPopupAd(); // Immediate inject
  document.addEventListener('DOMContentLoaded', injectPopupAd); // Re-inject on DOM load
  
})();