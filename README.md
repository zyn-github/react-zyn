```
## 先从进入项目根目录说起，也就是第一眼看到的文件(版本不同，可能稍有不同)

	README.md :这个文件主要作用就是对项目的说明，已经默认写好了一些东西，你可以简单看看。如果是工作中，你可以把文件中的内容删除，自己来写这个文件，编写这个文件可以使用Markdown的语法来编写。

	package.json: 这个文件是webpack配置和项目包管理文件，项目中依赖的第三方包（包的版本）和一些常用命令配置都在这个里边进行配置，当然脚手架已经为我们配置了一些了，目前位置，我们不需要改动。如果你对webpack了解，对这个一定也很熟悉。

	package-lock.json：这个文件用一句话来解释，就是锁定安装时的版本号，并且需要上传到git，以保证其他人再npm install 时大家的依赖能保证一致。

	gitignore : 这个是git的选择性上传的配置文件，比如一会要介绍的node_modules文件夹，就需要配置不上传。

	node_modules :这个文件夹就是我们项目的依赖包，到目前位置，脚手架已经都给我们下载好了，你不需要单独安装什么。

	public ：公共文件，里边有公用模板和图标等一些东西。

	src ： 主要代码编写文件，这个文件夹里的文件对我们来说最重要，都需要我们掌握。

#public文件夹介绍
	favicon.ico : 这个是网站或者说项目的图标，一般在浏览器标签页的左上角显示。

	index.html : 首页的模板文件，我们可以试着改动一下，就能看到结果。

	mainifest.json：移动端配置文件，

#src文件夹介绍

	index.js : 这个就是项目的入口文件。

	index.css ：这个是index.js里的CSS文件。

	app.js : 这个文件相当于一个方法模块，也是一个简单的模块化编程。

	serviceWorker.js: 这个是用于写移动端开发的，PWA必须用到这个文件，有了这个文件，就相当于有了离线浏览的功能。


#src/Note 添加注释组件
	介绍两种注释的写法

#src/Button 自定义组件 (props 获取父组件传值)


# src/Flow 组件之间通讯方式
	父组件向子组件通讯、子组件向父组件通讯	、(context来实现 跨级组件数据的传递)、没有嵌套关系组件通讯

#src/Props (props 获取父组件传值)	
	propTypes的定义、propTypes类型、

#src/Event (Event 绑定事件)		
	介绍四种事件绑定方式、绑定事件，释放事件

#src/Hook (React 声明周期函数执行)		
	this.setState({'prolist': Object.keys(PropTypes)}); 用法
	可以使用 this.setState的钩子是方法是 componentWillMount、componentDidMount、componentWillReceiveProps、componentDidUpdate

#src/Dom (React DOM操作)	
	获取当前组件DOM实例（ReactDOM.findDOMNode(this)）、获取子组件DOM实例（ref）

#src/Dom (React 添加Class)	
	classNames 模块实现批量添加class
```