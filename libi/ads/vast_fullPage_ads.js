// Load and play VAST ad with Google IMA SDK

(function() {
  // Add styles dynamically
  const style = document.createElement('style');
  style.textContent = `
    #adContainer, #videoElement {
      position: fixed; top: 0; left: 0; height: 100%; width: 100%; background: black;
      z-index: 10000;
    }
    #videoElement {
      width: 100%; height: 100%;
    }
    #closeBtn {
      position: fixed;
      top: 20px; right: 20px;
      z-index: 10001;
      background: rgba(255, 255, 255, 0.7);
      color: black;
      border: none;
      font-size: 18px;
      cursor: pointer;
      padding: 8px 12px;
      border-radius: 4px;
      user-select: none;
      display: none;
    }
  `;
  document.head.appendChild(style);

  // Create ad container and video elements
  const adContainer = document.createElement('div');
  adContainer.id = 'adContainer';
  document.body.appendChild(adContainer);

  const videoElement = document.createElement('video');
  videoElement.id = 'videoElement';
  videoElement.muted = true;
  videoElement.setAttribute('playsinline', 'true'); // better mobile support
  document.body.appendChild(videoElement);

  // Create close button
  const closeBtn = document.createElement('button');
  closeBtn.id = 'closeBtn';
  closeBtn.textContent = 'Close';
  document.body.appendChild(closeBtn);

  // Load Google IMA SDK script
  const imaScript = document.createElement('script');
  imaScript.src = 'https://imasdk.googleapis.com/js/sdkloader/ima3.js';
  imaScript.async = true;

  imaScript.onload = function() {
    let adsManager;
    let closeBtnTimer;

    const adDisplayContainer = new google.ima.AdDisplayContainer(adContainer, videoElement);
    const adsLoader = new google.ima.AdsLoader(adDisplayContainer);

    function closeAd() {
      if (adsManager) {
        try { adsManager.stop(); } catch (e) {}
      }
      adContainer.style.display = 'none';
      videoElement.style.display = 'none';
      closeBtn.style.display = 'none';
      if (closeBtnTimer) {
        clearTimeout(closeBtnTimer);
      }
      try {
        window.close();
        setTimeout(() => { window.location.href = 'about:blank'; }, 500);
      } catch {
        window.location.href = 'about:blank';
      }
    }

    adsLoader.addEventListener(
      google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
      event => {
        adsManager = event.getAdsManager(videoElement);
        adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, onAdError);
        adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, () => {
          // Show close button after 20 seconds delay
          closeBtnTimer = setTimeout(() => {
            closeBtn.style.display = 'block';
          }, 20000);
        });
        adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, closeAd);
        adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, closeAd);
        try {
          adsManager.init(window.innerWidth, window.innerHeight, google.ima.ViewMode.NORMAL);
          adsManager.start();
        } catch (error) {
          console.error('AdsManager could not start:', error);
          closeAd();
        }
      }
    );

    adsLoader.addEventListener(
      google.ima.AdErrorEvent.Type.AD_ERROR,
      event => {
        console.error('Ad error:', event.getError());
        closeAd();
      }
    );

    window.addEventListener('load', () => {
      adDisplayContainer.initialize();
      const adsRequest = new google.ima.AdsRequest();
      adsRequest.adTagUrl = 'https://impracticalshoulder.com/dDmEFJzDd.GvNnvJZzGiUt/le/me9ZuMZPUIl/kcPnTLY/2RNZzuIa3NMJTvk/tjNFjvYm3QMtjQcZyRMqAV';
      adsRequest.linearAdSlotWidth = window.innerWidth;
      adsRequest.linearAdSlotHeight = window.innerHeight;
      adsRequest.nonLinearAdSlotWidth = window.innerWidth;
      adsRequest.nonLinearAdSlotHeight = window.innerHeight / 3;
      adsLoader.requestAds(adsRequest);
      closeBtn.style.display = 'none';
    });

    closeBtn.addEventListener('click', closeAd);
  };

  document.head.appendChild(imaScript);
})();