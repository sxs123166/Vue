
// 1.什么是动态组件？
// 动态组件指的是动态切换组件的显示与隐藏

// 2.如何实现动态组件的渲染
// vue提供了一个内置的<component>组件，专门用来实现动态组件的渲染。示例代码为：

// data() {
//     // 1）. 当前要渲染的组件的名称
//     return { comName: 'Left'}
// }

// 2）.通过 is属性，动态的制定要渲染的组件
/* <component :is="comName"></component> */

// 3）.点击按钮， 动态切换组件的名称
/* <button @click="comName" = 'Left'>展示 Left 组件</button> */
/* <button @click="comName" = 'Right'>展示 Right 组件</button> */

// 3.keep-alive 对应的生命周期函数
// 当组件被缓存时，会自动触发组件的deactivated生命周期函数
// 当组件被激活时，会自动触发组件的activated生命周期函数

// 4.keep-alive的include属性
// inclucde属性用来指定：只有名称匹配的组件会被缓存。多个组件名之间用英文的逗号分隔。
{/* <keep-alive include="MyLeft,MyRight">
    <component :is="comName"></component>
</keep-alive> */}