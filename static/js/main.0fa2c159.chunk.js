(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(t,e,n){t.exports=n(28)},18:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),i=n(8),r=n.n(i),l=(n(18),n(1)),c=n(2),s=n(4),u=n(3),d=n(5),h=n(11),m=n(9),f=n(10),p=n.n(f),b=function(t){function e(){var t,n;Object(l.a)(this,e);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={text:""},n.handleChange=function(t){n.setState(Object(m.a)({},t.target.name,t.target.value))},n.handleSubmit=function(t){t.preventDefault(),n.props.onSubmit({id:p.a.generate(),text:n.state.text,complite:!1}),n.setState({text:" "})},n}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("input",{name:"text",value:this.state.text,onChange:this.handleChange,placeholder:"What needs to be done?"}))}}]),e}(o.Component),w=function(t){return a.a.createElement("div",{style:{display:"flex",justifyContent:"center",paddingTop:20}},a.a.createElement("div",{style:{textDecoration:t.todo.complite?"line-through":"",paddingRight:60,fontSize:20,width:"80%"},onClick:t.selectTab},t.todo.text),a.a.createElement("button",{onClick:t.deleteTodo,style:{backgroundColor:"transparent",borderWidth:0,fontSize:20,color:"red",width:"20%"}},"x"))},v=function(t){function e(){var t,n;Object(l.a)(this,e);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[],showFilter:"all"},n.addTodo=function(t){n.setState({todos:[t].concat(Object(h.a)(n.state.todos))})},n.selectTab=function(t){n.setState({todos:n.state.todos.map(function(e){return e.id===t?{id:e.id,text:e.text,complite:!e.complite}:e})})},n.updateShowFilter=function(t){n.setState({showFilter:t})},n.handleDeleteTodo=function(t){n.setState({todos:n.state.todos.filter(function(e){return e.id!==t})})},n.clearCompleted=function(){n.setState({todos:n.state.todos.filter(function(t){return!t.complite})})},n}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return"all"===this.state.showFilter?this.state={todos:this.state.todos}:"active"===this.state.showFilter?this.state={todos:this.state.todos.filter(function(t){return!t.complite})}:"completed"===this.state.showFilter&&(this.state={todos:this.state.todos.filter(function(t){return t.complite})}),a.a.createElement("div",null,a.a.createElement(b,{onSubmit:this.addTodo}),this.state.todos.map(function(e){return a.a.createElement(w,{key:e.id,todo:e,selectTab:function(){return t.selectTab(e.id)},deleteTodo:function(){return t.handleDeleteTodo(e.id)},showAll:function(){return t.handleShowAll()}})}),a.a.createElement("hr",{style:{width:160,borderWidth:.3}}),a.a.createElement("div",null,this.state.todos.filter(function(t){return!t.complite}).length," items left"),a.a.createElement("div",null,a.a.createElement("button",{class:"button",onClick:function(){return t.updateShowFilter("all")}},"All"),a.a.createElement("button",{class:"button",onClick:function(){return t.updateShowFilter("active")}},"Active"),a.a.createElement("button",{class:"button",onClick:function(){return t.updateShowFilter("completed")}},"Completed"),this.state.todos.filter(function(t){return t.complite}).length?a.a.createElement("button",{class:"button",onClick:function(){return t.clearCompleted()}},"Clear completed"):null))}}]),e}(o.Component),E=(n(27),function(t){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"todos"),a.a.createElement(v,null))}}]),e}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.0fa2c159.chunk.js.map