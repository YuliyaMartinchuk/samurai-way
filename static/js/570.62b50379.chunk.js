"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[570],{3570:function(e,s,n){n.r(s),n.d(s,{default:function(){return O}});n(2791);var r="Dialogs_container__UXWai",a="Dialogs_dialogsItems__ihe6W",i="Dialogs_messages__+7Tks",t="Dialogs_messages__items__P6cL7",o="DialogItems_container__Eplmg",c="DialogItems_item__OGMO3",l="DialogItems_item__image__2zNtU",u="DialogItems_item__avatar__TrJCo",m="DialogItems_userAndMessage__VU52v",d="DialogItems_item__userName__a+iPJ",_="DialogItems_userMessage__Y1kci",g=n(1523),f=n(184),h=function(e){var s=e.id,n=e.dialog,r="/dialogs/".concat(s);return(0,f.jsx)("div",{className:o,children:(0,f.jsx)(g.OL,{to:r,children:(0,f.jsxs)("li",{className:c,children:[(0,f.jsx)("div",{className:l,children:(0,f.jsx)("img",{className:u,src:n.avatar,alt:"contact-avatar"})}),(0,f.jsxs)("div",{className:m,children:[(0,f.jsx)("div",{className:d,children:"".concat(n.userFirstName," ").concat(n.userLastName)}),(0,f.jsx)("div",{className:_,children:"'Sed diam nonummy nibh euismod tincidunt ut laoreet dolore'"})]})]})},n.id)})},x="Message_container__t5Umr",j="Message_messages__item__kYypN",v=function(e){var s=e.message;return(0,f.jsx)("div",{className:x,children:(0,f.jsx)("div",{className:j,children:s})})},N=n(6139),p=n(704),F=n(1117),Z=n(5298),D="DialogsForm_container__W49DF",y="DialogsForm_textareaButtonBlock__61nCh",C="DialogsForm_textarea__uNGEg",b="DialogsForm_button__7uKal",M=(0,Z.D)(100),k=(0,p.Z)({form:"dialogsForm"})((function(e){return(0,f.jsx)("div",{className:D,children:(0,f.jsx)("form",{onSubmit:e.handleSubmit,children:(0,f.jsxs)("div",{className:y,children:[(0,f.jsx)("div",{children:(0,f.jsx)(N.Z,{placeholder:"Enter your message",name:"newMassageBody",className:C,component:F.gx,validate:[Z.C,M]})}),(0,f.jsx)("div",{children:(0,f.jsx)("button",{className:b,children:"Send"})})]})})})})),I=function(e){var s=e.dialogsPage,n=s.dialogs.map((function(e){return(0,f.jsx)(h,{id:e.id,dialog:e},e.id)})),o=s.messages.map((function(e){return(0,f.jsx)(v,{message:e.message,id:e.id},e.id)}));return(0,f.jsxs)("div",{className:r,children:[(0,f.jsx)("div",{className:a,children:n}),(0,f.jsxs)("div",{className:i,children:[(0,f.jsx)("div",{className:t,children:o}),(0,f.jsx)(k,{onSubmit:function(s){e.sendMessage(s.newMassageBody)}})]})]})},w=n(364),P=n(7781),S=n(3464),E=n(3757),O=(0,P.qC)((0,w.$j)((function(e){return{dialogsPage:e.dialogsPage}}),{sendMessage:function(e){return{type:E.Hu,newMassageBody:e}}}),S.F)(I)},1117:function(e,s,n){n.d(s,{Gr:function(){return _},II:function(){return d},gx:function(){return m}});var r=n(6459),a=n(1413),i=n(5987),t=(n(2791),n(6139)),o=n(9234),c=n(184),l=["input","meta","FormType"],u=function(e){var s=e.input,n=e.meta,r=e.FormType,t=(0,i.Z)(e,l),u=n.error&&n.touched;return(0,c.jsxs)("div",{className:o.Z.formControl+" "+(u?o.Z.error:""),children:[(0,c.jsx)("div",{children:(0,c.jsx)(r,(0,a.Z)((0,a.Z)({},s),t))}),u&&(0,c.jsx)("span",{children:n.error})]})},m=function(e){var s=Object.assign({},((0,r.Z)(e),e));return(0,c.jsx)(u,(0,a.Z)((0,a.Z)({},s),{},{FormType:"textarea"}))},d=function(e){var s=Object.assign({},((0,r.Z)(e),e));return(0,c.jsx)(u,(0,a.Z)((0,a.Z)({},s),{},{FormType:"input"}))};function _(e,s,n,r,i){var l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return(0,c.jsxs)("div",{className:o.Z.createFieldRoot,children:[(0,c.jsx)(t.Z,(0,a.Z)({placeholder:e,name:s,component:r,validate:n},i))," ",l]})}},3464:function(e,s,n){n.d(s,{F:function(){return u}});var r=n(1413),a=n(5987),i=n(9271),t=n(364),o=(n(2791),n(184)),c=["isAuth"],l=function(e){return{isAuth:e.auth.isAuth}};function u(e){return(0,t.$j)(l)((function(s){var n=s.isAuth,t=(0,a.Z)(s,c);return n?(0,o.jsx)(e,(0,r.Z)({},t)):(0,o.jsx)(i.l_,{to:"/login"})}))}},5298:function(e,s,n){n.d(s,{C:function(){return r},D:function(){return a}});var r=function(e){if(!e)return"Field is required"},a=function(e){return function(s){if(s&&s.length>e)return"Max length is ".concat(e," symbols")}}},9234:function(e,s){s.Z={formControl:"FormsControls_formControl__ZFy6E",error:"FormsControls_error__Ph5O6",formSummaryError:"FormsControls_formSummaryError__iiPnC",blink1:"FormsControls_blink1__XLlQ+"}}}]);
//# sourceMappingURL=570.62b50379.chunk.js.map