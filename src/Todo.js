import React from 'react';
export default(props)=>(
<div style={{ textDecoration: props.todo.complite ? "line-through":""}} onClick={props.selectTab}>
    {props.todo.text}
</div>
)