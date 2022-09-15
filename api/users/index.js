const Router = require('express');

const { createUserHandler } = require('./users.controller');
const { userValidator } = require('./joi.validation/joi.validator');

const router = Router();

router.post('/', userValidator, createUserHandler);

module.exports = router;
