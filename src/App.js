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
    const todos=this.state.todos.map((todo, i)=>{
      return ( 
        <div className="col-md-4" key={i}>
          <div className="card">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge rounded-pill bg-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p><mark>{todo.responsible}</mark></p>
            </div>
          </div>
        </div>
      )
    });
    return (
      <div className="App">
  
         <Navigation titulo={this.state.title } count={this.state.todos.length}/>
          <div className="container">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="row">
               {todos}
            </div>
          </div>
      </div>
    );
  }
}

export default App;
