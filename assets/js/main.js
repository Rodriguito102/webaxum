/* AXUM — interactions: header, mobile nav, scroll reveal, hero load, form */
(function () {
  'use strict';

  /* Header state on scroll */
  var header = document.querySelector('.site-header');
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 24) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Mobile menu */
  var toggle = document.querySelector('.menu-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = document.body.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    document.querySelectorAll('.mobile-nav a').forEach(function (a) {
      a.addEventListener('click', function () {
        document.body.classList.remove('menu-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* Scroll reveal */
  var reveals = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* Hero load animation */
  var hero = document.querySelector('.hero');
  if (hero) { requestAnimationFrame(function () { setTimeout(function(){ hero.classList.add('ready'); }, 60); }); }

  /* Dynamic year */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* Contact form -> WhatsApp / mailto */
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      var nombre = (data.get('nombre') || '').toString().trim();
      var empresa = (data.get('empresa') || '').toString().trim();
      var sector = (data.get('sector') || '').toString().trim();
      var mensaje = (data.get('mensaje') || '').toString().trim();
      var lines = [
        'Hola AXUM, me gustaría conversar.',
        nombre ? 'Nombre: ' + nombre : '',
        empresa ? 'Empresa: ' + empresa : '',
        sector ? 'Sector: ' + sector : '',
        mensaje ? 'Mensaje: ' + mensaje : ''
      ].filter(Boolean);
      var text = encodeURIComponent(lines.join('\n'));
      window.open('https://wa.me/51974789855?text=' + text, '_blank', 'noopener');
      var note = form.querySelector('.form-note');
      if (note) { note.textContent = 'Abriendo WhatsApp con tu mensaje… si no se abre, escríbenos a contacto@axum.pe'; note.style.display = 'block'; }
      form.reset();
    });
  }
})();
