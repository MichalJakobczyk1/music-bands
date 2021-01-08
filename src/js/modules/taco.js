import {play, pause, changeContent} from "./functions";

export const buttonTacoLuxembourg = document.querySelector(".container__button--luxembourg");
export const audioTacoLuxembourg = document.querySelector(".audio__taco--luxembourg");
const buttonRightTacoLuxembourg = document.querySelector(".section__button--right-luxembourg");
const buttonLeftTacoLuxembourg = document.querySelector(".section__button--left-luxembourg");

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

export default function tacoPlayer () {
    buttonRightTacoLuxembourg.addEventListener("click",() => {
        if (buttonTacoLuxembourg.classList.contains("container__button--luxembourg")) {
            changeContent(titleTaco,"Grand Prix",buttonTacoLuxembourg,"container__button--luxembourg","container__button--grand-prix");
            pause(audioTacoLuxembourg);
          } 
          else if  (buttonTacoLuxembourg.classList.contains("container__button--grand-prix")) {
            changeContent(titleTaco,"Europa",buttonTacoLuxembourg,"container__button--grand-prix","container__button--europa");
            pause(audioTacoGrandPrix);
          } 
          else if  (buttonTacoLuxembourg.classList.contains("container__button--europa")) {
            changeContent(titleTaco,"Nie Ufam Sobie Sam",buttonTacoLuxembourg,"container__button--europa","container__button--nie-ufam-sobie-sam");
            pause(audioTacoEuropa);
          } 
          else if  (buttonTacoLuxembourg.classList.contains("container__button--nie-ufam-sobie-sam")) {
            changeContent(titleTaco,"Pireneje",buttonTacoLuxembourg,"container__button--nie-ufam-sobie-sam","container__button--pireneje");
            pause(audioTacoNieUfamSobieSam);
          } 
          else if  (buttonTacoLuxembourg.classList.contains("container__button--pireneje")) {
            changeContent(titleTaco,"Big Pharma",buttonTacoLuxembourg,"container__button--pireneje","container__button--big-pharma");
            pause(audioTacoPireneje);
          } 
          else if  (buttonTacoLuxembourg.classList.contains("container__button--big-pharma")) {
            changeContent(titleTaco,"Sztylet",buttonTacoLuxembourg,"container__button--big-pharma","container__button--sztylet");
            pause(audioTacoBigPharma);
          } 
          else if  (buttonTacoLuxembourg.classList.contains("container__button--sztylet")) {
            changeContent(titleTaco,"Ortalion",buttonTacoLuxembourg,"container__button--sztylet","container__button--ortalion");
            pause(audioTacoSztylet);
          } 
          else if  (buttonTacoLuxembourg.classList.contains("container__button--ortalion")) {
            changeContent(titleTaco,"Pieniądze i Terror",buttonTacoLuxembourg,"container__button--ortalion","container__button--pieniadz-i-terror");
            pause(audioTacoOrtalion);
          } 
          else if  (buttonTacoLuxembourg.classList.contains("container__button--pieniadz-i-terror")) {
            changeContent(titleTaco,"WWA Nie Berlin",buttonTacoLuxembourg,"container__button--pieniadz-i-terror","container__button--wwa-nie-berlin");
            pause(audioTacoPieniadzITerror);
          } 
          else if  (buttonTacoLuxembourg.classList.contains("container__button--wwa-nie-berlin")) {
            changeContent(titleTaco,"Na Paryskie Getto Pada Deszcz",buttonTacoLuxembourg,"container__button--wwa-nie-berlin","container__button--na-paryskie-getto-pada-deszcz");
            pause(audioTacoWwaNieBerlin);
          } 
          else if  (buttonTacoLuxembourg.classList.contains("container__button--na-paryskie-getto-pada-deszcz")) {
            changeContent(titleTaco,"Michael Essien Birthday Party",buttonTacoLuxembourg,"container__button--na-paryskie-getto-pada-deszcz","container__button--michael-essien-birthday-party");
            pause(audioTacoNaParyskieGettoPadaDeszcz);
          } 
          else if  (buttonTacoLuxembourg.classList.contains("container__button--michael-essien-birthday-party")) {
            changeContent(titleTaco,"Toskania Outro",buttonTacoLuxembourg,"container__button--michael-essien-birthday-party","container__button--toskania-outro");
            pause(audioTacoMichaelEssienBirthdayParty);
          }
          else if  (buttonTacoLuxembourg.classList.contains("container__button--toskania-outro")) {
            changeContent(titleTaco,"Luxembourg",buttonTacoLuxembourg,"container__button--toskania-outro","container__button--luxembourg");
            pause(audioTacoToskaniaOutro);
          };
    });

    buttonLeftTacoLuxembourg.addEventListener("click", () => {
          if (buttonTacoLuxembourg.classList.contains("container__button--luxembourg")) {
            changeContent(titleTaco,"Toskania Outro",buttonTacoLuxembourg,"container__button--luxembourg","container__button--toskania-outro");
            pause(audioTacoLuxembourg,buttonTacoLuxembourg);
          } 
          else if (buttonTacoLuxembourg.classList.contains("container__button--grand-prix")) {
            changeContent(titleTaco,"Luxembourg",buttonTacoLuxembourg,"container__button--grand-prix","container__button--luxembourg");
            pause(audioTacoGrandPrix,buttonTacoLuxembourg);
          } 
          else if (buttonTacoLuxembourg.classList.contains("container__button--europa")) {
            changeContent(titleTaco,"Grand Prix",buttonTacoLuxembourg,"container__button--europa","container__button--grand-prix");
            pause(audioTacoEuropa,buttonTacoLuxembourg);
          } 
          else if (buttonTacoLuxembourg.classList.contains("container__button--nie-ufam-sobie-sam")) {
            changeContent(titleTaco,"Europa",buttonTacoLuxembourg,"container__button--nie-ufam-sobie-sam","container__button--europa");
            pause(audioTacoNieUfamSobieSam,buttonTacoLuxembourg);
          } 
          else if (buttonTacoLuxembourg.classList.contains("container__button--pireneje")) {
            changeContent(titleTaco,"Nie Ufam Sobie Sam",buttonTacoLuxembourg,"container__button--pireneje","container__button--nie-ufam-sobie-sam");
            pause(audioTacoPireneje,buttonTacoLuxembourg);
          } 
          else if (buttonTacoLuxembourg.classList.contains("container__button--big-pharma")) {
            changeContent(titleTaco,"Pireneje",buttonTacoLuxembourg,"container__button--big-pharma","container__button--pireneje");
            pause(audioTacoBigPharma,buttonTacoLuxembourg);
          } 
          else if (buttonTacoLuxembourg.classList.contains("container__button--sztylet")) {
            changeContent(titleTaco,"Big Pharma",buttonTacoLuxembourg,"container__button--sztylet","container__button--big-pharma");
            pause(audioTacoSztylet,buttonTacoLuxembourg);
          } 
          else if (buttonTacoLuxembourg.classList.contains("container__button--ortalion")) {
            changeContent(titleTaco,"Sztylet",buttonTacoLuxembourg,"container__button--ortalion","container__button--sztylet");
            pause(audioTacoOrtalion,buttonTacoLuxembourg);
          } 
          else if (buttonTacoLuxembourg.classList.contains("container__button--pieniadz-i-terror")) {
            changeContent(titleTaco,"Ortalion",buttonTacoLuxembourg,"container__button--pieniadz-i-terror","container__button--ortalion");
            pause(audioTacoPieniadzITerror,buttonTacoLuxembourg);
          } 
          else if (buttonTacoLuxembourg.classList.contains("container__button--wwa-nie-berlin")) {
            changeContent(titleTaco,"Pieniądze i Terror",buttonTacoLuxembourg,"container__button--wwa-nie-berlin","container__button--pieniadz-i-terror");
            pause(audioTacoPieniadzITerror,buttonTacoLuxembourg);
          } 
          else if (buttonTacoLuxembourg.classList.contains("container__button--na-paryskie-getto-pada-deszcz")) {
            changeContent(titleTaco,"WWA Nie Berlin",buttonTacoLuxembourg,"container__button--na-paryskie-getto-pada-deszcz","container__button--wwa-nie-berlin");
            pause(audioTacoNaParyskieGettoPadaDeszcz,buttonTacoLuxembourg);
          } 
          else if (buttonTacoLuxembourg.classList.contains("container__button--michael-essien-birthday-party")) {
            changeContent(titleTaco,"Na Paryskie Getto Pada Deszcz",buttonTacoLuxembourg,"container__button--michael-essien-birthday-party","container__button--na-paryskie-getto-pada-deszcz");
            pause(audioTacoMichaelEssienBirthdayParty,buttonTacoLuxembourg);
          } 
          else if (buttonTacoLuxembourg.classList.contains("container__button--toskania-outro")) {
            changeContent(titleTaco,"Michael Essien Birthday Party",buttonTacoLuxembourg,"container__button--toskania-outro","container__button--michael-essien-birthday-party");
            pause(audioTacoToskaniaOutro,buttonTacoLuxembourg);
          };
});
}
