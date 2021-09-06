# 修改的部分
1. 当项目的config配置文件中配置了isLib为true时，表示taro-ui会被打包成h5的形式，可直接用于web的项目中

# 复制备份
"name": "@tomatojs/webpack-runner",
"version": "0.0.1-alpha.5",

"name": "@tarojs/webpack-runner",
"version": "3.3.6",

# `@tarojs/webpack-runner`

暴露给 `@tarojs/cli` 的 H5 Webpack 启动器。

`@tarojs/webpack-runner` 从 `@tarojs/cli` 接受 [Taro 编译配置](https://taro-docs.jd.com/taro/docs/config.html)，把编译配置分解成 Webpack 配置，并刚启动 Webpack 把项目源码编译为适配 Web 应用目录结构的代码。
