const path =require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
mode:'production',
entry:{
 bundle : path.resolve(__dirname,'src/index.js')
},
output:{
    path:path.resolve(__dirname,'dist/assets'),
    filename:'[name][contenthash].js',
    clean:true
},
devtool:'source-map',
devServer:{
  static:{
 directory:path.resolve(__dirname,'dist')
},
port:3000,
open:true,
hot:true,
compress:true,
historyApiFallback:true,
},
module :{
    rules:[
        {
        test:/\.scss$/,
        use:[
            'style-loader',
            'css-loader',
            'sass-loader' ,
            {
                loader: "postcss-loader",
                options: {
                  postcssOptions: {
                    plugins: [
                      [
                        "autoprefixer",
                        {
                          // Options
                        },
                      ],
                    ],
                  },
                },
              },
        ]
        },
        {
          test:/\.js$/,
          exclude:/node_modules/,
          use:{
            loader:'babel-loader',
            options:{
              presets:[
                '@babel/preset-env'
              ]
            }
          }
        },
        {
          test: /\.(png|svg)$/i,
          use:{
            loader:'file-loader',
            options:{
              name:'[name][contenthash].[ext]',
              outputPath: 'images',
              clean:true
            }
          }
        }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
        title:'Webpack App',
        filename: 'index.html',
        template:'./src/Template.html',
       
    }),
    new BundleAnalyzerPlugin(),
  ]
}