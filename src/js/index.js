import "../scss/main.scss";
import {play, pause} from "./modules/play&pause";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("HELLO 🚀");

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  document.body.classList.remove("body--preload");
});

export const buttonTprGoingToHell = document.querySelector(".container__button--going-to-hell");
export const audioTprGoingToHell = document.querySelector(".audio__tpr--going-to-hell");
export const audioTprFollowMeDown = document.querySelector(".audio__tpr--follow-me-down");
export const audioTprAbsolution = document.querySelector(".audio__tpr--absolution");
export const audioTprDearSister = document.querySelector(".audio__tpr--dear-sister");
export const audioTprFuckedUpWorld = document.querySelector( ".audio__tpr--fucked-up-world");
export const audioHeavenKnows = document.querySelector(".audio__tpr--heaven-knows");
export const audioTprHouseOnAHill = document.querySelector(".audio__tpr--house-on-a-hill");
export const audioTprSweetThings = document.querySelector(".audio__tpr--sweet-things");
export const audioTprWaitingForAFriend = document.querySelector(".audio__tpr--waiting-for-a-friend");
export const audioTprWhydYouBringAShotgunToTheParty = document.querySelector(".audio__tpr--whyd-you-bring-a-shotgun-to-the-party");
const titleTpr = document.querySelector(".container__title--tpr");

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

const buttonRightTprGoingToHell = document.querySelector(
  ".section__button--right-going-to-hell"
);

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

buttonRightTprGoingToHell.addEventListener("click", () => {
  if (buttonTprGoingToHell.classList.contains("container__button--going-to-hell")) {
    titleTpr.innerHTML = "Follow Me Down";
    buttonTprGoingToHell.classList.remove("container__button--going-to-hell");
    buttonTprGoingToHell.classList.add("container__button--follow-me-down");
  } 
  else if (buttonTprGoingToHell.classList.contains("container__button--follow-me-down")) {
    titleTpr.innerHTML = "Absolution";
    buttonTprGoingToHell.classList.remove("container__button--follow-me-down");
    buttonTprGoingToHell.classList.add("container__button--absolution");
  }
  else if (buttonTprGoingToHell.classList.contains("container__button--absolution")) {
    titleTpr.innerHTML = "Dear Sister";
    buttonTprGoingToHell.classList.remove("container__button--absolution");
    buttonTprGoingToHell.classList.add("container__button--dear-sister");
  }
  else if (buttonTprGoingToHell.classList.contains("container__button--dear-sister")) {
    titleTpr.innerHTML = "Fucked Up World";
    buttonTprGoingToHell.classList.remove("container__button--dear-sister");
    buttonTprGoingToHell.classList.add("container__button--fucked-up-world");
  }
  else if (buttonTprGoingToHell.classList.contains("container__button--fucked-up-world")) {
    titleTpr.innerHTML = "Heaven Knows";
    buttonTprGoingToHell.classList.remove("container__button--fucked-up-world");
    buttonTprGoingToHell.classList.add("container__button--heaven-knows");
  }
  else if (buttonTprGoingToHell.classList.contains("container__button--heaven-knows")) {
    titleTpr.innerHTML = "House On A Hill";
    buttonTprGoingToHell.classList.remove("container__button--heaven-knows");
    buttonTprGoingToHell.classList.add("container__button--house-on-a-hill");
  }
  else if (buttonTprGoingToHell.classList.contains("container__button--house-on-a-hill")) {
    titleTpr.innerHTML = "Sweet Things";
    buttonTprGoingToHell.classList.remove("container__button--house-on-a-hill");
    buttonTprGoingToHell.classList.add("container__button--sweet-things");
  }
  else if (buttonTprGoingToHell.classList.contains("container__button--sweet-things")) {
    titleTpr.innerHTML = "Waiting For A Friend";
    buttonTprGoingToHell.classList.remove("container__button--sweet-things");
    buttonTprGoingToHell.classList.add("container__button--waiting-for-a-friend");
  }
  else if (buttonTprGoingToHell.classList.contains("container__button--waiting-for-a-friend")) {
    titleTpr.innerHTML = "Why'd You Bring A Shotgun To The Party";
    buttonTprGoingToHell.classList.remove("container__button--waiting-for-a-friend");
    buttonTprGoingToHell.classList.add("container__button--whyd-you-bring-a-shotgun-to-the-party");
  }
});

buttonTprGoingToHell.addEventListener("click", () => {
  if (buttonTprGoingToHell.classList.contains("container__button--going-to-hell")) {
    if (buttonTprGoingToHell.classList.contains("container__button-play")) {
      play(audioTprGoingToHell);
    } else { 
      pause(audioTprGoingToHell);
    }
  }

  if (buttonTprGoingToHell.classList.contains("container__button--follow-me-down")) {
    if (buttonTprGoingToHell.classList.contains("container__button-play")) {
      play(audioTprFollowMeDown);
  } else {
    pause(audioTprFollowMeDown);
  }
}
  
if (buttonTprGoingToHell.classList.contains("container__button--absolution")) {
  if (buttonTprGoingToHell.classList.contains("container__button-play")) {
    play(audioTprAbsolution);
 } else {
  pause(audioTprAbsolution);
 }
} 

if (buttonTprGoingToHell.classList.contains("container__button--dear-sister")) {
  if (buttonTprGoingToHell.classList.contains("container__button-play")) {
    play(audioTprDearSister);
 } else {
  pause(audioTprDearSister);
 }
} 
});
