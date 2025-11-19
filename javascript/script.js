// ============================================
// CTRLFRAME - Advanced All-in-One Site Script
// ============================================

// 🧭 NAVIGATION TOGGLE
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// 🖼️ IMAGE SLIDESHOW / GALLERY
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
if (slides.length > 0) {
  showSlide(currentSlide);
  setInterval(nextSlide, 4000);
}

// ✨ SCROLL ANIMATIONS
const fadeEls = document.querySelectorAll('.fade-in');
function checkFadeIn() {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', checkFadeIn);
checkFadeIn();

// 📩 FORM VALIDATION
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    const name = contactForm.querySelector('[name="name"]');
    const email = contactForm.querySelector('[name="email"]');
    const message = contactForm.querySelector('[name="message"]');
    if (!name.value || !email.value || !message.value) {
      e.preventDefault();
      alert('Please fill out all fields.');
    } else if (!email.value.includes('@')) {
      e.preventDefault();
      alert('Please enter a valid email.');
    }
  });
}

// 🎥 PAGE LOAD TRANSITION
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// 🧠 THEME / MOOD SWITCHER
const themeBtn = document.querySelector('.theme-toggle');
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme',
      document.body.classList.contains('dark-mode') ? 'dark' : 'light'
    );
  });
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
}

// 🎨 INTERACTIVE CANVAS (AR CANVAS PAGE)
const canvas = document.querySelector('#paint-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.lineWidth = 3;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#ff004c';
  let drawing = false;
  canvas.addEventListener('mousedown', () => drawing = true);
  canvas.addEventListener('mouseup', () => drawing = false);
  canvas.addEventListener('mousemove', (e) => {
    if (!drawing) return;
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  });
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// 🔁 SMOOTH PAGE TRANSITION
const links = document.querySelectorAll('a[href]');
links.forEach(link => {
  link.addEventListener('click', e => {
    if (link.href.includes('#')) return;
    e.preventDefault();
    document.body.classList.remove('loaded');
    setTimeout(() => {
      window.location.href = link.href;
    }, 300);
  });
});



// ================================
// CTRLFRAME - Generative Art + Audio Visualizer
// ================================

// Generative Art Background (smooth evolving gradient + particles)

// Water Flow Background (light blue / cream / white / black smooth motion)

// Fluid Water Flow Background (enhanced v4)
(function fluidFlowBackground(){
  const canvas = document.getElementById('gen-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;
  let time = 0;

  window.addEventListener('resize', ()=>{
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });

  function draw(){
    time += 0.008;
    const imageData = ctx.createImageData(w, h);
    const data = imageData.data;

    for(let y=0; y<h; y++){
      for(let x=0; x<w; x++){
        const idx = (y*w + x)*4;
        const wave = Math.sin(x*0.008 + time*3) + Math.cos(y*0.008 + time*2);
        const blue = 200 + 25*Math.sin(wave);
        const cream = 240 + 10*Math.cos(wave*1.2);
        data[idx] = 200;        // Red tone (light blue influence)
        data[idx+1] = cream;    // Green tone (warm cream mix)
        data[idx+2] = blue;     // Blue tone
        data[idx+3] = 255;      // Alpha
      }
    }
    ctx.putImageData(imageData, 0, 0);

    // Overlay soft shimmer lines
    ctx.beginPath();
    for(let i=0;i<6;i++){
      const y = (Math.sin(time*1.5 + i)*0.5+0.5)*h;
      ctx.moveTo(0,y);
      ctx.lineTo(w,y);
    }
    ctx.strokeStyle = 'rgba(255,255,255,0.05)';
    ctx.lineWidth = 2;
    ctx.stroke();

    requestAnimationFrame(draw);
  }
  draw();
})();

// Audio Visualizer using Web Audio API

// Fluid Water Flow Background (enhanced v4)
(function fluidFlowBackground(){
  const canvas = document.getElementById('gen-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;
  let time = 0;

  window.addEventListener('resize', ()=>{
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });

  function draw(){
    time += 0.008;
    const imageData = ctx.createImageData(w, h);
    const data = imageData.data;

    for(let y=0; y<h; y++){
      for(let x=0; x<w; x++){
        const idx = (y*w + x)*4;
        const wave = Math.sin(x*0.008 + time*3) + Math.cos(y*0.008 + time*2);
        const blue = 200 + 25*Math.sin(wave);
        const cream = 240 + 10*Math.cos(wave*1.2);
        data[idx] = 200;        // Red tone (light blue influence)
        data[idx+1] = cream;    // Green tone (warm cream mix)
        data[idx+2] = blue;     // Blue tone
        data[idx+3] = 255;      // Alpha
      }
    }
    ctx.putImageData(imageData, 0, 0);

    // Overlay soft shimmer lines
    ctx.beginPath();
    for(let i=0;i<6;i++){
      const y = (Math.sin(time*1.5 + i)*0.5+0.5)*h;
      ctx.moveTo(0,y);
      ctx.lineTo(w,y);
    }
    ctx.strokeStyle = 'rgba(255,255,255,0.05)';
    ctx.lineWidth = 2;
    ctx.stroke();

    requestAnimationFrame(draw);
  }
  draw();
})();
/* ----------------------
   Logo fade timer (8s)
   ---------------------- */
(function logoFade() {
  const logo = document.getElementById('intro-logo');
  if (!logo) return;
  // Wait 8000ms (8 seconds) before fading
  setTimeout(() => {
    logo.classList.add('logo-fade');
    // after fade finishes (1s), fully hide it
    setTimeout(() => logo.classList.add('logo-hidden'), 1100);
  }, 8000);
})();

/* ----------------------
   Water-like ripple on click/press
   ---------------------- */
(function addRipples() {
  const selectors = 'button, .cta-btn, .btn, .nav-links a, .link-to-portfolio';
  const elements = document.querySelectorAll(selectors);

  function makeRipple(e, el) {
    const rect = el.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple ripple--fill';
    const size = Math.max(rect.width, rect.height) * 1.1;
    ripple.style.width = ripple.style.height = size + 'px';
    const offsetX = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
    const offsetY = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;
    ripple.style.left = (offsetX - size / 2) + 'px';
    ripple.style.top = (offsetY - size / 2) + 'px';
    el.appendChild(ripple);
    setTimeout(() => {
      if (ripple && ripple.parentNode) ripple.parentNode.removeChild(ripple);
    }, 700);
  }

  elements.forEach(el => {
    if (!el.classList.contains('ripple-target')) el.classList.add('ripple-target');

    el.addEventListener('pointerdown', function (ev) {
      makeRipple(ev, el);
    });

    if (el.tagName.toLowerCase() === 'a' && el.href && !el.href.includes('#')) {
      el.addEventListener('click', function (ev) {
        if (ev.metaKey || ev.ctrlKey || ev.button !== 0) return;
        ev.preventDefault();
        const dest = el.href;
        setTimeout(() => { window.location.href = dest; }, 150);
      });
    }
  });
})();
