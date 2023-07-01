#### 在 npm i xxx 时报错查看步骤

1.首先看报错的日志文件

一般控制台会输出出来，点击控制台中的日志文件，查看输出

![](/Users/beifengchuiluoyanlei/Documents/Vue/日志输出.png)

2.看此类一般是 package.json 和 package-lock.json 中的版本号不一致导致，故看其中有哪些包的名字，在两个文件中对比一下，

把版本号不一致的改成一致即可

![](/Users/beifengchuiluoyanlei/Documents/Vue/报错的组件.png)
