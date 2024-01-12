module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET','lxkpu3wlky6x4cdh0ix1vfkazixezpsx'),
    },
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME','dsw0zdjgs'),
        api_key: env('CLOUDINARY_KEY','685432371591739'),
        api_secret: env('CLOUDINARY_SECRET','ElC07Khge-LzoBySDXgO-pO1LJY'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});