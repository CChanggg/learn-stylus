const path = require('path')
const sourcePath = path.join(__dirname, './')
module.exports = {
    entry: './main.jsx',
    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                //? 指有或者没有都可以
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loaders:'babel-loader?presets[]=es2015&presets[]=react'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            sourcePath,
            'node_modules'
        ]
    }

}