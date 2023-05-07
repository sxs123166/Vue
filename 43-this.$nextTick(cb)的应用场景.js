
// this.$nextTick(cb)方法

// 组件的$nextTick(cb)方法，会把cb回调图迟到下一个DOM更新周期之后执行。
// 通俗的理解是：等组件的DOM更新完成之后，在执行cb回调函数。从而保证cb回调函数可以操作到最新的DOM元素

// 示例：
// this.$nextTick(() => {
//     this.$refs.iptRef.focus()
//   })