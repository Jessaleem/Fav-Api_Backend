const Joi = require('joi');

const strongPassword = (/(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);

const userSchema = Joi.object({
  email:
  Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  password:
  Joi.string()
    .regex(strongPassword)
    .required(),
});

module.exports = userSchema;
