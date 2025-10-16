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

// === Cambiar estado de batería ===
function setBateriaEstado(estado) {
  const full = document.querySelector('.bateria-full-estado');
  const media = document.querySelector('.bateria-media-estado');
  const baja = document.querySelector('.bateria-baja-estado');
  const label = document.querySelector('.bateria-estado-label');
  if (!full || !media || !baja || !label) return;

  full.style.display = 'none';
  media.style.display = 'none';
  baja.style.display = 'none';

  if (estado === 'full') {
    full.style.display = '';
    label.textContent = 'Batería: FULL';
    label.style.color = '#43a047';
    label.style.borderBottomColor = '#43a047';
  } else if (estado === 'media') {
    media.style.display = '';
    label.textContent = 'Batería: MEDIA';
    label.style.color = '#ff9800';
    label.style.borderBottomColor = '#ff9800';
  } else if (estado === 'baja') {
    baja.style.display = '';
    label.textContent = 'Batería: BAJA';
    label.style.color = '#e53935';
    label.style.borderBottomColor = '#e53935';
  }
}

// Ejemplo de uso:
// setBateriaEstado('media');
// setBateriaEstado('baja');
// setBateriaEstado('full');

// === Animación de aparición al hacer scroll ===
document.addEventListener('DOMContentLoaded', () => {
  const animItems = document.querySelectorAll('.anim-scroll');
  const onScrollAnim = () => {
    animItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        item.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', onScrollAnim);
  onScrollAnim();
});