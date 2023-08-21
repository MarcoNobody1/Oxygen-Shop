// Declaracion de variables
//Evento 1:
const nav = document.getElementById("nav");
const menu = document.getElementById("menu");

//Evento 2:
const bar = document.getElementById("pgr-bar");
const scrollY = window.scrollY;
const docHeigth = document.documentElement.scrollHeight;
const winHeigth = window.innerHeight;
const pt2 = document.getElementById("pt2__c2");
const prBlue = document.getElementById("pr__blue");
const cbox = document.getElementById("check");
const pt3 = document.getElementById("pt3");

//Evento 3:
const button = document.createElement("button");
const header = document.getElementById("header");

//Evento 4:
const openBtn = document.querySelector(".shop-btn");

// Evento 1: para expandir o contraer el nav y cambiar la img de menu

function desplegarMenu() {
  nav.classList.toggle("hidden");
  if (menu.getAttribute("src") === "./resources/svg/menu.svg") {
    menu.setAttribute("src", "./resources/svg/x-menu.svg");
  } else {
    menu.setAttribute("src", "./resources/svg/menu.svg");
  }
}

menu.addEventListener("click", desplegarMenu);

// Evento 2: para la barra de progreso

window.addEventListener("scroll", function barraProgreso() {
  const pt2pos = pt2.getBoundingClientRect().top;
  const prBluepos = prBlue.getBoundingClientRect().top;
  const cboxpos = cbox.getBoundingClientRect().top;

  let actualWidth = (this.scrollY / (docHeigth - winHeigth)) * 100;

  bar.style.width = actualWidth + "%";

  if (pt2pos >= winHeigth) {
    bar.style.backgroundColor = "#08a6e4";
  } else if (prBluepos >= winHeigth) {
    bar.style.backgroundColor = "#55DFB4";
  } else if (cboxpos >= winHeigth) {
    bar.style.backgroundColor = "#FB3B64";
  } else {
    bar.style.backgroundColor = "#08a6e4";
  }
});

//Evento 3: Creación y evento del botón "Return to the top"

button.classList.add("return");
button.innerText = "Return to the top!";

button.addEventListener("click", function () {
  setTimeout(() => {
    window.scrollTo({
      top: header.offsetTop,
      behavior: "smooth",
    });
  }, 200);
});

pt3.appendChild(button);

//Evento 4: para el botón de 'Open your shop'

openBtn.addEventListener("click", function () {
  setTimeout(() => {
    window.scrollTo({
      top: pt3.offsetTop,
      behavior: "smooth",
    });
  }, 300);
});

