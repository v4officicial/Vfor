//console.log("primary page bodyBG connected successful");
import * as libi from '/libi/lib.js';

export var mainBG=`
  <section class="hero">

  <div class="hero-background">
    <div class="gradient-bg"></div>
    <div class="particles-container" id="particles"></div>
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
        <span class="title-line">Create Amazing</span>
        <span class="title-line">Digital Experiences</span>
      </h1>
      <p class="hero-description">
        Transform your ideas into stunning digital realities with our cutting-edge
        technology and innovative design solutions.
      </p>
      <div class="hero-buttons">
        <button class="btn btn-primary">Get Started</button>
        <button class="btn btn-secondary">Learn More</button>
      </div>
    </div>

    <div class="hero-visual">
      <div class="central-orb" id="centralOrb">
        <div class="orb-core"></div>
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
`;

libi.get_set_all_class_plus("main_main",mainBG);

//stylesheet link
var css_link=`
  <link rel="stylesheet" href="/CSS/primary_page/main/mainBG.css" type="text/css" media="all" />
`;

libi.get_set_tag_index_plus("head",0,css_link);



class ParticleSystem {
  constructor() {
    this.particles = [];
    this.container = document.getElementById("particles");
    this.mouseX = 0;
    this.mouseY = 0;
    this.init();
  }

  init() {
    for (let i = 0; i < 50; i++) {
      this.createParticle();
    }

    document.addEventListener("mousemove", (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });

    this.animate();
  }

  createParticle() {
    const particle = document.createElement("div");
    particle.className = "particle";

    const size = Math.random() * 4 + 1;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const speedX = (Math.random() - 0.5) * 2;
    const speedY = (Math.random() - 0.5) * 2;

    particle.style.width = size + "px";
    particle.style.height = size + "px";
    particle.style.left = x + "px";
    particle.style.top = y + "px";

    particle.speedX = speedX;
    particle.speedY = speedY;
    particle.x = x;
    particle.y = y;
    particle.size = size;

    this.container.appendChild(particle);
    this.particles.push(particle);
  }

  animate() {
    this.particles.forEach((particle, index) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      const dx = this.mouseX - particle.x;
      const dy = this.mouseY - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        const force = (100 - distance) / 100;
        particle.x -= dx * force * 0.01;
        particle.y -= dy * force * 0.01;
      }

      if (particle.x < 0 || particle.x > window.innerWidth) {
        particle.speedX *= -1;
      }
      if (particle.y < 0 || particle.y > window.innerHeight) {
        particle.speedY *= -1;
      }

      particle.x = Math.max(0, Math.min(window.innerWidth, particle.x));
      particle.y = Math.max(0, Math.min(window.innerHeight, particle.y));

      particle.style.left = particle.x + "px";
      particle.style.top = particle.y + "px";
    });

    requestAnimationFrame(() => this.animate());
  }
}

class OrbController {
  constructor() {
    this.orb = document.getElementById("centralOrb");
    this.isHovered = false;
    this.init();
  }

  init() {
    this.orb.addEventListener("mouseenter", () => {
      this.isHovered = true;
      this.orb.style.transform = "scale(1.1)";
      this.addGlow();
    });

    this.orb.addEventListener("mouseleave", () => {
      this.isHovered = false;
      this.orb.style.transform = "scale(1)";
      this.removeGlow();
    });

    this.orb.addEventListener("click", () => {
      this.createRipple();
    });

    document.addEventListener("mousemove", (e) => {
      if (!this.isHovered) return;

      const rect = this.orb.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * 0.1;
      const deltaY = (e.clientY - centerY) * 0.1;

      this.orb.style.transform = `scale(1.1) translate(${deltaX}px, ${deltaY}px)`;
    });
  }

  addGlow() {
    this.orb.style.filter = "drop-shadow(0 0 30px rgba(255, 255, 255, 0.8))";
  }

  removeGlow() {
    this.orb.style.filter = "none";
  }

  createRipple() {
    const ripple = document.createElement("div");
    ripple.style.position = "absolute";
    ripple.style.top = "50%";
    ripple.style.left = "50%";
    ripple.style.width = "0px";
    ripple.style.height = "0px";
    ripple.style.background = "rgba(255, 255, 255, 0.3)";
    ripple.style.borderRadius = "50%";
    ripple.style.transform = "translate(-50%, -50%)";
    ripple.style.pointerEvents = "none";
    ripple.style.zIndex = "5";

    this.orb.appendChild(ripple);

    ripple.animate(
      [
        { width: "0px", height: "0px", opacity: 1 },
        { width: "400px", height: "400px", opacity: 0 }
      ],
      {
        duration: 1000,
        easing: "ease-out"
      }
    ).onfinish = () => {
      ripple.remove();
    };
  }
}

class BackgroundController {
  constructor() {
    this.shapes = document.querySelectorAll(".shape");
    this.init();
  }

  init() {
    this.shapes.forEach((shape, index) => {
      const delay = Math.random() * 5;
      shape.style.animationDelay = delay + "s";
    });

    document.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;

      this.shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;

        shape.style.transform += ` translate(${x}px, ${y}px)`;
      });
    });
  }
}

class ButtonController {
  constructor() {
    this.buttons = document.querySelectorAll(".btn");
    this.init();
  }

  init() {
    this.buttons.forEach((button) => {
      button.addEventListener("mouseenter", (e) => {
        this.createButtonRipple(e);
      });

      button.addEventListener("click", (e) => {
        this.createClickEffect(e);
      });
    });
  }

  createButtonRipple(e) {
    const button = e.target;
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement("div");

    ripple.style.position = "absolute";
    ripple.style.borderRadius = "50%";
    ripple.style.background = "rgba(255, 255, 255, 0.3)";
    ripple.style.transform = "scale(0)";
    ripple.style.animation = "ripple 0.6s linear";
    ripple.style.left = "50%";
    ripple.style.top = "50%";
    ripple.style.width = "100px";
    ripple.style.height = "100px";
    ripple.style.marginLeft = "-50px";
    ripple.style.marginTop = "-50px";
    ripple.style.pointerEvents = "none";

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  createClickEffect(e) {
    const button = e.target;
    button.style.transform = "scale(0.95)";

    setTimeout(() => {
      button.style.transform = "scale(1)";
    }, 150);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new ParticleSystem();
  new OrbController();
  new BackgroundController();
  new ButtonController();

  const style = document.createElement("style");
  style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
  document.head.appendChild(style);
});

document.querySelector(".scroll-indicator").addEventListener("click", () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });
});

let ticking = false;

function updateAnimations() {
  ticking = false;
}

document.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(updateAnimations);
    ticking = true;
  }
});
