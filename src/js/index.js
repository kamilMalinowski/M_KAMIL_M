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
    nav.style.background = "#686eab";
    nav.style.transition = "0.5s";
    nav.style.top = "0";
  } else {
    nav.style.top = "30px";
    nav.style.background = "none";
  }
};

// button EVIL
const showAlbumEvil = document.querySelector(".showAlbumEvil--js");

showAlbumEvil.addEventListener("click", () => {
  const albumEvil = document.querySelector(".albumEvil--js");
  albumEvil.classList.toggle("album--open");
});

// button ALONE
const showAlbumAlone = document.querySelector(".showAlbumAlone--js");

showAlbumAlone.addEventListener("click", () => {
  const albumAlone = document.querySelector(".albumAlone--js");
  albumAlone.classList.toggle("album--open");
});

// button MLU
const showAlbumMLU = document.querySelector(".showAlbumMLU--js");

showAlbumMLU.addEventListener("click", () => {
  const albumMLU = document.querySelector(".albumMLU--js");
  albumMLU.classList.toggle("album--open");
});

