/**
 * Navigation — mobile menu toggle + scroll behaviour
 */
(function () {
  'use strict';

  var toggle = document.querySelector('.nav-toggle');
  var menu   = document.getElementById('mobile-menu');
  var nav    = document.querySelector('.site-nav');
  var openIcon  = toggle ? toggle.querySelector('.nav-toggle__open') : null;
  var closeIcon = toggle ? toggle.querySelector('.nav-toggle__close') : null;

  // Mobile menu toggle
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen);
      if (openIcon)  openIcon.style.display  = isOpen ? 'none' : '';
      if (closeIcon) closeIcon.style.display = isOpen ? '' : 'none';
    });

    // Close on link click
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        if (openIcon)  openIcon.style.display  = '';
        if (closeIcon) closeIcon.style.display = 'none';
      });
    });
  }

  // Nav background on scroll
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 60) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id.length <= 1) return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();
