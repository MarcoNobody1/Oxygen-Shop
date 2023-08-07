// Declaracion de variables
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
const backimg = document.getElementById("backimg1")

// Evento para expandir o contraer el nav y cambiar la img

function desplegarMenu() {
    let menuNow = "./resources/svg/menu.svg";
    let menuThen = "./resources/svg/x-menu.svg";
    nav.classList.toggle("hidden");
    if (menu.getAttribute("src") === menuNow) {
      menu.setAttribute("src", menuThen);
    } else {
      menu.setAttribute("src", menuNow);
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