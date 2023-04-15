import { onPageLoad } from "./onPageLoad.js";
import { contact } from "./contact.js";
import { menu } from "./menu.js";
import "./style.css";

window.addEventListener("load", () => {
  onPageLoad();

  const contactTab = document.querySelector("#contact-tab");
  contactTab.addEventListener("click", (event) => {
    event.preventDefault(); // prevent default action
    contact();
  });

  const menuTab = document.querySelector("#menu-tab");
  menuTab.addEventListener("click", (event) => {
    event.preventDefault(); // prevent default action
    menu();
  });

  const homeTab = document.querySelector("#home-tab");
  homeTab.addEventListener("click", (event) => {
    event.preventDefault(); // prevent default action
    onPageLoad();
  });
});
