(this.webpackJsonpevolvfit=this.webpackJsonpevolvfit||[]).push([[0],{73:function(e,t,a){},74:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},93:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(17),s=a.n(n),c=(a(73),a(29)),i=a(30),o=a(34),l=a(31),b=a(21),j=(a(74),a(12)),u=Object(j.a)([function(e){return e.user}],(function(e){return e.currentUser})),d="SET_CURRENT_USER",f=function(e){return{type:d,payload:e}},h=a(14),p=a(7),m=a(2),x=Object(j.b)({currentUser:u}),O=Object(h.b)(x,(function(e){return{setCurrentUser:function(t){return e(f(t))}}}))((function(e){var t=e.currentUser,a=e.setCurrentUser;console.log("userrrrrrr",t);return Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)(b.b,{className:"logo-part",to:"/",children:Object(m.jsx)("img",{className:"logo",style:{color:"black"},src:"https://evolvfit.in/static/media/EvolvLogo.6813368a.png",alt:"logo"})}),Object(m.jsxs)("div",{className:"options",children:[Object(m.jsx)(b.b,{style:{color:"white"},className:"option",to:"/user",children:"USER"}),Object(m.jsx)(b.b,{style:{color:"white"},className:"option",to:"/admin",children:"ADMIN"}),t?Object(m.jsxs)("div",{children:[Object(m.jsx)(b.b,{className:"option",to:"/",onClick:function(){a(null),console.log("user",t)},children:"SIGN OUT"}),Object(m.jsx)(p.a,{to:"/user"})]}):Object(m.jsx)(b.b,{className:"option ",to:"/signin",children:"SIGN IN"})]})]})})),g=a(45),v=a(133),M=a(134),y=a(128),D=(a(80),function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,n=t.value;r.setState(Object(g.a)({},a,n),console.log(r.state.user))},r.state={user:null},r}return Object(i.a)(a,[{key:"render",value:function(){var e=this;console.log("console",this.props),console.log(this.state.user);var t=this.props,a=(t.currentUser,t.setCurrentUser);return Object(m.jsxs)("div",{className:"login",children:[Object(m.jsx)("h1",{children:"Login Page"}),Object(m.jsxs)(M.a,{"aria-label":"Login page",name:"gender1",children:[Object(m.jsx)(y.a,{id:"admin",value:"admin",name:"user",type:"radio",onChange:this.handleChange,control:Object(m.jsx)(v.a,{}),label:"admin"}),Object(m.jsx)(y.a,{id:"user",value:"user",name:"user",type:"radio",onChange:this.handleChange,control:Object(m.jsx)(v.a,{}),label:"user"}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{type:"submit",onClick:function(){a(e.state.user)},children:"submit"})]})]})}}]),a}(r.Component)),N=Object(j.b)({currentUser:u}),G=Object(h.b)(N,(function(e){return{setCurrentUser:function(t){return e(f(t))}}}))(D),U=a(64),B=a(129),C=a(135),w=a(130),A=a(131),k=a(132),Z=a(50),H=Object(B.a)((function(e){return{root:{maxWidth:345,backgroundColor:"lightgrey",margin:"10px"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:Z.a[500]}}}));var z=function(e){e.index;var t=e.name,a=e.imgUrl,r=e.protin,n=e.carbs,s=e.fats,c=H();return Object(m.jsxs)(C.a,{className:c.root,children:[Object(m.jsx)(w.a,{title:t}),Object(m.jsx)(A.a,{className:c.media,image:a,title:t}),Object(m.jsxs)(k.a,{children:[Object(m.jsxs)("h3",{children:["protin: ",r]}),Object(m.jsxs)("h3",{children:["carbs: ",n]}),Object(m.jsxs)("h3",{children:["fats: ",s]}),Object(m.jsxs)("h2",{children:["Total calories: ",60*r+50*n+40*s]})]})]})},W=Object(j.a)([function(e){return e.dish}],(function(e){return e.collections})),S=(a(81),a(82),a(61)),_=a.n(S);var F=function(e){return Object(m.jsx)("div",{className:"app__header",children:Object(m.jsxs)("div",{className:"whole",children:[Object(m.jsx)("span",{className:"app__search"}),Object(m.jsx)(_.a,{style:{fontSize:20},className:"app__searchIcon"}),Object(m.jsxs)("form",{children:[Object(m.jsx)("input",{className:"app__input",type:"search",value:e.value,onChange:e.onChange,placeholder:e.placeholder}),Object(m.jsx)("button",{type:"submit",children:"serach"})]})]})})};var q=Object(j.b)({ddata:W}),R=Object(h.b)(q)((function(e){var t=e.ddata;console.log("data",t);var a=Object(r.useState)(""),n=Object(U.a)(a,2),s=n[0],c=n[1],i=(t||[]).filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())}));return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"search",children:Object(m.jsx)(F,{type:"search",placeholder:"Search",value:s,onChange:function(e){c(e.target.value)}})}),Object(m.jsx)("div",{className:"container",children:i.map((function(e){return Object(m.jsx)(z,{index:e.id,name:e.name,imgUrl:e.imageUrl,protin:e.protin,carbs:e.carbs,fats:e.fats})}))})]})})),T=a(23),V=(a(92),a(93),a(94),a(95),Object(j.b)({data:W})),Y=Object(h.b)(V)((function(e){var t=e.data,a=t;console.log(a);var n=Object(r.useRef)();return Object(m.jsxs)("div",{className:"ag-theme-alpine",id:"table",children:[Object(m.jsx)("h1",{children:"Admin page"}),Object(m.jsx)("h3",{children:"Details of dishes"}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{}),Object(m.jsx)("br",{}),Object(m.jsxs)(T.AgGridReact,{onGridReady:function(e){n.current=e.api},rowData:t,children:[Object(m.jsx)(T.AgGridColumn,{field:"id",sortable:!0,filter:!0,checkboxSelection:!0,editable:!0}),Object(m.jsx)(T.AgGridColumn,{field:"name",sortable:!0,filter:!0,editable:!0}),Object(m.jsx)(T.AgGridColumn,{field:"imageUrl",sortable:!0,filter:!0,editable:!0}),Object(m.jsx)(T.AgGridColumn,{field:"protin",sortable:!0,filter:!0,editable:!0}),Object(m.jsx)(T.AgGridColumn,{field:"carbs",sortable:!0,filter:!0,editable:!0}),Object(m.jsx)(T.AgGridColumn,{field:"fats",sortable:!0,filter:!0,editable:!0})]})]})})),E=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return"admin"===this.props.currentUser?Object(m.jsx)(Y,{}):Object(m.jsx)(p.a,{to:"/*"})}}]),a}(r.Component),I=Object(j.b)({currentUser:u}),L=Object(h.b)(I,(function(e){return{setCurrentUser:function(t){return e(f(t))}}}))(E),X=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:"404 page not found"}),Object(m.jsx)("p",{children:"We are sorry but the page you are looking for does not exist."})]})},J=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(O,{}),Object(m.jsxs)(p.d,{children:[Object(m.jsx)(p.b,{exact:!0,path:"/",component:R}),Object(m.jsx)(p.b,{path:"/signin",component:G}),Object(m.jsx)(p.b,{path:"/admin",component:L}),Object(m.jsx)(p.b,{path:"/user",component:R}),Object(m.jsx)(p.b,{path:"/*",component:X})]})]})}}]),a}(r.Component),P=(a(96),a(20)),K=a(62),Q=a.n(K),$=a(49),ee=a(63),te=a.n(ee),ae={collections:[{id:1,name:"pavbhagi",imageUrl:"https://images.unsplash.com/photo-1494597564530-871f2b93ac55?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1901&q=80",protin:50,carbs:60,fats:70},{id:2,name:"dhosa",imageUrl:"https://images.unsplash.com/photo-1614648692330-eb129aeb6880?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zml0bmVzcyUyMGRpc2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",protin:10,carbs:50,fats:30},{id:3,name:"panipuri",imageUrl:"https://images.unsplash.com/photo-1611759650297-9fd869c36f61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZpdG5lc3MlMjBkaXNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",protin:500,carbs:50,fats:0},{id:4,name:"salad",imageUrl:"https://images.unsplash.com/photo-1511909525232-61113c912358?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZpdG5lc3MlMjBkaXNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",protin:50,carbs:10,fats:5},{id:5,name:"fruits",imageUrl:"https://images.unsplash.com/photo-1455099229380-7b52707e356a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGZpdG5lc3MlMjBkaXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",protin:50,carbs:50,fats:50},{id:6,name:"boil eggs",imageUrl:"https://images.unsplash.com/photo-1593536748725-ad33f6798999?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGZpdG5lc3MlMjBkaXNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",protin:5,carbs:5,fats:500},{id:7,name:"juice",imageUrl:"https://images.unsplash.com/photo-1546039907-7fa05f864c02?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGZpdG5lc3MlMjBkaXNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",protin:1,carbs:5,fats:20},{id:8,name:"vegetables",imageUrl:"https://images.unsplash.com/photo-1581331474665-a0bbee7dfba9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGZpdG5lc3MlMjBkaXNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",protin:100,carbs:500,fats:5}]},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;return t.type,e},ne=a(54),se={currentUser:null},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(ne.a)(Object(ne.a)({},e),{},{currentUser:t.payload});default:return e}},ie={key:"root",storage:te.a,whitelist:["cart"]},oe=Object(P.b)({user:ce,dish:re}),le=Object($.a)(ie,oe),be=[Q.a],je=Object(P.c)(le,P.a.apply(void 0,be)),ue=Object($.b)(je);s.a.render(Object(m.jsx)(h.a,{store:je,children:Object(m.jsx)(b.a,{children:Object(m.jsx)("persistGate",{persistor:ue,children:Object(m.jsx)(J,{})})})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.fe7c7e41.chunk.js.map