(function() {
  // ---------- Style ----------
  const style = document.createElement("style");
  style.textContent = `
    * { margin:0; padding:0; box-sizing:border-box; }
    html, body { width:100%; height:100%; font-family:Arial,sans-serif; overflow-x:hidden; }
    .popup-wrap {
      position:fixed; top:0; left:0;
      width:100vw; height:100vh;
      background:rgba(0,0,0,0.65);
      display:none; justify-content:center; align-items:center;
      padding:1rem; z-index:9999; opacity:0;
      transition:opacity 0.4s ease;
    }
    .popup { position:relative; background:#000; border-radius:16px;
      max-width:95vw; max-height:85vh; box-shadow:0 15px 50px rgba(0,0,0,0.7);
      display:flex; justify-content:center; align-items:center; overflow:hidden;
    }
    .btn-close {
      position:absolute; top:12px; right:12px;
      width:32px; height:32px; border-radius:50%;
      background:#fff; color:#000; font-size:1.4rem; font-weight:bold; 
      line-height:32px; text-align:center; cursor:pointer;
      transition:transform 0.3s ease; z-index:999;
    }
    .btn-close:hover { transform:scale(1.1) rotate(90deg); }
    .btn-close.disabled { opacity:0.5; cursor:not-allowed; pointer-events:none; transform:none; }
    .popup-timer {
      position:absolute; top:12px; right:60px;
      background:rgba(255,255,255,0.15); color:#fff;
      padding:6px 14px; border-radius:20px;
      font-weight:600; font-size:1.1rem; min-width:80px; text-align:center; z-index:999;
    }
    #video-container { position:relative; width:100%; padding-top:56.25%; overflow:hidden; }
    #content-video, #ad-container {
      position:absolute; top:0; left:0; width:100%; height:100%;
    }
    #content-video { object-fit:contain; }
    #ad-container { z-index:20; cursor:pointer; pointer-events:none; background:transparent; }
    @media (max-width:768px) {
      #video-container { padding-top:75%; }
      .popup-timer { font-size:1rem; right:48px; }
      .btn-close { width:28px; height:28px; font-size:1.1rem; }
    }`;
  document.head.appendChild(style);

  // ---------- HTML ----------
  const popupWrap = document.createElement("div");
  popupWrap.className = "popup-wrap";
  popupWrap.innerHTML = `
    <div class="popup">
      <div class="popup-timer"><span class="seconds"></span> sec</div>
      <div class="btn-close disabled">×</div>
      <div id="video-container">
        <video id="content-video" controls playsinline poster="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgB4FisStERcFQ-_6PRXKXWkNb71hhxIWX1J3UXFQGWA&s=10">
          <source src="/main_Resource/ads/video ads/The_Bread_-_Animated_Short_Film_by_GULU(360p).mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <div id="ad-container"></div>
      </div>
    </div>`;
  document.body.appendChild(popupWrap);

  // ---------- Utilities ----------
  function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "flex";
    (function fade() {
      let val = parseFloat(el.style.opacity);
      if (!((val += 0.05) > 1)) {
        el.style.opacity = val;
        requestAnimationFrame(fade);
      }
    })();
  }

  function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
      if ((el.style.opacity -= 0.05) < 0) {
        el.style.display = "none";
      } else {
        requestAnimationFrame(fade);
      }
    })();
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  // ---------- Load IMA SDK ----------
  loadScript("https://imasdk.googleapis.com/js/sdkloader/ima3.js").then(() => {

    // --- Core logic ---
    let duration = 10;
    let closeEnabled = false;
    let timerStarted = false;
    let timerInterval;

    const btnClose = popupWrap.querySelector(".btn-close");
    const seconds = popupWrap.querySelector(".seconds");
    const contentVideo = document.getElementById("content-video");
    const adContainer = document.getElementById("ad-container");

    let adDisplayContainer, adsLoader, adsManager;

    function startTimer() {
      duration--;
      seconds.textContent = duration;
      if (duration <= 0) {
        clearInterval(timerInterval);
        closeEnabled = true;
        btnClose.classList.remove("disabled");
        btnClose.style.pointerEvents = "auto";
      }
    }

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
        console.error("Ad initialization failed", err);
        contentVideo.play();
        adContainer.style.pointerEvents = "none";
      }
    }

    function onAdError(event) {
      console.error("Ad error:", event.getError());
      if (adsManager) {
        try { adsManager.destroy(); } catch (e) {}
      }
      contentVideo.play();
      adContainer.style.pointerEvents = "none";
    }

    // --- Popup Controls ---
    setTimeout(() => {
      seconds.textContent = duration;
      fadeIn(popupWrap);

      contentVideo.addEventListener("play", () => {
        if (!timerStarted) {
          timerStarted = true;
          timerInterval = setInterval(startTimer, 1000);
          if (!adDisplayContainer) initIMA();
        }
      });

      btnClose.addEventListener("click", () => {
        if (!closeEnabled) {
          alert("Please watch the ad for a few seconds before closing.");
          return;
        }
        clearInterval(timerInterval);
        contentVideo.pause();
        contentVideo.currentTime = 0;
        if (adsManager) try { adsManager.destroy(); } catch {}
        adContainer.style.pointerEvents = "none";
        fadeOut(popupWrap);
      });

      popupWrap.addEventListener("click", (e) => {
        if (e.target === popupWrap && closeEnabled) {
          clearInterval(timerInterval);
          contentVideo.pause();
          contentVideo.currentTime = 0;
          if (adsManager) try { adsManager.destroy(); } catch {}
          adContainer.style.pointerEvents = "none";
          fadeOut(popupWrap);
        }
      });
    }, 1000);
  });
})();