import "../scss/main.scss";

// button MORE
const moreButton = document.querySelector(".moreButton--js");

moreButton.addEventListener("click", () => {
  const subList = document.querySelector(".subList--js");
  subList.classList.toggle("subList--open");
});

// navigation opacity
const nav = document.querySelector(".nav--js");

window.onscroll = function () {
  if (window.pageYOffset > 0) {
    nav.style.background = "#636AE5";
    nav.style.transition = "0.5s";
    nav.style.top = "0";
  } else {
    nav.style.top = "30px";
    nav.style.background = "none";
  }
};


