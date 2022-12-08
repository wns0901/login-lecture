const mysql = require("mysql");

const db = mysql.createConnection({
  host: "login-lecture-jyj.ckbnevttnyip.ap-northeast-2.rds.amazonaws.com",
  user: "admin",
  password: "wnsdud92",
  database: "login_lecture",
});

db.connect();

module.exports = db;
