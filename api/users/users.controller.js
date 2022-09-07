const { createUser } = require('./users.services');

async function createUserHandler(req, res) {
  const data = req.body;

  try {
    const user = await createUser(data);

    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

module.exports = { createUserHandler };
