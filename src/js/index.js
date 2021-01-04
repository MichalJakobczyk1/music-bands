import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("HELLO 🚀");

window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
  document.body.classList.remove('body--preload');
}); 

const buttonTprGoingToHell = document.querySelector(
  ".container__button--going-to-hell"
);
const audioTprGoingToHell = document.querySelector(
  ".audio__tpr--going-to-hell"
);

const buttonTacoLuxembourg = document.querySelector(
  ".container__button--luxembourg"
);
const audioTacoLuxembourg = document.querySelector(".audio__taco--luxembourg");

const buttonGrandsonWwIII = document.querySelector(".container__button--wwIII");
const audioGrandsonWwIII = document.querySelector(".audio__grandson--wwIII");

const buttonAvaWhosLaughingNow = document.querySelector(
  ".container__button--whos-laughing-now"
);
const audioAvaWhosLaughingNow = document.querySelector(
  ".audio__ava--whos-laughing-now"
);

buttonTprGoingToHell.addEventListener("click", () => {
  if (buttonTprGoingToHell.classList.contains("container__button-play")) {
    audioTprGoingToHell.play();
    audioTprGoingToHell.volume = 0.1;

    buttonTprGoingToHell.classList.remove("container__button-play");
    buttonTprGoingToHell.classList.add("container__button-pause");
  } else {
    audioTprGoingToHell.pause();
    buttonTprGoingToHell.classList.add("container__button-play");
    buttonTprGoingToHell.classList.remove("container__button-pause");
  }
});

buttonTacoLuxembourg.addEventListener("click", () => {
  if (buttonTacoLuxembourg.classList.contains("container__button-play")) {
    audioTacoLuxembourg.play();
    audioTacoLuxembourg.volume = 0.1;

    buttonTacoLuxembourg.classList.remove("container__button-play");
    buttonTacoLuxembourg.classList.add("container__button-pause");
  } else {
    audioTacoLuxembourg.pause();
    buttonTacoLuxembourg.classList.add("container__button-play");
    buttonTacoLuxembourg.classList.remove("container__button-pause");
  }
});

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
