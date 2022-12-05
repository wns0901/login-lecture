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
  },
};

module.exports = {
  output,
  process,
};
