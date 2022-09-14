const Router = require('express');
const { isAuthenticated } = require('../../auth/auth.services');

const { createFavItemHandler } = require('./favItems.controller');

const router = Router();

router.post('/', isAuthenticated, createFavItemHandler);

module.exports = router;
