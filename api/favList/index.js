const Router = require('express');
const { isAuthenticated } = require('../../auth/auth.services');

const { createFavListHandler } = require('./favList.controller');

const router = Router();

router.post('/', isAuthenticated, createFavListHandler);

module.exports = router;
