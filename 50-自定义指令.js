// 1.自定义指令
// vue官方提供了v-text、v-for、v-model、v-if等常用的指令。除此之外vue还允许开发者自定义指令

// 2.自定义指令的分类
// vue中的自定义指令分为两类，分别是：
//  私有自定义指令
//  全局自定义指令

// 3.私有自定义指令
// 在每个自定义指令中，可以在directives节点下声明私有自定义指令。示例代码为：
// directives: {
//     color: {
//         // 为绑定到的 HTML 元素设置红色的文字
//         bind(el) {
//             // 形参中的 el 是绑定了此指令的、原生的DOM对象
//             el.style.color = 'res'
//         }
//     }
// }

// 4.update函数
// bind函数只调用一次:当指令第一次绑定到元素时调用,当DOM更新时bind函数不会触发。 update函数会在
// 每次DOM更新时被调用。示例代码如下：
// directive: {
//     color: {
//         // 当指令第一次被绑定到元素时调用
//         bind(el, binding) {
//             el.style.color = binding.value
//         },
//         // 每次DOM更新时被调用
//         update(el, binding) {
//             el.style.color = binding.value
//         }
//     }
// }

// 8.函数简写
// 如果insert和update函数中的逻辑完全相同，则对象格式的自定义指令可以简写成函数格式
// directives: {
//    在 insert和 update时， 会触发相同的业务逻辑
    //  color(el, binding) {
    //     el.style.color = binding.value
    //  }
// }

// 9. 全局自定义指令
// 全局共享的自定义指令需要通过“Vue.directive()”进行声明，示例代码为：

// 参数1:字符串，表示全局自定义指令的名字
// 参数2: 对象， 用来接收指令的参数值
// Vue.directive('color', function(el, binding) {
//     el.style.color = binding.value
// })