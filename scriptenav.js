"use strict";
let openbtn = document.querySelector("#open");
let closebtn = document.querySelector("#close");
let mobnav = document.querySelector(".mobile-nav");

openbtn.addEventListener("click", () => {
  openbtn.classList.toggle("hide");
  closebtn.classList.toggle("show");
  document.querySelector("body").style.overflow = "hidden";
  mobnav.classList.toggle("shownav");
});

closebtn.addEventListener("click", () => {
  openbtn.classList.toggle("hide");
  closebtn.classList.toggle("show");
  document.querySelector("body").style.overflow = "visible";
  mobnav.classList.toggle("shownav");
});
