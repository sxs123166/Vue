// 1.路由重定向

// 路由重定向指的是：用户在访问地址A的时候，强制用户跳转到地址C，从而展示特定的组件页面。
// 通过路由规则的redirect属性，指定一个新的路由地址，可以很方便地设置路由的重定向

// const router = new VueRouter({
//     // 在 routes 数组中， 声明路由的匹配规则
//     routes: [
//         // 当用户访问 / 的时候，通过redirect 属性跳转到 /home 对应的路由规则
//         { path: '/', rediirect: '/home'},
//         { path: '/home', component: Home },
//         { path: '/movie', component: Movie },
//         { path: '/about', component: About }
//     ]
// })

// 2.嵌套路由
// 通过路由实现组件的嵌套展示，叫做嵌套路由

// 1) 模版内容中又有子级路由链接
// 2） 点击子级路由链接显示子级模版内容

// 3.通过children属性声明子路由规则
// 在src/router/index.js路由模块中，导入需要的组件，并使用children属性声明子路由规则
import Tab1 from '@/components/tabs/tab1.vue'
import Tab2 from '@/components/tabs/Tab2.vue'

const router = new VueRouter({
    routes: [
        {//about 页面的路由规则(父级路由规则)
            path: '2D',
            component: About,
            children: [ //1. 通过children 属性，嵌套声明子级路由规划
              { path: 'tab1', component: Tab1 }, // 2.访问 /about/tab1 时，展示 Tab1组件
              { path: 'tab2', component: Tab2 }  // 2.访问 /about/tab2 时，展示tab2组件
            ]
        }
    ]
})