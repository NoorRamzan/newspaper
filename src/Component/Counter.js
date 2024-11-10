import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props){
        super(props)
        this.state={
            Counter:0
        }
    }
    increment(){
        this.setState({
            Counter:this.state.Counter  +1
        },
        ()=>{
            console.log('callback value',this.state.Counter)
        })      
    }

  render() {
    return (
        <div>
      <div>
        counter - {this.state.Counter}
    <button onClick={()=>this.increment()}>Increment</button>
      </div>
      </div>
    )
  }
}

export default Counter
