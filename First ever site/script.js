"use strict";

//Switching an image on button click:
const monkeImage = document.querySelector(".monke-face");
const assImage = document.querySelector(".monke-butt");
const button = document.querySelector(".button");
let resetImg = 0;

button.addEventListener("click", function () {
  if (resetImg === 0) {
    resetImg++;
    monkeImage.classList.add("hidden");
    assImage.classList.remove("hidden");
  } else {
    monkeImage.classList.remove("hidden");
    assImage.classList.add("hidden");
    resetImg--;
  }
});
