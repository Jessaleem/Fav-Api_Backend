const User = require('./users.model');

function createUser(user) {
  return User.create(user);
}

module.exports = {
  createUser,
};
