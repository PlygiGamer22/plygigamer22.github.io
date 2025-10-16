document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const toggle = document.getElementById("menu-toggle");

  if (!menu || !toggle) return;

  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });


  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("show");
    });
  });
});
