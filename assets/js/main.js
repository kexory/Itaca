// Renderiza las estrofas añadidas en data/poem.js, si el usuario incorporó su versión autorizada.
if (Array.isArray(window.ITACA_STANZAS) && window.ITACA_STANZAS.length) {
  const body = document.getElementById("poemBody");
  body.innerHTML = "";
  window.ITACA_STANZAS.forEach(stanza => {
    const p = document.createElement("p");
    p.className = "poem-stanza";
    p.textContent = stanza;
    body.appendChild(p);
  });
}

// Interacciones ligeras: navegación, animaciones al aparecer y generador QR.
const progress = document.getElementById("progress");
window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
}, { passive: true });

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});
