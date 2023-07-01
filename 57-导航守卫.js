// 6.导航守卫
// 导航守卫可以控制路由的访问权限

// 6.1 全局前置导航守卫
// 每次发生路由的导航跳转时，都会触发全局前置守卫。因此，在全局前置守卫中，程序员可以对每个路由进行访问权限的控制
// 创建路由实例对象
// const router = new VueRouter({ ... })

// 调用路由实例对象的 beforeEach方法，即可声明 “全局前置守卫”
// 每次发生路由导航跳转的时候，都会触发fn这个回调函数
// router.beforeEach(fn)

// 6.2全局前置守卫的回调函数中接收三个形参，格式为：
// 创建路由实例对象
// const router = new VueRouter({ ... })

//全局前置守卫
// router.beforeEach((to, from, next) => {
    // to 是将要访问的路由的信息对象
    // from 是将要离开的路由的信息对象
    // next 是一个函数，调用next() 表示放行， 允许这次路由导航

// })

// 6.3 next函数的三种调用方式
