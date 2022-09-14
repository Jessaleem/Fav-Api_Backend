/* eslint-disable no-underscore-dangle */
const
  {
    createFavsList,
    getAllFavsList,
    getFavsList,
    deleteFavsList,
  } = require('./favLists.services');

const { updateUser } = require('../users/users.services');

async function createFavListHandler(req, res) {
  const data = req.body;
  const { id } = req.user;

  try {
    const list = await createFavsList(data);
    const user = await updateUser(id, { $push: { favList: list.id } });
    return res.status(201).json(user);
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
  console.log(req.params);
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
