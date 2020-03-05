const path = require("path")

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
                  // i want to import styles directly but this doesnt work :/ @import './src/assets/styles/vue.scss'
                  data: `
                  $white:         #ffffff;
                  $gray:          #D6D6D6;
                  $black:         #000000;
                  
                  $light-text:    #858585;
                  $dark-text:     #424242;
                  
                  $light-blue:    #155BCC;
                  $dark-blue:     #164FAC;
                  
                  $accent:        #2FDA7F;
                  $accent-dark:   #2197a8;
                  $background:    #FAFAFA;
                  $search:        #F5F5F5;`
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
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.js",
      src: path.resolve(__dirname, "src"),
    }
  },
}