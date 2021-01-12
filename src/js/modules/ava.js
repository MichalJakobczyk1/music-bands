import { play, pause, changeContent, changeContentLeft } from "./functions";

const buttonAvaWhosLaughingNow = document.querySelector(
  ".container__button--whos-laughing-now"
);
const buttonRightAvaWhosLaughingNow = document.querySelector(
  ".section__button--right-whos-laughing-now"
);
const buttonLeftAvaWhosLaughingNow = document.querySelector(
  ".section__button--left-whos-laughing-now"
);
const audioAvaWhosLaughingNow = document.querySelector(
  ".audio__ava--whos-laughing-now"
);
const audioAvaBelladonna = document.querySelector(".audio__ava--belladonna");
const audioAvaKingsAndQuenss = document.querySelector(
  ".audio__ava--kings-queens"
);
const audioAvaNaked = document.querySelector(".audio__ava--naked");
const audioAvaOmgWhatsHappening = document.querySelector(
  ".audio__ava--omg-whats-happening"
);
const audioAvaSalt = document.querySelector(".audio__ava--salt");
const audioAvaSoAmI = document.querySelector(".audio__ava--so-am-i");
const audioAvaSweetButPsycho = document.querySelector(
  ".audio__ava--sweet-but-psycho"
);
const audioAvaTakeYouToHell = document.querySelector(
  ".audio__ava--take-you-to-hell"
);
const audioAvaTattoo = document.querySelector(".audio__ava--tattoo");
const audioAvaTorn = document.querySelector(".audio__ava--torn");

const titleAva = document.querySelector(".container__title--ava");

export default function avaPlayer() {
    buttonRightAvaWhosLaughingNow.addEventListener("click", () => {
        if (
          buttonAvaWhosLaughingNow.classList.contains("container__button--whos-laughing-now")
        ) {
          changeContent(
            titleAva,
            "Belladonna",
            buttonAvaWhosLaughingNow,
            "container__button--whos-laughing-now",
            "container__button--belladonna"
          );
          pause(audioAvaWhosLaughingNow, buttonAvaWhosLaughingNow);
        } else if (
            buttonAvaWhosLaughingNow.classList.contains("container__button--belladonna")
          ) {
            changeContent(
              titleAva,
              "Kings&Queens",
              buttonAvaWhosLaughingNow,
              "container__button--belladonna",
              "container__button--kings-queens"
            );
            pause(audioAvaBelladonna, buttonAvaWhosLaughingNow);
          }
          else if (
            buttonAvaWhosLaughingNow.classList.contains("container__button--kings-queens")
          ) {
            changeContent(
              titleAva,
              "Naked",
              buttonAvaWhosLaughingNow,
              "container__button--kings-queens",
              "container__button--naked"
            );
            pause(audioAvaKingsAndQuenss, buttonAvaWhosLaughingNow);
          }
          else if (
            buttonAvaWhosLaughingNow.classList.contains("container__button--naked")
          ) {
            changeContent(
              titleAva,
              "OMG What's Happening",
              buttonAvaWhosLaughingNow,
              "container__button--naked",
              "container__button--omg-whats-happening"
            );
            pause(audioAvaNaked, buttonAvaWhosLaughingNow);
          }
          else if (
            buttonAvaWhosLaughingNow.classList.contains("container__button--omg-whats-happening")
          ) {
            changeContent(
              titleAva,
              "Salt",
              buttonAvaWhosLaughingNow,
              "container__button--omg-whats-happening",
              "container__button--salt"
            );
            pause(audioAvaOmgWhatsHappening, buttonAvaWhosLaughingNow);
          }
          else if (
            buttonAvaWhosLaughingNow.classList.contains("container__button--salt")
          ) {
            changeContent(
              titleAva,
              "So Am I",
              buttonAvaWhosLaughingNow,
              "container__button--salt",
              "container__button--so-am-i"
            );
            pause(audioAvaSalt, buttonAvaWhosLaughingNow);
          }
          else if (
            buttonAvaWhosLaughingNow.classList.contains("container__button--so-am-i")
          ) {
            changeContent(
              titleAva,
              "Sweet But Psycho",
              buttonAvaWhosLaughingNow,
              "container__button--so-am-i",
              "container__button--sweet-but-psycho"
            );
            pause(audioAvaSoAmI, buttonAvaWhosLaughingNow);
          }
          else if (
            buttonAvaWhosLaughingNow.classList.contains("container__button--sweet-but-psycho")
          ) {
            changeContent(
              titleAva,
              "Take You To Hell",
              buttonAvaWhosLaughingNow,
              "container__button--sweet-but-psycho",
              "container__button--take-you-to-hell"
            );
            pause(audioAvaSweetButPsycho, buttonAvaWhosLaughingNow);
          }
          else if (
            buttonAvaWhosLaughingNow.classList.contains("container__button--take-you-to-hell")
          ) {
            changeContent(
              titleAva,
              "Tattoo",
              buttonAvaWhosLaughingNow,
              "container__button--take-you-to-hell",
              "container__button--tattoo"
            );
            pause(audioAvaTakeYouToHell, buttonAvaWhosLaughingNow);
          }
          else if (
            buttonAvaWhosLaughingNow.classList.contains("container__button--tattoo")
          ) {
            changeContent(
              titleAva,
              "Torn",
              buttonAvaWhosLaughingNow,
              "container__button--tattoo",
              "container__button--torn"
            );
            pause(audioAvaTattoo, buttonAvaWhosLaughingNow);
          }
          else if (
            buttonAvaWhosLaughingNow.classList.contains("container__button--torn")
          ) {
            changeContent(
              titleAva,
              "Who's Laughing Now",
              buttonAvaWhosLaughingNow,
              "container__button--torn",
              "container__button--whos-laughing-now"
            );
            pause(audioAvaTorn, buttonAvaWhosLaughingNow);
          }
    });

    buttonLeftAvaWhosLaughingNow.addEventListener("click", () => {
        if (
          buttonAvaWhosLaughingNow.classList.contains("container__button--whos-laughing-now")
        ) {
          changeContentLeft(
            titleAva,
            "Torn",
            buttonAvaWhosLaughingNow,
            "container__button--whos-laughing-now",
            "container__button--torn"
          );
          pause(audioAvaWhosLaughingNow, buttonAvaWhosLaughingNow);
        } else if (
            buttonAvaWhosLaughingNow.classList.contains("container__button--belladonna")
          ) {
            changeContentLeft(
              titleAva,
              "Who's Laughing Now",
              buttonAvaWhosLaughingNow,
              "container__button--belladonna",
              "container__button--whos-laughing-now"
            );
            pause(audioAvaBelladonna, buttonAvaWhosLaughingNow);
          } else if (
            buttonAvaWhosLaughingNow.classList.contains("container__button--kings-queens")
          ) {
            changeContentLeft(
              titleAva,
              "Belladonna",
              buttonAvaWhosLaughingNow,
              "container__button--kings-queens",
              "container__button--belladonna"
            );
            pause(audioAvaKingsAndQuenss, buttonAvaWhosLaughingNow);
          }
          else if (
            buttonAvaWhosLaughingNow.classList.contains("container__button--naked")
          ) {
            changeContentLeft(
              titleAva,
              "King's&Queens",
              buttonAvaWhosLaughingNow,
              "container__button--naked",
              "container__button--kings-queens"
            );
            pause(audioAvaNaked, buttonAvaWhosLaughingNow);
          }
          else if (
            buttonAvaWhosLaughingNow.classList.contains("container__button--omg-whats-happening")
          ) {
            changeContentLeft(
              titleAva,
              "Naked",
              buttonAvaWhosLaughingNow,
              "container__button--omg-whats-happening",
              "container__button--naked"
            );
            pause(audioAvaOmgWhatsHappening, buttonAvaWhosLaughingNow);
          }
          else if (
            buttonAvaWhosLaughingNow.classList.contains("container__button--salt")
          ) {
            changeContentLeft(
              titleAva,
              "OMG What's Happening",
              buttonAvaWhosLaughingNow,
              "container__button--salt",
              "container__button--omg-whats-happening"
            );
            pause(audioAvaSalt, buttonAvaWhosLaughingNow);
          }
          else if (
            buttonAvaWhosLaughingNow.classList.contains("container__button--so-am-i")
          ) {
            changeContentLeft(
              titleAva,
              "Salt",
              buttonAvaWhosLaughingNow,
              "container__button--so-am-i",
              "container__button--salt"
            );
            pause(audioAvaSoAmI, buttonAvaWhosLaughingNow);
          }
          else if (
            buttonAvaWhosLaughingNow.classList.contains("container__button--sweet-but-psycho")
          ) {
            changeContentLeft(
              titleAva,
              "So Am I",
              buttonAvaWhosLaughingNow,
              "container__button--sweet-but-psycho",
              "container__button--so-am-i"
            );
            pause(audioAvaSweetButPsycho, buttonAvaWhosLaughingNow);
          }
          else if (
            buttonAvaWhosLaughingNow.classList.contains("container__button--take-you-to-hell")
          ) {
            changeContentLeft(
              titleAva,
              "Sweet But Psycho",
              buttonAvaWhosLaughingNow,
              "container__button--take-you-to-hell",
              "container__button--sweet-but-psycho"
            );
            pause(audioAvaTakeYouToHell, buttonAvaWhosLaughingNow);
          }
          else if (
            buttonAvaWhosLaughingNow.classList.contains("container__button--tattoo")
          ) {
            changeContentLeft(
              titleAva,
              "Take You To Hell",
              buttonAvaWhosLaughingNow,
              "container__button--tattoo",
              "container__button--take-you-to-hell"
            );
            pause(audioAvaTattoo, buttonAvaWhosLaughingNow);
          }
          else if (
            buttonAvaWhosLaughingNow.classList.contains("container__button--torn")
          ) {
            changeContentLeft(
              titleAva,
              "Tattoo",
              buttonAvaWhosLaughingNow,
              "container__button--torn",
              "container__button--tattoo"
            );
            pause(audioAvaTorn, buttonAvaWhosLaughingNow);
          }
        });


  buttonAvaWhosLaughingNow.addEventListener("click", () => {
    if (
        buttonAvaWhosLaughingNow.classList.contains("container__button--whos-laughing-now")
      ) {
        if (buttonAvaWhosLaughingNow.classList.contains("container__button-play")) {
          play(audioAvaWhosLaughingNow, buttonAvaWhosLaughingNow);
        } else {
          pause(audioAvaWhosLaughingNow, buttonAvaWhosLaughingNow);
        }
      }
      if (
        buttonAvaWhosLaughingNow.classList.contains("container__button--belladonna")
      ) {
        if (buttonAvaWhosLaughingNow.classList.contains("container__button-play")) {
          play(audioAvaBelladonna, buttonAvaWhosLaughingNow);
        } else {
          pause(audioAvaBelladonna, buttonAvaWhosLaughingNow);
        }
      }
      if (
        buttonAvaWhosLaughingNow.classList.contains("container__button--kings-queens")
      ) {
        if (buttonAvaWhosLaughingNow.classList.contains("container__button-play")) {
          play(audioAvaKingsAndQuenss, buttonAvaWhosLaughingNow);
        } else {
          pause(audioAvaKingsAndQuenss, buttonAvaWhosLaughingNow);
        }
      }
      if (
        buttonAvaWhosLaughingNow.classList.contains("container__button--naked")
      ) {
        if (buttonAvaWhosLaughingNow.classList.contains("container__button-play")) {
          play(audioAvaNaked, buttonAvaWhosLaughingNow);
        } else {
          pause(audioAvaNaked, buttonAvaWhosLaughingNow);
        }
      }
      if (
        buttonAvaWhosLaughingNow.classList.contains("container__button--omg-whats-happening")
      ) {
        if (buttonAvaWhosLaughingNow.classList.contains("container__button-play")) {
          play(audioAvaOmgWhatsHappening, buttonAvaWhosLaughingNow);
        } else {
          pause(audioAvaOmgWhatsHappening, buttonAvaWhosLaughingNow);
        }
      }
      if (
        buttonAvaWhosLaughingNow.classList.contains("container__button--salt")
      ) {
        if (buttonAvaWhosLaughingNow.classList.contains("container__button-play")) {
          play(audioAvaSalt, buttonAvaWhosLaughingNow);
        } else {
          pause(audioAvaSalt, buttonAvaWhosLaughingNow);
        }
      }
      if (
        buttonAvaWhosLaughingNow.classList.contains("container__button--so-am-i")
      ) {
        if (buttonAvaWhosLaughingNow.classList.contains("container__button-play")) {
          play(audioAvaSoAmI, buttonAvaWhosLaughingNow);
        } else {
          pause(audioAvaSoAmI, buttonAvaWhosLaughingNow);
        }
      }
      if (
        buttonAvaWhosLaughingNow.classList.contains("container__button--sweet-but-psycho")
      ) {
        if (buttonAvaWhosLaughingNow.classList.contains("container__button-play")) {
          play(audioAvaSweetButPsycho, buttonAvaWhosLaughingNow);
        } else {
          pause(audioAvaSweetButPsycho, buttonAvaWhosLaughingNow);
        }
      }
      if (
        buttonAvaWhosLaughingNow.classList.contains("container__button--take-you-to-hell")
      ) {
        if (buttonAvaWhosLaughingNow.classList.contains("container__button-play")) {
          play(audioAvaTakeYouToHell, buttonAvaWhosLaughingNow);
        } else {
          pause(audioAvaTakeYouToHell, buttonAvaWhosLaughingNow);
        }
      }
      if (
        buttonAvaWhosLaughingNow.classList.contains("container__button--tattoo")
      ) {
        if (buttonAvaWhosLaughingNow.classList.contains("container__button-play")) {
          play(audioAvaTattoo, buttonAvaWhosLaughingNow);
        } else {
          pause(audioAvaTattoo, buttonAvaWhosLaughingNow);
        }
      }
      if (
        buttonAvaWhosLaughingNow.classList.contains("container__button--torn")
      ) {
        if (buttonAvaWhosLaughingNow.classList.contains("container__button-play")) {
          play(audioAvaTorn, buttonAvaWhosLaughingNow);
        } else {
          pause(audioAvaTorn, buttonAvaWhosLaughingNow);
        }
      }
  });
}
