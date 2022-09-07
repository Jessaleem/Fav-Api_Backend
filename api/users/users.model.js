const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  favList: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'favoriteList',
    required: true,
  },
}, { timestamps: true });

const User = mongoose.model('user', UserSchema);

module.exports = User;
