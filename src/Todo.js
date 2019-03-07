import React from 'react';
export default(props)=>(

<div style={{display:"flex", justifyContent:"center"}}>


<div style={{ textDecoration: props.todo.complite ? "line-through":""}} 
onClick={props.selectTab}>
    {props.todo.text}
</div>
<button onClick={props.deleteTodo}>x</button>
</div>
)