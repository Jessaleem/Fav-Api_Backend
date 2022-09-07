const { createFavList } = require('./favLists.services');

async function createFavListHandler(req, res) {
  const data = req.body;
  const { _id } = req.user;
  try {
    const list = await createFavList({ ...data, user: _id });
    return res.status(201).json(list);
  } catch (error) {
    console.log(error);
    return res.status(501).json({ error });
  }
}

module.exports = { createFavListHandler };
