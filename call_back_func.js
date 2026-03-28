import React, {Component} from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  counterValueChange() {
    this.setState({
      count: this.state.count +1
    }, 
    () => {
      console.log("call back..",this.state.count)
      }
    )
    console.log(this.state.count)
  }
  render() {
    return (
        <div>
           <button onClick={()=> this.counterValueChange()}>counter</button>
           <h2>Count : {this.state.count}</h2>
        </div>
    )
  }
}

export default Counter
