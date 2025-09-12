console.log("about us connected");
import * as libi from '/libi/lib.js';
import * as home from '/JS/Home/home_page.js';

//stylesheet link
var css_link=`
  <link rel="stylesheet" href="/Essentials/About us/about_us.css" type="text/css" media="all" />
`;

libi.get_set_tag_index_plus("head",0,css_link);

// Container HTML block
export var about_us_container = `
  <div class="about_us_container">
   <div id="about_header">
    <h1>About Vfor</h1>
    <p>Vfor is an innovative end-to-end career platform designed to empower job seekers and employers alike.</p>
  </div>

  <section>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScvMRa9-jAGcYAu3EftbdHSr0Yj7bCjId7sg&usqp=CAU" alt="rdggd" class="about-img">
    <p>Vfor is an innovative end-to-end career platform designed to empower job seekers and employers alike. It provides tools and opportunities for internships, jobs, and professional growth to help individuals succeed at any career stage. Through a unique network of companies and dynamic offerings, Vfor bridges the gap between talent and opportunity seamlessly.</p>
  </section>

  <section>
    <h2>Our Mission</h2>
    <p>To simplify career building by providing a user-friendly, comprehensive platform that supports individuals at every stage of their professional journey while helping organizations discover the right talent with ease.</p>
  </section>

  <section>
    <h2>What We Offer</h2>
    <div class="card-container">
      <div class="card">
        <h3>Internships & Apprenticeships</h3>
        <p>Practical learning opportunities to help students and fresh graduates gain real-world industry experience.</p>
      </div>
      <div class="card">
        <h3>Fresher Jobs</h3>
        <p>Dedicated avenues for young professionals to launch their career with reputed companies.</p>
      </div>
      <div class="card">
        <h3>Experienced Roles</h3>
        <p>Tailored opportunities for mid-level and senior professionals looking for career advancement.</p>
      </div>
      <div class="card">
        <h3>Corporate Network</h3>
        <p>Connecting candidates with globally recognized MNCs as well as innovative startups for diverse opportunities.</p>
      </div>
    </div>
  </section>

  <section>
    <h2>Why Choose Vfor</h2>
    <div class="card-container">
      <div class="card">
        <h3>User-Friendly Platform</h3>
        <p>Simplified navigation and efficient tools for job searches and applications.</p>
      </div>
      <div class="card">
        <h3>All-in-One Career Hub</h3>
        <p>Combines different categories of employment opportunities under one platform.</p>
      </div>
      <div class="card">
        <h3>Trusted Connections</h3>
        <p>Strong collaborations with top employers ensure quality and credibility.</p>
      </div>
      <div class="card">
        <h3>Growth-Oriented Approach</h3>
        <p>Designed not just for job searching but for helping individuals grow throughout their careers.</p>
      </div>
    </div>
  </section>

  <section>
    <h2>Vision</h2>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBZe16wr8219g-kiNHbwqRAXjPADplZoiwCQ&usqp=CAU" alt="dhhc" class="vision-img">
    <p>To become the most trusted and holistic career partner for both job seekers and hiring organizations by fostering meaningful professional connections that drive success. Our vision emphasizes impact, collaboration, and future-ready career opportunities, enabling every individual and company to thrive in an evolving professional landscape.</p>
  </section>

  </div>`;

// Insert the initial container into element with class "main_main"
libi.get_set_all_class("main_main", about_us_container);

 // Animate cards on scroll
    const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, { threshold: 0.2 });

    cards.forEach(card => {
      card.style.opacity = 0;
      card.style.transform = "translateY(50px)";
      observer.observe(card);
    });