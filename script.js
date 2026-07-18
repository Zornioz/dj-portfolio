// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Subtle nav background on scroll
const nav = document.querySelector('.nav');
if (nav) {
  const onScroll = () => {
    if (window.scrollY > 40) {
      nav.style.background = 'rgba(7,7,13,0.85)';
      nav.style.borderBottom = '1px solid rgba(150,170,255,0.14)';
    } else {
      nav.style.background = 'linear-gradient(to bottom, rgba(7,7,13,0.9), transparent)';
      nav.style.borderBottom = '1px solid transparent';
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Reveal-on-scroll for section headers and cards
const revealTargets = document.querySelectorAll('.track-card, .set-card, .booking__range, .section-head');
revealTargets.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => io.observe(el));
