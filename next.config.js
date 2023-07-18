module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)?',
        headers: [
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'cross-origin',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Credentials',
            value: '*',
          }
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,HEAD,PUT,PATCH,POST,DELETE',
          },
        ],
      },
    ];
  },
};
