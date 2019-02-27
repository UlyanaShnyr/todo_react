import React, { Component } from 'react';
import TodoList from './TodoList';

import './App.css';
import TodoForm from './TodoForm';

class App extends Component {
  
  render() {
    return (
      <div className="App">
     <h1>todos</h1>
     <TodoList />    
      </div>
    );
  }
}

export default App;
