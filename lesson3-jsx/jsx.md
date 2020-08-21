# 本质

1. facebook起草的js扩展语法
2. 本质是一个js对象，会被babel编译，最终会转换为react.createElement

# JSX表达式

## 创建dom

1. 创建的dom必须只能有且仅有一个根节点，可以用一个空节点来表示根节点
2. 空节点其实是`<React.Fragment></React.Fragment>`的语法糖
3. 空节点不渲染真实的dom
```js
import React from 'react';
import ReactDom from 'react-dom';

const h1 = (
  <>
    <h1>
      hello
        <span>span</span>
    </h1>
    <p>world</p>
  </p>
)
ReactDOM.render(h1, document.getElementById('root'));
```

## 嵌入表达式
1. 用{}包裹变量或者表达式
2. 当{}中表达式的值为undefined或null或false时，是不会显示的,注意0是可以显示的哦
3. 注释： {/*  */}
4. 普通对象{a:1,b:2}不可以作为子元素(dom节点内的内容就是子元素)，react元素对象可以作为子元素，因为JSX最终会被编辑成element

```js
const a=10, b=20;
const h1 = (
  <>
    <h1>
     {a} * {b} = {a * b}
    </h1>
  </p>
)
ReactDOM.render(h1, document.getElementById('root'));
```

## jsx表达式中的属性

1. 类名要用className,而不是class
2. 属性使用小驼峰命名
3. 属性可以接受普通对象，如`style={{color: 'red'}}`
4. 自带防止注入攻击，如果要加脚本字符表达式，需要用`dangerouslySetInnerHTML`
```js
const content = "<div>防止注入攻击<h1>aaa</h1></div>";
const div = (
  <div dangerouslySetInnerHTML={{
    __html: content
  }}>
  </div>
)
ReactDOM.render(div, document.getElementById('root'));
```

# 元素的不可变性

1. jsx对象中的所有属性不可更改
2. 如果确实需要更改元素的属性，需要重新创建jsx对象


# xml规范

1. jsx遵循xml规范 每个表达式必须有结束即闭合
2. 可自结束 和 结束标记