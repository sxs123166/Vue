// 1.动态路由的概念
// 动态路由指的是:把Hash地址中可变的部分定义为参数项，从而提高路由规则的复用性
// 在vue-router中使用英文的冒号（：）来定义路由的参数项。示例代码如下：

// 路由中的动态参数以 : 进行声明，冒号后面的是动态参数的名称
// { path: '/movie/:id', component: Movie }

// 将以下3个路由规划，合并成了一个，提高了路由规划的复用性
// { path: '/movie/1', component: Movie }
// { path: '/movie/2', component: Movie }
// { path: '/movie/3', component: Movie }