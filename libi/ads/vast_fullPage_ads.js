
(function() {
  const classPrefix = 'mytopad-';
  const TOP_Z = 2147483647;

  // Inject unique CSS with highest global priority
  const css = `
    .${classPrefix}popup-wrap {
      position: fixed !important;
      top: 0; left: 0;
      width: 100vw; height: 100vh;
      background-color: rgba(0,0,0,0.65);
      display: none;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      z-index: ${TOP_Z} !important;
      overflow-y: auto;
    }
    .${classPrefix}popup {
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
    }
    .${classPrefix}btn-close {
      position: absolute;
      top: 12px; right: 12px;
      width: 32px; height: 32px;
      border-radius: 50%;
      background: #fff;
      color: #000;
      font-size: 1.4rem;
      font-weight: bold;
      line-height: 32px;
      text-align: center;
      cursor: pointer;
      transition: transform 0.3s ease;
      z-index: ${TOP_Z + 1};
    }
    .${classPrefix}btn-close:hover { transform: scale(1.1) rotate(90deg); }
    .${classPrefix}btn-close.disabled {
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
      transform: none;
    }
    .${classPrefix}popup-timer {
      position: absolute;
      top: 12px; right: 60px;
      background: rgba(255,255,255,0.15);
      color: #fff;
      padding: 6px 14px;
      border-radius: 20px;
      font-weight: 600;
      font-size: 1.1rem;
      text-align: center;
      min-width: 80px;
      z-index: ${TOP_Z + 1};
    }
    #video-container {
      position: relative;
      width: 100%;
      padding-top: 56.25%;
      overflow: hidden;
    }
    #content-video, #ad-container {
      position: absolute;
      top: 0; left: 0;
      width: 100%;
      height: 100%;
    }
    #content-video { object-fit: contain; }
    #ad-container {
      z-index: ${TOP_Z + 2};
      cursor: pointer;
      pointer-events: none;
      background-color: transparent;
    }
    @media (max-width: 768px) {
      #video-container { padding-top: 75%; }
      .${classPrefix}popup-timer { font-size: 1rem; right: 48px; }
      .${classPrefix}btn-close { width: 28px; height: 28px; font-size: 1.1rem; }
    }
  `;
  const style = document.createElement('style');
  style.type = 'text/css';
  style.textContent = css;
  document.head.prepend(style);

  // Create popup DOM structure
  const popupWrap = document.createElement('div');
  popupWrap.className = classPrefix + 'popup-wrap';
  popupWrap.innerHTML = `
    <div class="${classPrefix}popup">
      <div class="${classPrefix}popup-timer"><span class="seconds"></span> sec</div>
      <div class="${classPrefix}btn-close disabled">×</div>
      <div id="video-container">
        <video id="content-video" controls playsinline poster="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgB4FisStERcFQ-_6PRXKXWkNb71hhxIWX1J3UXFQGWA&s=10">
          <source src="/main_Resource/ads/video ads/The_Bread_-_Animated_Short_Film_by_GULU(360p).mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <div id="ad-container"></div>
      </div>
    </div>
  `;
  document.body.appendChild(popupWrap);

  // Function to safely load external scripts
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  // Load Google IMA SDK and jQuery
  Promise.all([
    loadScript('https://code.jquery.com/jquery-3.7.1.min.js'),
    loadScript('https://imasdk.googleapis.com/js/sdkloader/ima3.js')
  ]).then(() => {
    const $ = window.jQuery;
    $(function() {
      let duration = 10;
      let closeEnabled = false;
      let timerStarted = false;
      let timerInterval;
      const $popupWrap = $('.' + classPrefix + 'popup-wrap');
      const $btnClose = $('.' + classPrefix + 'btn-close');
      const $seconds = $('.seconds');
      const contentVideo = document.getElementById('content-video');
      const adContainer = document.getElementById('ad-container');
      let adDisplayContainer, adsLoader, adsManager;

      // Countdown logic
      function startTimer() {
        duration--;
        $seconds.text(duration);
        if (duration <= 0) {
          clearInterval(timerInterval);
          closeEnabled = true;
          $btnClose.removeClass('disabled').css('pointer-events', 'auto');
        }
      }

      // IMA SDK initialization
      function initIMA() {
        adDisplayContainer = new google.ima.AdDisplayContainer(adContainer, contentVideo);
        adDisplayContainer.initialize();
        adsLoader = new google.ima.AdsLoader(adDisplayContainer);
        adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, onAdsManagerLoaded);
        adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, onAdError);

        const adsRequest = new google.ima.AdsRequest();
        adsRequest.adTagUrl = "https://chubby-tap.com/d/m/Fuz.d/G/NtvJZCGMUU/PeHmi9yu/ZdUIlYkOPpTPY/2/NHzuI/3/MnT/kJt/NWjSYr3DM/jdcoytMlC/ZjsNaEWY1bp/dvDb0Ox-";
        adsRequest.linearAdSlotWidth = adContainer.offsetWidth;
        adsRequest.linearAdSlotHeight = adContainer.offsetHeight;
        adsRequest.nonLinearAdSlotWidth = adContainer.offsetWidth;
        adsRequest.nonLinearAdSlotHeight = 150;
        adsLoader.requestAds(adsRequest);
      }

      function onAdsManagerLoaded(e) {
        adsManager = e.getAdsManager(contentVideo);
        adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, onAdError);
        adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, () => contentVideo.pause());
        adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, () => contentVideo.play());
        try {
          adsManager.init(adContainer.offsetWidth, adContainer.offsetHeight, google.ima.ViewMode.NORMAL);
          adsManager.start();
          adContainer.style.pointerEvents = "auto";
        } catch (err) {
          console.error('IMA init failed', err);
          adContainer.style.pointerEvents = "none";
          contentVideo.play();
        }
      }

      function onAdError(event) {
        console.error('Ad error:', event.getError());
        if (adsManager) {
          try { adsManager.destroy(); } catch (e) {}
        }
        contentVideo.play();
        adContainer.style.pointerEvents = "none";
      }

      // Display popup with fade-in
      setTimeout(() => {
        $seconds.text(duration);
        $popupWrap.fadeIn(400).css('z-index', TOP_Z);

        contentVideo.addEventListener('play', () => {
          if (!timerStarted) {
            timerStarted = true;
            timerInterval = setInterval(startTimer, 1000);
          }
          if (!adDisplayContainer) initIMA();
        });

        $btnClose.on('click', () => {
          if (!closeEnabled) {
            alert("Please watch the ad for a few seconds before closing.");
            return;
          }
          clearInterval(timerInterval);
          contentVideo.pause();
          contentVideo.currentTime = 0;
          if (adsManager) {
            try { adsManager.destroy(); } catch (e) {}
          }
          adContainer.style.pointerEvents = 'none';
          $popupWrap.fadeOut(300);
        });

        $popupWrap.on('click', (e) => {
          if (e.target === e.currentTarget && closeEnabled) {
            clearInterval(timerInterval);
            contentVideo.pause();
            contentVideo.currentTime = 0;
            if (adsManager) {
              try { adsManager.destroy(); } catch (e) {}
            }
            adContainer.style.pointerEvents = 'none';
            $popupWrap.fadeOut(300);
          }
        });

        // Protect the popup from removal
        const observer = new MutationObserver(() => {
          if (!$('body').find($popupWrap).length) $('body').append($popupWrap);
          $popupWrap.css('z-index', TOP_Z).show();
        });
        observer.observe(document.body, { childList: true, subtree: true });
      }, 1000);
    });
  }).catch(console.error);
})();
