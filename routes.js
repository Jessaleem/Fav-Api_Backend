const router = require('./api/healthcheck/index');

function routes(app) {
  app.use('/api/healthcheck', router);
}

module.exports = routes;
