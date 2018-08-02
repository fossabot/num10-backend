const { db } = require("./firebase");

exports.Users = {
  async createUser(id, name, imageUrl) {
    return await db.ref(`users/${id}`).set({
      name: name,
      image: imageUrl
    });
  },

  async getListUser() {
    return await db
      .ref("/users/")
      .once("value", snapshot => snapshot);
  },

  async getUser(id) {
    return await db
      .ref(`/users/${id}`)
      .once("value")
      .then(snapshot => snapshot.val());
  },

  async updateUser(updates) {
    return await db.ref().update(updates);
  }
};
