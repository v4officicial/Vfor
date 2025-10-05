console.log("connected");
const backToTop = document.getElementById("backToTop");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".blog_nav ul li a");

    window.addEventListener("scroll", () => {
      backToTop.style.display = window.scrollY > 200 ? "block" : "none";

      let current = "";
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + section.offsetHeight) {
          current = section.getAttribute("id");
          section.classList.add("visible");
        }
      });

      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
          link.classList.add("active");
        }
      });
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("load", () => {
      document.querySelector("#summary").classList.add("visible");
    });
/*import * as libi from '/libi/lib.js';
var Content=document.getElementsByClassName("health_blog_page_content");
import * as home from '/JS/Home/home_page.js';

// HTML for the card container
const page_content = `
 <div class="health_blog_page_content"></div>
`;

// Insert the initial container into elements with the "main_main" class
libi.get_set_all_class("main_main", page_content);

var Content=document.getElementsByClassName("health_blog_page_content");
console.log(Content[0]);*/