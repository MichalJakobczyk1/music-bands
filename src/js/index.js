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

const containerTpr = document.querySelector(".container--tpr");
const containerTaco = document.querySelector(".container--taco");
const containerGrandson = document.querySelector(".container--grandson");
const containerAva = document.querySelector(".container--ava");

const h2Tpr = document.querySelector(".container__h2--tpr");
const buttonTpr = document.querySelector(".container__button--tpr");
const titleTpr = document.querySelector(".container__title--tpr");

const h2Taco = document.querySelector(".container__h2--taco");
const buttonTaco = document.querySelector(".container__button--taco");
const titleTaco = document.querySelector(".container__title--taco");

const h2Grandson = document.querySelector(".container__h2--grandson");
const buttonGrandson = document.querySelector(".container__button--grandson");
const titleGrandson = document.querySelector(".container__title--grandson");

const h2Ava = document.querySelector(".container__h2--ava");
const buttonAva = document.querySelector(".container__button--ava");
const titleAva = document.querySelector(".container__title--ava");

// function renderImg() {
//   const img = document.createElement("img");
//   img.src = "../assets/img/play.svg";
//   img.classList.add("container__image");
//   buttonTpr.appendChild(img);
// };

tpr.addEventListener("mouseenter",() => {
  // const img = document.createElement("img");
  // img.src = "play.svg";
  // img.classList.add("container__image");
  // buttonTpr.appendChild(img);
  h2Tpr.innerHTML = "The Pretty Reckless";
  titleTpr.innerHTML = "Going To Hell";
  containerTpr.classList.add("container-animated");
  containerTpr.classList.remove("container-deanimated");
});
tpr.addEventListener("mouseleave",() => {
  // const parent = document.getElementById("container--tpr");
  // const child = document.getElementById("button--tpr");
  // parent.removeChild(child);
  containerTpr.classList.remove("container-animated");
  containerTpr.classList.add("container-deanimated");
});
taco.addEventListener("mouseenter",() => {
  h2Taco.innerHTML = "Taco Hemingway";
  titleTaco.innerHTML = "Luxembourg";
  containerTaco.classList.add("container-animated");
  containerTaco.classList.remove("container-deanimated");
});
taco.addEventListener("mouseleave",() => {
  containerTaco.classList.remove("container-animated");
  containerTaco.classList.add("container-deanimated");
});
grandson.addEventListener("mouseenter",() => {
  h2Grandson.innerHTML = "Grandson";
  titleGrandson.innerHTML = "WWIII";
  containerGrandson.classList.add("container-animated");
  containerGrandson.classList.remove("container-deanimated");
});
grandson.addEventListener("mouseleave",() => {
  containerGrandson.classList.remove("container-animated");
  containerGrandson.classList.add("container-deanimated");
});
ava.addEventListener("mouseenter",() => {
  h2Ava.innerHTML = "Ava Max";
  titleAva.innerHTML = "Who's Laughing Now";
  containerAva.classList.add("container-animated");
  containerAva.classList.remove("container-deanimated");
});
ava.addEventListener("mouseleave",() => {
  containerAva.classList.remove("container-animated");
  containerAva.classList.add("container-deanimated");
});