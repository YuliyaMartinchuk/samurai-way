/*! For license information please see 808.961fc553.chunk.js.LICENSE.txt */
(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[808],{6808:function(n,e,r){"use strict";r.r(e),r.d(e,{UsersContainerAPI:function(){return T},default:function(){return D}});var t=r(5671),o=r(3144),u=r(136),i=r(2882),s=r(2791),a=r(364),c=r(4942),l=r(885),f="Pagination_block__sWouc",p="Pagination_pagination__ATv9+",h="Pagination_pageNumber__TauZV",d="Pagination_selectedPage__+3tND",g=r(1694),v=r.n(g),y=r(184),m=function(n){for(var e=n.pageSize,r=n.totalItemsCount,t=n.currentPage,o=n.onPageChanged,u=n.portionSize,i=void 0===u?10:u,a=(0,s.useState)(Math.ceil(t/i)),g=(0,l.Z)(a,2),m=g[0],w=g[1],x=[],P=Math.ceil(r/e),j=1;j<=P;j++)x.push(j);var b=Math.ceil(P/i),C=(m-1)*i+1,Z=m*i;return(0,y.jsx)("div",{className:f,children:(0,y.jsxs)("div",{className:p,children:[m>1&&(0,y.jsx)("button",{onClick:function(){w(m-1)},children:"PREV"}),x.filter((function(n){return n>=C&&n<=Z})).map((function(n){return(0,y.jsx)("span",{onClick:function(){return o(n)},className:v()((0,c.Z)({},d,t===n),h),children:n},n)})),b>m&&(0,y.jsx)("button",{onClick:function(){w(m+1)},children:"NEXT"})]})})},w="users_root__rQy8P",x="users_container__yapjG",P="users_users__v94MP",j="users_userPhoto__wOzYp",b=r(9196),C=r(1523),Z=function(n){var e=n.user,r=n.follow,t=n.unFollow,o=n.followingInProgress;return(0,y.jsxs)("div",{children:[(0,y.jsxs)("span",{children:[(0,y.jsx)("div",{children:(0,y.jsx)(C.OL,{to:"profile/".concat(e.id),children:(0,y.jsx)("img",{src:null!=e.photos.small?e.photos.small:b,className:j,alt:"user photo"})})}),(0,y.jsx)("div",{children:e.followed?(0,y.jsx)("button",{disabled:o.some((function(n){return n===e.id})),onClick:function(){t(e.id)},children:"unfollow"}):(0,y.jsx)("button",{disabled:o.some((function(n){return n===e.id})),onClick:function(){r(e.id)},children:"follow"})})]}),(0,y.jsxs)("span",{children:[(0,y.jsxs)("span",{children:[(0,y.jsx)("div",{children:e.name}),(0,y.jsx)("div",{children:e.status})]}),(0,y.jsxs)("span",{children:[(0,y.jsx)("div",{children:"u.location.country"}),(0,y.jsx)("div",{children:"u.location.city"})]})]})]})},_=function(n){var e=n.users,r=n.pageSize,t=n.totalUsersCount,o=n.currentPage,u=n.follow,i=n.unFollow,s=n.onPageChanged,a=n.followingInProgress;return(0,y.jsx)("div",{className:w,children:(0,y.jsxs)("div",{className:x,children:[(0,y.jsx)("div",{className:P,children:e.map((function(n){return(0,y.jsx)(Z,{user:n,followingInProgress:a,follow:u,unFollow:i},n.id)}))}),(0,y.jsx)(m,{currentPage:o,pageSize:r,totalItemsCount:t,onPageChanged:s})]})})},k=r(3445),S=r(4165),F=r(5861),I=r(4461),z=r(3757),A=function(n){return{type:z.Gd,payload:{userId:n}}},N=function(n){return{type:z.E$,payload:{userId:n}}},U=function(n){return{type:z.Wr,payload:{users:n}}},E=function(n){return{type:z.E7,payload:{isFetching:n}}},O=function(n,e){return{type:z.S,payload:{isFetching:n,userId:e}}},q=function(){var n=(0,F.Z)((0,S.Z)().mark((function n(e,r,t,o){return(0,S.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e(O(!0,r)),n.next=3,t(r);case 3:0===n.sent.resultCode&&e(o(r)),e(O(!1,r));case 6:case"end":return n.stop()}}),n)})));return function(e,r,t,o){return n.apply(this,arguments)}}(),R=r(7781),M=r(2505),T=function(n){(0,u.Z)(r,n);var e=(0,i.Z)(r);function r(){var n;(0,t.Z)(this,r);for(var o=arguments.length,u=new Array(o),i=0;i<o;i++)u[i]=arguments[i];return(n=e.call.apply(e,[this].concat(u))).onPageChanged=function(e){var r=n.props.pageSize;n.props.changePage(e,r)},n}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){var n=this.props,e=n.currentPage,r=n.pageSize;this.props.getUsers(e,r)}},{key:"render",value:function(){return(0,y.jsxs)(y.Fragment,{children:[this.props.isFetching?(0,y.jsx)(k.p,{}):null,(0,y.jsx)(_,{users:this.props.users,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,onPageChanged:this.onPageChanged,currentPage:this.props.currentPage,follow:this.props.follow,unFollow:this.props.unFollow,followingInProgress:this.props.followingInProgress})]})}}]),r}(s.Component),D=(0,R.qC)((0,a.$j)((function(n){return{users:(0,M.Rf)(n),pageSize:(0,M.b7)(n),totalUsersCount:(0,M.qZ)(n),currentPage:(0,M.FZ)(n),isFetching:(0,M.ab)(n),followingInProgress:(0,M.yg)(n)}}),{getUsers:function(n,e){return function(){var r=(0,F.Z)((0,S.Z)().mark((function r(t){var o;return(0,S.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t(E(!0)),r.next=3,I.h3.getUsers(n,e);case 3:o=r.sent,t(E(!1)),t(U(o.items)),t((u=o.totalCount,{type:z.mP,payload:{totalCount:u}}));case 7:case"end":return r.stop()}var u}),r)})));return function(n){return r.apply(this,arguments)}}()},changePage:function(n,e){return function(){var r=(0,F.Z)((0,S.Z)().mark((function r(t){var o;return(0,S.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t(E(!0)),t((u=n,{type:z.Nc,payload:{currentPage:u}})),r.next=4,I.h3.getUsers(n,e);case 4:o=r.sent,t(E(!1)),t(U(o.items));case 7:case"end":return r.stop()}var u}),r)})));return function(n){return r.apply(this,arguments)}}()},follow:function(n){return function(){var e=(0,F.Z)((0,S.Z)().mark((function e(r){return(0,S.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(r,n,I.h3.follow.bind(I.h3),A);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},unFollow:function(n){return function(){var e=(0,F.Z)((0,S.Z)().mark((function e(r){return(0,S.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(r,n,I.h3.unFollow.bind(I.h3),N);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}))(T)},2505:function(n,e,r){"use strict";r.d(e,{FZ:function(){return f},yg:function(){return h},ab:function(){return p},b7:function(){return c},qZ:function(){return l},Rf:function(){return a}});var t="NOT_FOUND";var o=function(n,e){return n===e};function u(n,e){var r="object"===typeof e?e:{equalityCheck:e},u=r.equalityCheck,i=void 0===u?o:u,s=r.maxSize,a=void 0===s?1:s,c=r.resultEqualityCheck,l=function(n){return function(e,r){if(null===e||null===r||e.length!==r.length)return!1;for(var t=e.length,o=0;o<t;o++)if(!n(e[o],r[o]))return!1;return!0}}(i),f=1===a?function(n){var e;return{get:function(r){return e&&n(e.key,r)?e.value:t},put:function(n,r){e={key:n,value:r}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(n,e){var r=[];function o(n){var o=r.findIndex((function(r){return e(n,r.key)}));if(o>-1){var u=r[o];return o>0&&(r.splice(o,1),r.unshift(u)),u.value}return t}return{get:o,put:function(e,u){o(e)===t&&(r.unshift({key:e,value:u}),r.length>n&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(a,l);function p(){var e=f.get(arguments);if(e===t){if(e=n.apply(null,arguments),c){var r=f.getEntries().find((function(n){return c(n.value,e)}));r&&(e=r.value)}f.put(arguments,e)}return e}return p.clearCache=function(){return f.clear()},p}function i(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),t=1;t<e;t++)r[t-1]=arguments[t];return function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];var u,i=0,s={memoizeOptions:void 0},a=t.pop();if("object"===typeof a&&(s=a,a=t.pop()),"function"!==typeof a)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof a+"]");var c=s.memoizeOptions,l=void 0===c?r:c,f=Array.isArray(l)?l:[l],p=function(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var r=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return e}(t),h=n.apply(void 0,[function(){return i++,a.apply(null,arguments)}].concat(f)),d=n((function(){for(var n=[],e=p.length,r=0;r<e;r++)n.push(p[r].apply(null,arguments));return u=h.apply(null,n)}));return Object.assign(d,{resultFunc:a,memoizedResultFunc:h,dependencies:p,lastResult:function(){return u},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),d}}var s=i(u),a=s((function(n){return n.usersPage.users}),(function(n){return n.filter((function(n){return!0}))})),c=function(n){return n.usersPage.pageSize},l=function(n){return n.usersPage.totalUsersCount},f=function(n){return n.usersPage.currentPage},p=function(n){return n.usersPage.isFetching},h=function(n){return n.usersPage.followingInProgress}},1694:function(n,e){var r;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var n=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var u=typeof r;if("string"===u||"number"===u)n.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&n.push(i)}}else if("object"===u)if(r.toString===Object.prototype.toString)for(var s in r)t.call(r,s)&&r[s]&&n.push(s);else n.push(r.toString())}}return n.join(" ")}n.exports?(o.default=o,n.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(n.exports=r)}()},9196:function(n,e,r){"use strict";n.exports=r.p+"static/media/defaultUserPhoto.48161ffe784f0589388e.jpg"},885:function(n,e,r){"use strict";r.d(e,{Z:function(){return o}});var t=r(181);function o(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,o,u,i,s=[],a=!0,c=!1;try{if(u=(r=r.call(n)).next,0===e){if(Object(r)!==r)return;a=!1}else for(;!(a=(t=u.call(r)).done)&&(s.push(t.value),s.length!==e);a=!0);}catch(l){c=!0,o=l}finally{try{if(!a&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return s}}(n,e)||(0,t.Z)(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=808.961fc553.chunk.js.map