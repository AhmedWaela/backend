const customFacebookRoutes = require('./custom-facebook');

module.exports = {
  routes: [
    ...customFacebookRoutes.routes,
  ],
};