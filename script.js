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

//Evento 5:
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const formBtn = document.querySelector('.f-btn');
const checkInput = document.getElementById('check');

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

//Evento 5 (pt1): para la vaidación del formulario

formBtn.addEventListener('click', function() {
  const name = nameInput.value;
  const email = emailInput.value;
  const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let check1;
  let check2;
  let check3;

    if (name.length < 2 || name.length > 100) {
      nameInput.style.border = '1px solid red';
    } else {
      nameInput.style.border = 'initial';
      check1 = true;
    }
    if (!emailPattern.test(email)) {
      emailInput.style.border = '1px solid red';
    } else {
      emailInput.style.border = 'initial';
      check2 = true;
    }
    if (!checkInput.checked){
      checkInput.style.outline = '2px solid red';
      checkInput.style.border = 'none';
    } else {
      checkInput.style.outline = 'initial';
      check3 = true;
    }
  if(check1 && check2 && check3){
    fetchingData(name, email);
    setTimeout(() =>{
      nameInput.value='';
      emailInput.value='';
      checkInput.checked=false;
    },2000)
  }

  //Evento 5 (pt2): para mandar los datos del formulario al servidor de testing
  async function fetchingData(n, e) {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const user = {
        method: 'POST',
        body: JSON.stringify({
            name: n,
            email: e,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }
    const data = await fetch(url, user)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
        .then(() => {
            window.alert('¡Gracias por enviarnos tus datos! En breve recibirás un correo.')
        })
        .catch((err) => {
            console.log(`error ${err}`)
        })
}
});