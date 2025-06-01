// path: src/api/auth/controllers/twitter-auth.js

'use strict';

const { TwitterApi } = require('twitter-api-v2');
const { getService } = require('@strapi/plugin-users-permissions/server/utils');

module.exports = {
  async twitterLogin(ctx) {
    const { accessToken, accessSecret } = ctx.request.body;

    if (!accessToken || !accessSecret) {
      return ctx.badRequest('Access token and secret are required');
    }

    try {
      // استخدام Twitter API v1.1 عشان نحصل على الإيميل
      const client = new TwitterApi({
        appKey: process.env.TWITTER_CONSUMER_KEY,
        appSecret: process.env.TWITTER_CONSUMER_SECRET,
        accessToken,
        accessSecret,
      });

      const twitterUser = await client.v1.verifyCredentials({
        include_email: true,
      });
      
      const username = twitterUser.screen_name;
      const name = twitterUser.name;

      // تحقق إذا كان المستخدم موجود
      const existingUsers = await strapi.entityService.findMany('plugin::users-permissions.user', {
        filters: { email },
      });

      let user = existingUsers[0];

      if (!user) {
        // إنشاء مستخدم جديد
        user = await strapi.entityService.create('plugin::users-permissions.user', {
          data: {
            username: username || name,
            email,
            provider: 'twitter',
            confirmed: true,
          },
        });
      }

      // إنشاء JWT
      const token = getService('jwt').issue({ id: user.id });

      ctx.send({
        jwt: token,
        user,
      });

    } catch (err) {
      console.error(err);
      return ctx.internalServerError('Twitter login failed');
    }
  },
};