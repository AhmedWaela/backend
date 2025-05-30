module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/auth/facebook/token-login',
      handler: 'custom-facebook.login',
      config: {
        auth: false,
      },
    },
  ],
};