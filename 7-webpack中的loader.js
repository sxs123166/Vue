
// 1.loader概述
// 在实际开发过程中，webpack默认只能打包处理以.js后缀名结尾的模块。其他非.js后缀名结尾的模块
// webpack默认处理不了，需要调用loader加载起才可以正常打包，否则会报错

// loader加载器的作用：协助webpack打包处理特定的文件模块。比如：
//   css-loader可以打包处理.css相关的文件
//   less-loader可以打包处理.less相关的文件
//   babel-loader可以打包处理webpack无法处理的高级JS语法

// 3. 打包处理css文件
//  1） 运行 npm i style-loader@3.0.0 css-loader@5.2.6 -D命令，安装处理css文件的loader
//  2） 在webpack.config.js的module -> rules 数组中，添加loader规则如下：
    // module: {  //所有第三方文件模块的匹配机制
    // rules: [
        // {test: /\.css$/, use:['style-loader', 'css-loader']}
    // ]
    // }
//  其中，test表示匹配的文件类型，use表示要调用的loader 
//   注意：
    //  use数组中指定的loader顺序是固定的
    //  多个loader的调用顺序是：从后往前调用


    // 1)webpack 默认只能打包处理.js结尾的文件，处理不了其他后缀的文件
    // 2）由于代码中包含了index.css这个文件，因此webpack默认处理不了
    // 3）当webpack发现某个文件处理不了的时候，会查找webpack.config.js这个配置文件
        // 看module.rules数组中，是否配置了对应的loader加载器
    // 4）webpack把index.css这个文件，先转交给最后一个loader进行处理（先转交给css-loader）
    // 5)当css-loader处理完毕之后，会把处理的结果，转交给下一个loader(转交给style-loader)
    // 6)当style-loader处理完毕之后，发现没有下一个loader了，于是就把处理的结果，转交给了webpack
    // 7)webpack把style-loader处理的结果，合并到/dist/bundle.js中，最终生成打包好的文件夹
    
    // 4.打包处理less文件
    // 1） 运行 npm i less-loader@4.1.1 -D命令
    // 2）在webpack.config.js的 module-》rules数组中，添加loader规则如下：
    //   module: {  //所有第三方文件模块的匹配规则
    //     rules: [
    //         {test: /\.less$/,use: ['style-loader', 'css-loader', 'less-loader']}
    //     ]
    //   }

    // 5. 打包处理样式表中与url路径相关的文件
    // 1） 运行 npm i url-loader@4.1.1 file-loader@6.2.0 -D命令
    // 2）在webpack.config.js的module->rules数组中，添加loader规则如下：
    //  module: { //所有第三方文件模块的匹配规则
    //     rules: [ //文件后缀名的匹配规则
    //         {test:/\.jpg|png|gif$/,use: 'url-loader?limit=22229'}
    //     ]
    //  }

    // 其中？之后的是loader的参数项：
    //    limit 用来制定图片的大小， 单位是字节
    //    只有<=limit大小的图片，才会被转为base64格式的图片


    // 在webpack中，一切皆模块，都可以通过ES6导入模块语法进行到如何使用
    // 如果某个模块中，使用from接收到的成员为undefined，则没必要进行接收
    // import './css/index.css'

    // 6. 打包处理js文件中的高级语法
    // webpack只能打包处理一部分高级的javascript语法。对于那些webpack无法处理的高级js语法，
    // 需要借助于babel-loader进行打包处理。例如webpack无法处理下面的javascript代码
    // 在index.js中
    //  1） 定义了名为info的转换器
    // function info(target) {
    //     // 2)  为目标添加静态属性 info
    //     target.info = 'Person info'   
    // }

    // // 3) 为person类应用info装饰器
    // @info
    // class Person{}

    // // 4) 打印Person的静态属性 info
    // console.log(Person.info);

    // 6.1） 安装babel-loader相关的包
    // 运行如下的命令安装对应的依赖包：
    // npm i babel-loader@8.2.2 @babel/core@7.14.6 @babel/plugin-proposal-decorators@7.14.5 -D

    // 在webpack.config.js的module -> rules数组中，添加loader规则如下：
    // 注意：必须使用exclude指定排除项：因为node_modules目录下的第三方包不需要被打包
    // {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}

    // 6.2） 配置babel-loader
    // 在项目根目录中，创建名为babel.config.js的配置文件，定义babel的配置项如下：
    // module.exports = {
    //     // 声明babel可用的插件
    //     plugins: [['@babel/plugin-proposal-decoraters', {legacy: true}]]
    // }