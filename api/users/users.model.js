/* eslint-disable no-useless-escape */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/.+\@.+\..+/, 'Please enter a valid email'],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  favList: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'favoriteList',
  },
}, { timestamps: true });

UserSchema.pre('save', async function save(next) {
  const user = this;

  try {
    if (!user.isModified('password')) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;
  } catch (error) {
    next(error);
  }
});

UserSchema.methods.comparePassword = async function comparePassword(password, next) {
  const user = this;

  try {
    const isMatch = await bcrypt.compare(password, user.password);
    return isMatch;
  } catch (error) {
    next(error);
    return false;
  }
};

const User = mongoose.model('user', UserSchema);

module.exports = User;
