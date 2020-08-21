# 事件

- 本质上是一个属性

- 事件命名用小驼峰命名法

## 内置组件设置事件

```js
import React from 'react'
import ReactDOM from 'react-dom'

// 内置组件设置事件
function handleClick(e) {
  console.log("点击事件")
}

const btn = '<button onClick={handleClick(e)}>点击！</button>'
// e是时间参数，事件触发时自动引入

ReactDOM.render(btn, document.getElementById("root"));
```

## 自定义组件设置事件

- 自定义倒计时组件

```js
import react, { Component } from 'react'

export default class Tick extends Component {
  constructor(props) {

    super(props);
    this.states = {
      number: props.number
    }

    const timer = setInterval(() => {
      this.setState({
        number: this.states.number - 1
      })
      if (this.state.number === 0) {
        clearInterval(timer)
        this.props.isOver && this.props.isOver()
      }
    }, 1000)
  }

  render() {
    return (
      <h1 onClick={this.props.OnClick}>
        倒计时： { this.state.number }
      </h1>
    )
  }
}
```

- 倒计时监听组件
  - 事件调用
  - ***如果没有特殊处理，在组件中this指向undefined***

```js
import react, { Component } from 'react'
import Tick from './Tick'

export default class TickControl extends Component {

  this.states() {
    isOver: false
  }

  // 事件调用写法2--start
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
    this.onOver = this.onOver.bind(this)
  }

  onOver() {
    this.setStates({
      isOver: true
    })
  }

  onClick() {
    console.log('点击了')
  }
  // 事件调用写法2---end

  // 事件调用写法3--start,直接将函数定义在对象上，是jsxNext语法，在实验阶段，但是可以用bebal进行编译
  onOver = () => {
    this.setStates({
      isOver: true
    })
  }

  onClick = () => {
    console.log('点击了')
  }
  // 事件调用写法3---end

  render() {
    let status = '正在倒计时'
    if(this.states.isOver) {
      status = '倒计时结束'
    }
    return (
      // 事件写法1，直接在render函数中用箭头函数
      <h1>
        <Tick number={10} isOver={() => {
          this.setStates({
            isOver: true
          })
        }}/>
      </h1>
      // 事件写法2，多个函数调用，用this
      <h1>
        <Tick
          number={10}
          isOver={this.onOver}
          onClick={this.onClick}
        />
      </h1>
      // 事件写法3，直接使用箭头函数定义方法函数
      <h1>
        <Tick
          number={10}
          isOver={this.onOver}
          onClick={this.onClick}
        />
      </h1>
    )
  }
}
```

- 展示主页面

```js
import react, reactDOM from 'react'
import TickControl from './TickControl'

reactDOM.render=(<TickControl />,document.getElementById('root'))
```
