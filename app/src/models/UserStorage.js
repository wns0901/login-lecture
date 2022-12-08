"use strict";
const db = require("../config/db");

class UserStorage {
  static #getUserInfo(data, id) {
    // console.log(JSON.parse(data));
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const userInfo = Object.keys(users).reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }

  static #getUsers(data, isAll, fields) {
    const users = JSON.parse(data);
    if (isAll) return users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUsers(isAll, ...fields) {}

  static getuserInfo(id) {
    // console.log(id);
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM users WHERE id = ?", [id], (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data[0]);
      });
    });
  }

  static async save(userInfo) {
    console.log(userInfo.id);
    const isIn = await new Promise((resolve, reject) => {
      db.query("SELECT * FROM users", (err, data) => {
        if (err) {
          reject(err);
        }
        const arr = [];
        data.forEach((data) => {
          arr.push(data.id);
        });

        resolve(arr.includes(userInfo.id));
      });
    });

    if (!isIn) {
      db.query("INSERT INTO users (id, name, pw) VALUES(?, ?, ?)", [
        userInfo.id,
        userInfo.name,
        userInfo.pw,
      ]);
      return { success: true };
    } else {
      return { success: false, msg: "이미 존재하는 아이디 입니다." };
    }
  }
}
module.exports = UserStorage;
