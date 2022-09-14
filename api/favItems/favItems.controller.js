const { createFavItem } = require('./favItems.services');
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

module.exports = { createFavItemHandler };
