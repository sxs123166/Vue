
// 什么是Source Map?

// Source Map 就是一个信息文件，里面存储着位置信息。也就是说，Source Map文件中存储着压缩混淆后的代码
// ，所对应的转换前的位置
// 有了它，出错的时候，除错工具将直接显示源代码，而不是转换后的代码，能够极大地方便后期的测试

// 3.1 ）默认Source Map的问题
// 开发环境下默认生成的Source Map,记录的是生成后的代码位置。会导致运行时报错的行数与源代码的行数不一致的问题

// 3.2）解决默认Source Map的问题
// 开发环境下，推荐在webpack.config.js中添加如下的配置，即可保证运行时报错的行数与源代码的行数保持一致
// module.exports = {
//     mode: 'development',
//     // eval-source-map 仅限在“开发模式”下使用，不建议在“生产模式”下使用
//     // 此选项生成的Source Map能够保证“运行时报错的行数”与“源代码的行数”保持一致
//     devtool: 'eval-source-map'
//     //省略其他配置项
// }

// 4.webpack生产环境下的Source Map
// 在生产环境下，如果省略了devtool选项，则最终生成的文件中不包含Source Map.这能够防止
// 原始代码通过Source Map的形式暴露给别人

// 4.1 只定位行数不暴露源码
// 在生产环境下，如果只想定位报错的具体行数，且不想暴露源码。此时可以将devtool的值设置为
// nosources-source-map。



// 5. Source Map 的最佳实践
// 1）开发环境下：
//    建议把devtool的值设置为eval-source-map
//    好处：可以精准定位到具体的错误行
// 2） 生产环境下：
//   建议关闭Source Map或将devtool的值设置为nosources-source-map
//   好处：防止源码泄漏，提高网站的安全性

// 实际开发中需要自己配置webpack吗？
// 不需要！
//   实际开发中会使用命令行工具（俗称CLI）一键生成带有webpack的项目
// 开箱即用，所有webpack配置项都是现成的
// 我们只需要知道webpack中的基本概念即可

