const browsers = ['last 2 Chrome versions'];
// if (process.env.APP_ENV === 'production:legacy') {
//   browsers = ['> 0.25%'];
// }

module.exports = {
  presets: [
    ['env', {
      targets: {
        browsers: browsers
      }
    }]
  ]
};