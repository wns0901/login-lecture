"use strict";

const id = document.querySelector("#id"),
  pw = document.querySelector("#pw"),
  loginbtn = document.querySelector("button");

loginbtn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    pw: pw.value,
  };

  console.log(req);

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((result) => {
      console.log("result", result);
    })
    .catch((reason) => {
      console.log("reason", reason);
    });
}
