(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(2),o=a.n(c),l=a(3),i=a(4),r=a(6),u=a(5),m=(a(12),a(13),function(e){Object(r.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).getMessages=function(){fetch("/message/getMessage").then((function(e){return e.json()})).then((function(e){var t=e.data;n.setState({messageTitle:t.title,messageBody:t.body})})).catch((function(e){n.setState({messageTitle:"Whoops",messageBody:"It looks like got a database problem"})}))},n.state={messageTitle:null,messageBody:null},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getMessages()}},{key:"render",value:function(){return s.a.createElement("div",{className:"landing-page"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"message-box"},s.a.createElement("h2",null,this.state.messageTitle),s.a.createElement("p",null,this.state.messageBody))))}}]),a}(n.Component));o.a.render(s.a.createElement(m,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.43dae8b9.chunk.js.map