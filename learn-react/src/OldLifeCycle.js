import React, { Component } from 'react'

export class OldLifeCycle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      n:0
    }
    console.log("新组件诞生！")
  }

  render() {
    return (
      <div>
         <h1>旧版生命周期组件</h1>
         <h2>属性n: {this.props.n}</h2>
         <h2>状态n: {this.state.n}</h2>
      </div>
    )
  }
}

export default OldLifeCycle
