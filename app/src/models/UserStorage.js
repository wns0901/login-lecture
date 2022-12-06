"use strict";

class UserStorage {
  static #users = {
    id: ["wns9296", "wnswns012"],
    pw: ["1234", "1234"],
    name: ["장준영", "이준영"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    // console.log(newUsers);
    return newUsers;
  }
}
module.exports = UserStorage;
