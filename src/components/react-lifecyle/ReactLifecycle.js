import React, { Component } from 'react'

export default class ReactLifecycle extends Component {
    constructor(){
        super()
        this.state = {
          message:'sajib',
          count:0
        }
        console.log("Constructor called") // called when run the app
      }
      componentDidMount(){
        console.log("componentDidMount Called") // Called when need to update to dom and re render
        this.setState({
         message:"Sajib Kumar Biswas"
       })
      }
      componentWillUpdate(newProps,newState){
       console.log("componentWillUpdate Called") //called before render method
       console.log(newProps)
       console.log(newState)
     }
      componentDidUpdate(preProps,preState){
       console.log("componentDidUpdate Called") // called after the render method
       console.log(preProps)
       console.log(preState)
     }
    render() {
        console.log("Render function")
        return (
            <div>
            test {this.state.message}
            <br/>
            Count: {this.state.count}
            <br/>
            <button onClick={()=>this.setState({ count: this.state.count + 1})}>Counter</button>
          </div>
        )
    }
}
