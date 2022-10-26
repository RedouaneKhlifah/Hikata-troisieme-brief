const allbtn = document.querySelector("#allbtn");
const breackfastbtn = document.querySelector("#breackfastbtn");
const lunchbtn = document.querySelector("#lunchbtn");
const dinnerbtn = document.querySelector("#dinnerbtn");
const box = document.querySelectorAll(".box");

let openbtn = document.querySelector("#open");
let closebtn = document.querySelector("#close");
let cartbtn = document.querySelector(".bi-cart4");
let panier = document.querySelector(".panier");

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

const displaybreackfast = function () {
  box.forEach((element) => {
    element.style.display = "grid";
    if (!element.classList.contains("breackfast")) {
      element.style.display = "none";
    }
  });
};

const displaylunch = function () {
  box.forEach((element) => {
    element.style.display = "grid";
    if (!element.classList.contains("Lunch")) {
      element.style.display = "none";
    }
  });
};

const displaydinner = function () {
  box.forEach((element) => {
    element.style.display = "grid";
    if (!element.classList.contains("dinner")) {
      element.style.display = "none";
    }
  });
};

const displayall = function () {
  box.forEach((element) => {
    element.style.display = "grid";
  });
};
const displaypanier = function () {
  panier.classList.toggle("hide");
};

cartbtn.addEventListener("click", displaypanier);

breackfastbtn.addEventListener("click", displaybreackfast);

lunchbtn.addEventListener("click", displaylunch);

dinnerbtn.addEventListener("click", displaydinner);

allbtn.addEventListener("click", displayall);

console.log(box);
