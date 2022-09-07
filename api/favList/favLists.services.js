const FavList = require('./favList.model');

function createFavList(list) {
  return FavList.create(list);
}

module.exports = { createFavList };
