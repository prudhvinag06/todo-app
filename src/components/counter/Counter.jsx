import React, { Component } from 'react';
import './Counter.css'

export default class Counter extends Component{
    constructor(){
        super();
        this.state = {
            counter : 0
        }
        //important if u wanna use state variables in that method
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);

        //no need of bind method if we are using arrow functions
    }
    render() {
        return (
            <div className="counter">
                <div className = "positives">
                <CounterButton by = {1} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
                <CounterButton by = {5} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
                <CounterButton by = {10} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
                <span className="count">{this.state.counter}</span>
                </div>



        </div> 
        
        );
      }

      increment(by){
        console.log('incrsdasdement');
        this.setState({
            counter : this.state.counter + by
        });
     }
     decrement(by){
        console.log('incrsdasdement');
        this.setState({
            counter : this.state.counter - by
        });
     }
}

class CounterButton extends Component{
    constructor(){
        super();
        this.state = {
            counter : 0
        }
        //important if u wanna use state variables in that method
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        //no need of bind method if we are using arrow functions
    }

    render() {
      return (
        <div className="Counter">
          <button onClick={this.increment}>+{this.props.by}</button>
          <button onClick={this.decrement}>-{this.props.by}</button>
         
        </div>  
      );
    }
    increment(){
       this.setState({
           counter : this.state.counter + this.props.by
       });

       this.props.incrementMethod(this.props.by);
    }
    decrement(){
        // this.setState({
        //     counter : this.state.counter - this.props.by
        // });
 
        this.props.decrementMethod(this.props.by);
     }
  }

