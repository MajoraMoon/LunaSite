document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll(
      '.kitten-link, .image-form, .general-styling, .outer-container-middle-part > div');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else if (entry.intersectionRatio <= 0.1) {
        entry.target.classList.remove('visible');
      }
    });
  }, {threshold: [0.1, 0.2], rootMargin: '0px 0px -50px 0px'});

  elements.forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
  });
});