const FavItem = require('./favItems.model');

function createFavItem(item) {
  return FavItem.create(item);
}

module.exports = {
  createFavItem,
};
