import * as libi from '/libi/lib.js';

export var menubar=`
<section class="navigation">
  <div class="nav-container">
    <div class="brand">
      <a href="https://vfor.in/"><img src="/main_Resource/company branding/vfor_logo.png" alt="Website Logo" style="width:60px"> vfor.in </a>
    </div>
    <nav>
      <div class="nav-mobile"><a id="navbar-toggle" href="#!"><span></span></a></div>
      <ul class="nav-list">
        <li>
          <a href="/index.html">Home</a>
        </li>
        <li>
          <a href="/Essentials/About us/about_us.html">About</a>
        </li>
        <li>
          <a href="#!">Services</a>
          <ul class="navbar-dropdown">
            <li>
              <a href="/services/Jobs/jobs.html">Jobs</a>
            </li>
            <li>
              <a href="#!">Resume</a>
            </li>
            <li>
              <a href="#!">Portfolio</a>
            </li>
            <li>
              <a href="#!">V-card</a>
            </li>
            <li>
              <a href="#!">Career Insights</a>
            </li>
            <li>
              <a href="#!">Blogs</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#!">Portfolio</a>
        </li>
        <li>
          <a href="#!">Category</a>
          <ul class="navbar-dropdown">
            <li>
              <a href="#!">Sass</a>
            </li>
            <li>
              <a href="#!">Less</a>
            </li>
            <li>
              <a href="#!">Stylus</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#!">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
</section>
`;

//connect to header "inner-header" container
libi.get_set_all_class("inner-header",menubar);


//stylesheet link
var css_link=`
  <link rel="stylesheet" href="/CSS/Home/header/main_menu.css" type="text/css" media="all" />
`;

libi.get_set_tag_index_plus("head",0,css_link);



//********drop down function**********//
/* <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
*/

//insert above script in html page
(function ($) {
  $(function () {
    //  open and close nav
    $("#navbar-toggle").click(function () {
      $("nav ul").slideToggle();
    });

    // Hamburger toggle
    $("#navbar-toggle").on("click", function () {
      this.classList.toggle("active");
    });

    // If a link has a dropdown, add sub menu toggle.
    $("nav ul li a:not(:only-child)").click(function (e) {
      $(this).siblings(".navbar-dropdown").slideToggle("slow");

      // Close dropdown when select another dropdown
      $(".navbar-dropdown").not($(this).siblings()).hide("slow");
      e.stopPropagation();
    });

    // Click outside the dropdown will remove the dropdown class
    $("html").click(function () {
      $(".navbar-dropdown").hide();
    });
  });
})(jQuery);


