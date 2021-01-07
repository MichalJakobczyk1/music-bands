import {play, pause, changeContent} from "./functions";

export const buttonTprGoingToHell = document.querySelector(".container__button--going-to-hell");
export const audioTprGoingToHell = document.querySelector(".audio__tpr--going-to-hell");
const buttonRightTprGoingToHell = document.querySelector(".section__button--right-going-to-hell");
const buttonLeftTprGoingToHell = document.querySelector(".section__button--left-going-to-hell");

const audioTprFollowMeDown = document.querySelector(".audio__tpr--follow-me-down");
const audioTprAbsolution = document.querySelector(".audio__tpr--absolution");
const audioTprDearSister = document.querySelector(".audio__tpr--dear-sister");
const audioTprFuckedUpWorld = document.querySelector( ".audio__tpr--fucked-up-world");
const audioTprHeavenKnows = document.querySelector(".audio__tpr--heaven-knows");
const audioTprHouseOnAHill = document.querySelector(".audio__tpr--house-on-a-hill");
const audioTprSweetThings = document.querySelector(".audio__tpr--sweet-things");
const audioTprWaitingForAFriend = document.querySelector(".audio__tpr--waiting-for-a-friend");
const audioTprWhydYouBringAShotgunToTheParty = document.querySelector(".audio__tpr--whyd-you-bring-a-shotgun-to-the-party");

export const titleTpr = document.querySelector(".container__title--tpr");

export default function tprPlayer () {
buttonRightTprGoingToHell.addEventListener("click", () => {
    if (buttonTprGoingToHell.classList.contains("container__button--going-to-hell")) {
      changeContent("Follow Me Down","container__button--going-to-hell","container__button--follow-me-down");
      pause(audioTprGoingToHell);
    } 
    else if (buttonTprGoingToHell.classList.contains("container__button--follow-me-down")) {
      changeContent("Absolution","container__button--follow-me-down","container__button--absolution");
      pause(audioTprFollowMeDown);
    }
    else if (buttonTprGoingToHell.classList.contains("container__button--absolution")) {
      changeContent("Dear Sister","container__button--absolution","container__button--dear-sister");
      pause(audioTprAbsolution);
    }
    else if (buttonTprGoingToHell.classList.contains("container__button--dear-sister")) {
      changeContent("Fucked Up World","container__button--dear-sister","container__button--fucked-up-world");
      pause(audioTprDearSister);
    }
    else if (buttonTprGoingToHell.classList.contains("container__button--fucked-up-world")) {
      changeContent("Heaven Knows","container__button--fucked-up-world","container__button--heaven-knows");
      pause(audioTprFuckedUpWorld);
    }
    else if (buttonTprGoingToHell.classList.contains("container__button--heaven-knows")) {
      changeContent("House On A Hill","container__button--heaven-knows","container__button--house-on-a-hill");
      pause(audioTprHeavenKnows);
    }
    else if (buttonTprGoingToHell.classList.contains("container__button--house-on-a-hill")) {
      changeContent("Sweet Things","container__button--house-on-a-hill","container__button--sweet-things");
      pause(audioTprHouseOnAHill);
    }
    else if (buttonTprGoingToHell.classList.contains("container__button--sweet-things")) {
      changeContent("Waiting For A Friend","container__button--sweet-things","container__button--waiting-for-a-friend");
      pause(audioTprSweetThings);
    }
    else if (buttonTprGoingToHell.classList.contains("container__button--waiting-for-a-friend")) {
      changeContent("Why'd You Bring A Shotgun To The Party","container__button--waiting-for-a-friend","container__button--whyd-you-bring-a-shotgun-to-the-party");
      pause(audioTprWaitingForAFriend);
    }
    else if (buttonTprGoingToHell.classList.contains("container__button--whyd-you-bring-a-shotgun-to-the-party")) {
      changeContent("Going To Hell","container__button--whyd-you-bring-a-shotgun-to-the-party","container__button--going-to-hell");
      pause(audioTprWhydYouBringAShotgunToTheParty);
    };
  });
  
  buttonLeftTprGoingToHell.addEventListener("click", () => {
    if (buttonTprGoingToHell.classList.contains("container__button--going-to-hell")) {
      changeContent("Why'd You Bring A Shotgun To The Party","container__button--going-to-hell","container__button--whyd-you-bring-a-shotgun-to-the-party");
      pause(audioTprGoingToHell);
    } 
    else if (buttonTprGoingToHell.classList.contains("container__button--follow-me-down")) {
      changeContent("Going To Hell","container__button--follow-me-down","container__button--going-to-hell");
      pause(audioTprFollowMeDown);
    }
    else if (buttonTprGoingToHell.classList.contains("container__button--absolution")) {
      changeContent("Follow Me Down","container__button--absolution","container__button--follow-me-down");
      pause(audioTprAbsolution);
    }
    else if (buttonTprGoingToHell.classList.contains("container__button--dear-sister")) {
      changeContent("Absolution","container__button--dear-sister","container__button--absolution");
      pause(audioTprDearSister);
    }
    else if (buttonTprGoingToHell.classList.contains("container__button--fucked-up-world")) {
      changeContent("Dear Sister","container__button--fucked-up-world","container__button--dear-sister");
      pause(audioTprFuckedUpWorld);
    }
    else if (buttonTprGoingToHell.classList.contains("container__button--heaven-knows")) {
      changeContent("Fucked Up World","container__button--heaven-knows","container__button--fucked-up-world");
      pause(audioTprHeavenKnows);
    }
    else if (buttonTprGoingToHell.classList.contains("container__button--house-on-a-hill")) {
      changeContent("Heaven Knows","container__button--house-on-a-hill","container__button--heaven-knows");
      pause(audioTprHouseOnAHill);
    }
    else if (buttonTprGoingToHell.classList.contains("container__button--sweet-things")) {
      changeContent("House On A Hill","container__button--sweet-things","container__button--house-on-a-hill");
      pause(audioTprSweetThings);
    }
    else if (buttonTprGoingToHell.classList.contains("container__button--waiting-for-a-friend")) {
      changeContent("Sweet Things","container__button--waiting-for-a-friend","container__button--sweet-things");
      pause(audioTprWaitingForAFriend);
    }
    else if (buttonTprGoingToHell.classList.contains("container__button--whyd-you-bring-a-shotgun-to-the-party")) {
      changeContent("Waiting For A Friend","container__button--whyd-you-bring-a-shotgun-to-the-party","container__button--waiting-for-a-friend");
      pause(audioTprWhydYouBringAShotgunToTheParty);
    };
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
  if (buttonTprGoingToHell.classList.contains("container__button--fucked-up-world")) {
    if (buttonTprGoingToHell.classList.contains("container__button-play")) {
      play(audioTprFuckedUpWorld);
   } else {
    pause(audioTprFuckedUpWorld);
   }
  }
  if (buttonTprGoingToHell.classList.contains("container__button--heaven-knows")) {
    if (buttonTprGoingToHell.classList.contains("container__button-play")) {
      play(audioTprHeavenKnows);
   } else {
    pause(audioTprHeavenKnows);
   }
  } 
  if (buttonTprGoingToHell.classList.contains("container__button--house-on-a-hill")) {
    if (buttonTprGoingToHell.classList.contains("container__button-play")) {
      play(audioTprHouseOnAHill);
   } else {
    pause(audioTprHouseOnAHill);
   }
  } 
  if (buttonTprGoingToHell.classList.contains("container__button--sweet-things")) {
    if (buttonTprGoingToHell.classList.contains("container__button-play")) {
      play(audioTprSweetThings);
   } else {
    pause(audioTprSweetThings);
   }
  } 
  if (buttonTprGoingToHell.classList.contains("container__button--waiting-for-a-friend")) {
    if (buttonTprGoingToHell.classList.contains("container__button-play")) {
      play(audioTprWaitingForAFriend);
   } else {
    pause(audioTprWaitingForAFriend);
   }
  } 
  if (buttonTprGoingToHell.classList.contains("container__button--whyd-you-bring-a-shotgun-to-the-party")) {
    if (buttonTprGoingToHell.classList.contains("container__button-play")) {
      play(audioTprWhydYouBringAShotgunToTheParty);
   } else {
    pause(audioTprWhydYouBringAShotgunToTheParty);
   }
  } 
  });
}