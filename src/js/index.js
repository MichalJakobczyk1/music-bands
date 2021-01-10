import "../scss/main.scss";
import tprPlayer from "./modules/thePrettyReckless";
import tacoPlayer from "./modules/taco";
import grandsonPlayer from "./modules/grandson";

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
grandsonPlayer();

const buttonAvaWhosLaughingNow = document.querySelector(".container__button--whos-laughing-now");
const audioAvaWhosLaughingNow = document.querySelector(".audio__ava--whos-laughing-now");

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
