"use strict";

const id = document.querySelector("#id"),
  pw = document.querySelector("#pw"),
  name = document.querySelector("#name"),
  confirmPw = document.querySelector("#confirm-pw"),
  registerbtn = document.querySelector("#button");

registerbtn.addEventListener("click", register);

function register() {
  if (!id.value) return alert("아이디를 입력해주십시오.");
  if (pw.value !== confirmPw.value) {
    return alert("비밀번호가 일치하지 않습니다.");
  }

  const req = {
    id: id.value,
    pw: pw.value,
    name: name.value,
  };

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        alert("회원가입 성공");
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("회원가입중 에러 발생"));
    });
}
