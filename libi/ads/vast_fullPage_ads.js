(function(){
    // Inject CSS styles
    var style = document.createElement('style');
    style.textContent = `
        * { margin:0; padding:0; }
        html, body { width:100%; height:100%; }
        .popup-wrap {
            position: fixed;
            top: 0; left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.5);
            display: none;
            z-index: 9999;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .popup {
            position: relative;
            width: 90vw;
            max-width: 500px;
            aspect-ratio: 1 / 1;
            background-color: rgba(0, 0, 0, 1);
            border-radius: 14px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.35);
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .popup-timer {
            position: absolute;
            top: 12px;
            right: 14px;
            background: rgba(255, 255, 255, 0.15);
            color: #fff;
            padding: 6px 14px;
            border-radius: 20px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-weight: 600;
            font-size: 1.15rem;
            letter-spacing: 0.03em;
            box-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
            user-select: none;
            transition: all 0.3s ease;
            min-width: 85px;
            text-align: center;
        }
        @media (max-width: 600px) {
            .popup-timer {
                font-size: 1rem;
                padding: 5px 11px;
                top: 8px;
                right: 10px;
                min-width: 70px;
            }
        }
        .btn-close {
            background-color: #fff;
            width: 25px;
            height: 25px;
            text-align: center;
            line-height: 22px;
            position: absolute;
            right: -10px;
            top: -10px;
            cursor: pointer;
            transition: all 0.5s ease;
            border-radius: 50%;
            font-size: 1.2rem;
            user-select: none;
        }
        .btn-close:hover {
            transform: rotate(360deg);
        }
        .btn-close.disabled {
            cursor: not-allowed;
            opacity: 0.6;
            pointer-events: none;
        }
        @media (max-width: 600px) {
            .popup {
                width: 90vw;
                max-width: none;
                aspect-ratio: 1 / 1;
            }
            .popup-timer {
                font-size: 1rem;
                right: 7px;
                top: 7px;
            }
            .btn-close {
                width: 24px;
                height: 24px;
                right: -8px;
                top: -8px;
                font-size: 1rem;
            }
        }
    `;
    document.head.appendChild(style);

    // Create popup HTML structure
    var popupWrap = document.createElement('div');
    popupWrap.className = 'popup-wrap';
    popupWrap.setAttribute('role', 'dialog');
    popupWrap.setAttribute('aria-modal', 'true');
    popupWrap.tabIndex = -1;

    popupWrap.innerHTML = `
        <div class="popup">
            <div class="popup-timer"><span class="seconds"></span> second(s) left</div>
            <div class="btn-close disabled" role="button" aria-label="Close">×</div>
            <div style="flex:1; display:flex; align-items:center; justify-content:center; color:white; font-size:1.3rem;">
                <video class="op-player op-player__media" id="video" controls playsinline width="100%" height="100%">
                    <source src="//commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    `;
    document.body.appendChild(popupWrap);

    // Load OpenPlayerJS and initialize
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/openplayerjs@1.12.1/dist/openplayer.min.js';
    script.onload = function() {
        var player = new OpenPlayer('video', 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=vmap&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ar%3Dpremidpostoptimizedpod&cmsid=496&vid=short_onecue&correlator=');
        player.init();

        var initialDuration = 20;
        var timerDuration = initialDuration;
        var closeEnabled = false;
        var timerInterval = null;

        var secondsSpan = popupWrap.querySelector('.seconds');
        var btnClose = popupWrap.querySelector('.btn-close');
        var videoElement = document.getElementById('video');

        function fadeIn(element, duration) {
            element.style.opacity = 0;
            element.style.display = 'flex';
            var last = +new Date();
            var opacity = 0;
            (function tick() {
                opacity += (new Date() - last) / duration;
                last = +new Date();
                if (opacity < 1) {
                    element.style.opacity = opacity;
                    requestAnimationFrame(tick);
                } else {
                    element.style.opacity = 1;
                }
            })();
        }

        function fadeOut(element, duration) {
            element.style.opacity = 1;
            var last = +new Date();
            var opacity = 1;
            (function tick() {
                opacity -= (new Date() - last) / duration;
                last = +new Date();
                if (opacity > 0) {
                    element.style.opacity = opacity;
                    requestAnimationFrame(tick);
                } else {
                    element.style.opacity = 0;
                    element.style.display = 'none';
                }
            })();
        }

        setTimeout(() => {
            fadeIn(popupWrap, 1500);
            secondsSpan.textContent = timerDuration;
        }, 1000);

        function startCountdown() {
            if (timerInterval) return;
            timerDuration = initialDuration;
            secondsSpan.textContent = timerDuration;
            closeEnabled = false;
            btnClose.classList.add('disabled');
            btnClose.style.pointerEvents = 'none';

            timerInterval = setInterval(() => {
                timerDuration--;
                secondsSpan.textContent = timerDuration;
                if (timerDuration <= 0) {
                    clearInterval(timerInterval);
                    timerInterval = null;
                    closeEnabled = true;
                    btnClose.classList.remove('disabled');
                    btnClose.style.pointerEvents = 'auto';
                }
            }, 1000);
        }

        videoElement.addEventListener('play', startCountdown);

        btnClose.addEventListener('click', () => {
            if (!closeEnabled) {
                alert("Ad clicked! Close button not enabled yet.");
                return;
            }
            if (timerInterval) {
                clearInterval(timerInterval);
                timerInterval = null;
            }
            fadeOut(popupWrap, 500);
        });
    };
    document.body.appendChild(script);
})();

/*// Load and play VAST ad with Google IMA SDK

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
})();*/