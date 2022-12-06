"use strict";
const fs = require("fs");

class UserStorage {
  
  static getUsers(...fields) {
    // const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    // console.log(newUsers);
    return newUsers;
  }

  static getuserInfo(id) {

    fs.readFile("./src/db/users.json", (err, data) => {
      if (err) throw err;
      console.log(JSON.parse(data));
      const users = JSON.parse(data);
      const idx = users.id.indexOf(id);
      const userInfo = Object.keys(users).reduce((newUser, info) => {
        newUser[info] = users[info][idx];
        return newUser;
      }, {});
    });
   
    return userInfo;
  }

  static save(userInfo) {
    // const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.pw.push(userInfo.pw);
    return { success: true };
  }
}
module.exports = UserStorage;
