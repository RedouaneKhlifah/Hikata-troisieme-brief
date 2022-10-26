"use strict";
let openbtn = document.querySelector("#open");
let closebtn = document.querySelector("#close");

openbtn.addEventListener("click", () => {
  openbtn.classList.toggle("hide");
  closebtn.classList.toggle("show");
  document.querySelector("body").style.overflow = "hidden";
  console.log("re");
});

closebtn.addEventListener("click", () => {
  openbtn.classList.toggle("hide");
  closebtn.classList.toggle("show");
  document.querySelector("body").style.overflow = "visible";
});
