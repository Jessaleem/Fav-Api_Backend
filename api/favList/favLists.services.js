const FavList = require('./favList.model');

function createFavsList(list) {
  return FavList.create(list);
}

function getAllFavsList() {
  return FavList.find({});
}

function getFavsList(id) {
  return FavList.findById(id)
    .populate('favList');
}

function deleteFavsList(id) {
  return FavList.findByIdAndRemove(id);
}

module.exports = {
  createFavsList,
  getAllFavsList,
  getFavsList,
  deleteFavsList,
};
