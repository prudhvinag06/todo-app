import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/learning-examples/FirstComponent';
import Counter from './components/counter/Counter';
import TodoApp from './components/todo/TodoApp'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter/> */}
        <TodoApp/>
    </div>
    );
  }
} 

class LearningComponents extends Component{
  render() {
    return (
      <div className="learningComponents">
        My hello world!
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}

class SecondComponent extends Component {
  render() {
    return (
      <div className="secondComponent">
        SecondComponent
      </div>
    );
  }
}

function ThirdComponent(){
    return (
      <div className="thirdComponent">
        ThirdComponent
      </div>
    );
}
export default App;