import { play, pause, changeContent } from "./functions";

export const buttonTprGoingToHell = document.querySelector(
  ".container__button--going-to-hell"
);
const buttonRightTprGoingToHell = document.querySelector(
  ".section__button--right-going-to-hell"
);
const buttonLeftTprGoingToHell = document.querySelector(
  ".section__button--left-going-to-hell"
);

export const audioTprGoingToHell = document.querySelector(
  ".audio__tpr--going-to-hell"
);
const audioTprFollowMeDown = document.querySelector(
  ".audio__tpr--follow-me-down"
);
const audioTprAbsolution = document.querySelector(".audio__tpr--absolution");
const audioTprDearSister = document.querySelector(".audio__tpr--dear-sister");
const audioTprFuckedUpWorld = document.querySelector(
  ".audio__tpr--fucked-up-world"
);
const audioTprHeavenKnows = document.querySelector(".audio__tpr--heaven-knows");
const audioTprHouseOnAHill = document.querySelector(
  ".audio__tpr--house-on-a-hill"
);
const audioTprSweetThings = document.querySelector(".audio__tpr--sweet-things");
const audioTprWaitingForAFriend = document.querySelector(
  ".audio__tpr--waiting-for-a-friend"
);
const audioTprWhydYouBringAShotgunToTheParty = document.querySelector(
  ".audio__tpr--whyd-you-bring-a-shotgun-to-the-party"
);

export const titleTpr = document.querySelector(".container__title--tpr");

export default function tprPlayer() {
  buttonRightTprGoingToHell.addEventListener("click", () => {
    if (
      buttonTprGoingToHell.classList.contains(
        "container__button--going-to-hell"
      )
    ) {
      changeContent(
        titleTpr,
        "Follow Me Down",
        buttonTprGoingToHell,
        "container__button--going-to-hell",
        "container__button--follow-me-down"
      );
      pause(audioTprGoingToHell, buttonTprGoingToHell);
    } else if (
      buttonTprGoingToHell.classList.contains(
        "container__button--follow-me-down"
      )
    ) {
      changeContent(
        titleTpr,
        "Absolution",
        buttonTprGoingToHell,
        "container__button--follow-me-down",
        "container__button--absolution"
      );
      pause(audioTprFollowMeDown, buttonTprGoingToHell);
    } else if (
      buttonTprGoingToHell.classList.contains("container__button--absolution")
    ) {
      changeContent(
        titleTpr,
        "Dear Sister",
        buttonTprGoingToHell,
        "container__button--absolution",
        "container__button--dear-sister"
      );
      pause(audioTprAbsolution, buttonTprGoingToHell);
    } else if (
      buttonTprGoingToHell.classList.contains("container__button--dear-sister")
    ) {
      changeContent(
        titleTpr,
        "Fucked Up World",
        buttonTprGoingToHell,
        "container__button--dear-sister",
        "container__button--fucked-up-world"
      );
      pause(audioTprDearSister, buttonTprGoingToHell);
    } else if (
      buttonTprGoingToHell.classList.contains(
        "container__button--fucked-up-world"
      )
    ) {
      changeContent(
        titleTpr,
        "Heaven Knows",
        buttonTprGoingToHell,
        "container__button--fucked-up-world",
        "container__button--heaven-knows"
      );
      pause(audioTprFuckedUpWorld, buttonTprGoingToHell);
    } else if (
      buttonTprGoingToHell.classList.contains("container__button--heaven-knows")
    ) {
      changeContent(
        titleTpr,
        "House On A Hill",
        buttonTprGoingToHell,
        "container__button--heaven-knows",
        "container__button--house-on-a-hill"
      );
      pause(audioTprHeavenKnows, buttonTprGoingToHell);
    } else if (
      buttonTprGoingToHell.classList.contains(
        "container__button--house-on-a-hill"
      )
    ) {
      changeContent(
        titleTpr,
        "Sweet Things",
        buttonTprGoingToHell,
        "container__button--house-on-a-hill",
        "container__button--sweet-things"
      );
      pause(audioTprHouseOnAHill, buttonTprGoingToHell);
    } else if (
      buttonTprGoingToHell.classList.contains("container__button--sweet-things")
    ) {
      changeContent(
        titleTpr,
        "Waiting For A Friend",
        buttonTprGoingToHell,
        "container__button--sweet-things",
        "container__button--waiting-for-a-friend"
      );
      pause(audioTprSweetThings, buttonTprGoingToHell);
    } else if (
      buttonTprGoingToHell.classList.contains(
        "container__button--waiting-for-a-friend"
      )
    ) {
      changeContent(
        titleTpr,
        "Why'd You Bring A Shotgun To The Party",
        buttonTprGoingToHell,
        "container__button--waiting-for-a-friend",
        "container__button--whyd-you-bring-a-shotgun-to-the-party"
      );
      pause(audioTprWaitingForAFriend, buttonTprGoingToHell);
    } else if (
      buttonTprGoingToHell.classList.contains(
        "container__button--whyd-you-bring-a-shotgun-to-the-party"
      )
    ) {
      changeContent(
        titleTpr,
        "Going To Hell",
        buttonTprGoingToHell,
        "container__button--whyd-you-bring-a-shotgun-to-the-party",
        "container__button--going-to-hell"
      );
      pause(audioTprWhydYouBringAShotgunToTheParty, buttonTprGoingToHell);
    }
  });

  buttonLeftTprGoingToHell.addEventListener("click", () => {
    if (
      buttonTprGoingToHell.classList.contains(
        "container__button--going-to-hell"
      )
    ) {
      changeContent(
        titleTpr,
        "Why'd You Bring A Shotgun To The Party",
        buttonTprGoingToHell,
        "container__button--going-to-hell",
        "container__button--whyd-you-bring-a-shotgun-to-the-party"
      );
      pause(audioTprGoingToHell, buttonTprGoingToHell);
    } else if (
      buttonTprGoingToHell.classList.contains(
        "container__button--follow-me-down"
      )
    ) {
      changeContent(
        titleTpr,
        "Going To Hell",
        buttonTprGoingToHell,
        "container__button--follow-me-down",
        "container__button--going-to-hell"
      );
      pause(audioTprFollowMeDown, buttonTprGoingToHell);
    } else if (
      buttonTprGoingToHell.classList.contains("container__button--absolution")
    ) {
      changeContent(
        titleTpr,
        "Follow Me Down",
        buttonTprGoingToHell,
        "container__button--absolution",
        "container__button--follow-me-down"
      );
      pause(audioTprAbsolution, buttonTprGoingToHell);
    } else if (
      buttonTprGoingToHell.classList.contains("container__button--dear-sister")
    ) {
      changeContent(
        titleTpr,
        "Absolution",
        buttonTprGoingToHell,
        "container__button--dear-sister",
        "container__button--absolution"
      );
      pause(audioTprDearSister, buttonTprGoingToHell);
    } else if (
      buttonTprGoingToHell.classList.contains(
        "container__button--fucked-up-world"
      )
    ) {
      changeContent(
        titleTpr,
        "Dear Sister",
        buttonTprGoingToHell,
        "container__button--fucked-up-world",
        "container__button--dear-sister"
      );
      pause(audioTprFuckedUpWorld, buttonTprGoingToHell);
    } else if (
      buttonTprGoingToHell.classList.contains("container__button--heaven-knows")
    ) {
      changeContent(
        titleTpr,
        "Fucked Up World",
        buttonTprGoingToHell,
        "container__button--heaven-knows",
        "container__button--fucked-up-world"
      );
      pause(audioTprHeavenKnows, buttonTprGoingToHell);
    } else if (
      buttonTprGoingToHell.classList.contains(
        "container__button--house-on-a-hill"
      )
    ) {
      changeContent(
        titleTpr,
        "Heaven Knows",
        buttonTprGoingToHell,
        "container__button--house-on-a-hill",
        "container__button--heaven-knows"
      );
      pause(audioTprHouseOnAHill, buttonTprGoingToHell);
    } else if (
      buttonTprGoingToHell.classList.contains("container__button--sweet-things")
    ) {
      changeContent(
        titleTpr,
        "House On A Hill",
        buttonTprGoingToHell,
        "container__button--sweet-things",
        "container__button--house-on-a-hill"
      );
      pause(audioTprSweetThings, buttonTprGoingToHell);
    } else if (
      buttonTprGoingToHell.classList.contains(
        "container__button--waiting-for-a-friend"
      )
    ) {
      changeContent(
        titleTpr,
        "Sweet Things",
        buttonTprGoingToHell,
        "container__button--waiting-for-a-friend",
        "container__button--sweet-things"
      );
      pause(audioTprWaitingForAFriend, buttonTprGoingToHell);
    } else if (
      buttonTprGoingToHell.classList.contains(
        "container__button--whyd-you-bring-a-shotgun-to-the-party"
      )
    ) {
      changeContent(
        titleTpr,
        "Waiting For A Friend",
        buttonTprGoingToHell,
        "container__button--whyd-you-bring-a-shotgun-to-the-party",
        "container__button--waiting-for-a-friend"
      );
      pause(audioTprWhydYouBringAShotgunToTheParty, buttonTprGoingToHell);
    }
  });

  buttonTprGoingToHell.addEventListener("click", () => {
    if (
      buttonTprGoingToHell.classList.contains(
        "container__button--going-to-hell"
      )
    ) {
      if (buttonTprGoingToHell.classList.contains("container__button-play")) {
        play(audioTprGoingToHell, buttonTprGoingToHell);
      } else {
        pause(audioTprGoingToHell, buttonTprGoingToHell);
      }
    }
    if (
      buttonTprGoingToHell.classList.contains(
        "container__button--follow-me-down"
      )
    ) {
      if (buttonTprGoingToHell.classList.contains("container__button-play")) {
        play(audioTprFollowMeDown, buttonTprGoingToHell);
      } else {
        pause(audioTprFollowMeDown, buttonTprGoingToHell);
      }
    }
    if (
      buttonTprGoingToHell.classList.contains("container__button--absolution")
    ) {
      if (buttonTprGoingToHell.classList.contains("container__button-play")) {
        play(audioTprAbsolution, buttonTprGoingToHell);
      } else {
        pause(audioTprAbsolution, buttonTprGoingToHell);
      }
    }
    if (
      buttonTprGoingToHell.classList.contains("container__button--dear-sister")
    ) {
      if (buttonTprGoingToHell.classList.contains("container__button-play")) {
        play(audioTprDearSister, buttonTprGoingToHell);
      } else {
        pause(audioTprDearSister, buttonTprGoingToHell);
      }
    }
    if (
      buttonTprGoingToHell.classList.contains(
        "container__button--fucked-up-world"
      )
    ) {
      if (buttonTprGoingToHell.classList.contains("container__button-play")) {
        play(audioTprFuckedUpWorld, buttonTprGoingToHell);
      } else {
        pause(audioTprFuckedUpWorld, buttonTprGoingToHell);
      }
    }
    if (
      buttonTprGoingToHell.classList.contains("container__button--heaven-knows")
    ) {
      if (buttonTprGoingToHell.classList.contains("container__button-play")) {
        play(audioTprHeavenKnows, buttonTprGoingToHell);
      } else {
        pause(audioTprHeavenKnows, buttonTprGoingToHell);
      }
    }
    if (
      buttonTprGoingToHell.classList.contains(
        "container__button--house-on-a-hill"
      )
    ) {
      if (buttonTprGoingToHell.classList.contains("container__button-play")) {
        play(audioTprHouseOnAHill, buttonTprGoingToHell);
      } else {
        pause(audioTprHouseOnAHill, buttonTprGoingToHell);
      }
    }
    if (
      buttonTprGoingToHell.classList.contains("container__button--sweet-things")
    ) {
      if (buttonTprGoingToHell.classList.contains("container__button-play")) {
        play(audioTprSweetThings, buttonTprGoingToHell);
      } else {
        pause(audioTprSweetThings, buttonTprGoingToHell);
      }
    }
    if (
      buttonTprGoingToHell.classList.contains(
        "container__button--waiting-for-a-friend"
      )
    ) {
      if (buttonTprGoingToHell.classList.contains("container__button-play")) {
        play(audioTprWaitingForAFriend, buttonTprGoingToHell);
      } else {
        pause(audioTprWaitingForAFriend, buttonTprGoingToHell);
      }
    }
    if (
      buttonTprGoingToHell.classList.contains(
        "container__button--whyd-you-bring-a-shotgun-to-the-party"
      )
    ) {
      if (buttonTprGoingToHell.classList.contains("container__button-play")) {
        play(audioTprWhydYouBringAShotgunToTheParty, buttonTprGoingToHell);
      } else {
        pause(audioTprWhydYouBringAShotgunToTheParty, buttonTprGoingToHell);
      }
    }
  });
}
