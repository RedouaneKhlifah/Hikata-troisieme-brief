const allbtn = document.querySelector("#allbtn");
const breackfastbtn = document.querySelector("#breackfastbtn");
const lunchbtn = document.querySelector("#lunchbtn");
const dinnerbtn = document.querySelector("#dinnerbtn");
const box = document.querySelectorAll(".box");
const orderbtn = document.querySelectorAll(".orderbtn");
const panierInput = document.querySelector(".panierInput");

const panierorder = document.querySelectorAll(".test");

let openbtn = document.querySelector("#open");
let closebtn = document.querySelector("#close");
let cartbtn = document.querySelector(".bi-cart4");
let panier = document.querySelector(".panier");
let mobnav = document.querySelector(".mobile-nav");

const totalbtn = document.querySelector(".totalbtn");

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

const displaybreackfast = function (th) {
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

orderbtn.forEach((element) => {
  element.addEventListener("click", function () {
    let parentelement = element.parentElement;
    let foodPriceElement = parentelement.querySelector(".foodPrice");
    let foodNamElement = parentelement.querySelector(".foodname");
    let foodname = foodNamElement.innerHTML;
    let foodprice = foodPriceElement.innerHTML;

    let html = `<div class="test">
    <p>${foodname}</p>
    <input class="panierInput" value ="1" type="number" />
    <p class="price">${foodprice}</p>
    

  </div>`;
    const panierin = document.getElementsByClassName("gridpanier")[0];
    panierin.insertAdjacentHTML("beforeend", html);
  });
});

totalbtn.addEventListener("click", function () {
  const panierin = document.getElementsByClassName("gridpanier")[0];
  console.log(panierin);
  let orderdiv = panierin.querySelectorAll(".test");
  let totalArray = [];
  orderdiv.forEach((element) => {
    let orderprice = element.querySelector(".price");
    let inputValue = element.querySelector(".panierInput");

    console.log(orderdiv);

    totalArray.push(
      Number(orderprice.innerHTML.replace("$", "")) * inputValue.value
    );
  });

  if (totalArray.length == 0) {
    alert("your panier is empty");
  } else {
    let total = totalArray.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
    alert(`your Total is : ${total}$
thank you for your trust`);
  }
});
