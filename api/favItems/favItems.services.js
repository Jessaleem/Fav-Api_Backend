const FavItem = require('./favItems.model');

function createFavItem(item) {
  return FavItem.create(item);
}
// function deleteFavItem(id) {

// }

module.exports = {
  createFavItem,
};
