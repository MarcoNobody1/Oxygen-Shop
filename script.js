// Declaracion de variables
const menu = document.getElementById("menu");
let menuNow = "/Proyecto1/resources/svg/menu.svg";
let menuThen = "/Proyecto1/resources/svg/x-menu.svg";
const nav = document.getElementById("nav");
const backimg = document.getElementById("backimg1")

// Evento para expandir o contraer el nav y cambiar la img

function desplegarMenu(){
    nav.classList.toggle("hidden");
    if (menu.src.includes(menuNow)){
        menu.src = "/Proyecto1/resources/svg/x-menu.svg";
    } else if (menu.src.includes(menuThen)){
        menu.src = "/Proyecto1/resources/svg/menu.svg";
    }
};

//Evento para cambiar la img de fondo backimg1

window.addEventListener("resize", cambiarImagen)

function cambiarImagen(){
    if (window.innerWidth > 999) {
        backimg.src = "/Proyecto1/resources/svg/Rectangle-web.svg";
    } else {
        backimg.src = "/Proyecto1/resources/svg/svg-c1.svg";
    }
}