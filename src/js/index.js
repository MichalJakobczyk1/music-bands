import "../scss/main.scss";
import tprPlayer from "./modules/thePrettyReckless";
import tacoPlayer from "./modules/taco";
import grandsonPlayer from "./modules/grandson";
import avaPlayer from "./modules/ava";
import {registerSW} from './pwa.js';

registerSW();

const main = document.querySelector(".main--preload");
console.log("HELLO 🚀");

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  document.body.classList.remove("body--preload");
});

function remove() {
  main.classList.remove("main--preload");
};

setTimeout(remove,4000);
tprPlayer();
tacoPlayer();
grandsonPlayer();
avaPlayer();