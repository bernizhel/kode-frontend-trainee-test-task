(this["webpackJsonpkode-frontend-trainee-test-task"]=this["webpackJsonpkode-frontend-trainee-test-task"]||[]).push([[0],{13:function(e,a,t){e.exports={InputTabs:"InputTabs_InputTabs__1kChQ",tab:"InputTabs_tab__2_E1K",tab_active:"InputTabs_tab_active__VbhSw"}},14:function(e,a,t){e.exports={OutputInfo:"OutputInfo_OutputInfo__39XrK",primary:"OutputInfo_primary__3nwF3",secondary:"OutputInfo_secondary__1Xssu"}},16:function(e,a,t){e.exports={InputBlock:"InputBlock_InputBlock__1aIod",heading:"InputBlock_heading__1gxFu"}},27:function(e,a,t){e.exports={App:"App_App__Pw6_9"}},28:function(e,a,t){e.exports={OutputBlock:"OutputBlock_OutputBlock__2UATP"}},3:function(e,a,t){e.exports={button_active:"InputSort_button_active__3GeEl",dialogue:"InputSort_dialogue__21lhz",dialogue__container:"InputSort_dialogue__container__20vAE",dialogue__heading:"InputSort_dialogue__heading__2cFZj",dialogue__radio:"InputSort_dialogue__radio__3WypS",dialogue__button:"InputSort_dialogue__button__2amdH",dialogue__label:"InputSort_dialogue__label__2cua6",dialogue__label_active:"InputSort_dialogue__label_active__15DYD",dialogue__close:"InputSort_dialogue__close__RdZXn"}},32:function(e,a,t){e.exports={AgainButton:"AgainButton_AgainButton__2dRMy"}},37:function(e,a,t){},5:function(e,a,t){e.exports={UserBlock:"UserBlock_UserBlock__1kvXe",avatar:"UserBlock_avatar__BGwZh",text:"UserBlock_text__2zONK",names:"UserBlock_names__2whkI",name:"UserBlock_name__gHgmv",tag:"UserBlock_tag__3jMi6",position:"UserBlock_position__14lCp"}},64:function(e,a,t){"use strict";t.r(a);var n=t(12),c=t.n(n),s=(t(37),t(27)),r=t.n(s),o=t(16),i=t.n(o),u=t(6),l=t(1),p=t(9),d=t.n(p),b=t.p+"static/media/loop.f3a7d698.svg",m=t(3),A=t.n(m),x=t.p+"static/media/sort.3431f404.svg",j=t.p+"static/media/cross.abc0b3d8.svg",g=t(0);var O=function(){var e=Object(l.useState)(!1),a=Object(u.a)(e,2),t=a[0],n=a[1],c=Object(l.useState)("alphabet"),s=Object(u.a)(c,2),r=s[0],o=s[1],i="sort",p="alphabet",d="birthday";return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("input",{className:"".concat(r===d?A.a.button_active:""),type:"image",src:x,alt:"Sort!",onClick:function(){return n(!0)}}),t&&Object(g.jsx)("aside",{className:A.a.dialogue,onClick:function(){return n(!1)},children:Object(g.jsxs)("div",{className:A.a.dialogue__container,onClick:function(e){return e.stopPropagation()},children:[Object(g.jsx)("h2",{className:A.a.dialogue__heading,children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430"}),Object(g.jsx)("input",{className:A.a.dialogue__button,type:"radio",id:p,name:i}),Object(g.jsx)("label",{className:"".concat(A.a.dialogue__label," ").concat(r===p?A.a.dialogue__label_active:""),htmlFor:p,onClick:function(){o(p),n(!1)},children:"\u041f\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443"}),Object(g.jsx)("input",{className:A.a.dialogue__button,type:"radio",id:d,name:i}),Object(g.jsx)("label",{className:"".concat(A.a.dialogue__label," ").concat(r===d?A.a.dialogue__label_active:""),htmlFor:d,onClick:function(){o(d),n(!1)},children:"\u041f\u043e \u0434\u043d\u044e \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"}),Object(g.jsx)("input",{className:A.a.dialogue__close,type:"image",src:j,alt:"Close",onClick:function(){return n(!1)}})]})})]})};var h=function(){var e=Object(l.useState)(!1),a=Object(u.a)(e,2),t=a[0],n=a[1];return Object(g.jsxs)("div",{className:d.a.InputSearch,children:[Object(g.jsx)("img",{className:"".concat(d.a.loop," ").concat(t?d.a.loop_active:""),src:b,alt:"Search!"}),Object(g.jsx)("input",{className:d.a.input,type:"text",placeholder:t?"":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f, \u0442\u0435\u0433...",onFocus:function(){return n(!0)},onBlur:function(){return n(!1)}}),Object(g.jsx)(O,{})]})},f=t(13),k=t.n(f);var S=function(){var e=Object(l.useState)(0),a=Object(u.a)(e,2),t=a[0],n=a[1];return Object(g.jsx)("div",{className:k.a.InputTabs,children:[{text:"All"},{text:"Designers"},{text:"Android"},{text:"iOS"},{text:"Managment"},{text:"QA"},{text:"HR"},{text:"PR"},{text:"Back Office"},{text:"Frontend"},{text:"Backend"},{text:"Support"},{text:"Analytics"}].map((function(e,a){return Object(g.jsx)("button",{className:"".concat(k.a.tab," ").concat(t===a?k.a.tab_active:""),onClick:function(){return n(a)},children:e.text},a)}))})};var v=function(){return Object(g.jsxs)("header",{className:i.a.InputBlock,children:[Object(g.jsx)("h1",{className:i.a.heading,children:"\u041f\u043e\u0438\u0441\u043a"}),Object(g.jsx)(h,{}),Object(g.jsx)(S,{})]})},R=t(28),I=t.n(R),N=t(7),U=t.n(N);var q=function(){return Object(g.jsxs)("div",{className:U.a.UserPlaceholder,children:[Object(g.jsx)("div",{className:U.a.avatar}),Object(g.jsxs)("div",{className:U.a.text,children:[Object(g.jsx)("div",{className:U.a.name}),Object(g.jsx)("div",{className:U.a.position})]})]})},B=t(14),Y=t.n(B);var y=function(e){var a=e.image,t=e.alt,n=void 0===t?"An Info Image":t,c=e.primary,s=void 0===c?"No Info":c,r=e.secondary,o=e.action;return Object(g.jsxs)("aside",{className:Y.a.OutputInfo,children:[a&&Object(g.jsx)("img",{src:a,alt:n}),Object(g.jsx)("p",{className:Y.a.primary,children:s}),r&&Object(g.jsx)("p",{className:Y.a.secondary,children:r}),o&&Object(g.jsx)("p",{children:o})]})},C=t(4),D=t(18),F=t.n(D),K=t(30),V=t(8),T=t(31),Z=t.n(T);var _="loading",H="idle",M="error",Q={status:_,users:[],search:"",tab:"",sort:"alphabet"},G=Object(V.b)("app/fetchUsers",Object(K.a)(F.a.mark((function e(){var a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.a.get("https://stoplight.io/mocks/kode-education/trainee-test/25143926/users",{responseType:"json"}).then((function(e){return e.data}));case 2:return a=e.sent,e.abrupt("return",a.items);case 4:case"end":return e.stop()}}),e)})))),J=Object(V.c)({name:"app",initialState:Q,reducers:{setSearch:function(e,a){e.search=a.payload},setTab:function(e,a){e.tab=a.payload},setSort:function(e,a){e.sort=a.payload}},extraReducers:function(e){e.addCase(G.pending,(function(e){e.status=_})).addCase(G.fulfilled,(function(e,a){e.status=H,e.users=a.payload})).addCase(G.rejected,(function(e){e.status=M}))}}),W=J.actions,L=(W.setSearch,W.setTab,W.setSort,function(e){return e.app.status}),z=function(e){return e.app.users},E=J.reducer,P=t(32),w=t.n(P);var X=function(){var e=Object(C.b)();return Object(g.jsx)("button",{className:w.a.AgainButton,onClick:function(){e(G())},children:"\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0441\u043d\u043e\u0432\u0430"})},$=t(5),ee=t.n($),ae=t.p+"static/media/avatar-placeholder.ac856b27.svg";var te=function(e){var a=e.avatarUrl,t=e.firstName,n=e.lastName,c=e.userTag,s=e.position;return e.department,e.birthday,e.phone,Object(g.jsxs)("div",{className:ee.a.UserBlock,children:[Object(g.jsx)("img",{className:ee.a.avatar,src:a,onError:function(e){e.target.src=ae},alt:"User Avatar"}),Object(g.jsxs)("div",{className:ee.a.text,children:[Object(g.jsxs)("p",{className:ee.a.names,children:[Object(g.jsxs)("span",{className:ee.a.name,children:[t," ",n]}),Object(g.jsx)("span",{className:ee.a.tag,children:c})]}),Object(g.jsx)("p",{className:ee.a.position,children:s})]})]})};var ne=function(){var e=Object(C.b)(),a=Object(C.c)(z),t=Object(C.c)(L);return Object(l.useEffect)((function(){e(G())}),[e]),Object(g.jsxs)("main",{className:I.a.OutputBlock,children:[t===_&&function(){for(var e=[],a=0;a<10;a++)e.push(Object(g.jsx)(q,{},a));return e}(),t===H&&(0!==a.length?a.map((function(e){return Object(g.jsx)(te,{avatarUrl:e.avatarUrl,firstName:e.firstName,lastName:e.lastName,userTag:e.userTag,position:e.position,department:e.department,birthday:e.birthday,phone:e.phone},e.id)})):Object(g.jsx)(y,{image:"data:image/png;base64,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",primary:"\u041c\u044b \u043d\u0438\u043a\u043e\u0433\u043e \u043d\u0435 \u043d\u0430\u0448\u043b\u0438",secondary:"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439 \u0441\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441"})),t===M&&Object(g.jsx)(y,{image:"data:image/png;base64,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",primary:"\u041a\u0430\u043a\u043e\u0439-\u0442\u043e \u0441\u0432\u0435\u0440\u0445\u0440\u0430\u0437\u0443\u043c \u0432\u0441\u0435 \u0441\u043b\u043e\u043c\u0430\u043b",secondary:"\u041f\u043e\u0441\u0442\u0430\u0440\u0430\u0435\u043c\u0441\u044f \u0431\u044b\u0441\u0442\u0440\u043e \u043f\u043e\u0447\u0438\u043d\u0438\u0442\u044c",action:Object(g.jsx)(X,{})})]})};var ce=function(){return Object(g.jsxs)("div",{className:r.a.App,children:[Object(g.jsx)(v,{}),Object(g.jsx)(ne,{})]})},se=Object(V.a)({reducer:{app:E}});c.a.render(Object(g.jsx)(C.a,{store:se,children:Object(g.jsx)(ce,{})}),document.getElementById("root"))},7:function(e,a,t){e.exports={UserPlaceholder:"UserPlaceholder_UserPlaceholder__1LGt-",avatar:"UserPlaceholder_avatar__2nyxD",name:"UserPlaceholder_name__bFm72",position:"UserPlaceholder_position__1X4De",text:"UserPlaceholder_text__1-0T3"}},9:function(e,a,t){e.exports={InputSearch:"InputSearch_InputSearch__1jBZ2",input:"InputSearch_input__3PmTT",loop:"InputSearch_loop__369Zz",loop_active:"InputSearch_loop_active__poQDH"}}},[[64,1,2]]]);
//# sourceMappingURL=main.4fbacf2d.chunk.js.map