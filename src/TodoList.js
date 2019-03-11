import React, { Component } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

class TodoList extends Component {
  state={
      todos:[],
      showFilter:'all'
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
          
          return{
           
            id:todo.id,
            text:todo.text,
            complite:!todo.complite
          };

        }else{
         
          return todo;
        };
      })
      })
  };
  updateShowFilter=(filterName)=>{
    this.setState({           
      showFilter:filterName,     
    })
  }

  handleDeleteTodo=(id)=>{
    this.setState({
      todos:this.state.todos.filter(todo=>todo.id!==id)
    })
    
  }

  clearCompleted=()=>{
    this.setState({
      todos:this.state.todos.filter(todo=>!todo.complite)
    })
    
  }
  render() {  
    let todos=[];
    
    if(this.state.showFilter==='all') {
      this.state={
        todos:this.state.todos
      }
       
      
   
    }else if(this.state.showFilter==='active'){
      this.state={
        todos:this.state.todos.filter(todo=>!todo.complite),
        
    }
     
      
    }
    else if(this.state.showFilter==='completed'){
      this.state={
        todos:this.state.todos.filter(todo=>todo.complite)
      }
   
     
    }
    return (
      <div>  
        <TodoForm onSubmit={this.addTodo}/>
        {this.state.todos.map(todo=>(

          <Todo 
          key={todo.id}
          todo={todo}
          selectTab={()=>this.selectTab(todo.id)}
          deleteTodo={()=>this.handleDeleteTodo(todo.id)}
          showAll={()=>this.handleShowAll()}
          />  
        ))}
        <hr style={{width:160, borderWidth: 0.3}}/>
        <div >
          {this.state.todos.filter(todo=>!todo.complite).length} items left 
                
        </div>
        <div>
        <button class="button" onClick={()=>this.updateShowFilter("all")} >All</button>
        <button class="button" onClick={()=>this.updateShowFilter("active")} >Active</button>
        <button class="button" onClick={()=>this.updateShowFilter("completed")}>Completed</button> 
        {this.state.todos.filter(todo=>todo.complite).length?
        <button class="button" onClick={()=>this.clearCompleted()}>Clear completed</button>:
        null }
        </div>
     
         
          
         
         
      </div>
    );
  }
}

export default TodoList;