# 文件夹说明

## content文件夹

存放文档主要内容。[Products-Help-PublicContents](https://github.com/SuperMap/Products-Help-PublicContents)仓库中的所有内容，产品文档仓库中的所有内容，例如iDesktop Java的文档仓库[iDesktop-Java-MainDocs](https://github.com/SuperMap/iDesktop-Java-MainDocs)都需要拷贝到此文件夹下。

## src文件夹

存放页面相关的风格样式文件。

# 如何使用

将所有文件夹，直接拷贝到content文件夹下。content文件夹，需要从[Products-Help-MainFrame](https://github.com/SuperMap/Products-Help-MainFrame "文档主框架")仓库下载。

一个完整的产品帮助文档，由以下三个仓库的内容组成：
- Products-Help-MainFrame 
- Products-Help-PublicContents
- 产品文档仓库内容：命名规则：产品名称-MainDocs

其中，Products-Help-PublicContents仓库中的所有内容，产品文档仓库中的所有内容，都需要拷贝到Products-Help-MainFrame仓库中的content文件夹下。

# 如何编译文档

## 需要的环境

### Node.js

Node.js的安装与配置，请参照Node.js的官网https://nodejs.org/en/

### Yarn

Yarn的安装，可参照https://www.yarnpkg.com/zh-Hans/

### 命令行安装Gatsby开发环境

npm install -g gatsby-cli  全局安装（不用进入项目目录）

### 本地编译

如果是首次从Github仓库中下载源码文件，则需要为其安装依赖。打开cmd，路径跳转到源码目录下：

1. 执行 **yarn** 或**yarn install** 安装全部依赖。

2. 执行**yarn dev -p 端口号**，

3. 本地浏览器中，输入 **localhost:端口号**，访问在线文档。

# 如何发布文档
使用nginx发布。

# License
Content submitted to [reactjs.org](https://reactjs.org/) is CC-BY-4.0 licensed, as found in the [LICENSE-DOCS.md](https://github.com/open-source-explorer/reactjs.org/blob/master/LICENSE-DOCS.md) file.