const User = require('./users.model');

function createUser(user) {
  return User.create(user);
}

function findUserByEmail(email) {
  return User.findOne({ email });
}
module.exports = {
  createUser,
  findUserByEmail,
};
