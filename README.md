# Environment 
准备：
1.Git-1.9.5-preview20150319或以上 
2.node-v0.12.2-x64或以上
备注：百度搜索git、nodejs下载。

安装：
先安装nodejs 直接点击下载下来的msi文件，下一步下一步安装好。
检测：打开nodejs命令行窗口(开始--》Node.js--》第一个命令) node -v ,npm -v 查看安装版本

然后安装git工具，下一步。。。完成。

命令安装：
1.打开nodejs命令行窗口，使用下边命令安装npm,若node自带npm可忽略
node cli.js install npm 
检测版本：npm -v 查看安装版本

2.SVN项目下载
https://192.168.10.245:800/svn/02Development/01Code/04Mobile/live1

3.切换到我们的项目，安装grunt 执行
例如：我的项目在d盘，打开git工具执行：cd d:live1/active 
然后执行 npm install -g grunt-cli

4.安装grunt相关插件
打开git工具执行 npm install
安装过程时会在项目中产生一个node_modules文件夹
（切记）这个文件夹不用上传到SVN。

5.代码安装检测
grunt serve 等待运行完成

6.查看效果
http://localhost:9000/index.html

## Build & development

运行项目使用grunt命令
 'grunt serve' 本地调试
 'grunt serve:dist' 上线命令


## Testing

 'grunt test'  代码单元测试命令


##  代码结构
app ---主目录

app--act  --->活动主目录
app--common  -->本地公共js目录
app--template  -->公共模版目录
app--widgets   -->公共外部JS库文件
app--common.less  -->公共CSS文件
app--index.html 首页
app--act/....各活动页面不解释

node_modules  ---grunt 插件目录（不要上传SVN）

dist---本地调式目录，也是上线目录
（在打测试环境、线上包的时候注意修改压缩包名字--app+日期，
例如：dist-->app0318,同时把压缩包里面的dist文件夹也改为app）


test---单元测试目录

abc.json,bower.json,package.json，gruntfile 配置文件 不用管，有需要可与我联系！

## 替换内容
1.IMGURL
将相对路径中的images修改为@@IMGURL，避免打包图片问题。
@@IMGURL='./img'; 相关活动img文件夹

2.TIMESTAMP
时间戳，避免缓存文件，使用：@@TIMESTAMP

3.VERSION
版本号，使用：@@VERSION

4.MINEXT
min压缩后缀，在自定义文件后可加上该标示。
例如：./index@@MINEXT.css