module.exports = {
  entry: './src/index.js',

  output: {
    path: './build',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },

  devtool: '#inline-source-map',

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

};
