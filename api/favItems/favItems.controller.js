const { createFavItem } = require('./favItems.services');

async function createFavItemHandler(req, res) {
  const data = req.body;
  const { _id } = req.user;
  try {
    const favItem = await createFavItem({ ...data, user: _id });
    return res.status(201).json(favItem);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

module.exports = { createFavItemHandler };
