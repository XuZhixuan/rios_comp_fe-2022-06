# RIOS 主页项目

## 项目简介

此项目为 RIOS 实验室比赛页面项目。

### 项目结构

项目源代码位于 `src` 目录中，结构如下  

```
src
├── App.vue         App 组件
├── assets          项目静态资源
├── components      组件目录
│   └─── *
│       └── *.vue   组件文件
├── main.js         入口 JS 脚本
├── plugins
│   └── *.js        JS 插件
├── router
│   ├── index.js
│   └── routes.js   路由定义
├── store
│   └── index.js    全局存储定义
└── views
    └── *.vue       页面文件
```

### 技术应用

* 前端采用 Vue.js 2.x 框架
* Vue-router 与 Vuex 已启用
* 使用 Bootstrap-Vue 组件库
* 使用 Fontawesome 免费图标库
* 使用 Google API 字体服务

## 编译与部署

### 要求

* node.js 安装
* yarn/npm 包管理器
* vue-cli3 (可选)

### 安装依赖

运行 `yarn install` 或 `npm install`

### 编译

开发热编译运行 `yarn serve` 或使用 vue cli 工具 `vue ui` (需要@vue/cli)  
生产编译运行 `yarn build` 或使用 vue cli 工具 `vue ui` (需要@vue/cli)

### 部署

将编译后 `dist` 目录部署至静态服务器中即可

## Contributor

* [f(x,z)=xzx](https://github.com/XuZhixuan)

## Changelog

See [CHANGELOG.md](CHANGELOG.md)

## LICENSE

项目使用 MIT License

    Copyright © 2022 rioslab.org

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software
    and associated documentation files (the “Software”), to deal in the Software without
    restriction, including without limitation the rights to use, copy, modify, merge, publish,
    distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or
    substantial portions of the Software.

    THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
    BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
