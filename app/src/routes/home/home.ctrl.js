const output = {
  home: (req, res) => {
    res.render("./home/index");
  },

  login: (req, res) => {
    res.render("./home/login");
  },
};

const user = {
  id: ["wns9296", "wnswns012"],
  pw: ["1234", "1234"],
};
const process = {
  login: (req, res) => {
    const id = req.body.id,
      pw = req.body.pw;
    console.log(id, pw);

    if (user.id.includes(id)) {
      const idx = user.id.indexOf(id);
      if (user.pw[idx] === pw) {
        return res.json({
          success: true,
        });
      }
    }

    return res.json({
      success: false,
      msg: "로그인에 실패하셨습니다.",
    });
  },
};

module.exports = {
  output,
  process,
};
