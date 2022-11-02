## 1. MySQL 安装

### 下载压缩包

首先到 oracle 官网

![image-20220711200540744](D:\杂七杂八\ideaFile\SuJava相关资料\文档\imgs\image-20220711200540744.png)

进入 MySQL 下载页面

![image-20220711201039277](D:\杂七杂八\ideaFile\SuJava相关资料\文档\imgs\image-20220711201039277.png)

选择软件

![image-20220711201151817](D:\杂七杂八\ideaFile\SuJava相关资料\文档\imgs\image-20220711201151817.png)

选择平台

![image-20220711201257131](D:\杂七杂八\ideaFile\SuJava相关资料\文档\imgs\image-20220711201257131.png)

下载

![image-20220711201354169](D:\杂七杂八\ideaFile\SuJava相关资料\文档\imgs\image-20220711201354169.png)

### 初始化数据库

解压缩，配置 PATH 环境变量，添加 `MySQL解压目录\bin` 到环境变量

> ***注意***
>
> * 如果用 cmd，那么改完环境变量，只要打开新的 cmd 窗口，就可以立刻生效
> * 如果用 Fluent Terminal，改完之后，需要注销当前用户才能生效



初始化需要执行

```cmd
mysqld --initialize
```

会生成初始数据库，在 `MySQL解压目录\data` 目录下，这时候需要查看一个名为 *.err 的文件，内部含有临时密码，把它记录下来，如图

![image-20220711202909959](D:\杂七杂八\ideaFile\SuJava相关资料\文档\imgs\image-20220711202909959.png)



### 运行服务器

以命令行窗口方式运行服务器

```cmd
mysqld --console
```

这种方式好处是

* 窗口打开，服务器运行
* 窗口关闭，服务器停止

还有一种方式是把 MySQL 安装为系统服务（要以管理员权限启动 cmd）

```cmd
mysqld --install
net start mysql
```

这样每次开机就会自动启动 MySQL 服务程序



### 运行客户端

打开一个新窗口，运行客户端，登录至服务器

```cmd
mysql -uroot -p
Enter password: 临时密码
```

* -u 之后跟的是用户名，root 是 MySQL 的管理员用户
* -p 表示接下来要输入密码，密码就是在前面步骤里让你记录的临时密码
* 首先做的一件事应该是把临时密码改掉

```sql
alter user 'root'@'localhost' identified by 'root';
```

* 作用就是将本地 root 用户的密码改为 root，当然改成别的密码也行，改成 root 只是为了好记
* 改完后输入 quit 退出，重新登录测试是否修改正确

### 



## 2.navicat 安装


https://www.jianshu.com/p/f78cd2ffef78


https://pan.baidu.com/s/1-VWyHR8mjH325VZZjN0qvw

 提取码：tfjb



## 3运行.sql文件建表