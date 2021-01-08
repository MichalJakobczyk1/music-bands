import "../scss/main.scss";
import tacoPlayer from "./modules/taco";
import tprPlayer from "./modules/thePrettyReckless";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("HELLO 🚀");

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  document.body.classList.remove("body--preload");
});

tprPlayer();
tacoPlayer();

const buttonGrandsonWwIII = document.querySelector(".container__button--wwIII");
const audioGrandsonWwIII = document.querySelector(".audio__grandson--wwIII");

const buttonAvaWhosLaughingNow = document.querySelector(".container__button--whos-laughing-now");
const audioAvaWhosLaughingNow = document.querySelector(".audio__ava--whos-laughing-now");

buttonGrandsonWwIII.addEventListener("click", () => {
  if (buttonGrandsonWwIII.classList.contains("container__button-play")) {
    audioGrandsonWwIII.play();
    audioGrandsonWwIII.volume = 0.1;

    buttonGrandsonWwIII.classList.remove("container__button-play");
    buttonGrandsonWwIII.classList.add("container__button-pause");
  } else {
    audioGrandsonWwIII.pause();
    buttonGrandsonWwIII.classList.add("container__button-play");
    buttonGrandsonWwIII.classList.remove("container__button-pause");
  }
});

buttonAvaWhosLaughingNow.addEventListener("click", () => {
  if (buttonAvaWhosLaughingNow.classList.contains("container__button-play")) {
    audioAvaWhosLaughingNow.play();
    audioAvaWhosLaughingNow.volume = 0.1;

    buttonAvaWhosLaughingNow.classList.remove("container__button-play");
    buttonAvaWhosLaughingNow.classList.add("container__button-pause");
  } else {
    audioAvaWhosLaughingNow.pause();
    buttonAvaWhosLaughingNow.classList.add("container__button-play");
    buttonAvaWhosLaughingNow.classList.remove("container__button-pause");
  }
});

