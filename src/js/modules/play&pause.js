import {audioTprGoingToHell,buttonTprGoingToHell} from "../index";

export function play (audio) {
    audio.play();
    audio.volume = 0.1;

    buttonTprGoingToHell.classList.remove("container__button-play");
    buttonTprGoingToHell.classList.add("container__button-pause");
};

export function pause (audio) {
    audio.pause();
    buttonTprGoingToHell.classList.add("container__button-play");
    buttonTprGoingToHell.classList.remove("container__button-pause");
};