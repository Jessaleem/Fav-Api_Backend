const router = require('./api/healthcheck/index');
const user = require('./api/users/index');

function routes(app) {
  app.use('/api/healthcheck', router);
  app.use('/api/users', user);
}

module.exports = routes;
