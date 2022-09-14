const
  {
    createFavsList,
    getAllFavsList,
    getFavsList,
    deleteFavsList,
  } = require('./favLists.services');

const { findUserById } = require('../users/users.services');

async function createFavListHandler(req, res) {
  const data = req.body;
  const { id } = req.user;
  try {
    const user = await findUserById(id).populate('favList');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const list = await createFavsList(data);
    return res.status(201).json(list);
  } catch (error) {
    console.log(error);
    return res.status(501).json({ error });
  }
}

async function getFavListHandler(req, res) {
  try {
    const lists = await getAllFavsList();
    return res.status(200).json(lists);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function getOneFavListHander(req, res) {
  const { id } = req.params;
  try {
    const favList = await getFavsList(id);
    if (!favList) {
      return res.status(404).json({ message: 'List not found' });
    }
    return res.json(favList);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function deleteFavListHandler(req, res) {
  const { id } = req.params;
  try {
    const favList = await deleteFavsList(id);
    if (!favList) {
      return res.status(400).json({ message: 'List not found' });
    }
    return res.status(200).json(favList);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

module.exports = {
  createFavListHandler,
  getFavListHandler,
  getOneFavListHander,
  deleteFavListHandler,
};
