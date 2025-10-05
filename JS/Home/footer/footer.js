//console.log("footer connected successful");
import * as libi from '/libi/lib.js';

export var footer=`
<div class="pg-footer">
  <footer class="footer">
    <svg class="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
      <path class="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
    </svg>
    <div class="footer-content">
      <div class="footer-content-column">
        <div class="footer-logo">
          <a class="footer-logo-link" href="https://vfor.in/">
            <span class="hidden-link-text">LOGO</span>
            <h1><img src="/main_Resource/company branding/vfor_logo.png" alt="Website Logo" style="width:60px"> vfor.in </h1>
          </a>
        </div>
        <div class="footer-menu">
          <h2 class="footer-menu-name"> Get Started</h2>
          <ul id="menu-get-started" class="footer-menu-list">
            <li class="menu-item menu-item-type-post_type menu-item-object-product">
              <a href="#">Start</a>
            </li>
            <li class="menu-item menu-item-type-post_type menu-item-object-product">
              <a href="#">Documentation</a>
            </li>
            <li class="menu-item menu-item-type-post_type menu-item-object-product">
              <a href="#">Installation</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-content-column">
        <div class="footer-menu">
          <h2 class="footer-menu-name"> Company</h2>
          <ul id="menu-company" class="footer-menu-list">
            <li class="menu-item menu-item-type-post_type menu-item-object-page">
              <a href="#">Contact</a>
            </li>
            <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
              <a href="#">News</a>
            </li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page">
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div class="footer-menu">
          <h2 class="footer-menu-name"> Legal</h2>
          <ul id="menu-legal" class="footer-menu-list">
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
              <a href="/Essentials/Privacy policy/privacy_policy.html">Privacy Notice</a>
            </li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page">
              <a href="/Essentials/Terms and conditions/terms_&_conditions.html">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-content-column">
        <div class="footer-menu">
          <h2 class="footer-menu-name"> Quick Links</h2>
          <ul id="menu-quick-links" class="footer-menu-list">
            <li class="menu-item menu-item-type-custom menu-item-object-custom">
              <a target="_blank" rel="noopener noreferrer" href="#">Support Center</a>
            </li>
            <li class="menu-item menu-item-type-custom menu-item-object-custom">
              <a target="_blank" rel="noopener noreferrer" href="#">Service Status</a>
            </li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page">
              <a href="#">Security</a>
            </li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page">
              <a href="#">Blog</a>
            </li>
            <li class="menu-item menu-item-type-post_type_archive menu-item-object-customer">
              <a href="#">Customers</a>
            </li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page">
              <a href="#">Reviews</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-content-column">
        <div class="footer-call-to-action">
          <h2 class="footer-call-to-action-title"> Let's Chat</h2>
          <p class="footer-call-to-action-description"> Have a support question?</p>
          <a class="footer-call-to-action-button button" href="#" target="_self"> Get in Touch </a>
        </div>
        <div class="footer-call-to-action">
          <h2 class="footer-call-to-action-title"> You Call Us</h2>
          <!-- Phone Contact -->
<p class="footer-call-to-action-link-wrapper">
  <a class="footer-call-to-action-link" href="tel:+9112446XXXX" target="_self">
    📞 +91 124 46XXXX
  </a>
</p>

<!-- Email Contact -->
<p class="footer-call-to-action-link-wrapper">
  <a class="footer-call-to-action-link" href="mailto:v4.officials@gmail.com" target="_self">
    ✉️ v4.officials@gmail.com
  </a>
</p>
<p class="footer-call-to-action-link-wrapper">
  <a class="footer-call-to-action-link" href="mailto:v4.officials@gmail.com" target="_self">
    ✉️  support@vfor.in</a>
</p>
        </div>
      </div>
      <div class="footer-social-links"> <svg class="footer-social-amoeba-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236 54">
          <path class="footer-social-amoeba-path" d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"></path>
        </svg>
        <a class="footer-social-link linkedin" href="#" target="_blank">
          <span class="hidden-link-text">Linkedin</span>
          <svg class="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <path class="footer-social-icon-path" d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
          </svg>
        </a>
       <a class="footer-social-link whatsapp" href="https://chat.whatsapp.com/JOKrLLf9lfGDQAWJsP8Bbc" target="_blank">
  <span class="hidden-link-text">WhatsApp</span>
  <svg class="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
    <path class="footer-social-icon-path" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
  </svg>
</a>

       <a class="footer-social-link telegram" href="https://t.me/vfor_jobs_for_all" target="_blank">
  <span class="hidden-link-text">Telegram</span>
  <svg class="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
    <path class="footer-social-icon-path" d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"/>
  </svg>
</a>

        <a class="footer-social-link github" href="#" target="_blank">
          <span class="hidden-link-text">Github</span>
          <svg class="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path class="footer-social-icon-path" d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z "></path>
          </svg>
        </a>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="footer-copyright-wrapper">
        <p class="footer-copyright-text">
          <a class="footer-copyright-link" href="#" target="_self"> ©2025. | Designed By: vfor.in . | All rights reserved. </a>
        </p>
      </div>
    </div>
  </footer>
</div>
`;

//link footer to body
libi.get_set_tag_index_plus("body",0,footer);

//stylesheet link
var css_link=`
  <link rel="stylesheet" href="/CSS/Home/footer/footer.css" type="text/css" media="all" />
`;

libi.get_set_tag_index_plus("head",0,css_link);
