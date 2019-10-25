# React概述

> 官网：https://react.docchina.org/

## 什么是React

是用于**解决ui复杂度**的开源**JavaScript库**
> 它不是框架

## 特点

- 轻量
- 原生
- 易扩展
- 不依赖宿主环境
- 渐进式
- 单向数据流动：自顶向下
- 用js代码声明界面
- 组件化

## 核心：React.createElement

创建一个虚拟dom（react元素），本质是一个对象

1. 参数1：元素类型，如果是字符串，是一个普通的html元素
2. 参数2：元素的属性，是一个对象
3. 后续参数：元素的子节点

## JSX

是js的扩展语法，但没有被js官方收录，需要用babel进行转义