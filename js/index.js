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

  if (!menu || !toggle || !overlay) return;

  // Función para abrir/cerrar el menú
  const toggleMenu = () => {
    const isOpen = menu.classList.toggle("show");
    overlay.classList.toggle("show", isOpen);
  };

  // Abrir/cerrar con el botón
  toggle.addEventListener("click", toggleMenu);

  // Cerrar al hacer clic fuera o en un enlace
  overlay.addEventListener("click", toggleMenu);
  menu.querySelectorAll("a").forEach(link =>
    link.addEventListener("click", toggleMenu)
  );
});