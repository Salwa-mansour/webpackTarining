const path =require('path')

module.exports = {
mode:'production',
entry:{
 bundle : path.resolve(__dirname,'src/index.js')
},
output:{
    path:path.resolve(__dirname,'dist/assets'),
    filename:'[name].js',
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
        }
    ]
  }
}