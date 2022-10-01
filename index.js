require('dotenv').config();
const express = require('express');

const configExpress = require('./config/express');
const routes = require('./routes');
const connectDB = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3030;
configExpress(app);
routes(app);

const server = app.listen(PORT, async () => {
  await connectDB();

  console.log(`Server running on port http://localhost:${PORT}`);
});

module.exports = { app, server };
