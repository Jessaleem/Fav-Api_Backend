const Router = require('express');
const { isAuthenticated } = require('../../auth/auth.services');

const {
  createFavListHandler,
  getFavListHandler,
  getOneFavListHander,
  deleteFavListHandler,
} = require('./favList.controller');

const router = Router();

router.post('/', isAuthenticated, createFavListHandler);
router.get('/', isAuthenticated, getFavListHandler);
router.get('/:id', isAuthenticated, getOneFavListHander);
router.delete('/:id', isAuthenticated, deleteFavListHandler);

module.exports = router;
