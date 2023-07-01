
// 1.什么是vue-router
// vue-router是vue.js官方给出的路由解决方案。它只能结合vue项目进行使用，能够轻松管理SPA项目
// 中组件的切换。
// vue-router的官方文档地址

// vue-router的官方文档地址：https://router.vuejs.org/zh/

// 2.vue-router安装和配置的步骤
// 1）安装vue-router包
// 2） 创建路由模块
// 3）导入并挂载路由模块
// 4）声明路由链接和占位符

// 2.1 在项目中安装vue-router
// 在vue2的项目中，安装vue-router的命令如下
// npm i vue-router@3.5.2 -s
// 2.2 创建路由模块
// 在src源代码目录下，新建router/index.js路由模块，并初始化如下的代码：

// 1. 导入 Vue 和 VueRouter的包
import Vue from 'vue'
import VueRouter from 'vue-router'

// 2. 调用Vue.use()函数， 把VueRouter 安装为Vue的插件
Vue.use(VueRouter)

// 3. 创建路由的实例对象
const router = new VueRouter()

// 4. 向外共享路由的实例对象
export default router