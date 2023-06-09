// vue优势：MVVM项目中，程序员不需要操作DOM，程序员只需要把数据维护好即可（数据驱动视图）
// 结论：在vue项目中，强烈建议不要使用jQuery

// 假设：在vue中，需要操作DOM了，需要拿到页面上某个DOM元素的引用，才是应该怎么办？

// 1. 什么是ref引用？
// ref用来辅助开发者在不依赖jQuery的情况下，获取DOM元素或组件的引用
// 每个vue实例上，都包含一个$refs对象，里面存储着对应的DOM元素或组件的引用。默认情况下，组件的$refs指向一个空对象

{/* <template>
  <div>
    <p ref="myParagraph">This is a paragraph.</p>
  </div>
</template>

<script>
export default {
  mounted() {
    const paragraph = this.$refs.myParagraph; // 访问DOM元素
    // 对DOM元素进行操作或访问
  }
}
</script> */}