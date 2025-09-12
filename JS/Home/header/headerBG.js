import * as libi from '/libi/lib.js';

export var headerBG=`
<div class="header">
  <!-- Main container for the header and wave animation -->

  <!--Content before waves-->
  <div class="inner-header">
    <h1>CSS Animated Waves</h1> <!-- Main heading displayed before the wave animation -->
  </div>

  <!--Waves Container-->
  <div>
    <!-- SVG for waves animation -->
    <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
      <!-- Defining SVG element for waves -->
      <defs>
        <!-- Defining the wave path once to reuse it for creating multiple wave layers -->
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g class="wave-parallax">
        <!-- Group of waves that will move at different speeds to create a parallax effect -->
        <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" /> <!-- First wave layer -->
        <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" /> <!-- Second wave layer -->
        <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" /> <!-- Third wave layer -->
        <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" /> <!-- Fourth wave layer -->
      </g>
    </svg>
  </div>
  <!-- Waves end -->
</div>
<!-- Header ends -->

<!--main starts-->
<main class="main main_main">
    </main>
<!--main ends-->

<!-- Floating YouTube Button -->
<a href="https://www.youtube.com/@PixelPerfectLabs" class="youtube-button" target="_blank">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255,255,255);transform: ;msFilter:;">
    <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path>
  </svg>
</a>
`;

libi.get_set_tag_index("body",0,headerBG);

//stylesheet link
var css_link=`
  <link rel="stylesheet" href="/CSS/Home/header/headerBG.css" type="text/css" media="all" />
`;

libi.get_set_tag_index_plus("head",0,css_link);

