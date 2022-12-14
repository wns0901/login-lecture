"use strict";

const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const loginbtn = document.querySelector("#butten");
// const form = document.querySelector(".login-form");

loginbtn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    pw: pw.value,
  };

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("로그인중 에러 발생"));
    });
}
