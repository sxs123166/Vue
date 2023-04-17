
// 1.组件之间的关系
// 在项目开发中，组件之间的最常见的关系分为如下两种：
// 1）父子关系
// 2）兄弟关系

// 2.父子组件之间的数据共享
// 父组件向子组件共享数据需要使用自定义属性，示例代码为：

// 父组件：
/* <Son :msg="message" :user="userinfo"><Son/> */

// data() {
//     return {
//         message: 'hello, vue.js',
//         userinfo: { name: 'zs', age: 20}
//     }
// }

/* <template>
    <div>
        <h5>Son组件<h5/>
        <p>父组件传递过来的 msg 值是：{{ msg }}</p>
        <p>父组件传递过来的 user 值是：{{ user }}</p>

        <div/>
    <template/>
    props: ['msg', 'user'] */
    