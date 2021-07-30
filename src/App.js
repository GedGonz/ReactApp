import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import  Navigation  from "./components/Navigation";
import { todos } from "./todos.json";

console.log(todos)

export class App extends Component {

  constructor(){
    super();
    this.state={
      title:"Tasks",
      todos
    }
  }
  render(){
    return (
      <div className="App">
  
         <Navigation titulo={this.state.title }/>
          <img src={logo} className="App-logo" alt="logo" />
         
      </div>
    );
  }
}

export default App;
