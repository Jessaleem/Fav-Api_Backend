const mongoose = require('mongoose');

const FavItemsSchema = new mongoose.Schema({
  favList: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'favoriteList',
    required: true,
  },
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
}, { timestamps: true });

const FavItem = mongoose.model('favItem', FavItemsSchema);

module.exports = FavItem;
