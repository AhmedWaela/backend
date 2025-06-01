// src/api/auth/controllers/twitter-auth.js

'use strict';

const { TwitterApi } = require('twitter-api-v2');

module.exports = {
  async twitterLogin(ctx) {
    const { accessToken, accessSecret } = ctx.request.body;

    const client = new TwitterApi({
      appKey: process.env.TWITTER_CONSUMER_KEY,
      appSecret: process.env.TWITTER_CONSUMER_SECRET,
      accessToken,
      accessSecret,
    });

    const twitterUser = await client.v2.me({ 'user.fields': ['email'] });

    // تحقق من البريد أو الاسم وادخل المستخدم للنظام
  }
};