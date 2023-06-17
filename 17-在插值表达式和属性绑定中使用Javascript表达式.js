
// 使用Javascript表达式

// 在vue提供的模版渲染语法中，除了支持绑定简单的数据值之外，还支持JavaScript表达式的运算
// 如：

// {{ number+1 }}
// {{ ok? 'YES' : 'NO'}}
// {{ message.split('').reverse().join('') }}
/* <div v-bind:id="'list-' + id"></> */
// 在使用v-bind属性绑定期间，如果绑定内容需要进行动态拼接，则字符串的外面应该包裹单引号
/* <div :title="'box' + index">这是一个div</> */

