import {audioTprGoingToHell,buttonTprGoingToHell,titleTpr} from "./thePrettyReckless";

export function play (audio) {
    audio.play();
    audio.volume = 0.1;

    buttonTprGoingToHell.classList.remove("container__button-play");
    buttonTprGoingToHell.classList.add("container__button-pause");
};
export function pause (audio) {
    audio.pause();
    audio.currentTime = 0;
    buttonTprGoingToHell.classList.add("container__button-play");
    buttonTprGoingToHell.classList.remove("container__button-pause");
};
export function changeContent (title,classRemove,classAdd) {
    titleTpr.innerHTML = title;
    buttonTprGoingToHell.classList.remove(classRemove);
    buttonTprGoingToHell.classList.add(classAdd);
};