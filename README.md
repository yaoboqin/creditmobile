安装

1.安装nodejs

2.在当前目录执行npm install安装依赖文件

3.运行npm start启动服务

4.将静态资源URL绑定到127.0.0.1

5.访问一个文件，会在当前目录生成.flex-combo目录

6.修改.flex-combo目录下的.flex-combo.json，在urls里加入一条

"/": "D:\\static"

8.修改settings.js文件来修改端口配置，包括文件后缀名、大小限制、存储目录等

demo说明

1.所有静态资源文件均在public目录下

2.普通模块采用seajs为模块加载器, angularjs模块采用angular-async-loader为模块加载器https://github.com/subchen/angular-async-loader

3.seajs配置文件在/public/creditmobile/base/js下seajs-config.js中，可配置常用模块

4.路由配置在/public/creditmobile/js/app-route.js中

5.所有页面模板文件放在/public/creditmobile/tpl中

6.需要用到service层的写在/public/creditmobile/service目录下

7.每个页面的控制层写在/public/creditmobile/controllers目录下

8.布局采用手淘方案，rem布局。参考https://github.com/amfe/lib-flexible
	