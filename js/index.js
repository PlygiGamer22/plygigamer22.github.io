document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  if (main) {
    main.style.opacity = '0';
    main.style.transform = 'translateY(20px)';
    main.style.transition = 'opacity 0.5s, transform 0.5s';

    setTimeout(() => {
      main.style.opacity = '1';
      main.style.transform = 'translateY(0)';
    }, 300);
  }
});

// === MENÚ DESPLEGABLE ===
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const toggle = document.getElementById("menu-toggle");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("menu-close");

  if (!menu || !toggle || !overlay || !closeBtn) return;

  // Abrir menú
  toggle.addEventListener("click", () => {
    menu.classList.add("active");
    overlay.classList.add("active");
    toggle.setAttribute("aria-expanded", "true");
    toggle.style.display = "none"; // Oculta el botón
  });

  // Cerrar menú al hacer clic en overlay
  overlay.addEventListener("click", closeMenu);

  // Cerrar menú al hacer clic en un enlace
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // Cerrar menú al hacer clic en el botón X
  closeBtn.addEventListener("click", closeMenu);

  // Opcional: cerrar menú con tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  function closeMenu() {
    menu.classList.remove("active");
    overlay.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
    toggle.style.display = ""; // Muestra el botón
  }
});

// === MODO OSCURO GLOBAL ===
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("modoOscuro") === "true") {
    document.body.classList.add("modo-oscuro");
  }
});