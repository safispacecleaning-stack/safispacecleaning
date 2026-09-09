document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");
  const year = document.getElementById("year");

  // Automatic copyright year
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Mobile navigation
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("nav-open");
      menuToggle.setAttribute("aria-expanded", isOpen);
    });

    // Close menu after selecting a link
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("nav-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});
