(this["webpackJsonptest-task-chat"]=this["webpackJsonptest-task-chat"]||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},206:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(45),o=a.n(r),u=(a(104),a(105),a(92)),c=a.n(u),l=a(8),i=a(25),m=a.n(i),d=function(e){return s.a.createElement("div",null,s.a.createElement("div",{className:m.a.blockInfoUser},s.a.createElement("div",null,s.a.createElement("span",{className:m.a.markName},"User-name: "),s.a.createElement("span",null," ",e.name," "),s.a.createElement("span",null," ",e.surname," ")),s.a.createElement("div",null,s.a.createElement("span",{className:m.a.markName},"Position: "),s.a.createElement("span",null,e.position)),s.a.createElement("div",null,s.a.createElement("span",{className:m.a.markName},"email: "),s.a.createElement("a",{href:"mailto: loonyp2010@gmail.com"}," ",e.email," ")),s.a.createElement("div",null,s.a.createElement("span",{className:m.a.markName},"telephon: "),s.a.createElement("a",{href:"tel: +79193639610"}," ",e.telephon," "))))},p=a(18),g=a(19),E=a(23),_=a(22),w=a(35),f=a.n(w),h=function(e){Object(E.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={editMode:!1,statusText:e.props.statusText},e.activateEditMode=function(){e.setState({editMode:!0})},e.deactivateEditMode=function(){e.setState({editMode:!1}),e.props.updateStatusText(e.state.statusText)},e.onStatusTextChange=function(t){e.setState({statusText:t.currentTarget.value})},e}return Object(g.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:f.a.statusBlock},s.a.createElement("div",{className:f.a.statusDesign},this.props.status,!this.state.editMode&&s.a.createElement("div",{className:f.a.statusInputDown},s.a.createElement("span",{onClick:this.activateEditMode},this.props.statusText)),this.state.editMode&&s.a.createElement("div",{className:f.a.statusInput},s.a.createElement("input",{onChange:this.onStatusTextChange,autoFocus:!0,onBlur:this.deactivateEditMode,value:this.state.statusText,maxlength:"20"}))))}}]),a}(s.a.Component),M=a(94),T=a.n(M),v=a(95),b=a.n(v),k=function(e){var t=e.profileData,a=t.personalData.map((function(e){return s.a.createElement(d,{key:e.id,name:e.name,surname:e.surname,position:e.position,email:e.email,telephon:e.telephon})}));return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement(h,{status:t.statusShow.status,statusText:e.statusText,updateStatusText:e.updateStatusText})),s.a.createElement("div",null,s.a.createElement("img",{src:T.a,className:b.a.avatat,alt:""})),s.a.createElement("div",null," ",a," "))},x=a(14),S=a(6),D={personalData:[{id:"1",name:"\u0410\u043d\u0442\u043e\u043d",surname:"\u0410\u0445\u043c\u0430\u0434\u0435\u0435\u0432",position:"Frontend-developer",email:"loonyp2010@gmail.com",telephon:"+79193639610"}],statusShow:{status:"online"},statusText:"Status Text"},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PROFILE":return Object(S.a)({},e,{personalData:Object(x.a)(e.personalData)});case"STATUS":return Object(S.a)({},e,{statusShow:Object(S.a)({},e.statusShow)});case"STATUS_TEXT":return Object(S.a)({},e,{statusText:t.statusText});default:return e}},y=Object(l.b)((function(e){return{profileData:e.profileData,statusText:e.profileData.statusText}}),(function(e){return{updateStatusText:function(t){e(function(e){return{type:"STATUS_TEXT",statusText:e}}(t))}}}))(k),C=function(){return s.a.createElement("div",{className:c.a.menuBlock},s.a.createElement(y,null))},O=a(96),j=a.n(O),A=function(){return s.a.createElement("div",{className:j.a.headersLineUsers})},I=a(26),B=a.n(I),F=a(47),U=a.n(F),G=a(208),P=a(207),W=function(e){Object(E.a)(a,e);var t=Object(_.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){var e=this.props,t=e.handleSubmit,a=e.reset;return s.a.createElement("div",{className:U.a.inputMessage},s.a.createElement("form",{onSubmit:t},s.a.createElement(G.a,{component:"textarea",name:"newTextMessage",className:U.a.inputText}),s.a.createElement("button",{className:U.a.buttonInput},">"),s.a.createElement("button",{type:"button",onClick:a},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0443")))}}]),a}(s.a.Component),L=Object(P.a)({form:"message"})(W),R=function(e){return s.a.createElement("div",null,e.message)},X=function(e){var t=e.floodChatData,a=t.windowMessage.map((function(e){return s.a.createElement(R,{key:e.id,message:e.message})}));return s.a.createElement("div",{className:B.a.inputBlock},s.a.createElement("div",{className:B.a.showMessage},s.a.createElement("span",{className:B.a.messageElements}," ",t.myMessageMarker.workingChat,t.myMessageMarker.name," "),s.a.createElement("span",{className:B.a.messageElementsTwo}," ",a," "),s.a.createElement("span",{className:B.a.messageElementsThree}," ",s.a.createElement("button",{onClick:function(t){e.deleteMessage(t.newTextMessage)}},"\u041e\u0442\u0447\u0438\u0441\u0442\u0438\u0442\u044c")," ")),s.a.createElement(L,{onSubmit:function(t){e.addMessage(t.newTextMessage)}}))},K={windowMessage:[{message:""}],myMessageMarker:{workingChat:"[\u0424\u043b\u0443\u0434 \u0447\u0430\u0442] - ",name:"\u0410\u043d\u0442\u043e\u043d: "}},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TEXT_MESSAGE":var a=t.newTextMessage;return Object(S.a)({},e,{windowMessage:[].concat(Object(x.a)(e.windowMessage),[{message:a}])});case"MY_MESSAGE_MARKER":return Object(S.a)({},e,{myMessageMarker:Object(S.a)({},e.myMessageMarker)});case"DELETE_MESSAGE":return Object(S.a)({},e,{windowMessage:e.windowMessage.filter((function(e){return e.id!==t.newTextMessage}))});default:return e}},H=Object(l.b)((function(e){return{floodChatData:e.floodChatData}}),(function(e){return{addMessage:function(t){e(function(e){return{type:"ADD_TEXT_MESSAGE",newTextMessage:e}}(t))},deleteMessage:function(t){e(function(e){return{type:"DELETE_MESSAGE",newTextMessage:e}}(t))}}}))(X),J=a(27),q=a.n(J),V=a(49),z=a.n(V),Q=function(e){Object(E.a)(a,e);var t=Object(_.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){var e=this.props,t=e.handleSubmit,a=e.reset;return s.a.createElement("div",{className:z.a.inputMessage},s.a.createElement("form",{onSubmit:t},s.a.createElement(G.a,{component:"textarea",name:"newTextMessageTwo",className:z.a.inputText}),s.a.createElement("button",{className:z.a.buttonInput},">"),s.a.createElement("button",{type:"button",onClick:a},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0443")))}}]),a}(s.a.Component),$=Object(P.a)({form:"messageWorking"})(Q),Z=function(e){return s.a.createElement("div",null,e.message)},ee=function(e){var t=e.workingChatData,a=t.windowMessageTwo.map((function(e){return s.a.createElement(Z,{key:e.id,message:e.message})}));return s.a.createElement("div",{className:q.a.inputBlock},s.a.createElement("div",{className:q.a.showMessage},s.a.createElement("span",{className:q.a.messageElements}," ",t.myMessageMarker.workingChat,t.myMessageMarker.name," "),s.a.createElement("span",{className:q.a.messageElementsTwo}," ",a," "),s.a.createElement("span",{className:q.a.messageElementsThree}," ",s.a.createElement("button",{onClick:function(t){e.deleteMessageTwo(t.newTextMessageTwo)}},"\u041e\u0442\u0447\u0438\u0441\u0442\u0438\u0442\u044c")," ")),s.a.createElement($,{onSubmit:function(t){e.addMessageTwo(t.newTextMessageTwo)}}))},te={windowMessageTwo:[{message:""}],myMessageMarker:{workingChat:"[\u0420\u0430\u0431\u043e\u0447\u0438\u0439 \u0447\u0430\u0442] - ",name:"\u0410\u043d\u0442\u043e\u043d: "}},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TEXT_MESSAGE":var a=t.newTextMessageTwo;return Object(S.a)({},e,{windowMessageTwo:[].concat(Object(x.a)(e.windowMessageTwo),[{message:a}])});case"MY_MESSAGE_MARKER":return Object(S.a)({},e,{myMessageMarker:Object(S.a)({},e.myMessageMarker)});case"DELETE_MESSAGE":return Object(S.a)({},e,{windowMessageTwo:e.windowMessageTwo.filter((function(e){return e.id!==t.newTextMessageTwo}))});default:return e}},ne=Object(l.b)((function(e){return{workingChatData:e.workingChatData}}),(function(e){return{addMessageTwo:function(t){e(function(e){return{type:"ADD_TEXT_MESSAGE",newTextMessageTwo:e}}(t))},deleteMessageTwo:function(t){e(function(e){return{type:"DELETE_MESSAGE",newTextMessageTwo:e}}(t))}}}))(ee),se=a(98),re=a.n(se),oe=function(e){return s.a.createElement("div",{className:re.a.nameDessign},e.name)},ue=a(67),ce=a.n(ue),le=function(e){var t=e.usersData.users.map((function(e){return s.a.createElement(oe,{key:e.id,name:e.name})}));return s.a.createElement("div",{className:ce.a.usersBlock},s.a.createElement("span",{className:ce.a.userFont},t))},ie=Object(l.b)((function(e){return{usersData:e.usersData}}))(le),me=a(36),de=a.n(me),pe=function(){return s.a.createElement("div",{className:de.a.footerDesign},s.a.createElement("div",{className:de.a.underMenuBlock}),s.a.createElement("div",{className:de.a.underShowMessage}),s.a.createElement("div",{className:de.a.underShowMessageTwo}))},ge=function(){return s.a.createElement("div",{className:"app-wrapper"},s.a.createElement("div",{className:"app-wrapper-content"},s.a.createElement(C,null),s.a.createElement(A,null),s.a.createElement(H,null),s.a.createElement(ne,null),s.a.createElement(ie,null),s.a.createElement(pe,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ee=a(5),_e=a(209),we={users:[{id:1,name:"\u0414\u0438\u043c\u0430"},{id:2,name:"\u041a\u0430\u0442\u044f"},{id:3,name:"\u041c\u0430\u0448\u0430"},{id:4,name:"\u041b\u0435\u0448\u0430"},{id:5,name:"\u041b\u0435\u0440\u0430"},{id:6,name:"\u041e\u043b\u0435\u0433"},{id:7,name:"\u0421\u043b\u0430\u0432\u0430"},{id:8,name:"\u0421\u0430\u0448\u0430"},{id:9,name:"\u0413\u0435\u0440\u0430"},{id:10,name:"\u041e\u043b\u044f"},{id:12,name:"\u041a\u0441\u0435\u043d\u0438\u044f"},{id:13,name:"\u0416\u0435\u043d\u044f"},{id:14,name:"\u0414\u0435\u043d\u0438\u0441"}]},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USERS":var a=t.futureAction;return Object(S.a)({},e,{users:[].concat(Object(x.a)(e.users),[a])});default:return e}},he=Object(Ee.b)({profileData:N,floodChatData:Y,workingChatData:ae,usersData:fe,form:_e.a}),Me=Object(Ee.c)(he);window.store=Me;var Te=Me,ve=function(){o.a.render(s.a.createElement(l.a,{store:Te},s.a.createElement(ge,null)),document.getElementById("root"))};ve(),Te.subscribe((function(){ve()})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},25:function(e,t,a){e.exports={blockInfoUser:"PersonalData_blockInfoUser__3l9HQ",markName:"PersonalData_markName__2YNGw"}},26:function(e,t,a){e.exports={inputBlock:"InputFloodChat_inputBlock__3FOoB",showMessage:"InputFloodChat_showMessage__2_3rK",messageElements:"InputFloodChat_messageElements__YlWAl",messageElementsTwo:"InputFloodChat_messageElementsTwo__RxnUz",messageElementsThree:"InputFloodChat_messageElementsThree__260A2"}},27:function(e,t,a){e.exports={inputBlock:"InputWorkingChat_inputBlock__3WUOG",showMessage:"InputWorkingChat_showMessage__HUbau",messageElements:"InputWorkingChat_messageElements__3rk3J",messageElementsTwo:"InputWorkingChat_messageElementsTwo__shPD2",messageElementsThree:"InputWorkingChat_messageElementsThree__1vqFP"}},35:function(e,t,a){e.exports={statusBlock:"ProfileStatus_statusBlock__2Tkmo",statusDesign:"ProfileStatus_statusDesign__DYs8E",statusInput:"ProfileStatus_statusInput__2HS-Y",statusInputDown:"ProfileStatus_statusInputDown__1vAtB"}},36:function(e,t,a){e.exports={footerDesign:"Footer_footerDesign__Qthmg",underMenuBlock:"Footer_underMenuBlock__1CnVX",underShowMessage:"Footer_underShowMessage__v_nDV",underShowMessageTwo:"Footer_underShowMessageTwo__ylD1I"}},47:function(e,t,a){e.exports={inputMessage:"AddMessgaeChat_inputMessage__Swv7d",inputText:"AddMessgaeChat_inputText__1Kzyx",buttonInput:"AddMessgaeChat_buttonInput__WFqSJ"}},49:function(e,t,a){e.exports={inputMessage:"AddMessageChateTwo_inputMessage__Lhbw3",inputText:"AddMessageChateTwo_inputText__FbFyL",buttonInput:"AddMessageChateTwo_buttonInput__2Jxgi"}},67:function(e,t,a){e.exports={usersBlock:"Users_usersBlock__2Vdo3",userFont:"Users_userFont__1tHBM"}},92:function(e,t,a){e.exports={menuBlock:"MenuBlock_menuBlock__1xxKq"}},94:function(e,t,a){e.exports=a.p+"static/media/user.8d9753dd.jpg"},95:function(e,t,a){e.exports={avatat:"Profile_avatat__j7uKl"}},96:function(e,t,a){e.exports={headersLineUsers:"HeadersUsers_headersLineUsers__2mGlP"}},98:function(e,t,a){e.exports={nameDessign:"UsersItem_nameDessign__ypGod"}},99:function(e,t,a){e.exports=a(206)}},[[99,1,2]]]);
//# sourceMappingURL=main.1982b6ca.chunk.js.map