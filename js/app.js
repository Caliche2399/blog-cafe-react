/* ─── Scroll Reveal ─────────────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

const revealSelectors = [
  '.entrada', '.curso', '.widget-curso',
  '.sobre-nosotros__imagen', '.sobre-nosotros__texto',
  '.stat', '.formulario', '.blog h3', '.sidebar h3'
];

document.querySelectorAll(revealSelectors.join(',')).forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${(i % 4) * 0.1}s`;
  revealObserver.observe(el);
});

/* ─── Sticky Nav ────────────────────────────────────────────── */
const barra = document.querySelector('.barra');

if (barra) {
  window.addEventListener('scroll', () => {
    barra.classList.toggle('barra--sticky', window.scrollY > 80);
  }, { passive: true });
}
