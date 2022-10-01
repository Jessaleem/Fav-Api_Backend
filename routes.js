const router = require('./api/healthcheck/index');
const authLocal = require('./auth/local');
const user = require('./api/users/index');
const favs = require('./api/favList/index');
const item = require('./api/favItems/index');
const { isAuthenticated } = require('./auth/auth.services');

function routes(app) {
  app.use('/api/healthcheck', router);
  app.use('/api/users', user);
  app.use('/api/favs', isAuthenticated, favs);

  app.use('/api/favs/items', item);

  app.use('/auth/local', authLocal);
}

module.exports = routes;
