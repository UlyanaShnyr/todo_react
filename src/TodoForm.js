import React, { Component } from 'react';
import shortid from 'shortid';

class TodoForm extends Component {
  state={
      text:' '
  }

  handleChange=(event)=>{
    this.setState({
    [event.target.name]:event.target.value
    })    
  }

  handleSubmit=(event)=>{
  event.preventDefault();
    this.props.onSubmit({  
        id:shortid.generate() ,     
        text:this.state.text,
        complite:false
    });
   // console.log(id);
    
    this.setState({
        text:" "
    })
  }


  render() {
    return (
    <form onSubmit={this.handleSubmit}>        
        <input 
        name="text"
        value={this.state.text} 
        onChange={this.handleChange}
        placeholder="What needs to be done?">
        </input>
     </form>
    );
  }
}

export default TodoForm;
