module.exports = {
    entry: './src/app.js',
    output: {
      filename: './js/bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './'
    }
}