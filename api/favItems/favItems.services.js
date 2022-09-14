const FavItem = require('./favItems.model');

function createFavItem(item) {
  return FavItem.create(item);
}
function deleteFavItem(id) {
  return FavItem.findByIdAndRemove(id);
}

module.exports = {
  createFavItem,
  deleteFavItem,
};
