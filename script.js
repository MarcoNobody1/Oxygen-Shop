// Declaracion de variables
const nav = document.getElementById("nav");
const menu = document.getElementById("menu");

// Evento para expandir o contraer el nav y cambiar la img

  function desplegarMenu() {
    nav.classList.toggle("hidden");
    if (menu.getAttribute("src") === "./resources/svg/menu.svg") {
      menu.setAttribute("src", "./resources/svg/x-menu.svg");
    } else {
      menu.setAttribute("src", "./resources/svg/menu.svg");
    }
  }

  menu.addEventListener("click", desplegarMenu);