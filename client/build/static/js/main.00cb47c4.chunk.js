(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{112:function(e,t,n){"use strict";n.r(t);var c=n(137),r=n(0),i=n(37),o=n.n(i),a=n(141),s=n(40),l=n(33),d=n(9),u=n(11),h=n.n(u),j=n(19),b=Object(l.b)("shoppingList/getShoppingList",Object(j.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/items");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))),p=Object(l.b)("shoppingList/addItem",function(){var e=Object(j.a)(h.a.mark((function e(t,n){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch,n.getState,e.next=3,fetch("/api/items",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),m=Object(l.b)("shoppingList/deleteItem",function(){var e=Object(j.a)(h.a.mark((function e(t,n){var c,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.id,n.dispatch,n.getState,e.next=4,fetch("/api/items/".concat(c),{method:"DELETE"});case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),g=Object(l.b)("shoppingList/checkItem",function(){var e=Object(j.a)(h.a.mark((function e(t,n){var c,r,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.id,r=t.isChecked,n.dispatch,n.getState,e.next=4,fetch("/api/items/".concat(c),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({isChecked:r})});case 4:return i=e.sent,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),O=Object(l.c)({name:"shoppingList",initialState:{shoppingList:[],loading:null},extraReducers:Object(d.a)({},b.fulfilled,(function(e,t){e.shoppingList=t.payload,e.loading="success"}))}).reducer,f=Object(l.a)({reducer:{shoppingList:O}}),x=n(121),k=n(53),w=Object(x.a)({colors:{error:k.theme.colors.red,primary:k.theme.colors.teal,success:k.theme.colors.green,backgroundColor:{light:k.theme.colors.gray[100],dark:k.theme.colors.gray[800]},boxBackgroundColor:{light:k.theme.colors.whiteAlpha[900],dark:k.theme.colors.gray[700]},placeholder:{light:k.theme.colors.gray[400],dark:k.theme.colors.whiteAlpha[400]}}}),S=n(114),v=n(124),C=n(131),y=n(132),I=n(128),L=n(143),T=n(122),z=n(134),B=n(140),E=n(136),M=n(133),D=n(135),F=n(125),A=n(126),P=n(85),J=n(71),R=n(3),W=function(e){var t=Object(S.b)().toggleColorMode,n=Object(S.c)("dark","light"),c=Object(S.c)(J.a,J.b);return Object(R.jsx)(T.a,Object(P.a)({size:"md",fontSize:"lg","aria-label":"Switch to ".concat(n," mode"),variant:"ghost",color:"current",marginLeft:"2",onClick:t,icon:Object(R.jsx)(c,{})},e))},N=function(){return Object(R.jsx)(v.a,{justifyContent:"space-between",alignItems:"center",position:"fixed",minW:"100%",bg:"inherit",h:16,zIndex:4,boxShadow:"lg",children:Object(R.jsxs)(v.a,{px:{base:4},py:{base:2},alignItems:"center",justifyContent:"space-between",marginBottom:2,mx:"auto",width:{base:"90%",md:"75%"},children:[Object(R.jsx)(F.a,{fontWeight:"bold",fontSize:"lg",children:Object(R.jsx)(A.a,{href:"/",children:"Shopping List"})}),Object(R.jsx)(W,{justifySelf:"flex-end"})]})})},H=function(e){var t=Object(S.b)().colorMode;return Object(R.jsxs)(v.a,{minH:"100vh",width:"100%",flexDirection:"column",bg:"light"===t?"backgroundColor.light":"backgroundColor.dark",pb:4,children:[Object(R.jsx)(N,{}),Object(R.jsx)(v.a,{height:"100%",width:"100%",alignItems:"center",justifyContent:"top",flexDirection:"column",pt:24,children:e.children})]})},_=n(139),q=n(138),G=n(30),$=n(129),K=n(142),Q=n(130),U=n(92),V=n(87),X=n(127),Y=function(){var e=Object(_.a)(),t=e.isOpen,n=e.onOpen,c=e.onClose,r=Object(s.b)(),i=Object(V.a)(),o=i.handleSubmit,a=i.register,l=i.formState,d=i.errors,u=l.isSubmitting,b=function(){var e=Object(j.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(p({name:t.item}));case 2:c();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(T.a,{"aria-label":"Add",icon:Object(R.jsx)(X.a,{}),size:"lg",isRound:!0,colorScheme:"success",variant:"solid",onClick:n}),Object(R.jsxs)(q.a,{isOpen:t,onClose:c,children:[Object(R.jsx)(q.g,{}),Object(R.jsxs)(q.d,{children:[Object(R.jsx)(q.f,{children:"Add Item to Shopping List"}),Object(R.jsx)(q.c,{}),Object(R.jsxs)("form",{onSubmit:o(b),children:[Object(R.jsx)(q.b,{pb:6,children:Object(R.jsxs)(G.a,{isInvalid:d.item,children:[Object(R.jsx)($.a,{children:"Item"}),Object(R.jsx)(K.a,{placeholder:"Item",name:"item",ref:a({validate:function(e){return!!e||"Item is required"}}),autoFocus:!0}),Object(R.jsx)(Q.a,{children:d.item&&d.item.message})]})}),Object(R.jsxs)(q.e,{children:[Object(R.jsx)(U.a,{type:"submit",colorScheme:"success",mr:3,isLoading:u,loadingText:"Please wait..",children:"Save"}),Object(R.jsx)(U.a,{onClick:c,children:"Cancel"})]})]})]})]})]})},Z=function(){var e=Object(S.b)().colorMode,t=Object(s.c)((function(e){return e.shoppingList})).shoppingList,n=Object(s.b)();return Object(r.useEffect)((function(){n(b())}),[t]),Object(R.jsx)(H,{children:Object(R.jsxs)(v.a,{width:{base:"90%",md:"400px"},bg:"light"===e?"boxBackgroundColor.light":"boxBackgroundColor.dark",rounded:"lg",p:5,boxShadow:"lg",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[Object(R.jsx)(C.a,{fontSize:"0.8em",colorScheme:"success",alignSelf:"flex-end",children:t.length>0?"".concat(t.length," ITEMS"):"NO ITEMS"}),t?Object(R.jsx)(y.a,{spacing:"1em",mt:"1em",w:"100%",p:2,children:t.map((function(e){return Object(R.jsx)(I.a,{in:"true",minw:"100%",children:Object(R.jsx)(y.b,{w:"100%",children:Object(R.jsxs)(L.a,{display:"flex",w:"100%",spacing:4,children:[Object(R.jsx)(T.a,{"aria-label":"Mark Item",variant:e.isChecked?"solid":"outline",size:"sm",colorScheme:"success",icon:Object(R.jsx)(M.a,{}),isRound:!0,onClick:function(){return n(g({id:e._id,isChecked:!e.isChecked}))}}),Object(R.jsx)(z.a,{as:e.isChecked?"del":null,opacity:e.isChecked?"0.5":null,alignSelf:"center",fontSize:"xl",flexGrow:"1",isTruncated:!0,children:e.name}),Object(R.jsx)(T.a,{"aria-label":"Delete Item",variant:"solid",size:"sm",colorScheme:"error",icon:Object(R.jsx)(D.a,{}),isRound:!0,onClick:function(){return n(m({id:e._id}))}})]})})},e.id)}))}):Object(R.jsx)(B.a,{isIndeterminate:!0,color:"green.500"}),Object(R.jsx)(E.a,{orientation:"horizontal",my:2}),Object(R.jsx)(Y,{})]})})};var ee=function(){return Object(R.jsx)(s.a,{store:f,children:Object(R.jsx)(a.a,{theme:w,children:Object(R.jsx)(Z,{})})})},te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,144)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),i(e),o(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(R.jsxs)(r.StrictMode,{children:[Object(R.jsx)(c.a,{}),Object(R.jsx)(ee,{})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),te()}},[[112,1,2]]]);
//# sourceMappingURL=main.00cb47c4.chunk.js.map