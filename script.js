// Declaracion de variables
const nav = document.getElementById("nav");
const backimg = document.getElementById("backimg1")

// Evento para expandir o contraer el nav y cambiar la img

  function desplegarMenu() {
    var menu = document.getElementById("menu");
    nav.classList.toggle("hidden");
    if (menu.getAttribute("src") === "./resources/svg/menu.svg") {
      menu.setAttribute("src", "./resources/svg/x-menu.svg");
    } else {
      menu.setAttribute("src", "./resources/svg/menu.svg");
    }
  }

//Evento para cambiar la img de fondo backimg1

window.addEventListener("resize", cambiarImagen)

function cambiarImagen(){
    if (window.innerWidth > 999) {
        backimg.src = "./resources/svg/Rectangle-web.svg";
    } else {
        backimg.src = "./resources/svg/svg-c1.svg";
    }
}