module.exports = {
    //页面入口文件配置
    entry: {
        home : './src/home/index.js'
        // index : './src/home/home.html'
    },
    //入口文件输出配置
    output: {
        path: 'build/home',
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            { css: /\.css$/, loader: 'style-loader' },
            // { javascript: /\.js$/, loader: 'js-loader' },
            // { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            // { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    }
};