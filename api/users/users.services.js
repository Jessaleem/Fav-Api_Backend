const User = require('./users.model');

function createUser(user) {
  return User.create(user);
}

function findUserByEmail(email) {
  return User.findOne({ email });
}

function findUserById(id) {
  return User.findById(id);
}
module.exports = {
  createUser,
  findUserByEmail,
  findUserById,
};
