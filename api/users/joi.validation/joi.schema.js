const Joi = require('joi');

const userSchema = Joi.object({
  email:
  Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  password:
  Joi.string()
    .alphanum()
    .min(8)
    .required(),
});

module.exports = userSchema;
