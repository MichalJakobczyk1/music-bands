import { play, pause, changeContent } from "./functions";

const buttonGrandsonWwIII = document.querySelector(".container__button--wwIII");
const buttonRightGrandsonWwIII = document.querySelector(
  ".section__button--right-wwIII"
);
const buttonLeftGrandsonWwIII = document.querySelector(
  ".section__button--left-wwIII"
);

const audioGrandsonWwIII = document.querySelector(
  ".audio__grandson--wwIII"
  );
const audioGrandsonDeathOfAnOptimist = document.querySelector(
  ".audio__grandson--death-of-an-optimist"
);
const audioGrandsonDropDead = document.querySelector(
  ".audio__grandson--drop-dead"
);
const audioGrandsonIdentity = document.querySelector(
  ".audio__grandson--identity"
);
const audioGrandsonInOverMyHead = document.querySelector(
  ".audio__grandson--in-over-my-head"
);
const audioGrandsonLeftBehind = document.querySelector(
  ".audio__grandson--in-over-my-head"
);
const audioGrandsonPainShopping = document.querySelector(
  ".audio__grandson--pain-shopping"
);
const audioGrandsonRiptide = document.querySelector(
  ".audio__grandson--riptide"
);
const audioGrandsonTheBalladOfGX = document.querySelector(
  ".audio__grandson--the-ballad-of-g-and-x"
);
const audioGrandsonWeDidIt = document.querySelector(
  ".audio__grandson--we-did-it"
);
const audioGrandsonWelcomeToParadise = document.querySelector(
  ".audio__grandson--welcome-to-paradise-outro"
);

const titleGrandson = document.querySelector(".container__title--grandson");
export default function grandsonPlayer() {
  buttonRightGrandsonWwIII.addEventListener("click", () => {
    if (
      buttonGrandsonWwIII.classList.contains("container__button--wwIII")
    ) {
      changeContent(
        titleGrandson,
        "Death Of An Optimist",
        buttonGrandsonWwIII,
        "container__button--wwIII",
        "container__button--death-of-an-optimist"
      );
      pause(audioGrandsonWwIII, buttonGrandsonWwIII);
    } else if (
      buttonGrandsonWwIII.classList.contains("container__button--death-of-an-optimist")
    ) {
      changeContent(
        titleGrandson,
        "Drop Dead",
        buttonGrandsonWwIII,
        "container__button--death-of-an-optimist",
        "container__button--drop-dead"
      );
      pause(audioGrandsonDeathOfAnOptimist, buttonGrandsonWwIII);
    } 
    else if (
      buttonGrandsonWwIII.classList.contains("container__button--drop-dead")
    ) {
      changeContent(
        titleGrandson,
        "Identity",
        buttonGrandsonWwIII,
        "container__button--drop-dead",
        "container__button--identity"
      );
      pause(audioGrandsonDropDead, buttonGrandsonWwIII);
    }
    else if (
      buttonGrandsonWwIII.classList.contains("container__button--identity")
    ) {
      changeContent(
        titleGrandson,
        "In Over My Head",
        buttonGrandsonWwIII,
        "container__button--identity",
        "container__button--in-over-my-head"
      );
      pause(audioGrandsonIdentity, buttonGrandsonWwIII);
    }
    else if (
      buttonGrandsonWwIII.classList.contains("container__button--in-over-my-head")
    ) {
      changeContent(
        titleGrandson,
        "Left Behind",
        buttonGrandsonWwIII,
        "container__button--in-over-my-head",
        "container__button--left-behind"
      );
      pause(audioGrandsonInOverMyHead, buttonGrandsonWwIII);
    }
    else if (
      buttonGrandsonWwIII.classList.contains("container__button--left-behind")
    ) {
      changeContent(
        titleGrandson,
        "Pain Shopping",
        buttonGrandsonWwIII,
        "container__button--left-behind",
        "container__button--pain-shopping"
      );
      pause(audioGrandsonLeftBehind, buttonGrandsonWwIII);
    }
    else if (
      buttonGrandsonWwIII.classList.contains("container__button--pain-shopping")
    ) {
      changeContent(
        titleGrandson,
        "Riptide",
        buttonGrandsonWwIII,
        "container__button--pain-shopping",
        "container__button--riptide"
      );
      pause(audioGrandsonPainShopping, buttonGrandsonWwIII);
    }
    else if (
      buttonGrandsonWwIII.classList.contains("container__button--riptide")
    ) {
      changeContent(
        titleGrandson,
        "The Ballad Of G&X",
        buttonGrandsonWwIII,
        "container__button--riptide",
        "container__button--the-ballad-of-g-and-x"
      );
      pause(audioGrandsonRiptide, buttonGrandsonWwIII);
    }
    else if (
      buttonGrandsonWwIII.classList.contains("container__button--the-ballad-of-g-and-x")
    ) {
      changeContent(
        titleGrandson,
        "We Did It",
        buttonGrandsonWwIII,
        "container__button--the-ballad-of-g-and-x",
        "container__button--we-did-it"
      );
      pause(audioGrandsonTheBalladOfGX, buttonGrandsonWwIII);
    }
    else if (
      buttonGrandsonWwIII.classList.contains("container__button--we-did-it")
    ) {
      changeContent(
        titleGrandson,
        "Welcome To Paradise",
        buttonGrandsonWwIII,
        "container__button--we-did-it",
        "container__button--welcome-to-paradise"
      );
      pause(audioGrandsonWeDidIt, buttonGrandsonWwIII);
    }
    else if (
      buttonGrandsonWwIII.classList.contains("container__button--welcome-to-paradise")
    ) {
      changeContent(
        titleGrandson,
        "WW III",
        buttonGrandsonWwIII,
        "container__button--welcome-to-paradise",
        "container__button--wwIII"
      );
      pause(audioGrandsonWelcomeToParadise, buttonGrandsonWwIII);
    }
  });



  buttonLeftGrandsonWwIII.addEventListener("click", () => {
    if (
      buttonGrandsonWwIII.classList.contains("container__button--wwIII")
    ) {
      changeContent(
        titleGrandson,
        "Welcome To Paradise",
        buttonGrandsonWwIII,
        "container__button--wwIII",
        "container__button--welcome-to-paradise"
      );
      pause(audioGrandsonWwIII, buttonGrandsonWwIII);
    } else if (
      buttonGrandsonWwIII.classList.contains("container__button--death-of-an-optimist")
    ) {
      changeContent(
        titleGrandson,
        "WW III",
        buttonGrandsonWwIII,
        "container__button--death-of-an-optimist",
        "container__button--wwIII"
      );
      pause(audioGrandsonDeathOfAnOptimist, buttonGrandsonWwIII);
    } else if (
      buttonGrandsonWwIII.classList.contains("container__button--drop-dead")
    ) {
      changeContent(
        titleGrandson,
        "Death Of An Optimist",
        buttonGrandsonWwIII,
        "container__button--drop-dead",
        "container__button--death-of-an-optimist"
      );
      pause(audioGrandsonDropDead, buttonGrandsonWwIII);
    }
    else if (
      buttonGrandsonWwIII.classList.contains("container__button--identity")
    ) {
      changeContent(
        titleGrandson,
        "Drop Dead",
        buttonGrandsonWwIII,
        "container__button--identity",
        "container__button--drop-dead"
      );
      pause(audioGrandsonIdentity, buttonGrandsonWwIII);
    }
    else if (
      buttonGrandsonWwIII.classList.contains("container__button--in-over-my-head")
    ) {
      changeContent(
        titleGrandson,
        "Identity",
        buttonGrandsonWwIII,
        "container__button--in-over-my-head",
        "container__button--identity"
      );
      pause(audioGrandsonInOverMyHead, buttonGrandsonWwIII);
    }
    else if (
      buttonGrandsonWwIII.classList.contains("container__button--left-behind")
    ) {
      changeContent(
        titleGrandson,
        "In Over My Head",
        buttonGrandsonWwIII,
        "container__button--left-behind",
        "container__button--in-over-my-head"
      );
      pause(audioGrandsonLeftBehind, buttonGrandsonWwIII);
    }
    else if (
      buttonGrandsonWwIII.classList.contains("container__button--pain-shopping")
    ) {
      changeContent(
        titleGrandson,
        "Left Behind",
        buttonGrandsonWwIII,
        "container__button--pain-shopping",
        "container__button--left-behind"
      );
      pause(audioGrandsonPainShopping, buttonGrandsonWwIII);
    }
    else if (
      buttonGrandsonWwIII.classList.contains("container__button--riptide")
    ) {
      changeContent(
        titleGrandson,
        "Pain Shopping",
        buttonGrandsonWwIII,
        "container__button--riptide",
        "container__button--pain-shopping"
      );
      pause(audioGrandsonRiptide, buttonGrandsonWwIII);
    }
    else if (
      buttonGrandsonWwIII.classList.contains("container__button--the-ballad-of-g-and-x")
    ) {
      changeContent(
        titleGrandson,
        "Riptide",
        buttonGrandsonWwIII,
        "container__button--the-ballad-of-g-and-x",
        "container__button--riptide"
      );
      pause(audioGrandsonTheBalladOfGX, buttonGrandsonWwIII);
    }
    else if (
      buttonGrandsonWwIII.classList.contains("container__button--we-did-it")
    ) {
      changeContent(
        titleGrandson,
        "The Ballad Of G&X",
        buttonGrandsonWwIII,
        "container__button--we-did-it",
        "container__button--the-ballad-of-g-and-x"
      );
      pause(audioGrandsonWeDidIt, buttonGrandsonWwIII);
    }
    else if (
      buttonGrandsonWwIII.classList.contains("container__button--welcome-to-paradise")
    ) {
      changeContent(
        titleGrandson,
        "We Did It",
        buttonGrandsonWwIII,
        "container__button--welcome-to-paradise",
        "container__button--we-did-it"
      );
      pause(audioGrandsonWelcomeToParadise, buttonGrandsonWwIII);
    }
  });



  buttonGrandsonWwIII.addEventListener("click", () => {
    if (
      buttonGrandsonWwIII.classList.contains("container__button--wwIII")
    ) {
      if (buttonGrandsonWwIII.classList.contains("container__button-play")) {
        play(audioGrandsonWwIII, buttonGrandsonWwIII);
      } else {
        pause(audioGrandsonWwIII, buttonGrandsonWwIII);
      }
    }
    if (
      buttonGrandsonWwIII.classList.contains("container__button--death-of-an-optimist")
    ) {
      if (buttonGrandsonWwIII.classList.contains("container__button-play")) {
        play(audioGrandsonDeathOfAnOptimist, buttonGrandsonWwIII);
      } else {
        pause(audioGrandsonDeathOfAnOptimist, buttonGrandsonWwIII);
      }
    }
    if (
      buttonGrandsonWwIII.classList.contains("container__button--drop-dead")
    ) {
      if (buttonGrandsonWwIII.classList.contains("container__button-play")) {
        play(audioGrandsonDropDead, buttonGrandsonWwIII);
      } else {
        pause(audioGrandsonDropDead, buttonGrandsonWwIII);
      }
    }
    if (
      buttonGrandsonWwIII.classList.contains("container__button--identity")
    ) {
      if (buttonGrandsonWwIII.classList.contains("container__button-play")) {
        play(audioGrandsonIdentity, buttonGrandsonWwIII);
      } else {
        pause(audioGrandsonIdentity, buttonGrandsonWwIII);
      }
    }
    if (
      buttonGrandsonWwIII.classList.contains("container__button--in-over-my-head")
    ) {
      if (buttonGrandsonWwIII.classList.contains("container__button-play")) {
        play(audioGrandsonInOverMyHead, buttonGrandsonWwIII);
      } else {
        pause(audioGrandsonInOverMyHead, buttonGrandsonWwIII);
      }
    }
    if (
      buttonGrandsonWwIII.classList.contains("container__button--left-behind")
    ) {
      if (buttonGrandsonWwIII.classList.contains("container__button-play")) {
        play(audioGrandsonLeftBehind, buttonGrandsonWwIII);
      } else {
        pause(audioGrandsonLeftBehind, buttonGrandsonWwIII);
      }
    }
    if (
      buttonGrandsonWwIII.classList.contains("container__button--pain-shopping")
    ) {
      if (buttonGrandsonWwIII.classList.contains("container__button-play")) {
        play(audioGrandsonPainShopping, buttonGrandsonWwIII);
      } else {
        pause(audioGrandsonPainShopping, buttonGrandsonWwIII);
      }
    }
    if (
      buttonGrandsonWwIII.classList.contains("container__button--riptide")
    ) {
      if (buttonGrandsonWwIII.classList.contains("container__button-play")) {
        play(audioGrandsonRiptide, buttonGrandsonWwIII);
      } else {
        pause(audioGrandsonRiptide, buttonGrandsonWwIII);
      }
    }
    if (
      buttonGrandsonWwIII.classList.contains("container__button--the-ballad-of-g-and-x")
    ) {
      if (buttonGrandsonWwIII.classList.contains("container__button-play")) {
        play(audioGrandsonTheBalladOfGX, buttonGrandsonWwIII);
      } else {
        pause(audioGrandsonTheBalladOfGX, buttonGrandsonWwIII);
      }
    }
    if (
      buttonGrandsonWwIII.classList.contains("container__button--we-did-it")
    ) {
      if (buttonGrandsonWwIII.classList.contains("container__button-play")) {
        play(audioGrandsonWeDidIt, buttonGrandsonWwIII);
      } else {
        pause(audioGrandsonWeDidIt, buttonGrandsonWwIII);
      }
    }
    if (
      buttonGrandsonWwIII.classList.contains("container__button--welcome-to-paradise")
    ) {
      if (buttonGrandsonWwIII.classList.contains("container__button-play")) {
        play(audioGrandsonWelcomeToParadise, buttonGrandsonWwIII);
      } else {
        pause(audioGrandsonWelcomeToParadise, buttonGrandsonWwIII);
      }
    }
  });
};