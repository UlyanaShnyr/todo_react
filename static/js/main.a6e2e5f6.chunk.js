(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(t,e,n){t.exports=n(28)},18:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(8),c=n.n(r),i=(n(18),n(1)),u=n(2),l=n(4),s=n(3),d=n(5),h=n(11),m=n(9),b=n(10),p=n.n(b),f=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(o)))).state={text:" "},n.handleChange=function(t){n.setState(Object(m.a)({},t.target.name,t.target.value))},n.handleSubmit=function(t){t.preventDefault(),n.props.onSubmit({id:p.a.generate(),text:n.state.text,complite:!1}),n.setState({text:" "})},n}return Object(d.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{name:"text",value:this.state.text,onChange:this.handleChange,placeholder:"What needs to be done?"}))}}]),e}(a.Component),v=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(o)))).state={todos:[]},n.addTodo=function(t){n.setState({todos:[t].concat(Object(h.a)(n.state.todos))})},n}return Object(d.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(f,{onSubmit:this.addTodo}),this.state.todos.map(function(t){return o.a.createElement("div",{key:t.id},t.text)}))}}]),e}(a.Component),j=(n(27),function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"todos"),o.a.createElement(v,null))}}]),e}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.a6e2e5f6.chunk.js.map