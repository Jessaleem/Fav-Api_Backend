const Router = require('express');

const {
  createFavListHandler,
  getFavListHandler,
  getOneFavListHander,
  deleteFavListHandler,
} = require('./favList.controller');

const router = Router();

router.post('/', createFavListHandler);
router.get('/', getFavListHandler);
router.get('/:id', getOneFavListHander);
router.delete('/:id', deleteFavListHandler);

module.exports = router;
