import React, { Component } from 'react'
import ReactProps from './components/props/ReactProps'
// import ReactLifecycle from './components/react-lifecyle/ReactLifecycle'

 class App extends Component {

  render() {
    
    return (
      <div>
       {/* <ReactLifecycle></ReactLifecycle> */}
       <ReactProps></ReactProps>
      </div>
    )
  }
}
export default App