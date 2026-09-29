document.addEventListener('DOMContentLoaded', function () {
  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }

  /* ---------- Header shadow on scroll ---------- */
  var header = document.querySelector('.site-header');
  if (header) {
    var onScrollHeader = function () {
      if (window.scrollY > 12) header.classList.add('is-scrolled');
      else header.classList.remove('is-scrolled');
    };
    onScrollHeader();
    window.addEventListener('scroll', onScrollHeader, { passive: true });
  }

  /* ---------- Scroll reveal with automatic stagger per parent ---------- */
  var REVEAL_SELECTOR = '.reveal, .reveal-left, .reveal-right, .reveal-scale';
  var parentCounters = new WeakMap();
  document.querySelectorAll(REVEAL_SELECTOR).forEach(function (el) {
    var parent = el.parentElement;
    var count = parentCounters.get(parent) || 0;
    el.dataset.staggerIndex = count;
    parentCounters.set(parent, count + 1);
  });

  var revealEls = document.querySelectorAll(REVEAL_SELECTOR);
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var idx = parseInt(entry.target.dataset.staggerIndex || '0', 10);
          var delay = Math.min(idx, 5) * 90;
          entry.target.style.transitionDelay = delay + 'ms';
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Gentle parallax on decorative blobs ---------- */
  var parallaxEls = document.querySelectorAll('[data-parallax]');
  if (parallaxEls.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var ticking = false;
    var updateParallax = function () {
      var scrollY = window.scrollY;
      parallaxEls.forEach(function (el) {
        var speed = parseFloat(el.dataset.parallax) || 0.15;
        el.style.transform = 'translate3d(0,' + (scrollY * speed * -1) + 'px,0)';
      });
      ticking = false;
    };
    var onScrollParallax = function () {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScrollParallax, { passive: true });
    updateParallax();
  }

  /* ---------- Count-up numbers ---------- */
  var counters = document.querySelectorAll('[data-count-to]');
  if (counters.length) {
    var animateCount = function (el) {
      var target = parseFloat(el.dataset.countTo);
      var prefix = el.dataset.prefix || '';
      var suffix = el.dataset.suffix || '';
      var duration = 1300;
      var start = null;
      var step = function (ts) {
        if (!start) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var value = Math.floor(eased * target);
        el.textContent = prefix + value.toLocaleString() + suffix;
        if (progress < 1) window.requestAnimationFrame(step);
        else el.textContent = prefix + target.toLocaleString() + suffix;
      };
      window.requestAnimationFrame(step);
    };
    if ('IntersectionObserver' in window) {
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            cio.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      counters.forEach(function (el) { cio.observe(el); });
    } else {
      counters.forEach(animateCount);
    }
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }
});
