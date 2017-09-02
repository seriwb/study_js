module.exports = {
  entry: {
    "public/bundle": './index.js',
    "dist/main/array_search_object": "./src/main/array_search_object.js"
  },
  output: {
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
    ],
  },
  devtool: "source-map"
};
