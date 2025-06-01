'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/auth/twitter-login',
      handler: 'auth.twitterLogin',
      config: {
        auth: false,
        policies: [],
      },
    },
  ],
};