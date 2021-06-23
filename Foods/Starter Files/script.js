"use strict";

const icons = document.querySelectorAll(".section-1__icons i");
let count = 0;

setInterval(() => {
  count++;

  const current_icon = document.querySelector(".section-1__icons .change");

  current_icon.classList.remove("change");

  if (count == icons.length) {
    icons[0].classList.add("change");
    count = 0;
  }

  current_icon.nextElementSibling.classList.add("change");
}, 1000);
