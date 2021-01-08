import { play, pause, changeContent } from "./functions";

export const buttonTacoLuxembourg = document.querySelector(".container__button--luxembourg");
const buttonRightTacoLuxembourg = document.querySelector(".section__button--right-luxembourg");
const buttonLeftTacoLuxembourg = document.querySelector(".section__button--left-luxembourg");

export const audioTacoLuxembourg = document.querySelector(".audio__taco--luxembourg");
const audioTacoGrandPrix = document.querySelector(".audio__taco--grand-prix");
const audioTacoEuropa = document.querySelector(".audio__taco--europa");
const audioTacoNieUfamSobieSam = document.querySelector(".audio__taco--nie-ufam-sobie-sam");
const audioTacoPireneje = document.querySelector(".audio__taco--pireneje");
const audioTacoBigPharma = document.querySelector(".audio__taco--big-pharma");
const audioTacoSztylet = document.querySelector(".audio__taco--sztylet");
const audioTacoOrtalion = document.querySelector(".audio__taco--ortalion");
const audioTacoPieniadzITerror = document.querySelector(".audio__taco--pieniadz-i-terror");
const audioTacoWwaNieBerlin = document.querySelector(".audio__taco--wwa-nie-berlin");
const audioTacoNaParyskieGettoPadaDeszcz = document.querySelector(".audio__taco--na-paryskie-getto-pada-deszcz");
const audioTacoMichaelEssienBirthdayParty = document.querySelector(".audio__taco--michael-essien-birthday-party");
const audioTacoToskaniaOutro = document.querySelector(".audio__taco--toskania-outro");

export const titleTaco = document.querySelector(".container__title--taco");

export default function tacoPlayer() {
  buttonRightTacoLuxembourg.addEventListener("click", () => {
    if (
      buttonTacoLuxembourg.classList.contains("container__button--luxembourg")
    ) {
      changeContent(
        titleTaco,
        "Grand Prix",
        buttonTacoLuxembourg,
        "container__button--luxembourg",
        "container__button--grand-prix"
      );
      pause(audioTacoLuxembourg, buttonTacoLuxembourg);
    } else if (
      buttonTacoLuxembourg.classList.contains("container__button--grand-prix")
    ) {
      changeContent(
        titleTaco,
        "Europa",
        buttonTacoLuxembourg,
        "container__button--grand-prix",
        "container__button--europa"
      );
      pause(audioTacoGrandPrix, buttonTacoLuxembourg);
    } else if (
      buttonTacoLuxembourg.classList.contains("container__button--europa")
    ) {
      changeContent(
        titleTaco,
        "Nie Ufam Sobie Sam",
        buttonTacoLuxembourg,
        "container__button--europa",
        "container__button--nie-ufam-sobie-sam"
      );
      pause(audioTacoEuropa, buttonTacoLuxembourg);
    } else if (
      buttonTacoLuxembourg.classList.contains("container__button--nie-ufam-sobie-sam")
    ) {
      changeContent(
        titleTaco,
        "Pireneje",
        buttonTacoLuxembourg,
        "container__button--nie-ufam-sobie-sam",
        "container__button--pireneje"
      );
      pause(audioTacoNieUfamSobieSam, buttonTacoLuxembourg);
    } else if (
      buttonTacoLuxembourg.classList.contains("container__button--pireneje")
    ) {
      changeContent(
        titleTaco,
        "Big Pharma",
        buttonTacoLuxembourg,
        "container__button--pireneje",
        "container__button--big-pharma"
      );
      pause(audioTacoPireneje, buttonTacoLuxembourg);
    } else if (
      buttonTacoLuxembourg.classList.contains("container__button--big-pharma")
    ) {
      changeContent(
        titleTaco,
        "Sztylet",
        buttonTacoLuxembourg,
        "container__button--big-pharma",
        "container__button--sztylet"
      );
      pause(audioTacoBigPharma, buttonTacoLuxembourg);
    } else if (
      buttonTacoLuxembourg.classList.contains("container__button--sztylet")
    ) {
      changeContent(
        titleTaco,
        "Ortalion",
        buttonTacoLuxembourg,
        "container__button--sztylet",
        "container__button--ortalion"
      );
      pause(audioTacoSztylet, buttonTacoLuxembourg);
    } else if (
      buttonTacoLuxembourg.classList.contains("container__button--ortalion")
    ) {
      changeContent(
        titleTaco,
        "Pieniądze i Terror",
        buttonTacoLuxembourg,
        "container__button--ortalion",
        "container__button--pieniadz-i-terror"
      );
      pause(audioTacoOrtalion, buttonTacoLuxembourg);
    } else if (
      buttonTacoLuxembourg.classList.contains("container__button--pieniadz-i-terror")
    ) {
      changeContent(
        titleTaco,
        "WWA Nie Berlin",
        buttonTacoLuxembourg,
        "container__button--pieniadz-i-terror",
        "container__button--wwa-nie-berlin"
      );
      pause(audioTacoPieniadzITerror, buttonTacoLuxembourg);
    } else if (
      buttonTacoLuxembourg.classList.contains("container__button--wwa-nie-berlin")
    ) {
      changeContent(
        titleTaco,
        "Na Paryskie Getto Pada Deszcz",
        buttonTacoLuxembourg,
        "container__button--wwa-nie-berlin",
        "container__button--na-paryskie-getto-pada-deszcz"
      );
      pause(audioTacoWwaNieBerlin, buttonTacoLuxembourg);
    } else if (
      buttonTacoLuxembourg.classList.contains("container__button--na-paryskie-getto-pada-deszcz")
    ) {
      changeContent(
        titleTaco,
        "Michael Essien Birthday Party",
        buttonTacoLuxembourg,
        "container__button--na-paryskie-getto-pada-deszcz",
        "container__button--michael-essien-birthday-party"
      );
      pause(audioTacoNaParyskieGettoPadaDeszcz, buttonTacoLuxembourg);
    } else if (
      buttonTacoLuxembourg.classList.contains("container__button--michael-essien-birthday-party")
    ) {
      changeContent(
        titleTaco,
        "Toskania Outro",
        buttonTacoLuxembourg,
        "container__button--michael-essien-birthday-party",
        "container__button--toskania-outro"
      );
      pause(audioTacoMichaelEssienBirthdayParty, buttonTacoLuxembourg);
    } else if (
      buttonTacoLuxembourg.classList.contains("container__button--toskania-outro")
    ) {
      changeContent(
        titleTaco,
        "Luxembourg",
        buttonTacoLuxembourg,
        "container__button--toskania-outro",
        "container__button--luxembourg"
      );
      pause(audioTacoToskaniaOutro, buttonTacoLuxembourg);
    }
  });

  buttonLeftTacoLuxembourg.addEventListener("click", () => {
    if (
      buttonTacoLuxembourg.classList.contains("container__button--luxembourg")
    ) {
      changeContent(
        titleTaco,
        "Toskania Outro",
        buttonTacoLuxembourg,
        "container__button--luxembourg",
        "container__button--toskania-outro"
      );
      pause(audioTacoLuxembourg, buttonTacoLuxembourg);
    } else if (
      buttonTacoLuxembourg.classList.contains("container__button--grand-prix")
    ) {
      changeContent(
        titleTaco,
        "Luxembourg",
        buttonTacoLuxembourg,
        "container__button--grand-prix",
        "container__button--luxembourg"
      );
      pause(audioTacoGrandPrix, buttonTacoLuxembourg);
    } else if (
      buttonTacoLuxembourg.classList.contains("container__button--europa")
    ) {
      changeContent(
        titleTaco,
        "Grand Prix",
        buttonTacoLuxembourg,
        "container__button--europa",
        "container__button--grand-prix"
      );
      pause(audioTacoEuropa, buttonTacoLuxembourg);
    } else if (
      buttonTacoLuxembourg.classList.contains(
        "container__button--nie-ufam-sobie-sam"
      )
    ) {
      changeContent(
        titleTaco,
        "Europa",
        buttonTacoLuxembourg,
        "container__button--nie-ufam-sobie-sam",
        "container__button--europa"
      );
      pause(audioTacoNieUfamSobieSam, buttonTacoLuxembourg);
    } else if (
      buttonTacoLuxembourg.classList.contains("container__button--pireneje")
    ) {
      changeContent(
        titleTaco,
        "Nie Ufam Sobie Sam",
        buttonTacoLuxembourg,
        "container__button--pireneje",
        "container__button--nie-ufam-sobie-sam"
      );
      pause(audioTacoPireneje, buttonTacoLuxembourg);
    } else if (
      buttonTacoLuxembourg.classList.contains("container__button--big-pharma")
    ) {
      changeContent(
        titleTaco,
        "Pireneje",
        buttonTacoLuxembourg,
        "container__button--big-pharma",
        "container__button--pireneje"
      );
      pause(audioTacoBigPharma, buttonTacoLuxembourg);
    } else if (
      buttonTacoLuxembourg.classList.contains("container__button--sztylet")
    ) {
      changeContent(
        titleTaco,
        "Big Pharma",
        buttonTacoLuxembourg,
        "container__button--sztylet",
        "container__button--big-pharma"
      );
      pause(audioTacoSztylet, buttonTacoLuxembourg);
    } else if (
      buttonTacoLuxembourg.classList.contains("container__button--ortalion")
    ) {
      changeContent(
        titleTaco,
        "Sztylet",
        buttonTacoLuxembourg,
        "container__button--ortalion",
        "container__button--sztylet"
      );
      pause(audioTacoOrtalion, buttonTacoLuxembourg);
    } else if (
      buttonTacoLuxembourg.classList.contains(
        "container__button--pieniadz-i-terror"
      )
    ) {
      changeContent(
        titleTaco,
        "Ortalion",
        buttonTacoLuxembourg,
        "container__button--pieniadz-i-terror",
        "container__button--ortalion"
      );
      pause(audioTacoPieniadzITerror, buttonTacoLuxembourg);
    } else if (
      buttonTacoLuxembourg.classList.contains(
        "container__button--wwa-nie-berlin"
      )
    ) {
      changeContent(
        titleTaco,
        "Pieniądze i Terror",
        buttonTacoLuxembourg,
        "container__button--wwa-nie-berlin",
        "container__button--pieniadz-i-terror"
      );
      pause(audioTacoPieniadzITerror, buttonTacoLuxembourg);
    } else if (
      buttonTacoLuxembourg.classList.contains(
        "container__button--na-paryskie-getto-pada-deszcz"
      )
    ) {
      changeContent(
        titleTaco,
        "WWA Nie Berlin",
        buttonTacoLuxembourg,
        "container__button--na-paryskie-getto-pada-deszcz",
        "container__button--wwa-nie-berlin"
      );
      pause(audioTacoNaParyskieGettoPadaDeszcz, buttonTacoLuxembourg);
    } else if (
      buttonTacoLuxembourg.classList.contains(
        "container__button--michael-essien-birthday-party"
      )
    ) {
      changeContent(
        titleTaco,
        "Na Paryskie Getto Pada Deszcz",
        buttonTacoLuxembourg,
        "container__button--michael-essien-birthday-party",
        "container__button--na-paryskie-getto-pada-deszcz"
      );
      pause(audioTacoMichaelEssienBirthdayParty, buttonTacoLuxembourg);
    } else if (
      buttonTacoLuxembourg.classList.contains(
        "container__button--toskania-outro"
      )
    ) {
      changeContent(
        titleTaco,
        "Michael Essien Birthday Party",
        buttonTacoLuxembourg,
        "container__button--toskania-outro",
        "container__button--michael-essien-birthday-party"
      );
      pause(audioTacoToskaniaOutro, buttonTacoLuxembourg);
    }
  });

  buttonTacoLuxembourg.addEventListener("click", () => {
    if (
      buttonTacoLuxembourg.classList.contains("container__button--luxembourg")
    ) {
      if (buttonTacoLuxembourg.classList.contains("container__button-play")) {
        play(audioTacoLuxembourg, buttonTacoLuxembourg);
      } else {
        pause(audioTacoLuxembourg, buttonTacoLuxembourg);
      }
    }
    if (
      buttonTacoLuxembourg.classList.contains("container__button--grand-prix")
    ) {
      if (buttonTacoLuxembourg.classList.contains("container__button-play")) {
        play(audioTacoGrandPrix, buttonTacoLuxembourg);
      } else {
        pause(audioTacoGrandPrix, buttonTacoLuxembourg);
      }
    }
    if (
      buttonTacoLuxembourg.classList.contains("container__button--europa")
    ) {
      if (buttonTacoLuxembourg.classList.contains("container__button-play")) {
        play(audioTacoEuropa, buttonTacoLuxembourg);
      } else {
        pause(audioTacoEuropa, buttonTacoLuxembourg);
      }
    }
    if (
      buttonTacoLuxembourg.classList.contains("container__button--nie-ufam-sobie-sam")
    ) {
      if (buttonTacoLuxembourg.classList.contains("container__button-play")) {
        play(audioTacoNieUfamSobieSam, buttonTacoLuxembourg);
      } else {
        pause(audioTacoNieUfamSobieSam, buttonTacoLuxembourg);
      }
    }
    if (
      buttonTacoLuxembourg.classList.contains("container__button--pireneje")
    ) {
      if (buttonTacoLuxembourg.classList.contains("container__button-play")) {
        play(audioTacoPireneje, buttonTacoLuxembourg);
      } else {
        pause(audioTacoPireneje, buttonTacoLuxembourg);
      }
    }
    if (
      buttonTacoLuxembourg.classList.contains("container__button--big-pharma")
    ) {
      if (buttonTacoLuxembourg.classList.contains("container__button-play")) {
        play(audioTacoBigPharma, buttonTacoLuxembourg);
      } else {
        pause(audioTacoBigPharma, buttonTacoLuxembourg);
      }
    }
    if (
      buttonTacoLuxembourg.classList.contains("container__button--sztylet")
    ) {
      if (buttonTacoLuxembourg.classList.contains("container__button-play")) {
        play(audioTacoSztylet, buttonTacoLuxembourg);
      } else {
        pause(audioTacoSztylet, buttonTacoLuxembourg);
      }
    }
    if (
      buttonTacoLuxembourg.classList.contains("container__button--ortalion")
    ) {
      if (buttonTacoLuxembourg.classList.contains("container__button-play")) {
        play(audioTacoOrtalion, buttonTacoLuxembourg);
      } else {
        pause(audioTacoOrtalion, buttonTacoLuxembourg);
      }
    }
    if (
      buttonTacoLuxembourg.classList.contains("container__button--pieniadz-i-terror")
    ) {
      if (buttonTacoLuxembourg.classList.contains("container__button-play")) {
        play(audioTacoPieniadzITerror, buttonTacoLuxembourg);
      } else {
        pause(audioTacoPieniadzITerror, buttonTacoLuxembourg);
      }
    }
    if (
      buttonTacoLuxembourg.classList.contains("container__button--wwa-nie-berlin")
    ) {
      if (buttonTacoLuxembourg.classList.contains("container__button-play")) {
        play(audioTacoWwaNieBerlin, buttonTacoLuxembourg);
      } else {
        pause(audioTacoWwaNieBerlin, buttonTacoLuxembourg);
      }
    }
    if (
      buttonTacoLuxembourg.classList.contains("container__button--na-paryskie-getto-pada-deszcz")
    ) {
      if (buttonTacoLuxembourg.classList.contains("container__button-play")) {
        play(audioTacoNaParyskieGettoPadaDeszcz, buttonTacoLuxembourg);
      } else {
        pause(audioTacoNaParyskieGettoPadaDeszcz, buttonTacoLuxembourg);
      }
    }
    if (
      buttonTacoLuxembourg.classList.contains("container__button--michael-essien-birthday-party")
    ) {
      if (buttonTacoLuxembourg.classList.contains("container__button-play")) {
        play(audioTacoMichaelEssienBirthdayParty, buttonTacoLuxembourg);
      } else {
        pause(audioTacoMichaelEssienBirthdayParty, buttonTacoLuxembourg);
      }
    }
    if (
      buttonTacoLuxembourg.classList.contains("container__button--toskania-outro")
    ) {
      if (buttonTacoLuxembourg.classList.contains("container__button-play")) {
        play(audioTacoToskaniaOutro, buttonTacoLuxembourg);
      } else {
        pause(audioTacoToskaniaOutro, buttonTacoLuxembourg);
      }
    }
  });
}
