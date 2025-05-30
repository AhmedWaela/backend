'use strict';

const fetch = require('node-fetch');

module.exports = {
  async login(ctx) {
    const { access_token } = ctx.request.body;

    if (!access_token) {
      return ctx.badRequest('Missing access_token');
    }

    try {
      // طلب بيانات المستخدم من Facebook باستخدام access_token
      const fbResponse = await fetch(
        'https://graph.facebook.com/me?fields=id,email,name&access_token=${access_token}'
      );
      const fbData = await fbResponse.json();

      if (fbData.error) {
        return ctx.unauthorized('Invalid Facebook token');
      }

      // البحث عن المستخدم في قاعدة بيانات Strapi باستخدام البريد الإلكتروني
      const user = await strapi.query('plugin::users-permissions.user').findOne({
        where: { email: fbData.email },
      });

      let finalUser = user;

      if (!user) {
        // إنشاء مستخدم جديد إذا لم يكن موجوداً
        finalUser = await strapi.query('plugin::users-permissions.user').create({
          data: {
            username: fbData.name,
            email: fbData.email,
            provider: 'facebook',
            confirmed: true,
            blocked: false,
          },
        });
      }

      // إنشاء JWT للمستخدم
      const jwt = strapi.plugins['users-permissions'].services.jwt.issue({
        id: finalUser.id,
      });

      // إعادة الـ JWT وبيانات المستخدم للعميل
      return { jwt, user: finalUser };
    } catch (err) {
      console.error(err);
      return ctx.internalServerError('Something went wrong');
    }
  },
};