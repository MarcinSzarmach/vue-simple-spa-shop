module.exports = {
  mode: 'development',
  module: {
    rules: [{
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: "vue-loader",
        options: {
          loaders: {
            sass: [{
                loader: "vue-style-loader"
              },
              {
                loader: "css-loader"
              },
              {
                loader: "sass-loader",
                options: {
                  data: `@import './src/scss/vue.scss`
                }
              }
            ],
          }
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.html$/,
        loader: "raw-loader"
      }
    ]
  }
}