const path = require('path');
let dir = process.cwd();//或取档期内程勋运行的目录
console.log(dir)
module.exports = {
    entry: {
        'bundle': dir + '/src/main'
    },
    output: {
        'filename': '[name].js',
        'path': dir + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)/,
                use: 'babel-loader'
            },
            {
                test: /\.(css|less|scss)/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(eot|svg|ttf|woff)/,
                use: 'url-loader'
            },
            {
                test: /\.(jpg|png|gif|jpeg)/,
                use: 'url-loader'
            }
        ]
    },
    plugins: [],
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.less']
    }

}