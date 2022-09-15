const Router = require('express');
const { isAuthenticated } = require('../../auth/auth.services');

const { createFavItemHandler, deleteFavItemHandler } = require('./favItems.controller');

const router = Router();

router.post('/', isAuthenticated, createFavItemHandler);
router.delete('/:id', isAuthenticated, deleteFavItemHandler);

module.exports = router;
