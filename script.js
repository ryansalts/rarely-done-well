/* ============================================================
   RARELY, DONE WELL. — Shared Scripts
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- Fade-in on scroll (index page) ---
  const fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    fadeEls.forEach(el => observer.observe(el));
  }

  // --- Alumni logo scroll-reveal (learn-more page, mobile/touch only) ---
  const alumniCards = document.querySelectorAll('.lm-alumni-card');
  const isTouchDevice = window.matchMedia('(hover: none)').matches && window.matchMedia('(pointer: coarse)').matches;
  if (alumniCards.length && isTouchDevice) {
    const logoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const logo = entry.target.querySelector('.lm-alumni-logo');
        if (!logo) return;
        if (entry.isIntersecting) {
          logo.style.filter = 'none';
          logo.style.opacity = '1';
        } else {
          logo.style.filter = 'brightness(0) invert(1)';
          logo.style.opacity = '0.9';
        }
      });
    }, { rootMargin: '-28% 0px -28% 0px', threshold: 0.5 });
    alumniCards.forEach(card => logoObserver.observe(card));
  }

  // --- Mobile nav toggle (index page) ---
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });
  }

});
