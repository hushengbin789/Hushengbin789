const {resolve} =require('path')

module.exports = {
    //entry 入口文件
    // entry:'./src/chip.js', //单入口
    //entry:['./src/main.js','./src/index.js'], //数组格式写法
    //Object
    // entry:{
    //     one:'./src/index.js',
    //     two:'./src/main.js'
    // },
    /*entry:{
        // chip:'./src/chip.js',
        hyxt:'./src/hyxt.js'
    },*/
    entry:{
        onea:['./src/chip.js','./src/index.js'],
        twob:'./src/main.js'
    },
    /*output:{
        filename:'chip.min.js',
        path:resolve(__dirname,'build') //文件名可随意指定
    },*/
    /*output:{
        filename:'[name].js',
        path:resolve(__dirname,'build') //文件名可随意指定
    },*/
    output:{
        filename:'[name].js',
        path:resolve(__dirname,'build2') //文件名可随意指定
    },
    module:{
        rules:[

        ]
    },
    //plugins 插件
    plugins:[],
    //development production
    mode:'development' ,//指定模式 ，如生产模式、开发模式
}