const path = require("path");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const webpack = require('webpack');
module.exports = {
  entry:"./src/index.js",
  output:{
    filename:"main.js",
    path:path.resolve(__dirname, "dist")
  },
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
  devServer: {
    headers: {
      "Cache-Control": "private, max-age=600" // Read https://github.com/kisenka/svg-sprite-loader/issues/143
    }
  },
  plugins: [
    new SpriteLoaderPlugin({
        plainSprite: true
      })
]
}
