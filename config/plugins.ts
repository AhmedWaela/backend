module.exports = () => ({
  'users-permissions': {
    config: {
      providers: {
        facebook: {
          enabled: true,
          clientId: '1375494060452682',
          clientSecret: '0b490de1cca016a46dfaf5c154aa8316',
          callback: 'https://excellent-blessing-93fa28bbd4.strapiapp.com/api/auth/facebook/callback',
        },
        twitter: {
          enabled: true,
          key: '53gLeJKKqF0kTI6zcKmblYuVD',
          secret: 'Y9co6HMubCef6NZVHPOnrlRSDvFkjPKc5cxFisRsJQW7pAP7zf',
          callback: 'https://excellent-blessing-93fa28bbd4.strapiapp.com/api/auth/twitter/callback',
        },
      },
    },
  },
});
