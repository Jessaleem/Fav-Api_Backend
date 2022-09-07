const Router = require('express');

const { createUserHandler } = require('./users.controller');

const router = Router();

router.post('/', createUserHandler);

module.exports = router;
