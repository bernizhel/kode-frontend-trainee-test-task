(this["webpackJsonpkode-frontend-trainee-test-task"]=this["webpackJsonpkode-frontend-trainee-test-task"]||[]).push([[0],{10:function(e,a,t){e.exports={InputSearch:"InputSearch_InputSearch__1jBZ2",input:"InputSearch_input__3PmTT",loop:"InputSearch_loop__369Zz",loop_active:"InputSearch_loop_active__poQDH"}},14:function(e,a,t){e.exports={InputTabs:"InputTabs_InputTabs__1kChQ",tab:"InputTabs_tab__2_E1K",tab_active:"InputTabs_tab_active__VbhSw"}},15:function(e,a,t){e.exports={OutputInfo:"OutputInfo_OutputInfo__39XrK",primary:"OutputInfo_primary__3nwF3",secondary:"OutputInfo_secondary__1Xssu"}},17:function(e,a,t){e.exports={InputBlock:"InputBlock_InputBlock__1aIod",heading:"InputBlock_heading__1gxFu"}},2:function(e,a,t){e.exports={UserBlock:"UserBlock_UserBlock__1kvXe",avatar:"UserBlock_avatar__BGwZh",text:"UserBlock_text__2zONK",main:"UserBlock_main__2jANy",names:"UserBlock_names__2whkI",name:"UserBlock_name__gHgmv",tag:"UserBlock_tag__3jMi6",position:"UserBlock_position__14lCp",birthday:"UserBlock_birthday__1gQst",details:"UserBlock_details__14CD1",details__main:"UserBlock_details__main__2dvWc",details__info:"UserBlock_details__info__2kXTC",details__avatar:"UserBlock_details__avatar__124ly",details__text:"UserBlock_details__text__2zN3F",details__names:"UserBlock_details__names__1PbQT",details__name:"UserBlock_details__name__1_YOD",details__tag:"UserBlock_details__tag__2Cal6",details__position:"UserBlock_details__position__1wwRl",details__back:"UserBlock_details__back__1-HWj",details__contacts:"UserBlock_details__contacts__9EfTo",details__birthday:"UserBlock_details__birthday__1dOw1",details__phone:"UserBlock_details__phone__2Gy5k",details__number:"UserBlock_details__number__1Bk3w",details__dates:"UserBlock_details__dates__pVQmS",details__date:"UserBlock_details__date__1-7OK",details__age:"UserBlock_details__age__2Eq_X"}},28:function(e,a,t){e.exports={App:"App_App__Pw6_9"}},32:function(e,a,t){e.exports={AgainButton:"AgainButton_AgainButton__2dRMy"}},37:function(e,a,t){},5:function(e,a,t){e.exports={button_active:"InputSort_button_active__3GeEl",dialogue:"InputSort_dialogue__21lhz",dialogue__container:"InputSort_dialogue__container__20vAE",dialogue__heading:"InputSort_dialogue__heading__2cFZj",dialogue__radio:"InputSort_dialogue__radio__3WypS",dialogue__button:"InputSort_dialogue__button__2amdH",dialogue__label:"InputSort_dialogue__label__2cua6",dialogue__label_active:"InputSort_dialogue__label_active__15DYD",dialogue__close:"InputSort_dialogue__close__RdZXn"}},64:function(e,a,t){"use strict";t.r(a);var n=t(13),s=t.n(n),c=(t(37),t(28)),i=t.n(c),r=t(17),o=t.n(r),l=t(6),d=t(1),u=t(10),m=t.n(u),_=t.p+"static/media/loop.f3a7d698.svg",b=t(5),p=t.n(b),j=t.p+"static/media/sort.3431f404.svg",g=t.p+"static/media/cross.abc0b3d8.svg",h=t(18),v=t.n(h),x=t(29),O=t(9),A=t(30),f=t.n(A);var k="loading",N="idle",S="error",U={ALL:{code:"",name:"\u0412\u0441\u0435"},ANDROID:{code:"android",name:"Android"},IOS:{code:"ios",name:"iOS"},DESIGN:{code:"design",name:"\u0414\u0438\u0437\u0430\u0439\u043d"},MANAGEMENT:{code:"management",name:"\u041c\u0435\u043d\u0435\u0434\u0436\u043c\u0435\u043d\u0442"},QA:{code:"qa",name:"QA"},BACK_OFFICE:{code:"back_office",name:"\u0411\u044d\u043a-\u043e\u0444\u0438\u0441"},FRONTEND:{code:"frontend",name:"Frontend"},BACKEND:{code:"backend",name:"Backend"},HR:{code:"hr",name:"HR"},PR:{code:"pr",name:"PR"},SUPPORT:{code:"support",name:"\u0422\u0435\u0445\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430"},ANALYTICS:{code:"analytics",name:"\u0410\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430"}},R="alphabet",I="birthday",y={status:k,users:[],search:"",tab:U.ALL.code,sort:R},B=Object(O.b)("app/fetchUsers",Object(x.a)(v.a.mark((function e(){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://stoplight.io/mocks/kode-education/trainee-test/25143926/users",{responseType:"json"}).then((function(e){return e.data}));case 2:return a=e.sent,e.abrupt("return",a.items);case 4:case"end":return e.stop()}}),e)})))),D=Object(O.c)({name:"app",initialState:y,reducers:{setSearch:function(e,a){e.search=a.payload},setTab:function(e,a){e.tab=a.payload},setSort:function(e,a){e.sort=a.payload}},extraReducers:function(e){e.addCase(B.pending,(function(e){e.status=k})).addCase(B.fulfilled,(function(e,a){e.status=N,e.users=a.payload})).addCase(B.rejected,(function(e){e.status=S}))}}),C=D.actions,q=C.setSearch,F=C.setTab,Y=C.setSort,T=function(e){return e.app.status},K=function(e){return e.app.users},V=function(e){return e.app.search},w=function(e){return e.app.tab},M=function(e){return e.app.sort},Q=D.reducer,Z=t(3),L=t(0);var H=function(){var e=Object(Z.b)(),a=Object(d.useState)(!1),t=Object(l.a)(a,2),n=t[0],s=t[1],c="sort",i=Object(Z.c)(M);function r(a){e(Y(a)),s(!1),document.body.style.overflow="visible"}return Object(L.jsxs)("div",{children:[Object(L.jsx)("input",{className:"".concat(i===I?p.a.button_active:""),type:"image",src:j,alt:"Sort!",onClick:function(){s(!0),document.body.style.overflow="hidden"}}),n&&Object(L.jsx)("div",{className:p.a.dialogue,onClick:function(){s(!1),document.body.style.overflow="visible"},children:Object(L.jsxs)("div",{className:p.a.dialogue__container,onClick:function(e){return e.stopPropagation()},children:[Object(L.jsx)("h2",{className:p.a.dialogue__heading,children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430"}),Object(L.jsx)("input",{className:p.a.dialogue__button,type:"radio",id:R,name:c}),Object(L.jsx)("label",{className:"".concat(p.a.dialogue__label," ").concat(i===R?p.a.dialogue__label_active:""),htmlFor:R,onClick:function(){return r(R)},children:"\u041f\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443"}),Object(L.jsx)("input",{className:p.a.dialogue__button,type:"radio",id:I,name:c}),Object(L.jsx)("label",{className:"".concat(p.a.dialogue__label," ").concat(i===I?p.a.dialogue__label_active:""),htmlFor:I,onClick:function(){return r(I)},children:"\u041f\u043e \u0434\u043d\u044e \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"}),Object(L.jsx)("input",{className:p.a.dialogue__close,type:"image",src:g,alt:"Close",onClick:function(){s(!1),document.body.style.overflow="visible"}})]})})]})};var E=function(){var e=Object(Z.b)(),a=Object(d.useState)(!1),t=Object(l.a)(a,2),n=t[0],s=t[1];return Object(L.jsxs)("div",{className:m.a.InputSearch,children:[Object(L.jsx)("img",{className:"".concat(m.a.loop," ").concat(n?m.a.loop_active:""),src:_,alt:"Search!"}),Object(L.jsx)("input",{className:m.a.input,type:"text",placeholder:n?"":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0438\u043b\u0438 \u0442\u0435\u0433...",onFocus:function(){return s(!0)},onBlur:function(){return s(!1)},onChange:function(a){e(q(a.target.value))}}),Object(L.jsx)(H,{})]})},G=t(14),W=t.n(G);var J=function(){var e=Object(Z.b)(),a=Object(Z.c)(w);return Object(L.jsx)("div",{className:W.a.InputTabs,children:Object.values(U).map((function(t,n){return Object(L.jsx)("button",{className:"".concat(W.a.tab," ").concat(a===t.code?W.a.tab_active:""),onClick:function(){return e(F(t.code))},children:t.name},n)}))})};var P=function(){return Object(L.jsxs)("header",{className:o.a.InputBlock,children:[Object(L.jsx)("h1",{className:o.a.heading,children:"\u041f\u043e\u0438\u0441\u043a"}),Object(L.jsx)(E,{}),Object(L.jsx)(J,{})]})},z=t(7),X=t.n(z),$=t(8),ee=t.n($);var ae=function(){return Object(L.jsxs)("div",{className:ee.a.UserPlaceholder,children:[Object(L.jsx)("div",{className:ee.a.avatar}),Object(L.jsxs)("div",{className:ee.a.text,children:[Object(L.jsx)("div",{className:ee.a.name}),Object(L.jsx)("div",{className:ee.a.position})]})]})},te=t(15),ne=t.n(te);var se=function(e){var a=e.image,t=e.alt,n=void 0===t?"An Info Image":t,s=e.primary,c=void 0===s?"No Info":s,i=e.secondary,r=e.action;return Object(L.jsxs)("aside",{className:ne.a.OutputInfo,children:[a&&Object(L.jsx)("img",{src:a,alt:n}),Object(L.jsx)("p",{className:ne.a.primary,children:c}),i&&Object(L.jsx)("p",{className:ne.a.secondary,children:i}),r&&Object(L.jsx)("p",{children:r})]})},ce=t(32),ie=t.n(ce);var re=function(){var e=Object(Z.b)();return Object(L.jsx)("button",{className:ie.a.AgainButton,onClick:function(){e(B())},children:"\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0441\u043d\u043e\u0432\u0430"})},oe=t(2),le=t.n(oe),de=t.p+"static/media/avatar-placeholder.ac856b27.svg",ue=t.p+"static/media/back.89324cb0.svg",me=t.p+"static/media/star.5d560b6e.svg",_e=t.p+"static/media/phone.aa86b18c.svg";var be=function(e){var a=e.avatarUrl,t=e.firstName,n=e.lastName,s=e.userTag,c=e.position,i=e.birthday,r=e.phone,o=Object(d.useState)(!1),u=Object(l.a)(o,2),m=u[0],_=u[1],b=Object(Z.c)(M);function p(e,a){switch(a){case"summary":return new Intl.DateTimeFormat("ru-RU",{day:"numeric",month:"short"}).format(new Date(e));case"detailed":return new Intl.DateTimeFormat("ru-RU",{day:"numeric",month:"long",year:"numeric"}).format(new Date(e));default:return e}}return Object(L.jsxs)("section",{children:[Object(L.jsxs)("div",{className:le.a.UserBlock,onClick:function(){_(!0),document.body.style.overflow="hidden"},children:[Object(L.jsx)("img",{className:le.a.avatar,src:a,onError:function(e){e.target.src=de},alt:"User Avatar"}),Object(L.jsxs)("div",{className:le.a.text,children:[Object(L.jsxs)("div",{className:le.a.main,children:[Object(L.jsxs)("p",{className:le.a.names,children:[Object(L.jsxs)("span",{className:le.a.name,children:[t," ",n]}),Object(L.jsx)("span",{className:le.a.tag,children:s})]}),Object(L.jsx)("p",{className:le.a.position,children:c})]}),b===I&&Object(L.jsx)("time",{className:le.a.birthday,dateTime:i,children:p(i,"summary")})]})]}),m&&Object(L.jsxs)("div",{className:le.a.details,children:[Object(L.jsxs)("div",{className:le.a.details__main,children:[Object(L.jsxs)("div",{className:le.a.details__info,children:[Object(L.jsx)("img",{className:le.a.details__avatar,src:a,onError:function(e){e.target.src=de},alt:"User Avatar"}),Object(L.jsxs)("div",{className:le.a.details__text,children:[Object(L.jsxs)("div",{className:le.a.details__names,children:[Object(L.jsxs)("div",{className:le.a.details__name,children:[t," ",n]}),Object(L.jsx)("div",{className:le.a.details__tag,children:s})]}),Object(L.jsx)("div",{className:le.a.details__position,children:c})]})]}),Object(L.jsx)("input",{className:le.a.details__back,type:"image",src:ue,alt:"Back",onClick:function(){_(!1),document.body.style.overflow="visible"}})]}),Object(L.jsxs)("div",{className:le.a.details__contacts,children:[Object(L.jsxs)("div",{className:le.a.details__birthday,children:[Object(L.jsx)("img",{src:me,alt:"Star"}),Object(L.jsxs)("div",{className:le.a.details__dates,children:[Object(L.jsx)("div",{className:le.a.details__date,children:p(i,"detailed")}),Object(L.jsx)("div",{className:le.a.details__age,children:function(e){var a=String(new Date(Date.now()-new Date(e).getTime()).getFullYear()-1970);if("1"===a[a.length-2])return"".concat(a," \u043b\u0435\u0442");var t,n=null!==(t=a[a.length-1])&&void 0!==t?t:"0";return"1"===n?"".concat(a," \u0433\u043e\u0434"):["0","5","6","7","8","9"].includes(n)?"".concat(a," \u043b\u0435\u0442"):["2","3","4"].includes(n)?"".concat(a," \u0433\u043e\u0434\u0430"):e}(i)})]})]}),Object(L.jsxs)("div",{className:le.a.details__phone,children:[Object(L.jsx)("img",{src:_e,alt:"Phone"}),Object(L.jsx)("div",{className:le.a.details__number,children:r})]})]})]})]})};var pe=function(){var e=Object(Z.b)(),a=Object(Z.c)(T),t=Object(Z.c)(V).toLowerCase().trim().split(" "),n=Object(Z.c)(w);Object(d.useEffect)((function(){e(B())}),[e]);var s,c=Object(Z.c)(M),i=Object(Z.c)(K);return i=i.filter((function(e){return e.department.includes(n)&&t.every((function(a){return[e.firstName,e.lastName,e.userTag].join(" ").toLowerCase().trim().includes(a)}))})),function(){if(i.sort((function(e,a){if(c===R)return[e.firstName,e.lastname].join(" ").localeCompare([a.firstName,a.lastName].join(" "));if(c===I){var t=new Date(e.birthday),n=new Date(a.birthday);return t.getMonth()===n.getMonth()?t.getDate()-n.getDate():t.getMonth()-n.getMonth()}})),c===I)for(var e=new Date,a=0;a<i.length;a++){var t=new Date(i[a].birthday);if(t.getMonth()===e.getMonth()?t.getDate()>=e.getDate():t.getMonth()>e.getMonth()){var n,r=i.slice(a,i.length),o=i.slice(0,a);s=null===(n=o[0])||void 0===n?void 0:n.id,i=r.concat(o);break}s=i[0].id}}(),Object(L.jsxs)("main",{className:X.a.OutputBlock,children:[a===k&&function(){for(var e=[],a=0;a<10;a++)e.push(Object(L.jsx)(ae,{},a));return e}(),a===N&&(0!==i.length?i.map((function(e){return Object(L.jsxs)(d.Fragment,{children:[c===I&&s===e.id&&Object(L.jsxs)("div",{className:X.a.divider,children:[Object(L.jsx)("div",{className:X.a.divider__left}),Object(L.jsx)("div",{className:X.a.divider__year,children:(new Date).getFullYear()+1}),Object(L.jsx)("div",{className:X.a.divider__right})]}),Object(L.jsx)(be,{avatarUrl:e.avatarUrl,firstName:e.firstName,lastName:e.lastName,userTag:e.userTag,position:e.position,birthday:e.birthday,phone:e.phone})]},e.id)})):Object(L.jsx)(se,{image:"data:image/png;base64,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",primary:"\u041c\u044b \u043d\u0438\u043a\u043e\u0433\u043e \u043d\u0435 \u043d\u0430\u0448\u043b\u0438",secondary:"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439 \u0441\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441"})),a===S&&Object(L.jsx)(se,{image:"data:image/png;base64,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",primary:"\u041a\u0430\u043a\u043e\u0439-\u0442\u043e \u0441\u0432\u0435\u0440\u0445\u0440\u0430\u0437\u0443\u043c \u0432\u0441\u0435 \u0441\u043b\u043e\u043c\u0430\u043b",secondary:"\u041f\u043e\u0441\u0442\u0430\u0440\u0430\u0435\u043c\u0441\u044f \u0431\u044b\u0441\u0442\u0440\u043e \u043f\u043e\u0447\u0438\u043d\u0438\u0442\u044c",action:Object(L.jsx)(re,{})})]})};var je=function(){return Object(L.jsxs)("div",{className:i.a.App,children:[Object(L.jsx)(P,{}),Object(L.jsx)(pe,{})]})},ge=Object(O.a)({reducer:{app:Q}});s.a.render(Object(L.jsx)(Z.a,{store:ge,children:Object(L.jsx)(je,{})}),document.getElementById("root"))},7:function(e,a,t){e.exports={OutputBlock:"OutputBlock_OutputBlock__2UATP",divider:"OutputBlock_divider__1OFae",divider__year:"OutputBlock_divider__year__1ik8Y",divider__left:"OutputBlock_divider__left__3nKCF",divider__right:"OutputBlock_divider__right__2RQRN"}},8:function(e,a,t){e.exports={UserPlaceholder:"UserPlaceholder_UserPlaceholder__1LGt-",avatar:"UserPlaceholder_avatar__2nyxD",name:"UserPlaceholder_name__bFm72",position:"UserPlaceholder_position__1X4De",text:"UserPlaceholder_text__1-0T3"}}},[[64,1,2]]]);
//# sourceMappingURL=main.0bb59b4e.chunk.js.map