export default () => ({});
module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      providers: {
        facebook: {
          enabled: true,
          clientId: env('1375494060452682'),
          clientSecret: env('0b490de1cca016a46dfaf5c154aa8316'),
          callback: 'https://excellent-blessing-93fa28bbd4.strapiapp.com/api/auth/facebook/callback',
        },
        twitter: {
          key: env('a09tYmNWa1hjM1JuclZHbDBvRTk6MTpjaQ'),
          secret: env('dRs33WfLBgN_oxqudZZm9ZFStisbMhgDBFjxvfR7DNwEinq4aq'),
          callback: env('https://excellent-blessing-93fa28bbd4.strapiapp.com/api/auth/twitter/callback'),
        },
      },
    },
  },
});
