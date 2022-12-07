"use strict";
const fs = require("fs").promises;

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

  static getUsers(isAll, ...fields) {
    return fs
      .readFile("./src/db/users.json")
      .then((data) => {
        return this.#getUsers(data, isAll, fields);
      })
      .catch(console.error);
  }

  static getuserInfo(id) {
    return fs
      .readFile("./src/db/users.json")
      .then((data) => {
        return this.#getUserInfo(data, id);
      })
      .catch(console.error);

    // return userInfo;
  }

  static async save(userInfo) {
    const users = await this.getUsers(true);
    if (users.id.includes(userInfo.id)) {
      throw "이미 존재하는 아이디입니다.";
    }
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.pw.push(userInfo.pw);
    fs.writeFile("./src/db/users.json", JSON.stringify(users));
    return { success: true };
    users.name.push(userInfo.name);
  }
}
module.exports = UserStorage;
