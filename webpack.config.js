const path = require("path");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const webpack = require('webpack');
module.exports = {
  entry:"./src/index.js",
  output:{
    filename:"main.js",
    path:path.resolve(__dirname, "dist")
  },
  // module: {
  //   loaders: [{
  //     test: /icons\/.*\.svg$/,
  //     loader: 'svg-sprite-loader',
  //     options: {
  //       extract: true,
  //       spriteFilename: './dist/img/icons.svg',
  //       runtimeCompat: true
  //     }
  //   }]
  // },
  // plugins: [
  //   new SpriteLoaderPlugin({
  //     plainSprite: true
  //   })
  // ]
  module: {
    rules: [
      {
        test: /icons\/.*\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              spriteFilename: './img/icons.svg',
              runtimeCompat: true
            }
          }
        ]
      },
      {
            test:/\.css$/,
            loader:'style-loader!css-loader'
      }
    ]
  },

  plugins: [
    new SpriteLoaderPlugin({
        plainSprite: true
      })
]
}
