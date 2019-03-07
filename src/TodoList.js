import React, { Component } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

class TodoList extends Component {
  state={
      todos:[]
  }

  addTodo=(todo)=>{     
      this.setState({
      todos:[todo, ...this.state.todos]
      })
  }
  selectTab=(id)=>{
    this.setState({
      todos:this.state.todos.map(todo=>{
        if(todo.id===id){
          console.log('===');
          return{
           
            id:todo.id,
            text:todo.text,
            complite:!todo.complite
          };

        }else{
          console.log('!==');
          return todo;
        };
      })
      })
  }
  render() {   
    return (
      <div>  
        <TodoForm onSubmit={this.addTodo}/>
        {this.state.todos.map(todo=>(

          <Todo 
          key={todo.id}
          todo={todo}
          selectTab={()=>this.selectTab(todo.id)}
          />  
        ))}
        <hr style={{width:160, borderWidth: 0.3}}/>
        <div>{this.state.todos.filter(todo=>!todo.complite).length} items left </div>
      </div>
    );
  }
}

export default TodoList;
