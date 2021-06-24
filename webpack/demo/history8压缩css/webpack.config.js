const {resolve} =require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
//mini-css-extract-plugin提取css为单独文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
    //entry 入口文件
    // entry:'./src/index.js', //单入口
    //entry:['./src/main.js','./src/index.js'], //数组格式写法
    entry:{
        index1:'./src/index.js',
    },
    // entry:{
    //     vendor:['./src/js/jquery.js','./src/js/comm.js'],
    //     index:'./src/js/index.js',
    //     cart:'./src/js/cart.js',
    // },
    output:{
        filename:'[name].js',
        path:resolve(__dirname,'build') //文件名可随意指定
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                //从右到左  从下到上
                // use:['style-loader','css-loader'] 
                use:[MiniCssExtractPlugin.loader,'css-loader','postcss-loader']
            },
            {
                test:/\.less$/,
                //从右到左  从下到上
                use:[MiniCssExtractPlugin.loader,'css-loader','less-loader','postcss-loader'] 
            },
            {
                test:/\.scss$/,
                //从右到左  从下到上
                use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader','postcss-loader'] 
            }
        ]
    },
    //plugins 插件
    plugins:[
        //默认会创建一个空的目的就是自动引入资源
        // new HtmlWebpackPlugin()
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html',
            // chunks:['index','vendor'],
            // minify:{
            //     // collapseWhitespace:true, //移除空格
            //     removeComments:true //删除注释  还原用shift + alt +f
            // }
        }),
        new MiniCssExtractPlugin({
            filename:'demo.css'
        }),
        
        // new OptimizeCssAssetsWebpackPlugin()
    ],
    optimization: {
        minimize: true,
        minimizer: [
             new CssMinimizerPlugin(),
        ],
    },
    //development production
    mode:'development' ,//指定模式 ，如生产模式、开发模式
}