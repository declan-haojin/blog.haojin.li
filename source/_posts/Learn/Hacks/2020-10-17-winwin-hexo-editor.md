---
title: winwin-hexo-editor 完全部署指南
widgets:
  - position: left
    type: toc
  - position: left
    type: recent_posts
  - position: left
    type: subscribe_email
    description: null
    feedburner_id: declan-haojin
  - position: left
    type: categories
toc: true
thumbnail: >-
  https://cdn.jsdelivr.net/gh/declan-haojin/blog-image@master/img/20200905125456.jpg
cover: >-
  https://cdn.jsdelivr.net/gh/declan-haojin/blog-image@master/img/20200905125456.jpg
abbrlink: 81fc
tags:
  - tutorial
categories:
  - Learn
  - Hacks
date: 2020-10-17 21:21:47
password:
---

## 在这之前你需要准备好

- 一台安装了宝塔面板的linux centOS服务器
- hexo博客已经成功部署到了服务器上
- 能够访问ssh

## 下载Hexo Editor到服务器端

定位到Hexo博客的根目录下，执行以下命令

### 国内下载

```bash
git clone https://gitee.com/winwin_2011/winwin-hexo-editor
```


### 国外下载

```bash
git clone https://github.com/YuJianghao/winwin-hexo-editor
```

刷新一下宝塔面板，我们就会看到下载好的`winwin-hexo-editor`文件夹

<!--more-->

![image-20200921204021649](https://cdn.jsdelivr.net/gh/declan-haojin/blog-image@master/img/20200921204021.png)

### 安装

进入`winwin-hexo-editor`文件夹

```bash
cd winwin-hexo-editor
```

运行安装程序

~~~bash
bash ./install.sh
~~~

## 配置

自动配置步骤

~~~bash
? What's your hexo blog path? The same path as your hexo _config.yml file
//输入Hexo博客的根目录，可以直接从宝塔面板复制
? Which port do you like your hexo-editor running at? (5777)
//通常来说直接使用默认5777端口即可，直接回车
? Secret Key?Like a password, can be anything you like. (secret)
//任意的密钥，不是登录的密码，之后不会再使用到
? Access token expire time Eg: "2 days", "10h", "7d"  (1h)
//默认直接回车即可
? Refresh token expire time Eg: "2 days", "10h", "7d"  (7d)
//默认直接回车即可
? username: (admin)
//这个是日后登录的用户名，默认为admin，也可以自行设置
? password default `admin` [hidden]
//这个是日后登录的密码，默认为admin，也可以自行设置

~~~

之后如果成功的话就会出现以下的界面：

~~~bash
Finished!
Run `npm start` to start with node
Run `npm run prd` to start with pm2
Run `npm run stop` to stop
Run `npm run restart` to restart
Run `bash ./update.sh` to update
Run `bash ./setup.sh` to change settings
Remember to (re)start your service manually!
Have fun :p
For uninstall:
1) Remove the following folder: /www/wwwroot/blog.lihaojin.cn/winwin-hexo-editor
2) Stop youre service manually.
~~~

## 开启Hexo Editor服务

## pm2进程守护

接下来我选择的是使用pm2来守护进程

~~~bash
npm run prd
~~~

出现这样的界面则代表开启成功

![image-20200921205138619](C:\Users\19132\AppData\Roaming\Typora\typora-user-images\image-20200921205138619.png)

## 放行端口 

接下来转到宝塔面板安全选项卡界面，放行`5777`端口

![image-20200921205340402](https://cdn.jsdelivr.net/gh/declan-haojin/blog-image@master/img/20200921205340.png)

接下来我们就可以通过`服务器ip地址:5777`的方式来访问Hexo Editor了

![image-20200921205425398](https://cdn.jsdelivr.net/gh/declan-haojin/blog-image@master/img/20201110092707.png)

接着填写你刚刚设置的用户名和密码登录即可