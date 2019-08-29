const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    devtool: 'inline-source-map',
    entry: './main.ts',
    mode: 'development',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public', 'app')
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
    devServer: {
        publicPath: '/app/',
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000
    }
};
