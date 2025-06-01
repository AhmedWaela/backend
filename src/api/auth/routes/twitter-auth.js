'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/auth/twitter-login',
      handler: 'twitter-auth.twitterLogin',
      config: {
        auth: false,
        policies: [],
      },
    },
  ],
};