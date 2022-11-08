const iconMenu = document.querySelector("#menu-icon");
const menu = document.querySelector("#menu");
const body = document.querySelector("body");

iconMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
  body.classList.toggle("opacity");
  body.classList.toggle("no-scroll");
});

const items = document.querySelector(".items");
items.addEventListener("click", function (e) {
  if (e.target.classList.contains("lit") && window.innerWidth <= 950) {
    menu.classList.toggle("active");
    body.classList.toggle("opacity");
    body.classList.toggle("no-scroll");
  }
});
