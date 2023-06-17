
//  MVVM

// MVVM是vue实现数据驱动视图和双向数据绑定的核心原理。MVVM指的是Model、View和ViewModel,它把
// 每个HTML页面都拆成了这三个部分，如图所示：

// 在MVVM概念中：
//   Model表示当前页面渲染时所依赖的数据源
//   View表示当前页面所渲染的DOM结构
//   ViewModel表示vue的实例，它是MVVM的核心

// MVVM的工作原理
// ViewModel作为MVVM的核心，是它把当前页面的数据源（Model）和页面的结构（View）连接在了一起

// 当数据源发生变化时，会被ViewModel监听到，VM会根据最新的数据源自动更新页面的结构
// 当表单元素发生变化时，也会被VM监听到，VM会把变化过后最新的值自动同步到Model数据源中

// 注意：数据驱动视图和双向数据绑定的底层原理是MVVM（Model数据源、View视图、ViewModel就是vue的实例）
