"use strict";

const id = document.querySelector("#id"),
  pw = document.querySelector("#pw"),
  loginbtn = document.querySelector("#butten");

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
      console.log(res);
      if (res.success) {
        location.href = "/";
      } else {
        alert(res.msg);
        location.href = "/login";
      }
    })
    .catch((err) => {
      console.error(new Error("로그인중 에러 발생"));
    });
}
