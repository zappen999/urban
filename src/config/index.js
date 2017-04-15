module.exports = {
  TITLE: 'Urban',
  DESCRIPTION: '',

  MOUNTING_POINT: 'app',

  // BASE_PATH: path.join(__dirname, '..'),

  FILES: {
    STYLE_BUNDLE: 'main.css',
    CLIENT_BUNDLE: 'main.js',
    PUBLIC_PATH: '/public/'
  },

  ENTRY: {
    PRODUCTION: './build/client',
    DEVELOPMENT: './src/client'
  }
};
