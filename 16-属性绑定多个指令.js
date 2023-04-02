

// 注意： 插值表达式只能用在元素的内容节点中，不能用在元素的内容节点中
// 比如在 <input type="text" placeholder="{{tips}}">

//属性绑定指令
// 如果要为元素的属性动态绑定属性值，则需要用到v-bind属性绑定指令。用法示例为：
// 使用示例： <input type="text" v-bind:placeholder="tips">

// vue规定 v-bind: 指令可以简写为  :
// 即 <input type="text" :placeholder="tips">

