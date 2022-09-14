const { createFavItem, deleteFavItem } = require('./favItems.services');
const { updateFavsList } = require('../favList/favLists.services');

async function createFavItemHandler(req, res) {
  const {
    title,
    description,
    link,
    favList,
  } = req.body;
  const id = favList;
  try {
    const item = await createFavItem({
      title,
      description,
      link,
      favList,
    });
    const list = await updateFavsList(id, { $push: { favItems: item } });
    return res.status(201).json(list);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function deleteFavItemHandler(req, res) {
  const { id } = req.params;
  try {
    const favItem = await deleteFavItem(id);
    if (!favItem) {
      return res.status(400).json({ message: 'Item not found' });
    }
    return res.status(200).json({ removed: favItem });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

module.exports = {
  createFavItemHandler,
  deleteFavItemHandler,
};
