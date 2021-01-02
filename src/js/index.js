import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("HELLO 🚀");

const tpr = document.querySelector(".section--tpr");
const taco = document.querySelector(".section--taco");
const grandson = document.querySelector(".section--grandson");
const ava = document.querySelector(".section--ava");

const tprH2 = document.querySelector(".section__h2--tpr");
const tprButton = document.querySelector(".section__button--tpr");
const tprTitle = document.querySelector(".section__title--tpr");

const tacoH2 = document.querySelector(".section__h2--taco");
const tacoButton = document.querySelector(".section__button--taco");
const tacoTitle = document.querySelector(".section__title--taco");

const grandsonH2 = document.querySelector(".section__h2--grandson");
const grandsonButton = document.querySelector(".section__button--grandson");
const grandsonTitle = document.querySelector(".section__title--grandson");

const avaH2 = document.querySelector(".section__h2--ava");
const avaButton = document.querySelector(".section__button--ava");
const avaTitle = document.querySelector(".section__title--ava");

tpr.addEventListener("mouseenter", () => {
  tprH2.classList.add("section__h2--tpr-animated");
  tprButton.classList.add("section__button--tpr-animated");
  tprTitle.classList.add("section__title--tpr-animated");
});
taco.addEventListener("mouseenter", () => {
  tacoH2.classList.add("section__h2--taco-animated");
  tacoButton.classList.add("section__button--taco-animated");
  tacoTitle.classList.add("section__title--taco-animated");
});
grandson.addEventListener("mouseenter", () => {
  grandsonH2.classList.add("section__h2--grandson-animated");
  grandsonButton.classList.add("section__button--grandson-animated");
  grandsonTitle.classList.add("section__title--grandson-animated");
});
ava.addEventListener("mouseenter", () => {
  avaH2.classList.add("section__h2--ava-animated");
  avaButton.classList.add("section__button--ava-animated");
  avaTitle.classList.add("section__title--ava-animated");
});
