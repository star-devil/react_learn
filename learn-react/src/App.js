import React, { Component } from 'react'
import OldLifeCycle from './OldLifeCycle'

export class App extends Component {
  state = {
    number: 1
  }
  render() {
    return (
      <div>
        <OldLifeCycle n={this.state.number} />
        <button onClick={() => {
          this.setState(state => ({
            number: state.number +1
          }))
        }}>n加1</button>
      </div>
    )
  }
}

export default App
