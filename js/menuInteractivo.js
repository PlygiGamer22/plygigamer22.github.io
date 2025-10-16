document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const toggle = document.getElementById("menu-toggle");

  if (!menu || !toggle) return;

  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  // Cerrar menú al hacer clic en un enlace
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("show");
    });
  });
});
