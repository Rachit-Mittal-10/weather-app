const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname,'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        clean: true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/template.html',
            filename: 'index.html',
            inject:true
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader'],
                sideEffects: true
            }
        ]
    },
    devtool: "source-map"
};