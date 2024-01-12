module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS','ht31enlvvol4hyeth1i3428df7als84p'),
  },
  url: env('URL','https://strapi-production-31e5.up.railway.app'),
  proxy: true
});