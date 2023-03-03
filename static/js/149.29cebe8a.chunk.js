"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[149],{1149:function(e,t,n){n.r(t),n.d(t,{default:function(){return et}});var r=n(9434),o="NOT_FOUND";var a=function(e,t){return e===t};function i(e,t){var n="object"===typeof t?t:{equalityCheck:t},r=n.equalityCheck,i=void 0===r?a:r,s=n.maxSize,c=void 0===s?1:s,l=n.resultEqualityCheck,u=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,o=0;o<r;o++)if(!e(t[o],n[o]))return!1;return!0}}(i),d=1===c?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:o},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(u):function(e,t){var n=[];function r(e){var r=n.findIndex((function(n){return t(e,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return o}return{get:r,put:function(t,a){r(t)===o&&(n.unshift({key:t,value:a}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(c,u);function f(){var t=d.get(arguments);if(t===o){if(t=e.apply(null,arguments),l){var n=d.getEntries(),r=n.find((function(e){return l(e.value,t)}));r&&(t=r.value)}d.put(arguments,t)}return t}return f.clearCache=function(){return d.clear()},f}function s(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function c(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];var a,i=0,c={memoizeOptions:void 0},l=r.pop();if("object"===typeof l&&(c=l,l=r.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var u=c,d=u.memoizeOptions,f=void 0===d?n:d,p=Array.isArray(f)?f:[f],m=s(r),h=e.apply(void 0,[function(){return i++,l.apply(null,arguments)}].concat(p)),v=e((function(){for(var e=[],t=m.length,n=0;n<t;n++)e.push(m[n].apply(null,arguments));return a=h.apply(null,e)}));return Object.assign(v,{resultFunc:l,memoizedResultFunc:h,dependencies:m,lastResult:function(){return a},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),v};return o}var l=c(i),u=function(e){return e.contacts.items},d=function(e){return e.contacts.isLoadingContacts},f=function(e){return e.contacts.errorContacts},p=function(e){return e.filters.search},m=l([p,u],(function(e,t){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),h=n(8792),v=n(1413),g=n(4925),y=n(9439),x=(0,n(5084).eC)("Card"),b=(0,y.Z)(x,2),C=b[0],E=b[1],T=n(6992),Z=n(7872),j=n(2996),w=n(9219),_=n(1999),I=n(184),N=["className","children","direction","justify","align"],L=(0,Z.G)((function(e,t){var n=(0,j.Lr)(e),r=n.className,o=n.children,a=n.direction,i=void 0===a?"column":a,s=n.justify,c=n.align,l=(0,g.Z)(n,N),u=(0,w.jC)("Card",e);return(0,I.jsx)(_.m.div,(0,v.Z)((0,v.Z)({ref:t,className:(0,T.cx)("chakra-card",r),__css:(0,v.Z)({display:"flex",flexDirection:i,justifyContent:s,alignItems:c,position:"relative",minWidth:0,wordWrap:"break-word"},u.container)},l),{},{children:(0,I.jsx)(C,{value:u,children:o})}))})),k=n(3269),z=["className"],O=(0,Z.G)((function(e,t){var n=e.className,r=(0,g.Z)(e,z),o=E();return(0,I.jsx)(_.m.div,(0,v.Z)({ref:t,className:(0,T.cx)("chakra-card__body",n),__css:o.body},r))})),R=n(5946),A=n(176),P=n(9229),M=n(4224),B=n(4363),F=n(2791);function D(e){var t=e.viewBox,n=void 0===t?"0 0 24 24":t,r=e.d,o=e.displayName,a=e.defaultProps,i=void 0===a?{}:a,s=F.Children.toArray(e.path),c=(0,Z.G)((function(e,t){return(0,I.jsx)(B.J,(0,v.Z)((0,v.Z)((0,v.Z)({ref:t,viewBox:n},i),e),{},{children:s.length?s:(0,I.jsx)("path",{fill:"currentColor",d:r})}))}));return c.displayName=o,c}var S,q,H=D({d:"M2.20731,0.0127209 C2.1105,-0.0066419 1.99432,-0.00664663 1.91687,0.032079 C0.871279,0.438698 0.212942,1.92964 0.0580392,2.95587 C-0.426031,6.28627 2.20731,9.17133 4.62766,11.0689 C6.77694,12.7534 10.9012,15.5223 13.3409,12.8503 C13.6507,12.5211 14.0186,12.037 13.9993,11.553 C13.9412,10.7397 13.186,10.1588 12.6051,9.71349 C12.1598,9.38432 11.2304,8.47427 10.6495,8.49363 C10.1267,8.51299 9.79754,9.05515 9.46837,9.38432 L8.88748,9.96521 C8.79067,10.062 7.55145,9.24878 7.41591,9.15197 C6.91248,8.8228 6.4284,8.45491 6.00242,8.04829 C5.57644,7.64167 5.18919,7.19632 4.86002,6.73161 C4.7632,6.59607 3.96933,5.41495 4.04678,5.31813 C4.04678,5.31813 4.72448,4.58234 4.91811,4.2919 C5.32473,3.67229 5.63453,3.18822 5.16982,2.45243 C4.99556,2.18135 4.78257,1.96836 4.55021,1.73601 C4.14359,1.34875 3.73698,0.942131 3.27227,0.612963 C3.02055,0.419335 2.59457,0.0708094 2.20731,0.0127209 Z",displayName:"PhoneIcon",viewBox:"0 0 14 14"}),G=D({displayName:"DeleteIcon",path:(0,I.jsx)("g",{fill:"currentColor",children:(0,I.jsx)("path",{d:"M19.452 7.5H4.547a.5.5 0 00-.5.545l1.287 14.136A2 2 0 007.326 24h9.347a2 2 0 001.992-1.819L19.95 8.045a.5.5 0 00-.129-.382.5.5 0 00-.369-.163zm-9.2 13a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zm5 0a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zM22 4h-4.75a.25.25 0 01-.25-.25V2.5A2.5 2.5 0 0014.5 0h-5A2.5 2.5 0 007 2.5v1.25a.25.25 0 01-.25.25H2a1 1 0 000 2h20a1 1 0 000-2zM9 3.75V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1.25a.25.25 0 01-.25.25h-5.5A.25.25 0 019 3.75z"})})}),V=function(e){var t=e.contact,n=t.id,o=t.name,a=t.number,i=(0,r.I0)();return(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(L,{direction:{base:"column",md:"row"},maxW:"md",w:500,overflow:"hidden",variant:"outline",display:"flex",align:"center",children:(0,I.jsx)(k.K,{spacing:"3",children:(0,I.jsxs)(O,{display:"flex",justify:"center",align:"center",gap:5,children:[(0,I.jsx)(R.X,{size:"lg",children:o}),(0,I.jsxs)(A.k,{justify:"center",align:"center",gap:3,children:[(0,I.jsx)(H,{boxSize:5,color:"blue.500"}),(0,I.jsx)(P.x,{fontSize:"lg",children:a})," "]}),(0,I.jsx)(M.z,{rightIcon:(0,I.jsx)(G,{}),type:"button",justify:"center",align:"center",bg:"#c6ccd1",color:"#665959",fontSize:"large",onClick:function(){return i((0,h.GK)(n))}})]})})},n)})},Q=n(168),W=n(7691),K=W.ZP.h2(S||(S=(0,Q.Z)(["\n    text-align: center;\n    font-size: 28px;\n    font-weight: 600;\n    line-height: calc(18 / 14);\n    letter-spacing: 0.02em;\n    text-transform: capitalize;\n    margin: 0;\n    padding: 10px;\n    "]))),X=function(e){var t=e.title;return(0,I.jsx)(K,{children:t})},U=W.ZP.ul(q||(q=(0,Q.Z)(["\n  display: flex;\n  gap: 5px;\n  padding: 20px;\n  margin: 0;\n  flex-direction: column;\n  font-size: 22px;\n"]))),Y=function(){var e=(0,r.v9)(m),t=(0,r.I0)(),n=(0,r.v9)(d),o=(0,r.v9)(f);return(0,F.useEffect)((function(){t((0,h.yF)())}),[t]),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(X,{title:"contacts"}),n&&!o&&(0,I.jsx)("b",{children:"Request in progress..."}),e.length?(0,I.jsx)(U,{children:e.map((function(e){return(0,I.jsx)(V,{contact:e},e.id)}))}):(0,I.jsx)("p",{children:"Start adding contacts!"})]})},J=n(4270),$=n(4942),ee=n(3433);function te(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=te(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var ne=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=te(e))&&(r&&(r+=" "),r+=t);return r},re=["theme","type"],oe=["delay","staleId"],ae=function(e){return"number"==typeof e&&!isNaN(e)},ie=function(e){return"string"==typeof e},se=function(e){return"function"==typeof e},ce=function(e){return ie(e)||se(e)?e:null},le=function(e){return(0,F.isValidElement)(e)||ie(e)||se(e)||ae(e)};function ue(e){var t=e.enter,n=e.exit,r=e.appendPosition,o=void 0!==r&&r,a=e.collapse,i=void 0===a||a,s=e.collapseDuration,c=void 0===s?300:s;return function(e){var r=e.children,a=e.position,s=e.preventExitTransition,l=e.done,u=e.nodeRef,d=e.isIn,f=o?"".concat(t,"--").concat(a):t,p=o?"".concat(n,"--").concat(a):n,m=(0,F.useRef)(0);return(0,F.useLayoutEffect)((function(){var e,t=u.current,n=f.split(" "),r=function e(r){var o;r.target===u.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===m.current&&"animationcancel"!==r.type&&(o=t.classList).remove.apply(o,(0,ee.Z)(n)))};(e=t.classList).add.apply(e,(0,ee.Z)(n)),t.addEventListener("animationend",r),t.addEventListener("animationcancel",r)}),[]),(0,F.useEffect)((function(){var e=u.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,l,c):l()};d||(s?t():(m.current=1,e.className+=" ".concat(p),e.addEventListener("animationend",t)))}),[d]),F.createElement(F.Fragment,null,r)}}function de(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var fe={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,(0,ee.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(o)}))}},pe=function(e){var t=e.theme,n=e.type,r=(0,g.Z)(e,re);return F.createElement("svg",(0,v.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},r))},me={info:function(e){return F.createElement(pe,(0,v.Z)({},e),F.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return F.createElement(pe,(0,v.Z)({},e),F.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return F.createElement(pe,(0,v.Z)({},e),F.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return F.createElement(pe,(0,v.Z)({},e),F.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return F.createElement("div",{className:"Toastify__spinner"})}};function he(e){var t=(0,F.useReducer)((function(e){return e+1}),0),n=(0,y.Z)(t,2)[1],r=(0,F.useState)([]),o=(0,y.Z)(r,2),a=o[0],i=o[1],s=(0,F.useRef)(null),c=(0,F.useRef)(new Map).current,l=function(e){return-1!==a.indexOf(e)},u=(0,F.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:l,getToast:function(e){return c.get(e)}}).current;function d(e){var t=e.containerId;!u.props.limit||t&&u.containerId!==t||(u.count-=u.queue.length,u.queue=[])}function f(e){i((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function p(){var e=u.queue.shift();h(e.toastContent,e.toastProps,e.staleId)}function m(e,t){var r=t.delay,o=t.staleId,a=(0,g.Z)(t,oe);if(le(e)&&!function(e){return!s.current||u.props.enableMultiContainer&&e.containerId!==u.props.containerId||c.has(e.toastId)&&null==e.updateId}(a)){var i=a.toastId,l=a.updateId,d=a.data,m=u.props,y=function(){return f(i)},x=null==l;x&&u.count++;var b,C,E=(0,v.Z)((0,v.Z)((0,v.Z)({},m),{},{style:m.toastStyle,key:u.toastKey++},a),{},{toastId:i,updateId:l,data:d,closeToast:y,isIn:!1,className:ce(a.className||m.toastClassName),bodyClassName:ce(a.bodyClassName||m.bodyClassName),progressClassName:ce(a.progressClassName||m.progressClassName),autoClose:!a.isLoading&&(b=a.autoClose,C=m.autoClose,!1===b||ae(b)&&b>0?b:C),deleteToast:function(){var e=de(c.get(i),"removed");c.delete(i),fe.emit(4,e);var t=u.queue.length;if(u.count=null==i?u.count-u.displayedToast:u.count-1,u.count<0&&(u.count=0),t>0){var r=null==i?u.props.limit:1;if(1===t||1===r)u.displayedToast++,p();else{var o=r>t?t:r;u.displayedToast=o;for(var a=0;a<o;a++)p()}}else n()}});E.iconOut=function(e){var t=e.theme,n=e.type,r=e.isLoading,o=e.icon,a=null,i={theme:t,type:n};return!1===o||(se(o)?a=o(i):(0,F.isValidElement)(o)?a=(0,F.cloneElement)(o,i):ie(o)||ae(o)?a=o:r?a=me.spinner():function(e){return e in me}(n)&&(a=me[n](i))),a}(E),se(a.onOpen)&&(E.onOpen=a.onOpen),se(a.onClose)&&(E.onClose=a.onClose),E.closeButton=m.closeButton,!1===a.closeButton||le(a.closeButton)?E.closeButton=a.closeButton:!0===a.closeButton&&(E.closeButton=!le(m.closeButton)||m.closeButton);var T=e;(0,F.isValidElement)(e)&&!ie(e.type)?T=(0,F.cloneElement)(e,{closeToast:y,toastProps:E,data:d}):se(e)&&(T=e({closeToast:y,toastProps:E,data:d})),m.limit&&m.limit>0&&u.count>m.limit&&x?u.queue.push({toastContent:T,toastProps:E,staleId:o}):ae(r)?setTimeout((function(){h(T,E,o)}),r):h(T,E,o)}}function h(e,t,n){var r=t.toastId;n&&c.delete(n);var o={content:e,props:t};c.set(r,o),i((function(e){return[].concat((0,ee.Z)(e),[r]).filter((function(e){return e!==n}))})),fe.emit(4,de(o,null==o.props.updateId?"added":"updated"))}return(0,F.useEffect)((function(){return u.containerId=e.containerId,fe.cancelEmit(3).on(0,m).on(1,(function(e){return s.current&&f(e)})).on(5,d).emit(2,u),function(){c.clear(),fe.emit(3,u)}}),[]),(0,F.useEffect)((function(){u.props=e,u.isToastActive=l,u.displayedToast=a.length})),{getToastToRender:function(t){var n=new Map,r=Array.from(c.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:s,isToastActive:l}}function ve(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function ge(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function ye(e){var t=(0,F.useState)(!1),n=(0,y.Z)(t,2),r=n[0],o=n[1],a=(0,F.useState)(!1),i=(0,y.Z)(a,2),s=i[0],c=i[1],l=(0,F.useRef)(null),u=(0,F.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,d=(0,F.useRef)(e),f=e.autoClose,p=e.pauseOnHover,m=e.closeToast,h=e.onClick,v=e.closeOnClick;function g(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),u.didMove=!1,document.addEventListener("mousemove",E),document.addEventListener("mouseup",T),document.addEventListener("touchmove",E),document.addEventListener("touchend",T);var n=l.current;u.canCloseOnClick=!0,u.canDrag=!0,u.boundingRect=n.getBoundingClientRect(),n.style.transition="",u.x=ve(t.nativeEvent),u.y=ge(t.nativeEvent),"x"===e.draggableDirection?(u.start=u.x,u.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(u.start=u.y,u.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function x(t){if(u.boundingRect){var n=u.boundingRect,r=n.top,o=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&u.x>=a&&u.x<=i&&u.y>=r&&u.y<=o?C():b()}}function b(){o(!0)}function C(){o(!1)}function E(t){var n=l.current;u.canDrag&&n&&(u.didMove=!0,r&&C(),u.x=ve(t),u.y=ge(t),u.delta="x"===e.draggableDirection?u.x-u.start:u.y-u.start,u.start!==u.x&&(u.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(u.delta,"px)"),n.style.opacity=""+(1-Math.abs(u.delta/u.removalDistance)))}function T(){document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",T),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",T);var t=l.current;if(u.canDrag&&u.didMove&&t){if(u.canDrag=!1,Math.abs(u.delta)>u.removalDistance)return c(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,F.useEffect)((function(){d.current=e})),(0,F.useEffect)((function(){return l.current&&l.current.addEventListener("d",b,{once:!0}),se(e.onOpen)&&e.onOpen((0,F.isValidElement)(e.children)&&e.children.props),function(){var e=d.current;se(e.onClose)&&e.onClose((0,F.isValidElement)(e.children)&&e.children.props)}}),[]),(0,F.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||C(),window.addEventListener("focus",b),window.addEventListener("blur",C)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",b),window.removeEventListener("blur",C))}}),[e.pauseOnFocusLoss]);var Z={onMouseDown:g,onTouchStart:g,onMouseUp:x,onTouchEnd:x};return f&&p&&(Z.onMouseEnter=C,Z.onMouseLeave=b),v&&(Z.onClick=function(e){h&&h(e),u.canCloseOnClick&&m()}),{playToast:b,pauseToast:C,isRunning:r,preventExitTransition:s,toastRef:l,eventHandlers:Z}}function xe(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,o=void 0===r?"close":r;return F.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},F.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},F.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function be(e){var t=e.delay,n=e.isRunning,r=e.closeToast,o=e.type,a=void 0===o?"default":o,i=e.hide,s=e.className,c=e.style,l=e.controlledProgress,u=e.progress,d=e.rtl,f=e.isIn,p=e.theme,m=i||l&&0===u,h=(0,v.Z)((0,v.Z)({},c),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:m?0:1});l&&(h.transform="scaleX(".concat(u,")"));var g=ne("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(p),"Toastify__progress-bar--".concat(a),{"Toastify__progress-bar--rtl":d}),y=se(s)?s({rtl:d,type:a,defaultClassName:g}):ne(g,s);return F.createElement("div",(0,$.Z)({role:"progressbar","aria-hidden":m?"true":"false","aria-label":"notification timer",className:y,style:h},l&&u>=1?"onTransitionEnd":"onAnimationEnd",l&&u<1?null:function(){f&&r()}))}var Ce=function(e){var t=ye(e),n=t.isRunning,r=t.preventExitTransition,o=t.toastRef,a=t.eventHandlers,i=e.closeButton,s=e.children,c=e.autoClose,l=e.onClick,u=e.type,d=e.hideProgressBar,f=e.closeToast,p=e.transition,m=e.position,h=e.className,g=e.style,y=e.bodyClassName,x=e.bodyStyle,b=e.progressClassName,C=e.progressStyle,E=e.updateId,T=e.role,Z=e.progress,j=e.rtl,w=e.toastId,_=e.deleteToast,I=e.isIn,N=e.isLoading,L=e.iconOut,k=e.closeOnClick,z=e.theme,O=ne("Toastify__toast","Toastify__toast-theme--".concat(z),"Toastify__toast--".concat(u),{"Toastify__toast--rtl":j},{"Toastify__toast--close-on-click":k}),R=se(h)?h({rtl:j,position:m,type:u,defaultClassName:O}):ne(O,h),A=!!Z||!c,P={closeToast:f,type:u,theme:z},M=null;return!1===i||(M=se(i)?i(P):(0,F.isValidElement)(i)?(0,F.cloneElement)(i,P):xe(P)),F.createElement(p,{isIn:I,done:_,position:m,preventExitTransition:r,nodeRef:o},F.createElement("div",(0,v.Z)((0,v.Z)({id:w,onClick:l,className:R},a),{},{style:g,ref:o}),F.createElement("div",(0,v.Z)((0,v.Z)({},I&&{role:T}),{},{className:se(y)?y({type:u}):ne("Toastify__toast-body",y),style:x}),null!=L&&F.createElement("div",{className:ne("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!N})},L),F.createElement("div",null,s)),M,F.createElement(be,(0,v.Z)((0,v.Z)({},E&&!A?{key:"pb-".concat(E)}:{}),{},{rtl:j,theme:z,delay:c,isRunning:n,isIn:I,closeToast:f,hide:d,type:u,style:C,className:b,controlledProgress:A,progress:Z||0}))))},Ee=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},Te=ue(Ee("bounce",!0)),Ze=(ue(Ee("slide",!0)),ue(Ee("zoom")),ue(Ee("flip")),(0,F.forwardRef)((function(e,t){var n=he(e),r=n.getToastToRender,o=n.containerRef,a=n.isToastActive,i=e.className,s=e.style,c=e.rtl,l=e.containerId;function u(e){var t=ne("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":c});return se(i)?i({position:e,rtl:c,defaultClassName:t}):ne(t,ce(i))}return(0,F.useEffect)((function(){t&&(t.current=o.current)}),[]),F.createElement("div",{ref:o,className:"Toastify",id:l},r((function(e,t){var n=t.length?(0,v.Z)({},s):(0,v.Z)((0,v.Z)({},s),{},{pointerEvents:"none"});return F.createElement("div",{className:u(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var r=e.content,o=e.props;return F.createElement(Ce,(0,v.Z)((0,v.Z)({},o),{},{isIn:a(o.toastId),style:(0,v.Z)((0,v.Z)({},o.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(o.key)}),r)})))})))})));Ze.displayName="ToastContainer",Ze.defaultProps={position:"top-right",transition:Te,autoClose:5e3,closeButton:xe,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var je,we,_e,Ie,Ne,Le=new Map,ke=[],ze=1;function Oe(){return""+ze++}function Re(e){return e&&(ie(e.toastId)||ae(e.toastId))?e.toastId:Oe()}function Ae(e,t){return Le.size>0?fe.emit(0,e,t):ke.push({content:e,options:t}),t.toastId}function Pe(e,t){return(0,v.Z)((0,v.Z)({},t),{},{type:t&&t.type||e,toastId:Re(t)})}function Me(e){return function(t,n){return Ae(t,Pe(e,n))}}function Be(e,t){return Ae(e,Pe("default",t))}Be.loading=function(e,t){return Ae(e,Pe("default",(0,v.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},Be.promise=function(e,t,n){var r,o=t.pending,a=t.error,i=t.success;o&&(r=ie(o)?Be.loading(o,n):Be.loading(o.render,(0,v.Z)((0,v.Z)({},n),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(e,t,o){if(null!=t){var a=(0,v.Z)((0,v.Z)((0,v.Z)({type:e},s),n),{},{data:o}),i=ie(t)?{render:t}:t;return r?Be.update(r,(0,v.Z)((0,v.Z)({},a),i)):Be(i.render,(0,v.Z)((0,v.Z)({},a),i)),o}Be.dismiss(r)},l=se(e)?e():e;return l.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),l},Be.success=Me("success"),Be.info=Me("info"),Be.error=Me("error"),Be.warning=Me("warning"),Be.warn=Be.warning,Be.dark=function(e,t){return Ae(e,Pe("default",(0,v.Z)({theme:"dark"},t)))},Be.dismiss=function(e){Le.size>0?fe.emit(1,e):ke=ke.filter((function(t){return null!=e&&t.options.toastId!==e}))},Be.clearWaitingQueue=function(e){return void 0===e&&(e={}),fe.emit(5,e)},Be.isActive=function(e){var t=!1;return Le.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},Be.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=Le.get(n||je);return r&&r.getToast(e)}(e,t);if(n){var r=n.props,o=n.content,a=(0,v.Z)((0,v.Z)((0,v.Z)({},r),t),{},{toastId:t.toastId||e,updateId:Oe()});a.toastId!==e&&(a.staleId=e);var i=a.render||o;delete a.render,Ae(i,a)}}),0)},Be.done=function(e){Be.update(e,{progress:1})},Be.onChange=function(e){return fe.on(4,e),function(){fe.off(4,e)}},Be.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Be.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},fe.on(2,(function(e){je=e.containerId||e,Le.set(je,e),ke.forEach((function(e){fe.emit(0,e.content,e.options)})),ke=[]})).on(3,(function(e){Le.delete(e.containerId||e),0===Le.size&&fe.off(0).off(1).off(5)}));var Fe,De,Se,qe,He=W.ZP.form.attrs({autoComplete:"off"})(we||(we=(0,Q.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  gap: 15px;\n  width: 538px;\n  height: 280px;\n  padding: 20px;\n  border: 2px solid #2196f3;\n  border-radius: 6px;\n  box-shadow: 0px 4px 4px rgb(0, 0, 0, 15%);\n"]))),Ge=W.ZP.button.attrs({type:"submit"})(_e||(_e=(0,Q.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 200px;\n  height: 50px;\n  font-family: inherit;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 1.88;\n  letter-spacing: 0.06em;\n  color: #fff;\n  background-color: #2196f3;\n  box-shadow: 0px 4px 4px rgb(0, 0, 0, 15%);\n  border-radius: 4px;\n  border-color: transparent;\n  cursor: pointer;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    background-color: #188ce8;\n  }\n"]))),Ve=W.ZP.label(Ie||(Ie=(0,Q.Z)(["\n  display: block;\n  margin-bottom: 10px;\n"]))),Qe=W.ZP.input(Ne||(Ne=(0,Q.Z)(["\n  display: block;\n  width: 513px;\n  height: 20px;\n  padding: 12px;\n  font-size: 20px;\n  color: #757575;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  outline: rgba(0, 0, 0, 0);\n  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    border-color: #2196f3;\n  }\n"]))),We=function(){var e=(0,r.I0)(),t=(0,r.v9)(u);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(X,{title:"phonebook"}),(0,I.jsxs)(He,{onSubmit:function(n){n.preventDefault();var r=n.target.elements;if(t.some((function(e){return e.name.toLowerCase().trim()===r.name.value.toLowerCase().trim()})))return Be.warn("".concat(r.name.value," is already in contacts!")),void n.target.reset();e((0,h.uK)({name:r.name.value,number:r.number.value})),n.target.reset()},children:[(0,I.jsxs)(Ve,{htmlFor:"name",children:["Name",(0,I.jsx)(Qe,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",placeholder:"Only letters, apostrophe, dash and spaces.",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,I.jsxs)(Ve,{htmlFor:"number",children:["Number",(0,I.jsx)(Qe,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",placeholder:"Only digits.Can spaces, dashes, parentheses, start with +.",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,I.jsx)(Ge,{children:"Add Contact"})]})]})},Ke=W.ZP.div(Fe||(Fe=(0,Q.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  gap: 15px;\n  width: 538px;\n  height: 90px;\n  padding: 20px;\n  border: 2px solid #2196f3;\n  box-shadow: 0px 4px 4px rgb(0, 0, 0, 15%);\n"]))),Xe=W.ZP.label(De||(De=(0,Q.Z)(["\n  display: block;\n  margin-bottom: 10px;\n"]))),Ue=W.ZP.input.attrs({autoComplete:"off"})(Se||(Se=(0,Q.Z)(["\n  display: block;\n  width: 430px;\n  height: 20px;\n  padding: 12px;\n  font-size: 20px;\n  color: #757575;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  outline: rgba(0, 0, 0, 0);\n  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    border-color: #2196f3;\n  }\n"]))),Ye=n(9778),Je=function(){var e=(0,r.v9)(p),t=(0,r.I0)();return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(X,{title:"Search contacts"}),(0,I.jsx)(Ke,{children:(0,I.jsxs)(Xe,{htmlFor:"search",children:["Find contact by name",(0,I.jsx)(Ue,{type:"text",name:"search",value:e,onChange:function(e){return t((0,Ye.l)(e.target.value))},placeholder:"Please start typing name..."})]})})]})},$e=W.ZP.div(qe||(qe=(0,Q.Z)(["\nwidth: 1200px;\n display: flex;\n   justify-content: center;\n    flex-direction: column; \n  align-items: center;\n font-size: 20px;\n   color: #212121;\n   font-family: 'Roboto', sans-serif;\n   line-height: 1.71;\n   letter-spacing: 0.03em;\n"])));function et(){return(0,I.jsxs)("main",{children:[(0,I.jsxs)(J.q,{prioritizeSeoTags:!0,children:[(0,I.jsx)("title",{children:"My phonebook"}),(0,I.jsx)("meta",{property:"og:title",content:"My phonebook"})]}),(0,I.jsxs)($e,{children:[(0,I.jsx)(We,{}),(0,I.jsx)(Je,{}),(0,I.jsx)(Y,{}),(0,I.jsx)(Ze,{position:"top-center",theme:"colored"})]})]})}},5946:function(e,t,n){n.d(t,{X:function(){return f}});var r=n(1413),o=n(4925),a=n(7872),i=n(9219),s=n(2996),c=n(1999),l=n(6992),u=n(184),d=["className"],f=(0,a.G)((function(e,t){var n=(0,i.mq)("Heading",e),a=(0,s.Lr)(e),f=(a.className,(0,o.Z)(a,d));return(0,u.jsx)(c.m.h2,(0,r.Z)((0,r.Z)({ref:t,className:(0,l.cx)("chakra-heading",e.className)},f),{},{__css:n}))}));f.displayName="Heading"}}]);
//# sourceMappingURL=149.29cebe8a.chunk.js.map