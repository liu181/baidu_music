module.exports = {
    entry: './main.js',
    output: {
        path: './',
        filename: 'main.min.js'
    },
    module: {
        loaders: [{
            test:/\.css$/,loader:'style-loader!css-loader'
        },{
            test:/\.jpg|png|bmp$/,loader:'url-loader?limit=400000000'
        },{
        test: /\.vue$/, loader: 'vue-loader'
        }]
    }
}