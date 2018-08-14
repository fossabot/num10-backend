const { db } = require("./firebase");

exports.Users = {
  async createUser(id, data) {
    return await db.ref(`users/${id}`).set(data);
  },

  async getListUser() {
    return await db.ref("/users/").once("value", snapshot => snapshot);
  },

  async getUser(id) {
    return await db
      .ref(`/users/${id}`)
      .once("value")
      .then(snapshot => snapshot.val());
  },

  async updateUser(id, updates) {
    return await db
      .ref('users')
      .child(id)
      .update(updates);
  }
};
