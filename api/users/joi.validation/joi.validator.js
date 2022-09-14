/* eslint-disable consistent-return */
const userSchema = require('./joi.schema');

async function userValidator(req, res, next) {
  const payload = req.body;

  const { error } = await userSchema.validate(payload);
  if (error) {
    return res.status(401).json({ message: 'one upper case, and minimun 8 characters' });
  }
  next();
}

module.exports = { userValidator };
