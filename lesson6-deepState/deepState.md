# 深度认识setState

- setState对状态的改变。**可能**是异步的

> 如果改变状态的代码处于某个html元素的事件中，则可能是异步的，否则是同步的

## setState函数使用

- 第一个参数直接传对象

```js
export default class Tick extends Component {
  constructor(props) {
    super(props);
    // 初始化状态
    this.state = {
      left: this,props.number
    };
    // 状态的变化
    this.timer = setInterVal(() => {
      y
      this.setState({
        left: this.state.left - 1
      });
    }, 1000)
  }

  render() {
    return (
      <>
        <h1>
          倒计时剩下的时间： {this.state.left}
        </h1>
      </>
    )
  }
}
```

- 第一个参数传方法
```js
this.setState(cur => {
  // cur表示当前状态
  // 该函数的返回值会覆盖（混合）掉之前的状态
  // 是一个异步执行的函数，在合适的时间执行
  return {
    n: cur.n + 1
  }
}, () => {
  // 所有状态全部更新完成，并且重新渲染之后才会执行这个回调函数
  console.log('更新完成')
});
```
***使用场景：***
如果遇到某个事件，需要同步调用多次，需要使用函数得到最近状态
- 最佳实践
1. 把所有的setState当做异步的
2. 永远不要信任setState调用之后的状态
3. 如果要使用改变之后的状态，需要使用回调函数（setState的第二个参数）
4. 如果新的状态要根据之前的状态进行运算，使用函数的方式改变状态（setSate的第一个函数）

## 异步setState优化

> react会对异步的setState进行优化，即将多次setState进行合并（等待多次状态改变完成之后，在统一对state进行改变，然后再触发render）