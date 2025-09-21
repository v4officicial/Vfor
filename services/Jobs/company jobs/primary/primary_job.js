// ========================== IMPORTS & SETUP ==========================
console.log("primary job connected");
import * as libi from '/libi/lib.js';
import * as home from '/JS/Home/home_page.js';

const Company_id = libi.get_url_parameter('company_id'); 
const job_id = libi.get_url_parameter('job_id'); 

// ========================== FETCH AND RENDER ==========================
fetch('/JSON/Jobs/company_detailes.json')
  .then(response => response.json())
  .then(company_data => {
    const company = company_data[Company_id]; 
    return fetch(company.jobs_json)
      .then(response => response.json())
      .then(company_jobs => {
        const job = company_jobs[job_id];
        return { company, job };
      });
  })
  .then(({ company, job }) => {
    // ================= Render Job Content =================
    const content_blocks = `
      <!-- Section 1 (Hero) -->
      <section class="hero lazy-section">
        <div class="hero-background">
          <div class="gradient-bg"></div>
          <div class="particles-container"></div>
          <div class="floating-shapes">
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
            <div class="shape shape-3"></div>
            <div class="shape shape-4"></div>
            <div class="shape shape-5"></div>
            <div class="shape shape-6"></div>
          </div>
        </div>

        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">
              <span class="title-line">${job.job_role}</span>
              <span class="title-line"> (${job.job_id})</span>
            </h1>
          </div>

          <div class="hero-visual">
            <div class="central-orb" id="centralOrb1">
              <div class="orb-core">
                <img src="${company.company_logo_url}" 
                    alt="${company.company_name}" 
                    style="max-width: 100%; max-height: 100%; object-fit: contain;">
              </div>
              <div class="orb-ring ring-1"></div>
              <div class="orb-ring ring-2"></div>
              <div class="orb-ring ring-3"></div>
            </div>
          </div>
        </div>

        <div class="scroll-indicator">
          <div class="scroll-arrow"></div>
          <span>Scroll to explore</span>
        </div>
      </section>

      <!-- Section 2 (Job Posting Schema) -->
      <section class="section2 lazy-section" itemscope 
            itemtype="https://schema.org/JobPosting" role="main" 
            itemid="https://yourwebsite.com/job/${job.job_id}" aria-labelledby="jobTitle">
        <article class="job-card" role="region" aria-describedby="jobDesc">
          
          <!-- Company Logo -->
          <div class="company-logo" aria-label="Company logo" 
               itemprop="hiringOrganization" itemscope itemtype="https://schema.org/Organization">
            <img src="${company.company_logo_url}" 
                 alt="${company.company_name} Logo" itemprop="logo" />
          </div>

          <!-- Job Details -->
          <div class="job-details">
            <h1 id="jobTitle" itemprop="title">${job.job_role}</h1>
            <div class="job-company" itemprop="hiringOrganization" itemscope 
                 itemtype="https://schema.org/Organization">
              <span itemprop="name">${company.company_name}</span>
            </div>

            <!-- Job Metadata -->
            <dl>
              <dt>Job ID:</dt><dd itemprop="identifier">${job.job_id}</dd>
              <dt>Experience Required:</dt><dd itemprop="experienceRequirements">${job.Experience}</dd>
              <dt>CTC:</dt><dd itemprop="baseSalary">${job.Expected_CTC}</dd>
              <dt>Work Mode:</dt><dd>${job.work_mode}</dd>
              <dt>Work Type:</dt><dd itemprop="employmentType">${job.job_type || "Full time"}</dd>
              <dt>Eligibility:</dt><dd>${job.Eligible}</dd>
              <dt>Location:</dt><dd itemprop="jobLocation">${job.location}</dd>
              <dt>Note:</dt><dd>${job.Note || "NA"}</dd>
            </dl>

            <!-- Job Summary -->
            <div class="job-summary" id="jobDesc" tabindex="0" itemprop="description">
              ${job.job_summary || `<strong>We are looking for enthusiastic candidates for ${job.job_role}.</strong>`}
              <ul>${(job.role_detailes || []).map(detail => `<li>${detail}</li>`).join('')}</ul>
              <strong>Required Skills:</strong>
              <ul>${(job.skills_expected || []).map(skill => `<li>${skill}</li>`).join('')}</ul>
            </div>

            <!-- Skills -->
            <div class="skills-list" aria-label="Required skills">
              ${(job.skills || []).map(skill => `<span class="skill">${skill}</span>`).join('')}
            </div>

            <!-- Buttons -->
            <div class="button-group">
              <a id="apply_link" 
                 href="${job.apply_link}" 
                 class="btn apply-btn" role="button" 
                 aria-label="Apply for ${job.job_role} at ${company.company_name}" 
                 target="_blank">Apply Now</a>
              <button class="btn share-btn" id="shareBtn" aria-label="Share job listing"><i class="fa fa-share-alt"></i> Share</button>
            </div>

            <!-- Company Info -->
            <div class="company-info" id="companyInfo" itemprop="hiringOrganization">
              ${company.company_description || `${company.company_name} is a reputed firm.`}
            </div>
          </div>
        </article>
      </section>

      <!-- Copy notification -->
      <div id="copyNotification" role="alert" aria-live="assertive" style="opacity:0;">
        Link copied to clipboard!
      </div>
    `;

    // Injecting job content into the DOM
    libi.get_set_all_class("main_main", content_blocks);
    libi.a_href('apply_link', `${job.apply_link}`);
    
    // Setup Share button
    libi.setupShareButton(
  'shareBtn',
  `${job.job_role} at ${company.company_name} - Apply Now!`,
  `🚨 Opportunity alert! 🚨 Join **${company.company_name}** as a **${job.job_role}**.\n
📍 Location: ${job.location}\n
🕒 Job Type: ${job.job_type}\n
🏢 Work mode: ${job.work_mode}\n
💼 Experience: ${job.Experience}\n
💰 CTC package: ${job.Expected_CTC}\n
🎓 Qualifications: ${job.Eligible}\n
🆔 Use Job ID: ${job.job_id} to apply. Don’t miss out! ✨\n
👉 Apply here:\n ${window.location.href}\n\n
**Stay updated by joining our communities:**\n
📱 WhatsApp: https://chat.whatsapp.com/JOKrLLf9lfGDQAWJsP8Bbc\n
📡 Telegram: https://t.me/vfor_jobs_for_all\n\n`,
  `👉 Apply here:\n ${window.location.href}`
);


    // Scroll indicator
    document.querySelector(".scroll-indicator").addEventListener("click", () => {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    });

    // Intersection Observer for lazy activation
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          new ParticleSystem(entry.target);
          new OrbController(entry.target.querySelector(".central-orb"));
          new BackgroundController(entry.target);
          new ButtonController(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll(".lazy-section").forEach(section => {
      observer.observe(section);
    });

  })
  .catch(error => console.error('Error loading JSON:', error));


// ========================== CLASSES ==========================
class ParticleSystem {
  constructor(section) {
    this.particles = [];
    this.containers = section.querySelectorAll(".particles-container");
    this.init();
  }
  init() {
    this.containers.forEach(container => {
      for (let i = 0; i < 30; i++) this.createParticle(container);
    });
    this.animate();
  }
  createParticle(container) {
    const particle = document.createElement("div");
    particle.className = "particle";
    const size = Math.random() * 4 + 1;
    particle.style.width = size + "px";
    particle.style.height = size + "px";
    particle.x = Math.random() * window.innerWidth;
    particle.y = Math.random() * window.innerHeight;
    particle.speedX = (Math.random() - 0.5) * 2;
    particle.speedY = (Math.random() - 0.5) * 2;
    container.appendChild(particle);
    this.particles.push(particle);
  }
  animate() {
    this.particles.forEach(p => {
      p.x += p.speedX; 
      p.y += p.speedY;
      if (p.x < 0 || p.x > window.innerWidth) p.speedX *= -1;
      if (p.y < 0 || p.y > window.innerHeight) p.speedY *= -1;
      p.style.left = p.x + "px";
      p.style.top = p.y + "px";
    });
    requestAnimationFrame(() => this.animate());
  }
}

class OrbController {
  constructor(orbElement) {
    if (!orbElement) return;
    this.orb = orbElement;
    this.init();
  }
  init() {
    this.orb.addEventListener("mouseenter", () => this.orb.style.transform = "scale(1.1)");
    this.orb.addEventListener("mouseleave", () => this.orb.style.transform = "scale(1)");
    this.orb.addEventListener("click", () => this.createRipple());
  }
  createRipple() {
    const ripple = document.createElement("div");
    ripple.className = "orb-ripple";
    Object.assign(ripple.style, {
      position: "absolute", top: "50%", left: "50%", width: "0px", height: "0px",
      borderRadius: "50%", transform: "translate(-50%, -50%)",
      background: "rgba(255,255,255,0.3)"
    });
    this.orb.appendChild(ripple);
    ripple.animate([
      { width:"0px", height:"0px", opacity:1 },
      { width:"400px", height:"400px", opacity:0 }
    ], { duration:1000, easing:"ease-out" }).onfinish = () => ripple.remove();
  }
}

class BackgroundController {
  constructor(section) {
    this.shapes = section.querySelectorAll(".shape");
    this.init();
  }
  init() {
    document.addEventListener("mousemove", e => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      this.shapes.forEach((shape,i) => {
        const speed = (i+1)*0.5;
        shape.style.transform = `translate(${(mouseX-0.5)*speed*20}px, ${(mouseY-0.5)*speed*20}px)`;
      });
    });
  }
}

class ButtonController {
  constructor(section){
    this.buttons = section.querySelectorAll(".btn");
    this.init();
  }
  init(){
    this.buttons.forEach(btn => {
      btn.addEventListener("mouseenter", e => this.createRipple(e));
      btn.addEventListener("click", e => this.clickEffect(e));
    });
  }
  createRipple(e){
    const btn = e.currentTarget;
    const ripple = document.createElement("div");
    Object.assign(ripple.style, {
      position:"absolute", borderRadius:"50%", background:"rgba(255,255,255,0.3)",
      width:"100px", height:"100px", left:"50%", top:"50%",
      transform:"translate(-50%,-50%) scale(0)",
      animation:"ripple 0.6s linear", pointerEvents:"none"
    });
    btn.appendChild(ripple);
    setTimeout(()=>ripple.remove(),600);
  }
  clickEffect(e){
    const btn = e.currentTarget;
    btn.style.transform="scale(0.95)";
    setTimeout(() => btn.style.transform="scale(1)",150);
  }
}

// ========================== GLOBAL STYLES ==========================
const style = document.createElement("style");
style.textContent = `
@keyframes ripple { to { transform:translate(-50%,-50%) scale(4); opacity:0; } }
.btn { position: relative; overflow: hidden; }
`;
document.head.appendChild(style);
