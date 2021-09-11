import React, { Component } from 'react'
import ReactState from './components/state/ReactState'
// import ReactProps from './components/props/ReactProps'
// import ReactLifecycle from './components/react-lifecyle/ReactLifecycle'

 class App extends Component {

  render() {
    
    return (
      <div>
       {/* <ReactLifecycle></ReactLifecycle> */}
       {/* <ReactProps></ReactProps> */}
       <ReactState></ReactState>
      </div>
    )
  }
}
export default App