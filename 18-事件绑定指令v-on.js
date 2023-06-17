
// 事件绑定指令

// vue提供了v-on事件绑定指令，用来辅助程序员为DOM元素绑定事件监听。语法格式为：
/* <h3>count 的值为： {{ count }}</> */
// 语法格式为： v-on:事件名称="事件处理函数的名称"
/* <button v-on:click="addCount">+1</> */

// 在Vue中写为 
// methods: {
//     add: function() {
//         alert('绑定成功');
//     }
// }

// 可简写为 add()

// v-on指令可以被简写为 @

// 注意：原生DOM对象有onclick、oninput、onkeyup等原生事件，替换为vue的事件绑定形式后，
// 分别为： v-on:click、v-on:input、v-on:keyup

