export function play(audio, button) {
  audio.play();
  audio.volume = 0.1;

  button.classList.remove("container__button-play");
  button.classList.add("container__button-pause");
}
export function pause(audio, button) {
  audio.pause();
  audio.currentTime = 0;
  button.classList.add("container__button-play");
  button.classList.remove("container__button-pause");
}
export function changeContent(
  sectionTitle,
  title,
  button,
  classRemove,
  classAdd
) {
  sectionTitle.innerHTML = title;
  button.classList.remove(classRemove);
  button.classList.add(classAdd);
  sectionTitle.classList.add("container__title--animation-left");
  setTimeout(function () {
    sectionTitle.classList.remove("container__title--animation-left");
  },750);
}
export function changeContentLeft(
  sectionTitle,
  title,
  button,
  classRemove,
  classAdd
) {
  sectionTitle.innerHTML = title;
  button.classList.remove(classRemove);
  button.classList.add(classAdd);
  sectionTitle.classList.add("container__title--animation-right");
  setTimeout(function () {
    sectionTitle.classList.remove("container__title--animation-right");
  },750);
}
