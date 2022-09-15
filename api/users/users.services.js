const User = require('./users.model');

function createUser(user) {
  return User.create(user);
}

function findUserByEmail(email) {
  return User.findOne({ email });
}

function updateUser(id, user) {
  return User.findByIdAndUpdate(id, user, { new: true })
    .populate('favList');
}

function getSingleUser(id) {
  return User.findById(id);
}

module.exports = {
  createUser,
  findUserByEmail,
  updateUser,
  getSingleUser,
};
