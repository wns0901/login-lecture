"use strict";

const rootbtn = document.querySelector("#btn");

rootbtn.addEventListener("click", toLogin);

function toLogin() {
  location.href = "/login";
}
