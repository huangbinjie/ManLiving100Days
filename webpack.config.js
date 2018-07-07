const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: './src/game.ts',
  output: {
    filename: 'game.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  resolve: {
    extensions: ['.webpack.js', '.tsx', '.ts', '.js'],
    modules: [
      path.join(__dirname, "."),
      path.join(__dirname, "node_modules/")
    ],
    plugins: [new TsconfigPathsPlugin({ /*configFile: "./path/to/tsconfig.json" */ })]
  },
  resolveLoader: {
    modules: [
      path.join(__dirname, "node_modules/")
    ]
  },
  // plugins: [
  //   new TsConfigPathsPlugin()
  // ]
}
