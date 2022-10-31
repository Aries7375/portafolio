const iconMenu = document.querySelector("#menu-icon");
menu = document.querySelector("#menu");
const body = document.querySelector("body");

iconMenu.addEventListener("click", (i) => {
  menu.classList.toggle("active");
  document.body.classList.toggle("opacity");
  const rutaActual = i.target.getAttribute("src");
  body.classList.toggle("no-scroll");
});

function function1() {
  if (window.innerWidth <= 950) {
    menu.classList.toggle("active");
    document.body.classList.toggle("opacity");
    body.classList.toggle("no-scroll");
  }
}
