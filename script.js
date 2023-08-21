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

// Evento para la barra de progreso

window.addEventListener("scroll", function barraProgreso() {
  const bar = document.getElementById("pgr-bar");
  const scrollY = window.scrollY;
  const docHeigth = document.documentElement.scrollHeight;
  const winHeigth = window.innerHeight;
  const pt2 = document.getElementById("pt2__c2");
  const pt3 = document.getElementById("pr__blue");
  const form = this.document.getElementById("check");
  const pt2pos = pt2.getBoundingClientRect().top;
  const pt3pos = pt3.getBoundingClientRect().top;
  const formpos = form.getBoundingClientRect().top;

  let actualWidth = (scrollY / (docHeigth - winHeigth)) * 100;

  bar.style.width = actualWidth + "%";

  if (pt2pos >= winHeigth) {
    bar.style.backgroundColor = "#08a6e4";
  } else if (pt3pos >= winHeigth) {
    bar.style.backgroundColor = "#55DFB4";
  } else if (formpos >= winHeigth) {
    bar.style.backgroundColor = "#FB3B64";
  } else {
    bar.style.backgroundColor = "#08a6e4";
  }
});

//Creación y evento del botón "Return to the top"

const pt3 = document.getElementById("pt3");
const button = document.createElement("button");
const header = document.getElementById("header");
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
