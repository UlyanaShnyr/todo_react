import React from 'react';
export default(props)=>(

<div style={{display:"flex", justifyContent:"center",paddingTop:20}}>


<div style={{ textDecoration: props.todo.complite ? "line-through":"", paddingRight:60, fontSize:20,}} 
onClick={props.selectTab}>
    {props.todo.text}
</div>
<button onClick={props.deleteTodo} style={{backgroundColor:'white', borderWidth: 0, color:'red' }}>x</button>
</div>
)