(this.webpackJsonpnotable=this.webpackJsonpnotable||[]).push([[0],{45:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),l=n(7),r=n.n(l),i=n(37),s=n(22),o=(n(45),n(3));var j=function(){return Object(o.jsx)("h1",{className:"header",children:"Notable"})},u=n(34),b=n.n(u);var d=function(e){return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("p",{className:"title",children:e.title}),Object(o.jsx)("p",{className:"content",children:e.content}),Object(o.jsx)("h5",{className:"del",onClick:function(){e.onDelete(e.id)},children:Object(o.jsx)(b.a,{})})]})},O=n(26),h=n(30),f=n(36),x=n.n(f),p=n(70),v=n(71);var m=function(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),a=n[0],l=n[1],r=Object(c.useState)({title:"",content:""}),i=Object(s.a)(r,2),j=i[0],u=i[1];function b(e){var t=e.target,n=t.name,c=t.value;u((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(O.a)({},n,c))}))}return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{children:[a?Object(o.jsx)("input",{name:"title",onChange:b,value:j.title,placeholder:"Title",spellCheck:"false"}):null,Object(o.jsx)("textarea",{name:"content",onChange:b,value:j.content,placeholder:"Take a note...",rows:a?3:1,spellCheck:"false",onClick:function(){l(!0)}}),Object(o.jsx)(v.a,{in:!!a,children:Object(o.jsx)(p.a,{className:"plus-btn",onClick:function(t){e.onAdd(j),u({title:"",content:""}),t.preventDefault()},children:Object(o.jsx)(x.a,{})})})]})})};var k=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1];function l(e){a((function(t){return t.filter((function(t,n){return n!==e}))}))}return Object(o.jsxs)("div",{children:[Object(o.jsx)(j,{}),Object(o.jsx)(m,{onAdd:function(e){a((function(t){return[].concat(Object(i.a)(t),[e])}))}}),n.map((function(e,t){return Object(o.jsx)(d,{id:t,title:e.title,content:e.content,onDelete:l},t)}))]})};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(k,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.4c45d09d.chunk.js.map