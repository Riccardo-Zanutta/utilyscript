const { join } = require('path')
const include = join(__dirname, 'src')

module.exports = env => {
  return {
    entry: './src/index',
    output: {
      path: join(__dirname, 'dist'),
      libraryTarget: 'umd',
      library: 'utilyscript',
    },
    mode: env.mode,
    devtool: 'source-map',
    module: {
      rules: [
        { test: /\.js$/, loader: 'babel-loader', include }
      ]
    }
  }
}
