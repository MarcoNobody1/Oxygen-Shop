
const nav = document.getElementById("nav");
const menu = document.getElementById("menu");

const bar = document.getElementById("pgr-bar");
const scrollY = window.scrollY;
const docHeigth = document.documentElement.scrollHeight;
const winHeigth = window.innerHeight;
const pt2 = document.getElementById("pt2__c2");
const prBlue = document.getElementById("pr__blue");
const cbox = document.getElementById("check");
const pt3 = document.getElementById("pt3");

const button = document.getElementById("returnbtn");
const header = document.getElementById("header");

const openBtn = document.querySelector(".shop-btn");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const formBtn = document.querySelector(".f-btn");
const checkInput = document.getElementById("check");
const emailPattern =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const modal = document.getElementById("modal");
const modalcross = document.getElementById("modalcross");
const subbtn = document.getElementById("modal-btn");
const modalinput = document.getElementById("modal-email");
const modalhead = document.getElementById("modal-imgs");
const modalform = document.getElementById("modal-form");

const select = document.getElementById("select");
const originPrice = [];
const symbols = document.querySelectorAll(".symbol");
const prices = document.querySelectorAll(".price");


function desplegarMenu() {
  nav.classList.toggle("hidden");
  if (nav.classList.contains("hidden")) {
    menu.setAttribute("src", "./resources/svg/menu.svg");
  } else {
    menu.setAttribute("src", "./resources/svg/x-menu.svg");
  }
}

menu.addEventListener("click", desplegarMenu);

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


button.addEventListener("click", function () {
  setTimeout(() => {
    window.scrollTo({
      top: header.offsetTop,
      behavior: "smooth",
    });
  }, 200);
});


openBtn.addEventListener("click", function () {
  setTimeout(() => {
    window.scrollTo({
      top: pt3.offsetTop,
      behavior: "smooth",
    });
  }, 300);
});


formBtn.addEventListener("click", function () {
  const name = nameInput.value;
  const email = emailInput.value;
  let check1 = 0;

  if (name.length < 2 || name.length > 100) {
    nameInput.style.border = "2px solid red";
  } else {
    nameInput.style.border = "initial";
    check1++;
  }
  if (!emailPattern.test(email)) {
    emailInput.style.border = "2px solid red";
  } else {
    emailInput.style.border = "initial";
    check1++;
  }
  if (!checkInput.checked) {
    checkInput.style.outline = "2px solid red";
    checkInput.style.border = "none";
  } else {
    checkInput.style.outline = "initial";
    check1++;
  }

  if (check1 === 3) {
    fetchingData(name, email);
    setTimeout(() => {
      nameInput.value = "";
      emailInput.value = "";
      checkInput.checked = false;
    }, 2000);
  }


  async function fetchingData(name_data, email_data) {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const user = {
      method: "POST",
      body: JSON.stringify({
        name: name_data,
        email: email_data,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const data = await fetch(url, user)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return { email: email_data, name: name_data };
      })
      .then(({email, name}) => {
        const Alert = Swal.mixin({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Alert.fire({
          icon: "success",
          title: `Thanks ${name}!`,
          text: `You'll soon receive an email at ${email}.`,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "<strong>It looks like something's wrong...</strong>",
          text: `${err}`,
          footer:
            "Either our server is busy, or you have no internet connection. Please try again later.",
        });
      });
  }
});


const openModal = () => {
  modal.style.display = "flex";
};

window.addEventListener("scroll", () => {
  let actualWidth = (this.scrollY / (docHeigth - winHeigth)) * 100;

  if (actualWidth >= 25 && localStorage.getItem("oculto") === null) {
    openModal();
  }
});

if (localStorage.getItem("oculto") === null) {
  setTimeout(openModal, 5000);
}

const closeModal = () => {
  modal.classList.add("hidemodal");
  localStorage.setItem("oculto", "true");
};

modalcross.addEventListener("click", closeModal);

const keyPressed = (e) => {
  if (e.keyCode === 27 && modal.style.display === "flex") {
    closeModal();
  }
};

const clickout = (e) => {
  if (!modal.contains(e.target) && modal.style.display === "flex") {
    closeModal();
  }
};

document.addEventListener("keydown", keyPressed);
document.addEventListener("click", clickout);

function validarEmail(email) {
  if (!emailPattern.test(email)) {
    modalinput.style.border = "3px solid red";
    modalhead.style.backgroundImage = "url(resources/img/modal-head-wrong.gif)";
    return false;
  } else {
    modalinput.style.border = "initial";
    modalhead.style.backgroundImage = "url(resources/img/modal-head-right.gif)";
    return true;
  }
}

async function enviarDatos(email) {
  const urltest = "https://jsonplaceholder.typicode.com/posts";
  const usersub = {
    method: "POST",
    body: JSON.stringify({
      email: email,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  try {
    const response = await fetch(urltest, usersub);
    const datasub = await response.json();
    console.log(datasub);
    
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Your subscription has been successfully registered",
    });
  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "<strong>It looks like something's wrong...</strong>",
      text: `${err}`,
      footer:
        "Either our server is busy, or you have no internet connection. Please try again later.",
    });
  }
}

subbtn.addEventListener("click", () => {
  const subemail = modalinput.value;

  if (validarEmail(subemail)) {
    enviarDatos(subemail);
    setTimeout(closeModal, 2000);
  }
});

modalform.addEventListener("submit", (e) => {
  e.preventDefault();
  const subemail = modalinput.value;

  if (validarEmail(subemail)) {
    enviarDatos(subemail);
    setTimeout(closeModal, 2000);
  }
});

modalinput.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    subbtn.click();
  }
});

async function fetchExRates() {
  const response = await fetch(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json`
  );
  const data = await response.json();
  return data;
}

select.addEventListener("change", () => {
  select.blur();

  if (originPrice.length === 0) {
    prices.forEach((e) => originPrice.push(Number(e.innerHTML)));
  }
  const fetchCurrency = async (curr) => {
    try {
      const currencies = await fetchExRates();

      if (curr === "eur") {
        prices.forEach(
          (e) =>
            (e.innerHTML = Math.round(Number(e.innerHTML) * currencies.usd.eur))
        );
      } else if (curr === "gbp") {
        prices.forEach(
          (e) =>
            (e.innerHTML = Math.round(Number(e.innerHTML) * currencies.usd.gbp))
        );
      } else {
        restartPrice();
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "<strong>It looks like something's wrong...</strong>",
        text: `${err}`,
        footer:
          "Either our server is busy, or you have no internet connection. Please try again later.",
      });
    }
  };

  if (select.value === "euro") {
    symbols.forEach((e) => (e.innerHTML = "€")),
      (select.style.backgroundImage = "url(resources/img/euro.gif)");
    select.style.color = "transparent";
    restartPrice(), fetchCurrency("eur");
  } else if (select.value === "dolar") {
    symbols.forEach((e) => (e.innerHTML = "$")),
      (select.style.backgroundImage = "url(resources/img/dollar.gif)");
    select.style.color = "transparent";
    restartPrice(), fetchCurrency("usd");
  } else {
    symbols.forEach((e) => (e.innerHTML = "£")),
      (select.style.backgroundImage = "url(resources/img/pound.gif)");
    select.style.color = "transparent";
    restartPrice(), fetchCurrency("gbp");
  }
});

function restartPrice() {
  prices.forEach((p, i) => (p.innerHTML = originPrice[i]));
}

class Slider {
  constructor(sliderId) {
    this.slider = document.querySelector(`#${sliderId}`);
    this.imgs = document.querySelectorAll(".imgslider");
    this.indexNow = 0;
    this.allImgs = this.imgs.length;
    this.allDots = null;
    this.timer;
  }
  start() {
    const div = document.getElementById("dots");
    this.imgs.forEach((e, i) => {
      const dot = document.createElement("span");
      dot.classList.add("dot", `${i}`);
      div.appendChild(dot);
    });
    this.allDots = document.querySelectorAll(".dot");
    this.show();
    this.countdown();
  }
  next() {
    this.indexNow = (this.indexNow + 1) % this.allImgs;
    this.show();
  }
  prev() {
    this.indexNow = (this.indexNow - 1 + this.allImgs) % this.allImgs;
    this.show();
  }
  show() {
    for (let i = 0; i < this.allImgs; i++) {
      if (i === this.indexNow) {
        this.imgs[i].classList.add("show");
        this.allDots[i].classList.add("checked");
        this.allDots[i].classList.remove("dot");
      } else {
        this.imgs[i].classList.remove("show");
        this.allDots[i].classList.remove("checked");
        this.allDots[i].classList.add("dot");
      }
    }
  }
  countdown() {
    this.timer = setInterval(() => {
      this.next();
    }, 3000);
  }
  stopcount() {
    return clearInterval(this.timer);
  }
  imganddot(e) {
    this.stopcount();
    this.indexNow = e;
    this.show();
    this.countdown();
  }
}

const sliderImg = new Slider("slider");

document.addEventListener("click", (e) => {
  e.target.matches(".forward")
    ? sliderImg.next()
    : e.target.matches(".back")
    ? sliderImg.prev()
    : false;
  const dotarray = document.querySelectorAll(".dot");
  let array = [...dotarray];
  let i = array.indexOf(e.target);

  if (e.target.matches(".dot")) {
    if (i >= sliderImg.indexNow) {
      sliderImg.imganddot(i + 1);
    } else {
      sliderImg.imganddot(i);
    }
  } else {
    false;
  }
});

sliderImg.start();
