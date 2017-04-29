module.exports = {
    entry: "./Components/index.js",
    output: {
        filename: "./Public/bundle.js"
    },
    module: {
        loaders: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                  presets: ['react', 'es2015']
              }
          }
        ]
    }
}