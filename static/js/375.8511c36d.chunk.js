"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[375],{7375:function(e,t,n){n.r(t),n.d(t,{default:function(){return Et}});var r=n(9434),o="NOT_FOUND";var a=function(e,t){return e===t};function i(e,t){var n="object"===typeof t?t:{equalityCheck:t},r=n.equalityCheck,i=void 0===r?a:r,s=n.maxSize,c=void 0===s?1:s,l=n.resultEqualityCheck,u=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,o=0;o<r;o++)if(!e(t[o],n[o]))return!1;return!0}}(i),d=1===c?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:o},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(u):function(e,t){var n=[];function r(e){var r=n.findIndex((function(n){return t(e,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return o}return{get:r,put:function(t,a){r(t)===o&&(n.unshift({key:t,value:a}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(c,u);function f(){var t=d.get(arguments);if(t===o){if(t=e.apply(null,arguments),l){var n=d.getEntries(),r=n.find((function(e){return l(e.value,t)}));r&&(t=r.value)}d.put(arguments,t)}return t}return f.clearCache=function(){return d.clear()},f}function s(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function c(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];var a,i=0,c={memoizeOptions:void 0},l=r.pop();if("object"===typeof l&&(c=l,l=r.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var u=c,d=u.memoizeOptions,f=void 0===d?n:d,p=Array.isArray(f)?f:[f],m=s(r),h=e.apply(void 0,[function(){return i++,l.apply(null,arguments)}].concat(p)),v=e((function(){for(var e=[],t=m.length,n=0;n<t;n++)e.push(m[n].apply(null,arguments));return a=h.apply(null,e)}));return Object.assign(v,{resultFunc:l,memoizedResultFunc:h,dependencies:m,lastResult:function(){return a},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),v};return o}var l=c(i),u=function(e){return e.contacts.items},d=function(e){return e.contacts.isLoadingContacts},f=function(e){return e.contacts.errorContacts},p=function(e){return e.filters.search},m=l([p,u],(function(e,t){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),h=n(9439),v=n(8792),g=n(1413),x=n(4925),y=(0,n(5084).eC)("Card"),b=(0,h.Z)(y,2),C=b[0],E=b[1],Z=n(6992),T=n(7872),j=n(2996),w=n(9084),k=n(1999),I=n(184),_=["className","children","direction","justify","align"],N=(0,T.G)((function(e,t){var n=(0,j.Lr)(e),r=n.className,o=n.children,a=n.direction,i=void 0===a?"column":a,s=n.justify,c=n.align,l=(0,x.Z)(n,_),u=(0,w.jC)("Card",e);return(0,I.jsx)(k.m.div,(0,g.Z)((0,g.Z)({ref:t,className:(0,Z.cx)("chakra-card",r),__css:(0,g.Z)({display:"flex",flexDirection:i,justifyContent:s,alignItems:c,position:"relative",minWidth:0,wordWrap:"break-word"},u.container)},l),{},{children:(0,I.jsx)(C,{value:u,children:o})}))})),L=["className"],z=(0,T.G)((function(e,t){var n=e.className,r=(0,x.Z)(e,L),o=E();return(0,I.jsx)(k.m.div,(0,g.Z)({ref:t,className:(0,Z.cx)("chakra-card__body",n),__css:o.body},r))})),O=n(9229),R=n(176),P=n(4224),A=n(2791),M=["icon","children","isRound","aria-label"],S=(0,T.G)((function(e,t){var n=e.icon,r=e.children,o=e.isRound,a=e["aria-label"],i=(0,x.Z)(e,M),s=n||r,c=(0,A.isValidElement)(s)?(0,A.cloneElement)(s,{"aria-hidden":!0,focusable:!1}):null;return(0,I.jsx)(P.z,(0,g.Z)((0,g.Z)({padding:"0",borderRadius:o?"full":void 0,ref:t,"aria-label":a},i),{},{children:c}))}));S.displayName="IconButton";var D=n(4363);function B(e){var t=e.viewBox,n=void 0===t?"0 0 24 24":t,r=e.d,o=e.displayName,a=e.defaultProps,i=void 0===a?{}:a,s=A.Children.toArray(e.path),c=(0,T.G)((function(e,t){return(0,I.jsx)(D.J,(0,g.Z)((0,g.Z)((0,g.Z)({ref:t,viewBox:n},i),e),{},{children:s.length?s:(0,I.jsx)("path",{fill:"currentColor",d:r})}))}));return c.displayName=o,c}var F,q,H,V,G,Q=B({d:"M2.20731,0.0127209 C2.1105,-0.0066419 1.99432,-0.00664663 1.91687,0.032079 C0.871279,0.438698 0.212942,1.92964 0.0580392,2.95587 C-0.426031,6.28627 2.20731,9.17133 4.62766,11.0689 C6.77694,12.7534 10.9012,15.5223 13.3409,12.8503 C13.6507,12.5211 14.0186,12.037 13.9993,11.553 C13.9412,10.7397 13.186,10.1588 12.6051,9.71349 C12.1598,9.38432 11.2304,8.47427 10.6495,8.49363 C10.1267,8.51299 9.79754,9.05515 9.46837,9.38432 L8.88748,9.96521 C8.79067,10.062 7.55145,9.24878 7.41591,9.15197 C6.91248,8.8228 6.4284,8.45491 6.00242,8.04829 C5.57644,7.64167 5.18919,7.19632 4.86002,6.73161 C4.7632,6.59607 3.96933,5.41495 4.04678,5.31813 C4.04678,5.31813 4.72448,4.58234 4.91811,4.2919 C5.32473,3.67229 5.63453,3.18822 5.16982,2.45243 C4.99556,2.18135 4.78257,1.96836 4.55021,1.73601 C4.14359,1.34875 3.73698,0.942131 3.27227,0.612963 C3.02055,0.419335 2.59457,0.0708094 2.20731,0.0127209 Z",displayName:"PhoneIcon",viewBox:"0 0 14 14"}),W=B({displayName:"EditIcon",path:(0,I.jsxs)("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2",children:[(0,I.jsx)("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),(0,I.jsx)("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]})}),J=B({displayName:"DeleteIcon",path:(0,I.jsx)("g",{fill:"currentColor",children:(0,I.jsx)("path",{d:"M19.452 7.5H4.547a.5.5 0 00-.5.545l1.287 14.136A2 2 0 007.326 24h9.347a2 2 0 001.992-1.819L19.95 8.045a.5.5 0 00-.129-.382.5.5 0 00-.369-.163zm-9.2 13a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zm5 0a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zM22 4h-4.75a.25.25 0 01-.25-.25V2.5A2.5 2.5 0 0014.5 0h-5A2.5 2.5 0 007 2.5v1.25a.25.25 0 01-.25.25H2a1 1 0 000 2h20a1 1 0 000-2zM9 3.75V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1.25a.25.25 0 01-.25.25h-5.5A.25.25 0 019 3.75z"})})}),K=n(5705),U=n(4087),X=n(6146),Y=n(2701),$=n(4585),ee=n(7886),te=n(168),ne=n(7691),re=ne.ZP.div(F||(F=(0,te.Z)(["\nposition: relative;\ntop: 70px;\n  width: calc(100vw);\n  min-width: 450px;\n  min-height: calc(100vh - 50px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 20px;\n  color: #212121;\n  background-color: #e2e8f0;\n  font-family: 'Roboto', sans-serif;\n  line-height: 1.71;\n  letter-spacing: 0.03em;\n"]))),oe=ne.ZP.section(q||(q=(0,te.Z)(["\n  padding-top: 10px;\n  padding-bottom: 5px;\n"]))),ae=ne.ZP.div(H||(H=(0,te.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),ie=function(e){var t=e.onClose,n=e.editingContact,o=n.id,a=n.name,i=n.number,s=(0,r.I0)(),c=function(e){e.preventDefault();var n=e.target.elements;s((0,v.mP)((0,g.Z)({id:o},{name:n.nameEdit.value,number:n.numberEdit.value}))),t(),e.target.reset()};return(0,A.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]),(0,I.jsx)(ae,{onClick:function(e){e.target===e.currentTarget&&t()},children:(0,I.jsxs)(R.k,{bg:"gray.100",justify:"center",alignItems:"center",flexDirection:"column",p:100,gap:5,children:[(0,I.jsxs)(R.k,{gap:5,children:[(0,I.jsx)(O.x,{children:a}),(0,I.jsx)(O.x,{children:i})]}),(0,I.jsx)(U.xu,{bg:"white",p:6,rounded:"md",w:500,h:280,children:(0,I.jsx)(K.J9,{initialValues:{nameEdit:a,numberEdit:i},children:function(){return(0,I.jsx)(K.l0,{onSubmit:c,children:(0,I.jsxs)(X.g,{spacing:4,align:"flex-start",children:[(0,I.jsxs)(Y.NI,{children:[(0,I.jsx)($.l,{htmlFor:"name",fontSize:"1.25rem",children:"Name"}),(0,I.jsx)(K.gN,{as:ee.I,type:"text",name:"nameEdit",variant:"filled",fontSize:"1.25rem"})]})," ",(0,I.jsxs)(Y.NI,{children:[(0,I.jsx)($.l,{htmlFor:"number",fontSize:"1.25rem",children:"Numder"}),(0,I.jsx)(K.gN,{as:ee.I,type:"text",name:"numberEdit",variant:"filled",fontSize:"1.25rem"})]}),(0,I.jsx)(P.z,{type:"submit",colorScheme:"telegram",w:"full",children:"Save Contact"})]})})}})})]})})},se=function(e){var t=e.contact,n=(0,A.useState)(!1),o=(0,h.Z)(n,2),a=o[0],i=o[1],s=function(){i((function(e){return!e}))},c=t.id,l=t.name,u=t.number,d=(0,r.I0)();return(0,I.jsx)(I.Fragment,{children:(0,I.jsxs)(N,{direction:{base:"column",md:"row"},noOfLines:[1,2,3],fontSize:"22px",children:[(0,I.jsxs)(z,{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:5,p:2,children:[(0,I.jsx)(O.x,{noOfLines:[1,2,3],w:300,children:l}),(0,I.jsxs)(R.k,{align:"center",gap:5,w:250,children:[(0,I.jsx)(Q,{boxSize:5,color:"blue.500"}),(0,I.jsx)(O.x,{children:u})," "]}),(0,I.jsxs)(R.k,{align:"center",gap:3,children:[(0,I.jsx)(S,{icon:(0,I.jsx)(W,{}),"aria-label":"Delete contact",bg:"#c6ccd1",color:"#665959",size:"md",onClick:s}),(0,I.jsx)(S,{icon:(0,I.jsx)(J,{}),"aria-label":"Delete contact",bg:"#c6ccd1",color:"#665959",size:"md",onClick:function(){return d((0,v.GK)(c))}})]})]}),a&&(0,I.jsx)(ie,{onClose:s,editingContact:t})]},c)})},ce=ne.ZP.h2(V||(V=(0,te.Z)(["\n    text-align: center;\n    font-size: 28px;\n    font-weight: 600;\n    line-height: calc(18 / 14);\n    letter-spacing: 0.02em;\n    text-transform: capitalize;\n    margin: 0;\n    padding: 10px;\n    "]))),le=function(e){var t=e.title;return(0,I.jsx)(ce,{children:t})},ue=ne.ZP.ul(G||(G=(0,te.Z)(["\n  display: flex;\n  gap: 5px;\n  padding: 10px;\n  margin: 0;\n  flex-direction: column;\n  font-size: 22px;\n"]))),de=n(3269),fe=n(4942);var pe=n(2554),me=n(9729),he=["startColor","endColor","isLoaded","fadeDuration","speed","className","fitContent"],ve=(0,k.m)("div",{baseStyle:{boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"}}}),ge=(0,j.gJ)("skeleton-start-color"),xe=(0,j.gJ)("skeleton-end-color"),ye=(0,pe.F4)({from:{opacity:0},to:{opacity:1}}),be=(0,pe.F4)({from:{borderColor:ge.reference,background:ge.reference},to:{borderColor:xe.reference,background:xe.reference}}),Ce=(0,T.G)((function(e,t){var n=(0,g.Z)((0,g.Z)({},e),{},{fadeDuration:"number"===typeof e.fadeDuration?e.fadeDuration:.4,speed:"number"===typeof e.speed?e.speed:.8}),r=(0,w.mq)("Skeleton",n),o=function(){var e=(0,A.useRef)(!0);return(0,A.useEffect)((function(){e.current=!1}),[]),e.current}(),a=(0,j.Lr)(n),i=a.startColor,s=void 0===i?"":i,c=a.endColor,l=void 0===c?"":c,u=a.isLoaded,d=a.fadeDuration,f=a.speed,p=a.className,m=a.fitContent,v=(0,x.Z)(a,he),y=(0,me.dQ)("colors",[s,l]),b=(0,h.Z)(y,2),C=b[0],E=b[1],T=function(e){var t=(0,A.useRef)();return(0,A.useEffect)((function(){t.current=e}),[e]),t.current}(u),_=(0,Z.cx)("chakra-skeleton",p),N=(0,g.Z)((0,g.Z)({},C&&(0,fe.Z)({},ge.variable,C)),E&&(0,fe.Z)({},xe.variable,E));if(u){var L=o||T?"none":"".concat(ye," ").concat(d,"s");return(0,I.jsx)(k.m.div,(0,g.Z)({ref:t,className:_,__css:{animation:L}},v))}return(0,I.jsx)(ve,(0,g.Z)((0,g.Z)({ref:t,className:_},v),{},{__css:(0,g.Z)((0,g.Z)((0,g.Z)({width:m?"fit-content":void 0},r),N),{},{_dark:(0,g.Z)((0,g.Z)({},r._dark),N),animation:"".concat(f,"s linear infinite alternate ").concat(be)})}))}));Ce.displayName="Skeleton";var Ee=function(){var e=(0,r.v9)(m),t=(0,r.I0)(),n=(0,r.v9)(d),o=(0,r.v9)(f);return(0,A.useEffect)((function(){t((0,v.yF)())}),[t]),(0,I.jsxs)(oe,{children:[(0,I.jsx)(le,{title:"contacts"}),n&&!o&&(0,I.jsxs)(de.K,{w:500,children:[(0,I.jsx)(Ce,{h:"30px"}),(0,I.jsx)(Ce,{h:"30px"}),(0,I.jsx)(Ce,{h:"30px"})]}),e.length?(0,I.jsx)(ue,{children:e.map((function(e){return(0,I.jsx)(se,{contact:e},e.id)}))}):(0,I.jsx)(O.x,{fontSize:"22px",children:"Start adding contacts!"})]})},Ze=n(4270),Te=n(3433);function je(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=je(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var we=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=je(e))&&(r&&(r+=" "),r+=t);return r},ke=["theme","type"],Ie=["delay","staleId"],_e=function(e){return"number"==typeof e&&!isNaN(e)},Ne=function(e){return"string"==typeof e},Le=function(e){return"function"==typeof e},ze=function(e){return Ne(e)||Le(e)?e:null},Oe=function(e){return(0,A.isValidElement)(e)||Ne(e)||Le(e)||_e(e)};function Re(e){var t=e.enter,n=e.exit,r=e.appendPosition,o=void 0!==r&&r,a=e.collapse,i=void 0===a||a,s=e.collapseDuration,c=void 0===s?300:s;return function(e){var r=e.children,a=e.position,s=e.preventExitTransition,l=e.done,u=e.nodeRef,d=e.isIn,f=o?"".concat(t,"--").concat(a):t,p=o?"".concat(n,"--").concat(a):n,m=(0,A.useRef)(0);return(0,A.useLayoutEffect)((function(){var e,t=u.current,n=f.split(" "),r=function e(r){var o;r.target===u.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===m.current&&"animationcancel"!==r.type&&(o=t.classList).remove.apply(o,(0,Te.Z)(n)))};(e=t.classList).add.apply(e,(0,Te.Z)(n)),t.addEventListener("animationend",r),t.addEventListener("animationcancel",r)}),[]),(0,A.useEffect)((function(){var e=u.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,l,c):l()};d||(s?t():(m.current=1,e.className+=" ".concat(p),e.addEventListener("animationend",t)))}),[d]),A.createElement(A.Fragment,null,r)}}function Pe(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var Ae={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,(0,Te.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(o)}))}},Me=function(e){var t=e.theme,n=e.type,r=(0,x.Z)(e,ke);return A.createElement("svg",(0,g.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},r))},Se={info:function(e){return A.createElement(Me,(0,g.Z)({},e),A.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return A.createElement(Me,(0,g.Z)({},e),A.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return A.createElement(Me,(0,g.Z)({},e),A.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return A.createElement(Me,(0,g.Z)({},e),A.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return A.createElement("div",{className:"Toastify__spinner"})}};function De(e){var t=(0,A.useReducer)((function(e){return e+1}),0),n=(0,h.Z)(t,2)[1],r=(0,A.useState)([]),o=(0,h.Z)(r,2),a=o[0],i=o[1],s=(0,A.useRef)(null),c=(0,A.useRef)(new Map).current,l=function(e){return-1!==a.indexOf(e)},u=(0,A.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:l,getToast:function(e){return c.get(e)}}).current;function d(e){var t=e.containerId;!u.props.limit||t&&u.containerId!==t||(u.count-=u.queue.length,u.queue=[])}function f(e){i((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function p(){var e=u.queue.shift();v(e.toastContent,e.toastProps,e.staleId)}function m(e,t){var r=t.delay,o=t.staleId,a=(0,x.Z)(t,Ie);if(Oe(e)&&!function(e){return!s.current||u.props.enableMultiContainer&&e.containerId!==u.props.containerId||c.has(e.toastId)&&null==e.updateId}(a)){var i=a.toastId,l=a.updateId,d=a.data,m=u.props,h=function(){return f(i)},y=null==l;y&&u.count++;var b,C,E=(0,g.Z)((0,g.Z)((0,g.Z)({},m),{},{style:m.toastStyle,key:u.toastKey++},a),{},{toastId:i,updateId:l,data:d,closeToast:h,isIn:!1,className:ze(a.className||m.toastClassName),bodyClassName:ze(a.bodyClassName||m.bodyClassName),progressClassName:ze(a.progressClassName||m.progressClassName),autoClose:!a.isLoading&&(b=a.autoClose,C=m.autoClose,!1===b||_e(b)&&b>0?b:C),deleteToast:function(){var e=Pe(c.get(i),"removed");c.delete(i),Ae.emit(4,e);var t=u.queue.length;if(u.count=null==i?u.count-u.displayedToast:u.count-1,u.count<0&&(u.count=0),t>0){var r=null==i?u.props.limit:1;if(1===t||1===r)u.displayedToast++,p();else{var o=r>t?t:r;u.displayedToast=o;for(var a=0;a<o;a++)p()}}else n()}});E.iconOut=function(e){var t=e.theme,n=e.type,r=e.isLoading,o=e.icon,a=null,i={theme:t,type:n};return!1===o||(Le(o)?a=o(i):(0,A.isValidElement)(o)?a=(0,A.cloneElement)(o,i):Ne(o)||_e(o)?a=o:r?a=Se.spinner():function(e){return e in Se}(n)&&(a=Se[n](i))),a}(E),Le(a.onOpen)&&(E.onOpen=a.onOpen),Le(a.onClose)&&(E.onClose=a.onClose),E.closeButton=m.closeButton,!1===a.closeButton||Oe(a.closeButton)?E.closeButton=a.closeButton:!0===a.closeButton&&(E.closeButton=!Oe(m.closeButton)||m.closeButton);var Z=e;(0,A.isValidElement)(e)&&!Ne(e.type)?Z=(0,A.cloneElement)(e,{closeToast:h,toastProps:E,data:d}):Le(e)&&(Z=e({closeToast:h,toastProps:E,data:d})),m.limit&&m.limit>0&&u.count>m.limit&&y?u.queue.push({toastContent:Z,toastProps:E,staleId:o}):_e(r)?setTimeout((function(){v(Z,E,o)}),r):v(Z,E,o)}}function v(e,t,n){var r=t.toastId;n&&c.delete(n);var o={content:e,props:t};c.set(r,o),i((function(e){return[].concat((0,Te.Z)(e),[r]).filter((function(e){return e!==n}))})),Ae.emit(4,Pe(o,null==o.props.updateId?"added":"updated"))}return(0,A.useEffect)((function(){return u.containerId=e.containerId,Ae.cancelEmit(3).on(0,m).on(1,(function(e){return s.current&&f(e)})).on(5,d).emit(2,u),function(){c.clear(),Ae.emit(3,u)}}),[]),(0,A.useEffect)((function(){u.props=e,u.isToastActive=l,u.displayedToast=a.length})),{getToastToRender:function(t){var n=new Map,r=Array.from(c.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:s,isToastActive:l}}function Be(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function Fe(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function qe(e){var t=(0,A.useState)(!1),n=(0,h.Z)(t,2),r=n[0],o=n[1],a=(0,A.useState)(!1),i=(0,h.Z)(a,2),s=i[0],c=i[1],l=(0,A.useRef)(null),u=(0,A.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,d=(0,A.useRef)(e),f=e.autoClose,p=e.pauseOnHover,m=e.closeToast,v=e.onClick,g=e.closeOnClick;function x(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),u.didMove=!1,document.addEventListener("mousemove",E),document.addEventListener("mouseup",Z),document.addEventListener("touchmove",E),document.addEventListener("touchend",Z);var n=l.current;u.canCloseOnClick=!0,u.canDrag=!0,u.boundingRect=n.getBoundingClientRect(),n.style.transition="",u.x=Be(t.nativeEvent),u.y=Fe(t.nativeEvent),"x"===e.draggableDirection?(u.start=u.x,u.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(u.start=u.y,u.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function y(t){if(u.boundingRect){var n=u.boundingRect,r=n.top,o=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&u.x>=a&&u.x<=i&&u.y>=r&&u.y<=o?C():b()}}function b(){o(!0)}function C(){o(!1)}function E(t){var n=l.current;u.canDrag&&n&&(u.didMove=!0,r&&C(),u.x=Be(t),u.y=Fe(t),u.delta="x"===e.draggableDirection?u.x-u.start:u.y-u.start,u.start!==u.x&&(u.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(u.delta,"px)"),n.style.opacity=""+(1-Math.abs(u.delta/u.removalDistance)))}function Z(){document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",Z),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",Z);var t=l.current;if(u.canDrag&&u.didMove&&t){if(u.canDrag=!1,Math.abs(u.delta)>u.removalDistance)return c(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,A.useEffect)((function(){d.current=e})),(0,A.useEffect)((function(){return l.current&&l.current.addEventListener("d",b,{once:!0}),Le(e.onOpen)&&e.onOpen((0,A.isValidElement)(e.children)&&e.children.props),function(){var e=d.current;Le(e.onClose)&&e.onClose((0,A.isValidElement)(e.children)&&e.children.props)}}),[]),(0,A.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||C(),window.addEventListener("focus",b),window.addEventListener("blur",C)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",b),window.removeEventListener("blur",C))}}),[e.pauseOnFocusLoss]);var T={onMouseDown:x,onTouchStart:x,onMouseUp:y,onTouchEnd:y};return f&&p&&(T.onMouseEnter=C,T.onMouseLeave=b),g&&(T.onClick=function(e){v&&v(e),u.canCloseOnClick&&m()}),{playToast:b,pauseToast:C,isRunning:r,preventExitTransition:s,toastRef:l,eventHandlers:T}}function He(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,o=void 0===r?"close":r;return A.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},A.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},A.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Ve(e){var t=e.delay,n=e.isRunning,r=e.closeToast,o=e.type,a=void 0===o?"default":o,i=e.hide,s=e.className,c=e.style,l=e.controlledProgress,u=e.progress,d=e.rtl,f=e.isIn,p=e.theme,m=i||l&&0===u,h=(0,g.Z)((0,g.Z)({},c),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:m?0:1});l&&(h.transform="scaleX(".concat(u,")"));var v=we("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(p),"Toastify__progress-bar--".concat(a),{"Toastify__progress-bar--rtl":d}),x=Le(s)?s({rtl:d,type:a,defaultClassName:v}):we(v,s);return A.createElement("div",(0,fe.Z)({role:"progressbar","aria-hidden":m?"true":"false","aria-label":"notification timer",className:x,style:h},l&&u>=1?"onTransitionEnd":"onAnimationEnd",l&&u<1?null:function(){f&&r()}))}var Ge=function(e){var t=qe(e),n=t.isRunning,r=t.preventExitTransition,o=t.toastRef,a=t.eventHandlers,i=e.closeButton,s=e.children,c=e.autoClose,l=e.onClick,u=e.type,d=e.hideProgressBar,f=e.closeToast,p=e.transition,m=e.position,h=e.className,v=e.style,x=e.bodyClassName,y=e.bodyStyle,b=e.progressClassName,C=e.progressStyle,E=e.updateId,Z=e.role,T=e.progress,j=e.rtl,w=e.toastId,k=e.deleteToast,I=e.isIn,_=e.isLoading,N=e.iconOut,L=e.closeOnClick,z=e.theme,O=we("Toastify__toast","Toastify__toast-theme--".concat(z),"Toastify__toast--".concat(u),{"Toastify__toast--rtl":j},{"Toastify__toast--close-on-click":L}),R=Le(h)?h({rtl:j,position:m,type:u,defaultClassName:O}):we(O,h),P=!!T||!c,M={closeToast:f,type:u,theme:z},S=null;return!1===i||(S=Le(i)?i(M):(0,A.isValidElement)(i)?(0,A.cloneElement)(i,M):He(M)),A.createElement(p,{isIn:I,done:k,position:m,preventExitTransition:r,nodeRef:o},A.createElement("div",(0,g.Z)((0,g.Z)({id:w,onClick:l,className:R},a),{},{style:v,ref:o}),A.createElement("div",(0,g.Z)((0,g.Z)({},I&&{role:Z}),{},{className:Le(x)?x({type:u}):we("Toastify__toast-body",x),style:y}),null!=N&&A.createElement("div",{className:we("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!_})},N),A.createElement("div",null,s)),S,A.createElement(Ve,(0,g.Z)((0,g.Z)({},E&&!P?{key:"pb-".concat(E)}:{}),{},{rtl:j,theme:z,delay:c,isRunning:n,isIn:I,closeToast:f,hide:d,type:u,style:C,className:b,controlledProgress:P,progress:T||0}))))},Qe=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},We=Re(Qe("bounce",!0)),Je=(Re(Qe("slide",!0)),Re(Qe("zoom")),Re(Qe("flip")),(0,A.forwardRef)((function(e,t){var n=De(e),r=n.getToastToRender,o=n.containerRef,a=n.isToastActive,i=e.className,s=e.style,c=e.rtl,l=e.containerId;function u(e){var t=we("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":c});return Le(i)?i({position:e,rtl:c,defaultClassName:t}):we(t,ze(i))}return(0,A.useEffect)((function(){t&&(t.current=o.current)}),[]),A.createElement("div",{ref:o,className:"Toastify",id:l},r((function(e,t){var n=t.length?(0,g.Z)({},s):(0,g.Z)((0,g.Z)({},s),{},{pointerEvents:"none"});return A.createElement("div",{className:u(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var r=e.content,o=e.props;return A.createElement(Ge,(0,g.Z)((0,g.Z)({},o),{},{isIn:a(o.toastId),style:(0,g.Z)((0,g.Z)({},o.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(o.key)}),r)})))})))})));Je.displayName="ToastContainer",Je.defaultProps={position:"top-right",transition:We,autoClose:5e3,closeButton:He,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var Ke,Ue,Xe,Ye,$e,et=new Map,tt=[],nt=1;function rt(){return""+nt++}function ot(e){return e&&(Ne(e.toastId)||_e(e.toastId))?e.toastId:rt()}function at(e,t){return et.size>0?Ae.emit(0,e,t):tt.push({content:e,options:t}),t.toastId}function it(e,t){return(0,g.Z)((0,g.Z)({},t),{},{type:t&&t.type||e,toastId:ot(t)})}function st(e){return function(t,n){return at(t,it(e,n))}}function ct(e,t){return at(e,it("default",t))}ct.loading=function(e,t){return at(e,it("default",(0,g.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},ct.promise=function(e,t,n){var r,o=t.pending,a=t.error,i=t.success;o&&(r=Ne(o)?ct.loading(o,n):ct.loading(o.render,(0,g.Z)((0,g.Z)({},n),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(e,t,o){if(null!=t){var a=(0,g.Z)((0,g.Z)((0,g.Z)({type:e},s),n),{},{data:o}),i=Ne(t)?{render:t}:t;return r?ct.update(r,(0,g.Z)((0,g.Z)({},a),i)):ct(i.render,(0,g.Z)((0,g.Z)({},a),i)),o}ct.dismiss(r)},l=Le(e)?e():e;return l.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),l},ct.success=st("success"),ct.info=st("info"),ct.error=st("error"),ct.warning=st("warning"),ct.warn=ct.warning,ct.dark=function(e,t){return at(e,it("default",(0,g.Z)({theme:"dark"},t)))},ct.dismiss=function(e){et.size>0?Ae.emit(1,e):tt=tt.filter((function(t){return null!=e&&t.options.toastId!==e}))},ct.clearWaitingQueue=function(e){return void 0===e&&(e={}),Ae.emit(5,e)},ct.isActive=function(e){var t=!1;return et.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},ct.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=et.get(n||Ke);return r&&r.getToast(e)}(e,t);if(n){var r=n.props,o=n.content,a=(0,g.Z)((0,g.Z)((0,g.Z)({},r),t),{},{toastId:t.toastId||e,updateId:rt()});a.toastId!==e&&(a.staleId=e);var i=a.render||o;delete a.render,at(i,a)}}),0)},ct.done=function(e){ct.update(e,{progress:1})},ct.onChange=function(e){return Ae.on(4,e),function(){Ae.off(4,e)}},ct.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},ct.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Ae.on(2,(function(e){Ke=e.containerId||e,et.set(Ke,e),tt.forEach((function(e){Ae.emit(0,e.content,e.options)})),tt=[]})).on(3,(function(e){et.delete(e.containerId||e),0===et.size&&Ae.off(0).off(1).off(5)}));var lt,ut,dt,ft=ne.ZP.form.attrs({autoComplete:"off"})(Ue||(Ue=(0,te.Z)(["\n  width: 538px;\n  height: 260px;\n  padding:15px 20px 10px;\n  border-color: #e2e8f0;\n  background-color: white;\n  border-radius: 6px;\n  box-shadow: 0px 4px 4px rgb(0, 0, 0, 15%);\n"]))),pt=ne.ZP.button.attrs({type:"submit"})(Xe||(Xe=(0,te.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 40px;\n  font-family: inherit;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 1.88;\n  letter-spacing: 0.06em;\n  color: #fff;\n  background-color: #0088cc;\n  margin-top: 25px;\n  box-shadow: 0px 4px 4px rgb(0, 0, 0, 15%);\n  border-radius: 4px;\n  border-color: transparent;\n  cursor: pointer;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    background-color: #007ab8;\n  }\n"]))),mt=ne.ZP.label(Ye||(Ye=(0,te.Z)(["\n  display: block;\n  margin-bottom: 10px;\n  text-align: start;\n  font-size: 1.25rem;\n  line-height: 30px;\n  font-weight: 500;\n"]))),ht=ne.ZP.input($e||($e=(0,te.Z)(["\n  display: block;\n  width: 100%;\n  height: 2.5rem;\n  padding: 12px;\n  font-size: 18px;\n  color: #1a202c;\n  background-color: #dce3ec;\n  outline: 2px solid transparent;\n  border-color: #dce3ec;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  transition: border-color box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    border-color: #0088cc;\n    box-shadow: 0 0 0 1px #3182ce;\n  }\n"]))),vt=function(){var e=(0,r.I0)(),t=(0,r.v9)(u);return(0,I.jsxs)(oe,{children:[(0,I.jsx)(le,{title:"phonebook"}),(0,I.jsxs)(ft,{onSubmit:function(n){n.preventDefault();var r=n.target.elements;if(t.some((function(e){return e.name.toLowerCase().trim()===r.name.value.toLowerCase().trim()})))return ct.warn("".concat(r.name.value," is already in contacts!")),void n.target.reset();e((0,v.uK)({name:r.name.value,number:r.number.value})),n.target.reset()},children:[(0,I.jsxs)(mt,{htmlFor:"name",children:["Name",(0,I.jsx)(ht,{type:"text",name:"name",pattern:"^[a-zA-Z0-9-_.]+(([' -][a-zA-Z0-9-_. ])?[a-zA-Z0-9-_.]*)*$",placeholder:"Letters or numbers. Can apostrophe, dash and spaces.",title:"Name may contain letters, numbers, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,I.jsxs)(mt,{htmlFor:"number",children:["Number",(0,I.jsx)(ht,{type:"tel",name:"number",pattern:"[+ 0-9]{9,14}",placeholder:"Only digits from 9 to 14 characters. Can start with +.",title:"Phone number must be digits from 9 to 14 characters and can start with +",required:!0})]}),(0,I.jsx)(pt,{children:"Add Contact"})]})]})},gt=ne.ZP.div(lt||(lt=(0,te.Z)(["\n  width: 538px;\n  height: 100px;\n  padding:10px 20px 10px;\n  border-color: #e2e8f0;\n  background-color: white;\n  border-radius: 6px;\n  box-shadow: 0px 4px 4px rgb(0, 0, 0, 15%);\n"]))),xt=ne.ZP.label(ut||(ut=(0,te.Z)(["\n  display: block;\n  text-align: start;\n  font-size: 1.25rem;\n  line-height: 30px;\n  font-weight: 500;\n"]))),yt=ne.ZP.input.attrs({autoComplete:"off"})(dt||(dt=(0,te.Z)(["\n  display: block;\n  width: 100%;\n  height: 2.5rem;\n  padding: 12px;\n  font-size: 18px;\n  color: #1a202c;\n  background-color: #dce3ec;\n  outline: 2px solid transparent;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  transition: border-color box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    border-color: #0088cc;\n    box-shadow: 0 0 0 1px #3182ce;\n  }\n"]))),bt=n(9778),Ct=function(){var e=(0,r.v9)(p),t=(0,r.I0)();return(0,I.jsxs)(oe,{children:[(0,I.jsx)(le,{title:"Search contacts"}),(0,I.jsx)(gt,{children:(0,I.jsxs)(xt,{htmlFor:"search",children:["Find contact by name",(0,I.jsx)(yt,{type:"text",name:"search",value:e,onChange:function(e){return t((0,bt.l)(e.target.value))},placeholder:"Please start typing name..."})]})})]})};function Et(){return(0,I.jsxs)("main",{children:[(0,I.jsxs)(Ze.q,{prioritizeSeoTags:!0,children:[(0,I.jsx)("title",{children:"My phonebook"}),(0,I.jsx)("meta",{property:"og:title",content:"My phonebook"})]}),(0,I.jsxs)(re,{children:[(0,I.jsx)(vt,{}),(0,I.jsx)(Ct,{}),(0,I.jsx)(Ee,{}),(0,I.jsx)(Je,{position:"top-center",theme:"colored"})]})]})}}}]);
//# sourceMappingURL=375.8511c36d.chunk.js.map