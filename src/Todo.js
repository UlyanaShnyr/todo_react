import React from 'react';
export default(props)=>(

<div style={{display:"flex", justifyContent:"center",paddingTop:20}}>


<div style={{ textDecoration: props.todo.complite ? "line-through":"", paddingRight:60, fontSize:20,width:"80%", }} 
onClick={props.selectTab}>
    {props.todo.text}
</div>
<button onClick={props.deleteTodo} style={{backgroundColor: 'transparent', borderWidth: 0,fontSize:20, color:'red', width:"20%"}}>x</button>
</div>
)