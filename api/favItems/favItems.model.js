const mongoose = require('mongoose');

const FavItemsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  favList: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'favoriteList',
    required: true,
  },
}, { timestamps: true });

const FavItem = mongoose.model('favItem', FavItemsSchema);

module.exports = FavItem;
