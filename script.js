document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav-links");
  const header = document.querySelector(".site-header");

  if (menu && nav) {
    menu.addEventListener("click", function () {
      const open = nav.classList.toggle("open");
      menu.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        menu.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (header) {
    const updateHeader = function () {
      header.classList.toggle("scrolled", window.scrollY > 20);
    };
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
  }
});
