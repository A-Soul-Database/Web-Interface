(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[392],{88424:function(ve,U,r){"use strict";r.d(U,{Z:function(){return H}});var se=r(22054);function H(_,f){var S;if(typeof Symbol=="undefined"||_[Symbol.iterator]==null){if(Array.isArray(_)||(S=(0,se.Z)(_))||f&&_&&typeof _.length=="number"){S&&(_=S);var q=0,j=function(){};return{s:j,n:function(){return q>=_.length?{done:!0}:{done:!1,value:_[q++]}},e:function(E){throw E},f:j}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var N=!0,ee=!1,T;return{s:function(){S=_[Symbol.iterator]()},n:function(){var E=S.next();return N=E.done,E},e:function(E){ee=!0,T=E},f:function(){try{!N&&S.return!=null&&S.return()}finally{if(ee)throw T}}}}},72341:function(ve,U,r){"use strict";r.r(U),r.d(U,{default:function(){return Ke}});var se=r(66521),H=r(33541),_=r(74929),f=r(49077),S=r(4797),q=r(39339),j=r(36219),N=r(29972),ee=r(15438),T=r(86688),k=r(51830),E=r.n(k),C=r(59301),z=r(73506),u={ffmpeg_api:"http://localhost:4399",Parse_api:"http://localhost:4400",Thread_Num:4,BiliBili_Cookie:"",Multi_Thread_Switch:!0};function ge(){return te.apply(this,arguments)}function te(){return te=(0,S.Z)(E().mark(function a(){var i,n;return E().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ue(u.ffmpeg_api+"/ping");case 2:return i=t.sent,t.next=5,ue(u.Parse_api+"/ping");case 5:return n=t.sent,t.abrupt("return",i&&n);case 7:case"end":return t.stop()}},a)})),te.apply(this,arguments)}function ue(a){return ne.apply(this,arguments)}function ne(){return ne=(0,S.Z)(E().mark(function a(i){var n,d,t,c,s,l;return E().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return n=1e3,d=new AbortController,t=d.signal,c=function(p){return new Promise(function(v,h){setTimeout(function(){v(new Response(!1,{status:408})),d.abort()},p)})},s=function(p){return fetch(p,{signal:t})},o.prev=5,o.next=8,Promise.race([c(n),s(i)]);case 8:l=o.sent,o.next=14;break;case 11:return o.prev=11,o.t0=o.catch(5),o.abrupt("return",!1);case 14:return o.abrupt("return",l.ok);case 15:case"end":return o.stop()}},a,null,[[5,11]])})),ne.apply(this,arguments)}function me(a,i){var n=new Date;n.setTime(n.getTime()+1296e3*1e3),document.cookie=a+"="+i+";expires="+n.toGMTString()+";path=/"}function L(a){if(document.cookie.length>0){var i=document.cookie.indexOf(a+"=");if(i!=-1){i=i+a.length+1;var n=document.cookie.indexOf(";",i);return n==-1&&(n=document.cookie.length),decodeURI(document.cookie.substring(i,n))}}return""}function xe(a){fetch("".concat(u.Parse_api,"/Save_BiliBili_Cookie?Cookie=").concat(a)).then(function(i){console.log("b\u7AD9cookie\u8BFB\u53D6\u6210\u529F")},function(i){console.warn("b\u7AD9cookie\u4FDD\u5B58\u5931\u8D25")})}function je(){fetch("".concat(u.Parse_api,"/Get_BiliBili_Cookie")).then(function(a){return a.json()}).then(function(a){a!=""&&(u.BiliBili_Cookie=a)})}function le(a){a.replace(/：/g,":");var i=a.split(":");switch(i.length-1){case 0:return parseInt(a);case 1:return parseInt(i[0])*60+parseInt(i[1]);case 2:return parseInt(i[0])*3600+parseInt(i[1])*60+parseInt(i[2])}}var Qe=r(41119),Ce=r(274),Xe=r(98682),ye=r(37885),Ye=r(71243),J=r(62877),qe=r(20577),w=r(89523),et=r(57725),A=r(1206),tt=r(719),y=r(34201),nt=r(15377),O=r(8662),$=r(73025),K=r(11108),G=r(9882),W=r(62377),Fe=r(88424),rt=r(69809),Ze=r(29021),I=r(601),Be={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"}}]},name:"caret-right",theme:"outlined"},Ee=Be,Q=r(23986),oe=function(i,n){return C.createElement(Q.Z,(0,I.Z)((0,I.Z)({},i),{},{ref:n,icon:Ee}))};oe.displayName="CaretRightOutlined";var De=C.forwardRef(oe),Se={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M304 176h80v672h-80zm408 0h-64c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8z"}}]},name:"pause",theme:"outlined"},Te=Se,ce=function(i,n){return C.createElement(Q.Z,(0,I.Z)((0,I.Z)({},i),{},{ref:n,icon:Te}))};ce.displayName="PauseOutlined";var Ae=C.forwardRef(ce),_e=r(10569),we=r(52767),e=r(37712),de=T.Z.Text,it=T.Z.Title,re,Oe=function(a){(0,G.Z)(n,a);var i=(0,W.Z)(n);function n(d){var t;return(0,$.Z)(this,n),t=i.call(this,d),t.state={dItems:[]},t}return(0,K.Z)(n,[{key:"get_download_info",value:function(){var t=this;fetch("".concat(u.ffmpeg_api,"/Progress")).then(function(c){c.json().then(function(s){re=s;var l=[];for(var F in re){for(var o=re[F],m=o.Threads,p=o.Save_Name,v=[],h=0;h<m;h++){var D=o[h];v.push({progress:parseInt(D.progress*100),running:D.Running})}l.push({uid:F,thread_num:m,title:p,thread_list:v}),t.setState({dItems:l})}})},function(c){console.error("\u83B7\u53D6\u4E0B\u8F7D\u4FE1\u606F\u5931\u8D25")})}},{key:"update",value:function(){if(!!this.props){var t=this.props.isVisible;t&&(this.get_download_info(),console.log(this.state.dItems))}}},{key:"componentDidMount",value:function(){var t=this;setInterval(function(){t.update()},1e3)}},{key:"render",value:function(){var t=this.props,c=t.isVisible,s=t.onClose,l=this.state.dItems,F=l.map(function(o){return(0,e.jsx)(ke,{uid:o.uid,thread_num:o.thread_num,title:o.title,thread_list:o.thread_list})});return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(Ze.Z,{placement:"right",visible:c,onClose:s,children:F})})}}]),n}(C.Component);function ie(a,i,n){for(var d=0;d<n;d++)fetch("".concat(u.ffmpeg_api,"/thread_operation?Uniq_ID=").concat(a,"&Running=").concat(i,"&Instance_id=").concat(d)).catch(function(t){console.error("\u64CD\u4F5C\u5931\u8D25"),j.default.error("\u64CD\u4F5C\u5931\u8D25")})}function be(){fetch("".concat(u.ffmpeg_api,"/Open_Folder")).catch(function(a){console.error("\u6253\u5F00\u6587\u4EF6\u5939\u5931\u8D25"),j.default.error("\u6253\u5F00\u6587\u4EF6\u5939\u5931\u8D25")})}var ke=function(a){(0,G.Z)(n,a);var i=(0,W.Z)(n);function n(d){var t;return(0,$.Z)(this,n),t=i.call(this,d),t.state={display:"block"},t}return(0,K.Z)(n,[{key:"render",value:function(){var t=this,c=this.props,s=c.uid,l=c.thread_num,F=c.title,o=c.thread_list,m=this.state.display,p=1,v=0,h=(0,Fe.Z)(o),D;try{for(h.s();!(D=h.n()).done;){var x=D.value;if(x.running===0){p=0;break}else{if(x.running===1)continue;if(x.running===3)v+=1;else if(x.running===4){p=4;break}else break}}}catch(M){h.e(M)}finally{h.f()}if(p===4)return(0,e.jsx)(e.Fragment,{});v>=l&&(p=3);var P=(0,e.jsx)(e.Fragment,{}),Z="green",g="active";switch(p){case 0:Z="orangered",P=(0,e.jsx)(w.Z,{title:"\u5F00\u59CB",children:(0,e.jsx)(A.Z,{onClick:function(We){ie(s,1,l)},children:(0,e.jsx)(De,{})})}),g="exception";break;case 1:Z="orange",P=(0,e.jsx)(w.Z,{title:"\u6682\u505C",children:(0,e.jsx)(A.Z,{onClick:function(We){ie(s,0,l)},children:(0,e.jsx)(Ae,{})})}),g="active";break;case 3:Z="green",P=(0,e.jsx)(w.Z,{title:"\u6253\u5F00\u4FDD\u5B58\u6587\u4EF6\u5939",children:(0,e.jsx)(A.Z,{onClick:function(){be()},children:(0,e.jsx)(_e.Z,{})})}),g="success";break;case 4:break}var pe=100/l,V=pe.toString()+"%",Ge=o.map(function(M){return(0,e.jsx)(H.Z,{percent:M.progress,style:{width:V},showInfo:!1,status:g})});return(0,e.jsx)(f.Z,{style:{marginTop:"10px",height:"120px",display:m},children:(0,e.jsx)(y.Z,{span:24,style:{height:"100%"},children:(0,e.jsxs)(J.Z,{span:24,style:{borderWidth:"2px",borderColor:Z,height:"100%"},children:[(0,e.jsxs)(f.Z,{style:{marginTop:"0px"},children:[(0,e.jsx)(y.Z,{span:16,children:(0,e.jsxs)(de,{children:["\u6807\u9898: ",F]})}),(0,e.jsx)(y.Z,{offset:2,span:4,children:(0,e.jsxs)(de,{children:["\u7EBF\u7A0B: ",l]})})]}),(0,e.jsx)(f.Z,{children:Ge}),(0,e.jsxs)(f.Z,{style:{marginTop:"5px"},children:[(0,e.jsx)(y.Z,{offset:15,children:(0,e.jsx)(w.Z,{title:"\u5220\u9664\u4EFB\u52A1",children:(0,e.jsx)(A.Z,{onClick:function(){t.setState({display:"none"}),ie(s,4,l)},children:(0,e.jsx)(we.Z,{})})})}),(0,e.jsx)(y.Z,{offset:1,children:P})]})]})})})}}]),n}(C.Component),Ie=Oe,Pe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M920 760H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-568H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM216 712H100c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h72.4v20.5h-35.7c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h35.7V838H100c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h116c2.2 0 4-1.8 4-4V716c0-2.2-1.8-4-4-4zM100 188h38v120c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V152c0-4.4-3.6-8-8-8h-78c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4zm116 240H100c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h68.4l-70.3 77.7a8.3 8.3 0 00-2.1 5.4V592c0 2.2 1.8 4 4 4h116c2.2 0 4-1.8 4-4v-36c0-2.2-1.8-4-4-4h-68.4l70.3-77.7a8.3 8.3 0 002.1-5.4V432c0-2.2-1.8-4-4-4z"}}]},name:"ordered-list",theme:"outlined"},Ve=Pe,he=function(i,n){return C.createElement(Q.Z,(0,I.Z)((0,I.Z)({},i),{},{ref:n,icon:Ve}))};he.displayName="OrderedListOutlined";var Me=C.forwardRef(he),b=T.Z.Text,Ne=T.Z.Link,R=T.Z.Title,B={UnConnect:0,UnInstall:1,OK:2},Le=function(a){(0,G.Z)(n,a);var i=(0,W.Z)(n);function n(d){var t;return(0,$.Z)(this,n),t=i.call(this,d),t.state={isSettingVisible:!1,ffmpeg_api:u.ffmpeg_api,Parse_api:u.Parse_api,Thread_Num:u.Thread_Num,BiliBili_Cookie:u.BiliBili_Cookie,Multi_Thread_Switch:u.Multi_Thread_Switch,isDListVisible:!1},t.save_setting_param=function(){t.state.Multi_Thread_Switch?u.Thread_Num=t.state.Thread_Num:u.Thread_Num=1,u.ffmpeg_api=t.state.ffmpeg_api,u.Parse_api=t.state.Parse_api,u.BiliBili_Cookie=t.state.BiliBili_Cookie,u.Multi_Thread_Switch=t.state.Multi_Thread_Switch,console.log(u),document.cookie=me("Config",JSON.stringify(u)),t.state.stat===B.OK&&xe(u.BiliBili_Cookie),j.default.info("\u4FDD\u5B58\u6210\u529F")},t.showSettingModal=function(){t.setState({isSettingVisible:!0})},t.handleSettingSave=function(){t.save_setting_param(),t.setState({isSettingVisible:!1})},t.handleSettingCancel=function(){t.setState({isSettingVisible:!1})},t}return(0,K.Z)(n,[{key:"render",value:function(){var t=this,c=this.props.stat,s=this.state,l=s.isSettingVisible,F=s.ffmpeg_api,o=s.Parse_api,m=s.BiliBili_Cookie,p=s.Multi_Thread_Switch,v=s.Thread_Num,h=s.isDListVisible,D=p?(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(f.Z,{style:{marginTop:24},children:[(0,e.jsx)(R,{level:5,children:"\u7EBF\u7A0B\u6570"}),(0,e.jsx)(O.Z,{defaultValue:v,onChange:function(g){return t.setState({Thread_Num:g.target.value})}}),(0,e.jsx)(b,{type:"secondary",children:"\u9ED8\u8BA44\u7EBF\u7A0B"})]})}):(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(f.Z,{style:{marginTop:24},children:[(0,e.jsx)(R,{level:5,children:"\u7EBF\u7A0B\u6570"}),(0,e.jsx)(O.Z,{value:1,defaultValue:v,disabled:!0}),(0,e.jsx)(b,{type:"secondary",children:"\u9ED8\u8BA44\u7EBF\u7A0B"})]})}),x="";switch(c){case B.UnConnect:x=(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{class:"led-box",children:(0,e.jsx)("div",{class:"led-red",style:{height:12,width:12,margin:10}})}),(0,e.jsx)("p",{style:{margin:10},children:"\u672A\u8FDE\u63A5"})]});break;case B.UnInstall:x=(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{class:"led-box",children:(0,e.jsx)("div",{class:"led-yellow",style:{height:12,width:12,margin:10}})}),(0,e.jsx)("p",{style:{margin:10},children:"\u4F9D\u8D56\u5B89\u88C5\u4E2D..."})]});break;case B.OK:x=(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{class:"led-box",children:(0,e.jsx)("div",{class:"led-green",style:{height:12,width:12,margin:10}})}),(0,e.jsx)("p",{style:{margin:10},children:"\u670D\u52A1\u6B63\u5E38"})]});break;default:break}var P=c===B.UnConnect?"\u5B89\u88C5":"\u8BBE\u7F6E";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(J.Z,{children:(0,e.jsxs)(f.Z,{children:[(0,e.jsx)("div",{style:{margin:10},children:"\u670D\u52A1\u72B6\u6001:"}),(0,e.jsx)(y.Z,{md:8,xs:12,children:x}),(0,e.jsx)(y.Z,{md:1,offset:11,style:{marginTop:5},children:(0,e.jsx)(w.Z,{title:"\u4E0B\u8F7D\u672C\u5730\u670D\u52A1",children:(0,e.jsx)(A.Z,{onClick:this.showSettingModal,disabled:c===B.UnInstall,children:P})})}),(0,e.jsx)(y.Z,{md:1,offset:1,style:{marginTop:5},children:(0,e.jsx)(w.Z,{title:"\u4E0B\u8F7D\u5217\u8868",children:(0,e.jsx)(A.Z,{onClick:function(g){t.setState({isDListVisible:!0})},children:(0,e.jsx)(Me,{})})})})]})}),(0,e.jsxs)(Ce.Z,{visible:l,onOk:this.handleSettingSave,onCancel:this.handleSettingCancel,okText:"\u4FDD\u5B58",cancelText:"\u53D6\u6D88",width:800,children:[(0,e.jsx)(f.Z,{children:(0,e.jsx)(A.Z,{type:"primary",style:{background:"orange",borderColor:"orange"},href:"https://ghproxy.com/https://github.com/A-Soul-Database/RangeDownloader/releases/download/V1.4/app.exe",children:"\u672C\u5730\u670D\u52A1\u4E0B\u8F7D"})}),(0,e.jsx)(f.Z,{children:(0,e.jsx)(b,{type:"secondary",children:"\u7247\u6BB5\u4E0B\u8F7D\u9700\u8981\u4F9D\u6258\u672C\u5730\u7AEF\u53E3\u670D\u52A1,\u82E5\u60A8\u6CA1\u6709\u4E0B\u8F7D,\u53EF\u4EE5\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\u4E0B\u8F7D,\u5BF9\u4E8EMac/Linux\u7528\u6237\u53EF\u4EE5\u81EA\u884C\u7F16\u8BD1\u6216\u6E90\u7801\u8FD0\u884C"})}),(0,e.jsxs)(f.Z,{style:{marginTop:24},children:[(0,e.jsx)(R,{level:5,children:"\u591A\u7EBF\u7A0B\u52A0\u8F7D"}),(0,e.jsx)(y.Z,{offset:1,children:(0,e.jsx)(ye.Z,{checked:p,onChange:function(g){t.setState({Multi_Thread_Switch:g})},checkedChildren:"\u591A\u7EBF\u7A0B",unCheckedChildren:"\u5355\u7EBF\u7A0B"})}),(0,e.jsxs)(b,{type:"secondary",children:["ffmpeg\u7684\u4E0B\u8F7D\u65B9\u5F0F\u4E0E\u5176\u4ED6\u4E0B\u8F7D\u8F6F\u4EF6\u4E0D\u540C,\u5C5E\u4E8E\u6D41\u5F0F+Seek\u6A21\u5F0F\u52A0\u8F7D.\u4F46\u662F\u7531\u4E8EMp4\u7684\u683C\u5F0F\u539F\u56E0,Stco\u4E0D\u80FD\u901A\u8FC7\u79D2\u6570\u5B8C\u5168\u5206\u5272,",(0,e.jsx)("b",{children:"\u4F1A\u5BFC\u81F4\u5728\u5F00\u59CB\u524D\u51E0\u79D2\u548C\u7EBF\u7A0B\u8FDE\u63A5\u5904\u51FA\u73B0\u82B1\u5C4F\u7B49\u60C5\u51B5"})]}),(0,e.jsx)(b,{type:"secondary",children:"\u5EFA\u8BAE\u5BF9\u4E8E\u5C0F\u65F6\u95F4\u6BB5\u89C6\u9891\u53EF\u4EE5\u4E0D\u7528\u542F\u7528\u8BE5\u529F\u80FD"})]}),D,(0,e.jsxs)(f.Z,{style:{marginTop:24},children:[(0,e.jsx)(R,{level:5,children:"\u672C\u5730ffmpeg\u5730\u5740"}),(0,e.jsx)(O.Z,{defaultValue:F,onChange:function(g){return t.setState({ffmpeg_api:g.target.value})}}),(0,e.jsx)(b,{type:"secondary",children:"\u9ED8\u8BA4http://localhost:4399"})]}),(0,e.jsxs)(f.Z,{style:{marginTop:24},children:[(0,e.jsx)(R,{level:5,children:"\u672C\u5730\u89E3\u6790\u5730\u5740"}),(0,e.jsx)(O.Z,{defaultValue:o,onChange:function(g){return t.setState({Parse_api:g.target.value})}}),(0,e.jsx)(b,{type:"secondary",children:"\u9ED8\u8BA4http://localhost:4400"})]}),(0,e.jsxs)(f.Z,{style:{marginTop:24},children:[(0,e.jsx)(R,{level:5,children:"BiliBili_Cookie"}),(0,e.jsx)(O.Z,{defaultValue:m,onChange:function(g){return t.setState({BiliBili_Cookie:g.target.value})}}),(0,e.jsx)(b,{type:"secondary",children:"\u5982\u679C\u4F60\u662F\u5927\u4F1A\u5458,\u5E76\u4E14\u5E0C\u671B\u4E0B\u8F7D\u66F4\u9AD8\u6E05\u7684\u6E90(\u4F8B\u59824K/1080P\u9AD8\u7801\u7387),\u5219\u9700\u8981\u7ED1\u5B9A\u4F60\u7684B\u7AD9Cookie. \u4F60\u7684Cookie\u5C06\u4F1A\u4FDD\u5B58\u5728\u672C\u5730,Asdb\u4FDD\u8BC1\u4E0D\u4F1A\u4E0A\u4F20\u4EFB\u4F55\u4FE1\u606F.\u5E76\u5F00\u653E\u6E90\u4EE3\u7801\u63A5\u53D7\u76D1\u7763."}),(0,e.jsx)(b,{type:"secondary",children:"Copyright 2022. Asdb.live"})]}),(0,e.jsx)(f.Z,{children:(0,e.jsx)(Ne,{href:"https://www.bilibili.com/read/cv12349604",target:"_blank",children:"\u70B9\u6B64\u67E5\u770B\u5982\u4F55\u83B7\u53D6BiliBili Cookie"})})]}),(0,e.jsx)(Ie,{isVisible:h,onClose:function(){t.setState({isDListVisible:!1})}})]})}}]),n}(C.Component),X=Le,Re=r(89122),Ue={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"download",theme:"outlined"},He=Ue,fe=function(i,n){return C.createElement(Q.Z,(0,I.Z)((0,I.Z)({},i),{},{ref:n,icon:He}))};fe.displayName="DownloadOutlined";var ze=C.forwardRef(fe),at=T.Z.Text,Y=T.Z.Title,Je=function(a){(0,G.Z)(n,a);var i=(0,W.Z)(n);function n(d){var t;return(0,$.Z)(this,n),t=i.call(this,d),t.state={input_url:"",download_url:"",save_name:"",video_title:"",args:"",start_time:"",end_time:"",parse_success:!1},t}return(0,K.Z)(n,[{key:"apply_parse",value:function(){var t=encodeURI(this.state.input_url);t.indexOf("bilibili")>0&&j.default.info("Tips:\u5982\u679C\u4F60\u662F\u5927\u4F1A\u5458,\u53EF\u4EE5\u8BBE\u7F6ECookie\u4EE5\u83B7\u5F974K\u89C6\u9891\u652F\u6301\u634F");var c=this;fetch("".concat(u.Parse_api,"/Parse"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t})}).then(function(s){s.json().then(function(l){c.setState({download_url:l.Download_Url,save_name:l.Save_Name,video_title:l.Web_Title,args:l.Args,parse_success:l.Download_Url!==""})})},function(s){console.error(s),j.default.error(s)})}},{key:"get_start_cur_time",value:function(){var t=parseInt(document.getElementsByTagName("video")[0].currentTime);this.setState({start_time:t.toString()})}},{key:"get_end_cur_time",value:function(){var t=parseInt(document.getElementsByTagName("video")[0].currentTime);this.setState({end_time:t.toString()})}},{key:"apply_download",value:function(){var t=this.state,c=t.start_time,s=t.end_time,l=t.download_url,F=t.save_name,o=t.args;if(c===""||s===""){j.default.error("\u522B\u6025,\u8FD8\u6CA1\u8F93\u5165\u65F6\u95F4\u6BB5");return}var m=le(c),p=le(s);if(p<m){j.default.error("\u7ED3\u675F\u65F6\u95F4\u4E0D\u80FD\u5C0F\u4E8E\u5F00\u59CB\u65F6\u95F4");return}if(m<0||p<0){j.default.error("\u65F6\u95F4\u4E0D\u80FD\u5C0F\u4E8E0");return}var v;p-m<120?v=1:v=u.Thread_Num,fetch("".concat(u.ffmpeg_api,"/Seek"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({Url:l,Start_Time:m,End_Time:p,Save_Name:"".concat(F,"_").concat(m,"_").concat(p),Threads:v,Args:o,Seek_type:"Input"})}).catch(function(h){j.default.error("\u89C6\u9891\u4E0B\u8F7D\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u8F93\u5165\u683C\u5F0F")}),j.default.info("\u5DF2\u6DFB\u52A0\u81F3\u4E0B\u8F7D\u961F\u5217\u4E2D")}},{key:"render",value:function(){var t=this,c=this.state,s=c.input_url,l=c.download_url,F=c.start_time,o=c.end_time,m=c.parse_success,p=c.video_title;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(f.Z,{style:{marginTop:10},children:(0,e.jsx)(y.Z,{span:24,align:"middle",children:(0,e.jsx)(Y,{level:2,children:"\u8F93\u5165\u89C6\u9891\u7F51\u5740"})})}),(0,e.jsxs)(f.Z,{style:{height:"50px",marginTop:10},children:[(0,e.jsx)(y.Z,{offset:6,span:12,align:"middle",children:(0,e.jsx)(O.Z,{style:{borderRadius:"50px"},placeholder:"E.g. https://www.bilibili.com/video/BV1GZ4y1S7uV",onChange:function(h){t.setState({input_url:h.target.value})},value:s})}),(0,e.jsx)(y.Z,{offset:1,children:(0,e.jsx)(w.Z,{title:"\u89E3\u6790",children:(0,e.jsx)(A.Z,{type:"primary",onClick:function(h){t.apply_parse()},children:(0,e.jsx)(Re.Z,{})})})})]}),(0,e.jsxs)(f.Z,{children:[(0,e.jsxs)(y.Z,{md:10,children:[(0,e.jsx)(f.Z,{style:{height:"100px"},children:(0,e.jsx)(J.Z,{style:{width:"100%"},children:(0,e.jsx)(Y,{level:4,children:p})})}),(0,e.jsx)("video",{style:{height:"300px",width:"100%"},title:p,controls:!0,src:l,playsInline:!0})]}),(0,e.jsx)(y.Z,{offset:1,md:12,children:(0,e.jsxs)(J.Z,{style:{height:"400px"},children:[(0,e.jsx)(Y,{level:4,children:"\u5F00\u59CB\u65F6\u95F4"}),(0,e.jsxs)(O.Z.Group,{compact:!0,children:[(0,e.jsx)(O.Z,{style:{width:"calc(100% - 200px)"},placeholder:"\u4F8B:00:00:30/00:30/30",onChange:function(h){t.setState({start_time:h.target.value})},value:F}),(0,e.jsx)(w.Z,{title:"\u9009\u53D6\u89C6\u9891\u5F53\u524D\u65F6\u95F4",children:(0,e.jsx)(A.Z,{onClick:function(h){t.get_start_cur_time()},children:"\u5F53\u524D\u65F6\u95F4"})})]}),(0,e.jsx)(Y,{level:4,style:{marginTop:"60px"},children:"\u7ED3\u675F\u65F6\u95F4"}),(0,e.jsxs)(O.Z.Group,{compact:!0,children:[(0,e.jsx)(O.Z,{style:{width:"calc(100% - 200px)"},placeholder:"\u4F8B:00:00:30/00:30/30",onChange:function(h){t.setState({end_time:h.target.value})},value:o}),(0,e.jsx)(w.Z,{title:"\u9009\u53D6\u89C6\u9891\u5F53\u524D\u65F6\u95F4",children:(0,e.jsx)(A.Z,{onClick:function(h){t.get_end_cur_time()},children:"\u5F53\u524D\u65F6\u95F4"})})]}),(0,e.jsx)(f.Z,{style:{marginTop:"100px"},children:(0,e.jsx)(y.Z,{span:24,align:"middle",children:(0,e.jsx)(w.Z,{title:m?"\u5C06\u5207\u7247\u65F6\u95F4\u6BB5\u4E0B\u8F7D\u5230\u672C\u5730":"\u522B\u6025\uFF0C\u5148\u89E3\u6790\u89C6\u9891\u634F",children:(0,e.jsxs)(A.Z,{style:{background:"orange",borderColor:"orange"},type:"primary",onClick:function(h){t.apply_download()},disabled:!m,children:["   ",(0,e.jsx)(ze,{}),"\u4E0B\u8F7D\u5207\u7247"]})})})})]})})]})]})}}]),n}(C.Component),$e=Je,ae=T.Z.Text,Ke=function(){L("Config")&&(u.ffmpeg_api=JSON.parse(L("Config")).ffmpeg_api,u.Parse_api=JSON.parse(L("Config")).Parse_api,u.Thread_Num=JSON.parse(L("Config")).Thread_Num,u.Multi_Thread_Switch=JSON.parse(L("Config")).Multi_Thread_Switch,u.BiliBili_Cookie=JSON.parse(L("Config")).BiliBili_Cookie);var a=(0,C.useState)(1e3),i=(0,N.Z)(a,2),n=i[0],d=i[1],t=(0,C.useState)(B.UnConnect),c=(0,N.Z)(t,2),s=c[0],l=c[1],F=(0,C.useState)(0),o=(0,N.Z)(F,2),m=o[0],p=o[1];function v(){fetch("".concat(u.ffmpeg_api,"/Install_FFmpeg")).catch(function(D){j.default.error("\u4E0B\u8F7D\u4F9D\u8D56\u5931\u8D25"),l(0)});var h=setInterval(function(){fetch("".concat(u.ffmpeg_api,"/Install_Progress")).then(function(D){D.json().then(function(x){x&&(console.log(x),p(Math.ceil(x.Download_Progress)),x.Install_Stage===2&&(clearInterval(h),l(2)))})},function(D){j.default.error("\u4E0B\u8F7D\u4F9D\u8D56\u5931\u8D25"),clearInterval(h),l(0)})},1e3)}switch((0,C.useEffect)(function(){function h(){fetch(u.ffmpeg_api+"/Detect").then(function(Z){Z.json().then(function(g){g===!1?v():l(2),je()})})}function D(){return x.apply(this,arguments)}function x(){return x=(0,S.Z)(E().mark(function Z(){var g;return E().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,ge();case 2:g=V.sent,g?s===B.UnConnect&&(d(5e3),l(B.UnInstall),j.default.info("\u8FDE\u63A5\u6210\u529F"),h()):(s!==B.UnConnect&&d(1e3),l(B.UnConnect));case 4:case"end":return V.stop()}},Z)})),x.apply(this,arguments)}var P=setInterval(function(){D()},n);return function(){return clearInterval(P)}}),s){case B.UnConnect:return(0,e.jsxs)(z.ZP,{children:[(0,e.jsx)(X,{stat:s}),(0,e.jsx)(f.Z,{style:{marginTop:10},children:(0,e.jsx)(ae,{type:"danger",children:"\u672C\u5730\u670D\u52A1\u672A\u6B63\u5E38\u542F\u52A8\u3002\u82E5\u60A8\u672A\u4E0B\u8F7D\u672C\u5730\u670D\u52A1\uFF0C\u8BF7\u70B9\u51FB\u4E0A\u65B9\u201C\u5B89\u88C5\u201D\u6309\u94AE\u8FDB\u884C\u4E0B\u8F7D\u634F"})})]});case B.UnInstall:return(0,e.jsxs)(z.ZP,{children:[(0,e.jsx)(X,{stat:s}),(0,e.jsx)(f.Z,{style:{marginTop:10},children:(0,e.jsx)(ae,{type:"warning",children:"\u672C\u5730\u670D\u52A1\u8FDE\u63A5\u6210\u529F\u3002\u6B63\u5728\u5B89\u88C5\u4F9D\u8D56...(\u7EA680MB)"})}),(0,e.jsx)(f.Z,{children:(0,e.jsx)(H.Z,{percent:m})})]});case B.OK:return(0,e.jsxs)(z.ZP,{children:[(0,e.jsx)(X,{stat:s}),(0,e.jsx)(f.Z,{style:{marginTop:10},children:(0,e.jsx)(ae,{type:"success",children:"\u672C\u5730\u670D\u52A1\u5DF2\u5C31\u7EEA\u3002\u5F00\u59CB\u5207\u7247\u4E0B\u8F7D\u5427"})}),(0,e.jsx)($e,{})]});default:return(0,e.jsx)(z.ZP,{children:(0,e.jsx)(X,{stat:s})})}}}}]);