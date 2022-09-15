const FavList = require('./favList.model');

function createFavsList(list) {
  return FavList.create(list);
}

function getAllFavsList() {
  return FavList.find({})
    .populate('favItems');
}

function getFavsList(id) {
  return FavList.findById(id)
    .populate('favItems');
}

function updateFavsList(id, list) {
  return FavList.findByIdAndUpdate(id, list, { new: true })
    .populate('favItems');
}

function deleteFavsList(id) {
  return FavList.findByIdAndRemove(id);
}

module.exports = {
  createFavsList,
  getAllFavsList,
  getFavsList,
  updateFavsList,
  deleteFavsList,
};
