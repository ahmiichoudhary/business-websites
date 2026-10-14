const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
const toast = document.querySelector(".toast");

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

document.querySelector("#year").textContent = new Date().getFullYear();

// Show a small helpful notice if the demo email is clicked.
// The mail app still opens normally through the mailto link.
document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
  link.addEventListener("click", () => {
    if (!toast) return;
    toast.textContent = "Opening your email app… Replace the demo email in index.html before publishing.";
    toast.classList.add("show");
    window.setTimeout(() => toast.classList.remove("show"), 2800);
  });
});
