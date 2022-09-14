const FavItem = require('./favItems.model');

function createFavItem(item) {
  return FavItem.create(item)
    .populate('favList');
}

module.exports = {
  createFavItem,
};
