const { createFavItem } = require('./favItems.services');

async function createFavItemHandler(req, res) {
  const item = req.body;
  try {
    const favItem = await createFavItem(item);
    return res.status(201).json(favItem);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

module.exports = { createFavItemHandler };
