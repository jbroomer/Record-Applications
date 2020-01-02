(this.webpackJsonprecord_apps=this.webpackJsonprecord_apps||[]).push([[0],{113:function(e,a,t){e.exports=t(143)},143:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),i=t.n(l),u=t(30),c=t(56),s=t.n(c),m="/api/companies",o=function(){return s.a.get(m).then((function(e){return e.data}))},d=function(e){return s.a.post(m,e).then((function(e){return e.data}))},p=function(e){return s.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},E=t(75),g=function(e){var a=e.message;return null===a?null:r.a.createElement("div",null,r.a.createElement(E.a,{variant:"success"},r.a.createElement(E.a.Heading,null,a,"!")))},v=t(44),f=t(40),b=t(25),h=t(34),w=t(53),q=function(e){var a=e.newName,t=e.newURL,l=e.newLocation,i=e.startPeriod,c=e.setNewName,s=e.setNewURL,m=e.setNewLocation,o=e.setStartPeriod,p=e.companies,E=e.setCompanies,q=Object(n.useState)(null),N=Object(u.a)(q,2),C=N[0],S=N[1];return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement("h2",null,"Add Applications"),r.a.createElement("br",null),r.a.createElement(g,{message:C}),r.a.createElement(b.a.Group,null,r.a.createElement(b.a.Label,null,r.a.createElement("strong",null,"Company Name")),r.a.createElement(b.a.Control,{value:a,onChange:function(e){c(e.target.value)}})),r.a.createElement(b.a.Group,null,r.a.createElement(b.a.Label,null,r.a.createElement("strong",null,"Location")),r.a.createElement(b.a.Control,{value:l,onChange:function(e){m(e.target.value)}})),r.a.createElement(b.a.Group,null,r.a.createElement(b.a.Label,null,r.a.createElement("strong",null,"Application URL")),r.a.createElement(f.a,{className:"mb-3"},r.a.createElement(f.a.Prepend,null,r.a.createElement(f.a.Text,null,r.a.createElement("strong",null,"http://"))),r.a.createElement(v.a,{value:t,onChange:function(e){s(e.target.value)},"aria-describedby":"basic-addon3"}))),r.a.createElement(b.a.Group,null,r.a.createElement(b.a.Label,null,r.a.createElement("strong",null,"Start Period")),r.a.createElement(b.a.Control,{value:i,onChange:function(e){o(e.target.value)},placeholder:"Summer 2020"})),r.a.createElement("br",null)),r.a.createElement("div",null,r.a.createElement(w.a,{onClick:function(){c(""),s(""),o(""),m("")},variant:"outline-danger",size:"lg",block:!0},"Reset")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(w.a,{onClick:function(e){if(""===a)return null;var n=new Date;e.preventDefault();var r={name:a.trim(),location:l.trim(),url:"http://"+t,date:new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit"}).format(n),period:i.trim(),status:"In Review"};""===r.period&&(r.period="Summer 2020?"),d(r).then((function(e){E(p.concat(e)),c(""),s(""),o(""),m("")})),S("Added ".concat(a)),setTimeout((function(){S(null)}),5e3)},variant:"outline-success",size:"lg",block:!0},"Submit")))},N=t(93),C=t(91),S=t.n(C),y=t(19),j=function(e){var a=e.companies,t=e.setCompanies,l=Object(n.useState)(""),i=Object(u.a)(l,2),c=i[0],s=i[1],m=a.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())})).map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(S.a,{size:25,color:"red",onClick:function(){d(e)}},"Delete")),r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.location),r.a.createElement("td",null,e.date),r.a.createElement("td",null,e.period),r.a.createElement("td",null,r.a.createElement("a",{href:e.url},e.name)),r.a.createElement("td",null,r.a.createElement(y.a,null,r.a.createElement(y.a.Toggle,{variant:"secondary"},"In Review"),r.a.createElement(y.a.Menu,null,r.a.createElement(y.a.Item,null,"Coding Challenge"),r.a.createElement(y.a.Item,null,"Interview"),r.a.createElement(y.a.Item,null,"Rejected"))))))}));Object(n.useEffect)((function(){o().then((function(e){t(e)}))}),[]);var d=function(e){window.confirm("Are you sure you want to remove ".concat(e.name,"?"))&&p(Number(e.id)).setCompanies(a.filter((function(a){return a!==e.id})))};return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement(f.a,{size:"lg",type:"text",value:c,onChange:function(e){s(e.target.value)}},r.a.createElement(f.a.Prepend,null,r.a.createElement(f.a.Text,null,r.a.createElement("strong",null,"Filter"))),r.a.createElement(v.a,{"aria-label":"Large","aria-describedby":"inputGroup-sizing-sm"})),r.a.createElement(N.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",size:"sm",responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{width:"40"},"Delete"),r.a.createElement("th",{width:"50"},"#"),r.a.createElement("th",{width:"460"},"Company Name"),r.a.createElement("th",{width:"150"},"Location"),r.a.createElement("th",{width:"150"},"Applied Date"),r.a.createElement("th",{width:"200"},"Start Period"),r.a.createElement("th",{width:"250"},"URL"),r.a.createElement("th",{width:"150"},"Status"))),r.a.createElement("tbody",null,m))))},x=t(71),L=t(57),O=t(49),A=function(){return r.a.createElement(x.a,{bg:"dark",variant:"dark",expand:"lg"},r.a.createElement(x.a.Brand,{href:"/"},"Record-Applications"),r.a.createElement(x.a.Collapse,null,r.a.createElement(L.a,{className:"mr-auto"},r.a.createElement(L.a.Link,{href:"/add"},"Add Apps"),r.a.createElement(L.a.Link,{href:"/view"},"View Apps"),r.a.createElement(L.a.Link,{href:"/calendar"},"Calendar")),r.a.createElement(O.a,{title:"Account",id:"basic-nav-dropdown"},r.a.createElement(O.a.Item,{href:"/account"},"Account"),r.a.createElement(O.a.Divider,null),r.a.createElement(O.a.Item,{href:"/login"},"Login"),r.a.createElement(O.a.Item,{href:"/"},"Logout"))))},P=t(94),k=t(67),I=Object(P.a)((function(e){return{jumbo:{minHeight:848}}})),R=function(){var e=I();return r.a.createElement(h.a,{className:e.jumbo},r.a.createElement("h1",null,"This is the Home Page"),r.a.createElement("h4",null,"Welcome back Guest!"),r.a.createElement("p",null,"Please ",r.a.createElement(k.b,{to:"/login"},"sign in")," to add/view your applications."),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at auctor urna. Augue ut lectus arcu bibendum at varius vel pharetra vel. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Penatibus et magnis dis parturient montes nascetur. Mi proin sed libero enim sed faucibus. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Quisque non tellus orci ac auctor augue mauris augue. Amet tellus cras adipiscing enim eu turpis egestas. Sapien pellentesque habitant morbi tristique senectus. Pharetra et ultrices neque ornare. Ut pharetra sit amet aliquam id diam maecenas ultricies mi. Maecenas sed enim ut sem. Mi bibendum neque egestas congue. Faucibus a pellentesque sit amet porttitor eget dolor morbi. Non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Sit amet justo donec enim diam vulputate ut. Vestibulum morbi blandit cursus risus at. Vitae auctor eu augue ut lectus. Praesent tristique magna sit amet. Sodales ut eu sem integer vitae justo eget. Elementum curabitur vitae nunc sed. Nam at lectus urna duis convallis. Nulla posuere sollicitudin aliquam ultrices sagittis. Gravida neque convallis a cras semper auctor neque. Malesuada nunc vel risus commodo viverra. Enim praesent elementum facilisis leo vel fringilla. Nisi porta lorem mollis aliquam ut. Orci nulla pellentesque dignissim enim sit amet. Quis ipsum suspendisse ultrices gravida dictum fusce. Mi sit amet mauris commodo quis imperdiet massa. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Odio euismod lacinia at quis. Consequat semper viverra nam libero justo laoreet. Sed viverra tellus in hac. Nunc congue nisi vitae suscipit tellus mauris a diam. Sit amet purus gravida quis. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Praesent semper feugiat nibh sed. Quam vulputate dignissim suspendisse in. Ridiculus mus mauris vitae ultricies leo integer malesuada. Facilisis volutpat est velit egestas dui id ornare. Sit amet tellus cras adipiscing enim eu turpis egestas. Massa ultricies mi quis hendrerit. Duis at tellus at urna condimentum mattis. Arcu non sodales neque sodales. Integer vitae justo eget magna. Sagittis id consectetur purus ut faucibus. Egestas congue quisque egestas diam. Vulputate eu scelerisque felis imperdiet proin. Eu facilisis sed odio morbi quis commodo odio. Ut etiam sit amet nisl purus in mollis nunc sed. Justo nec ultrices dui sapien. Phasellus faucibus scelerisque eleifend donec pretium vulputate. Neque convallis a cras semper auctor. Commodo ullamcorper a lacus vestibulum sed arcu."))},U=function(){return r.a.createElement(h.a,null,r.a.createElement("h2",null,"Your Account"))},D=t(181),T=t(176),W=t(174),F=t(179),G=t(175),M=t(180),z=t(178),V=t(177),H=t(96),J=t(172),Q=Object(P.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),B=function(e){var a=Q();return r.a.createElement(J.a,{component:"main",maxWidth:"xs"},r.a.createElement(W.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(D.a,{className:a.avatar}),r.a.createElement(H.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:a.form,action:"/",noValidate:!0},r.a.createElement(F.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoFocus:!0}),r.a.createElement(F.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(G.a,{control:r.a.createElement(M.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(T.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"Sign In"),r.a.createElement(V.a,{container:!0},r.a.createElement(V.a,{item:!0,xs:!0},r.a.createElement(z.a,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(V.a,{item:!0},r.a.createElement(z.a,{href:"/signup",variant:"body2"},"Don't have an account? Sign Up"))))))},_=Object(P.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}})),Y=function(){var e=_();return r.a.createElement(J.a,{component:"main",maxWidth:"xs"},r.a.createElement(W.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(D.a,{className:e.avatar}),r.a.createElement(H.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:e.form,action:"/login",noValidate:!0},r.a.createElement(V.a,{container:!0,spacing:2},r.a.createElement(V.a,{item:!0,xs:12,sm:6},r.a.createElement(F.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})),r.a.createElement(V.a,{item:!0,xs:12,sm:6},r.a.createElement(F.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname"})),r.a.createElement(V.a,{item:!0,xs:12},r.a.createElement(F.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})),r.a.createElement(V.a,{item:!0,xs:12},r.a.createElement(F.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}))),r.a.createElement(T.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign Up"),r.a.createElement(V.a,{container:!0,justify:"flex-end"},r.a.createElement(V.a,{item:!0},r.a.createElement(z.a,{href:"/login",variant:"body2"},"Already have an account? Sign in"))))))},K=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"This is the Calendar Page"))},X=(t(142),t(38)),Z=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],l=a[1],i=Object(n.useState)(""),c=Object(u.a)(i,2),s=c[0],m=c[1],o=Object(n.useState)(""),d=Object(u.a)(o,2),p=d[0],E=d[1],g=Object(n.useState)(""),v=Object(u.a)(g,2),f=v[0],b=v[1],h=Object(n.useState)(""),w=Object(u.a)(h,2),N=w[0],C=w[1];return r.a.createElement("div",null,r.a.createElement(k.a,null,r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement(X.a,{exact:!0,path:"/",render:function(){return r.a.createElement(R,null)}}),r.a.createElement(X.a,{exact:!0,path:"/add",render:function(){return r.a.createElement(q,{newName:s,newURL:p,newLocation:f,startPeriod:N,setNewName:m,setNewURL:E,setNewLocation:b,setStartPeriod:C,companies:t,setCompanies:l})}}),r.a.createElement(X.a,{exact:!0,path:"/view",render:function(){return r.a.createElement(j,{companies:t,setCompanies:l})}}),r.a.createElement(X.a,{exact:!0,path:"/calendar",render:function(){return r.a.createElement(K,null)}}),r.a.createElement(X.a,{exact:!0,path:"/login",render:function(){return r.a.createElement(B,null)}}),r.a.createElement(X.a,{exact:!0,path:"/signup",render:function(){return r.a.createElement(Y,null)}}),r.a.createElement(X.a,{exact:!0,path:"/account",render:function(){return r.a.createElement(U,null)}}))))};i.a.render(r.a.createElement(Z,null),document.getElementById("root"))}},[[113,1,2]]]);
//# sourceMappingURL=main.04cb52d2.chunk.js.map