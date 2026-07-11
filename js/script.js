/* ==========================================================================
   TechTeam Engineering — Shared JS
   Handles: mobile nav toggle, active-link highlighting, contact form demo
   ========================================================================== */

var sharedContactDetails = {
  addressLine1: 'Hatanaim 3,',
  addressLine2: 'Herzelia, Israel',
  phone: '+972 54 7877447',
  email: 'info@ttepd.com'
};

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.getElementById('navToggle');
  var siteNav = document.getElementById('siteNav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      siteNav.classList.toggle('open');
    });

    // Close menu when a link is tapped (mobile)
    siteNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        siteNav.classList.remove('open');
      });
    });
  }

  /* ---------- Highlight current page in nav ---------- */
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a').forEach(function (link) {
    var href = link.getAttribute('href').split('/').pop();
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  /* ---------- Shared contact details ---------- */
  document.querySelectorAll('[data-contact-value]').forEach(function (element) {
    var key = element.getAttribute('data-contact-value');
    if (sharedContactDetails[key]) {
      element.textContent = sharedContactDetails[key];
    }
  });

  /* ---------- Contact form(s): placeholder submit handling ----------
     NOTE: This does not send data anywhere yet. Replace this handler
     with a real submission (e.g. fetch() to a backend, Formspree,
     Netlify Forms, etc.) when the site goes live.
  ------------------------------------------------------------------- */
  document.querySelectorAll('form[data-demo-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var successEl = form.querySelector('.form-success');
      if (successEl) {
        successEl.classList.add('visible');
      }
      form.reset();
    });
  });

});
