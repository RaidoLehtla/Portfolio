document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.mobile-nav-toggle');
  const primaryNav = document.querySelector('.primary-navigation');
  const openBtn = document.querySelector('.icon-open');
  const closeBtn = document.querySelector('.icon-close');
  const navLinks = document.querySelectorAll('.nav-list a');

  navToggle.addEventListener('click', toggleNav);

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (primaryNav.hasAttribute('data-visible')) {
        toggleNav();
      }
    });
  });

  function toggleNav() {
    const isVisible = primaryNav.hasAttribute('data-visible');

    if (isVisible) {
      navToggle.setAttribute('aria-expanded', false);
      primaryNav.removeAttribute('data-visible');
      openBtn.style.display = 'block';
      closeBtn.style.display = 'none';
    } else {
      navToggle.setAttribute('aria-expanded', true);
      primaryNav.setAttribute('data-visible', '');
      openBtn.style.display = 'none';
      closeBtn.style.display = 'block';
    }
  }
});
