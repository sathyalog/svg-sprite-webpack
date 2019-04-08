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
      },
      {
        enforce: "pre",//you can use enforce: "pre" section to check source files, not modified by other loaders (like babel-loader)
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          // eslint options (if necessary)
          //quiet: true, //Loader will process and report errors only and ignore warnings if this option is set to true
          failOnError: true//Loader will cause the module build to fail if there are any eslint errors.

        }
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
