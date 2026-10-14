const $ = (selector, root = document) => root.querySelector(selector);
const nav = $("#nav");
const menuToggle = $("#menuToggle");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});
nav.addEventListener("click", event => {
  if (event.target.closest("a")) {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  }
});
$("#year").textContent = new Date().getFullYear();

// Lightweight demo interaction for the portfolio CTA.
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
  link.addEventListener("click", () => {
    const toast = $("#toast");
    toast.textContent = "Your email app will open so you can contact Vertex Studio.";
    toast.classList.add("show");
    window.setTimeout(() => toast.classList.remove("show"), 2600);
  });
});

// Smooth in-page navigation fallback and subtle reveal-on-scroll.
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".service-card, .work-card, .process-grid article, .metrics > div").forEach(el => {
    el.classList.add("reveal");
    observer.observe(el);
  });
}
