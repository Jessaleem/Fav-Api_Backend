const mongoose = require('mongoose');

const FavListSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  listName: {
    type: String,
    required: true,
  },
  favItems: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'favItem',
  }],
}, { timeStamps: true });

const FavList = mongoose.model('favoriteList', FavListSchema);

module.exports = FavList;
