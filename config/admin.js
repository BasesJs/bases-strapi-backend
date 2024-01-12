module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','7807w5njh7ggspcijvat509e3g4caz6q'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT','gz30n9al7ks67d7nox00c1rfizuvqyvm'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT','fdg74kfn94py344ucheg6gjq2r3kz07t'),
    }
  }
});