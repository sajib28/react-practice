import React, { Component } from "react";

export default class ReactState extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  counterHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };
   
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.counterHandler}>Counter</button>
        {/* <button onClick={()=>this.setState({count:this.state.count+1})}>Counter</button> */}
      </div>
    );
  }
}
