// 声明式导航 & 编程式导航

// 在浏览器中， 点击链接实现导航的方式， 叫做声明式导航。例如：
// 普通网页中点击<a>链接、vue项目中点击<router-link>都属于声明式导航

// 在浏览器中，调用API方法实现导航的方式，叫做编程式导航。例如：
// 普通网页中调用location.href跳转到新页面的方式，属于编程式导航

// 5.1 vue-router中声明式导航API

// vue-router提供了许多编程式导航的API,其中最常用的导航API分别是：
// 1） this.$router.push('hash地址')
        //  跳转到指定的hash地址，并增加一条历史记录
// 2) this.$router.replace('hash地址')
            // 跳到指定的hash地址，并替换掉当前的历史记录
// 3）this.$router.go(数值n)
        //   调用this.$router.go()方法，可以在浏览历史中前进和后退。示例代码为：
        // <template>
        //     <h3>MyMovie组件 --- {{ id }}</h3>
        //    <button @click="goBack">后退</button>
        // </template>

        // <script>
        // export default {
        //     props: ['id'],
        //     methods: {
        //         goBack() { this.$router.go(-1) } //回退到之前的组件页面
        //     },
        // }
        // </script>


// 5.5 $router.go的简化用法
// 在实际开发中，一般只会前进和后退一层页面。因此vue-router提供了如下两个便捷方法
// 1）$router.back()
    // 在历史记录中，后退到上一个页面
// 2）$router.forward()
   // 在历史记录中，前进到下一个页面

