(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(9177)}])},6691:function(e,t){"use strict";var r,n,l,o;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_FAST_REFRESH:function(){return d},ACTION_NAVIGATE:function(){return s},ACTION_PREFETCH:function(){return c},ACTION_REFRESH:function(){return a},ACTION_RESTORE:function(){return u},ACTION_SERVER_ACTION:function(){return f},ACTION_SERVER_PATCH:function(){return i},PrefetchCacheEntryStatus:function(){return n},PrefetchKind:function(){return r},isThenable:function(){return p}});let a="refresh",s="navigate",u="restore",i="server-patch",c="prefetch",d="fast-refresh",f="server-action";function p(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(l=r||(r={})).AUTO="auto",l.FULL="full",l.TEMPORARY="temporary",(o=n||(n={})).fresh="fresh",o.reusable="reusable",o.expired="expired",o.stale="stale",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4318:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(8364),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9577:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});let n=r(8754),l=r(5893),o=n._(r(7294)),a=r(1401),s=r(2045),u=r(7420),i=r(7201),c=r(1443),d=r(9953),f=r(5320),p=r(2905),h=r(4318),m=r(953),y=r(6691),b=new Set;function x(e,t,r,n,l,o){if(o||(0,s.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let l=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(b.has(l))return;b.add(l)}Promise.resolve(o?e.prefetch(t,l):e.prefetch(t,r,n)).catch(e=>{})}}function j(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let v=o.default.forwardRef(function(e,t){let r,n;let{href:u,as:b,children:v,prefetch:g=null,passHref:_,replace:E,shallow:N,scroll:C,locale:O,onClick:w,onMouseEnter:P,onTouchStart:T,legacyBehavior:k=!1,...M}=e;r=v,k&&("string"==typeof r||"number"==typeof r)&&(r=(0,l.jsx)("a",{children:r}));let A=o.default.useContext(d.RouterContext),R=o.default.useContext(f.AppRouterContext),S=null!=A?A:R,I=!A,L=!1!==g,U=null===g?y.PrefetchKind.AUTO:y.PrefetchKind.FULL,{href:F,as:D}=o.default.useMemo(()=>{if(!A){let e=j(u);return{href:e,as:b?j(b):e}}let[e,t]=(0,a.resolveHref)(A,u,!0);return{href:e,as:b?(0,a.resolveHref)(A,b):t||e}},[A,u,b]),K=o.default.useRef(F),H=o.default.useRef(D);k&&(n=o.default.Children.only(r));let q=k?n&&"object"==typeof n&&n.ref:t,[V,X,z]=(0,p.useIntersection)({rootMargin:"200px"}),B=o.default.useCallback(e=>{(H.current!==D||K.current!==F)&&(z(),H.current=D,K.current=F),V(e),q&&("function"==typeof q?q(e):"object"==typeof q&&(q.current=e))},[D,q,F,z,V]);o.default.useEffect(()=>{S&&X&&L&&x(S,F,D,{locale:O},{kind:U},I)},[D,F,X,O,L,null==A?void 0:A.locale,S,I,U]);let G={ref:B,onClick(e){k||"function"!=typeof w||w(e),k&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,r,n,l,a,u,i,c){let{nodeName:d}=e.currentTarget;if("A"===d.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,s.isLocalURL)(r)))return;e.preventDefault();let f=()=>{let e=null==u||u;"beforePopState"in t?t[l?"replace":"push"](r,n,{shallow:a,locale:i,scroll:e}):t[l?"replace":"push"](n||r,{scroll:e})};c?o.default.startTransition(f):f()}(e,S,F,D,E,N,C,O,I)},onMouseEnter(e){k||"function"!=typeof P||P(e),k&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),S&&(L||!I)&&x(S,F,D,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:U},I)},onTouchStart:function(e){k||"function"!=typeof T||T(e),k&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),S&&(L||!I)&&x(S,F,D,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:U},I)}};if((0,i.isAbsoluteUrl)(D))G.href=D;else if(!k||_||"a"===n.type&&!("href"in n.props)){let e=void 0!==O?O:null==A?void 0:A.locale,t=(null==A?void 0:A.isLocaleDomain)&&(0,h.getDomainLocale)(D,e,null==A?void 0:A.locales,null==A?void 0:A.domainLocales);G.href=t||(0,m.addBasePath)((0,c.addLocale)(D,e,null==A?void 0:A.defaultLocale))}return k?o.default.cloneElement(n,G):(0,l.jsx)("a",{...M,...G,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2905:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return u}});let n=r(7294),l=r(3815),o="function"==typeof IntersectionObserver,a=new Map,s=[];function u(e){let{rootRef:t,rootMargin:r,disabled:u}=e,i=u||!o,[c,d]=(0,n.useState)(!1),f=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{f.current=e},[]);return(0,n.useEffect)(()=>{if(o){if(i||c)return;let e=f.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:l,elements:o}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=s.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let l=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:l},s.push(r),a.set(r,t),t}(r);return o.set(e,t),l.observe(e),function(){if(o.delete(e),l.unobserve(e),0===o.size){l.disconnect(),a.delete(n);let e=s.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&s.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,l.requestIdleCallback)(()=>d(!0));return()=>(0,l.cancelIdleCallback)(e)}},[i,r,t,c,f.current]),[p,c,(0,n.useCallback)(()=>{d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9177:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(5893),l=r(7294),o=r(1664),a=r.n(o),s=e=>{let{employees:t,handleDeleteEmployee:r}=e;return t&&Array.isArray(t)?(0,n.jsxs)("div",{className:"max-w-3xl mx-auto",children:[(0,n.jsx)("h2",{className:"text-2xl font-bold mb-4",children:"Employee List"}),(0,n.jsxs)("table",{className:"w-full border border-gray-300",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"px-4 py-2",children:"Name"}),(0,n.jsx)("th",{className:"px-4 py-2",children:"Email"}),(0,n.jsx)("th",{className:"px-4 py-2",children:"Phone"}),(0,n.jsx)("th",{className:"px-4 py-2",children:"Actions"})]})}),(0,n.jsx)("tbody",{children:t.map(e=>(0,n.jsxs)("tr",{className:"border-b border-gray-300",children:[(0,n.jsx)("td",{className:"px-4 py-2",children:e.name}),(0,n.jsx)("td",{className:"px-4 py-2",children:e.email}),(0,n.jsx)("td",{className:"px-4 py-2",children:e.phone}),(0,n.jsx)("td",{className:"px-4 py-2",children:(0,n.jsxs)("div",{className:"flex items-center justify-center space-x-2",children:[(0,n.jsx)(a(),{href:"/employees/".concat(e.id),className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"View"}),(0,n.jsx)(a(),{href:"/employees/".concat(e.id,"/edit"),className:"bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded",children:"Edit"}),(0,n.jsx)("button",{className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",onClick:()=>r(e.id),children:"Delete"})]})})]},e.id))})]})]}):(0,n.jsx)("div",{children:"..."})},u=e=>{let{employee:t,onSubmit:r,isEditing:o}=e,[a,s]=(0,l.useState)(t||{name:"",email:"",phone:""}),u=e=>{s({...a,[e.target.name]:e.target.value})};return(0,n.jsxs)("form",{onSubmit:e=>{e.preventDefault(),r(a)},className:"max-w-md mx-auto",children:[(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{htmlFor:"name",className:"block font-bold mb-2",children:"Name"}),(0,n.jsx)("input",{type:"text",id:"name",name:"name",value:a.name,onChange:u,className:"w-full px-3 py-2 border border-gray-300 rounded",required:!0})]}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{htmlFor:"email",className:"block font-bold mb-2",children:"Email"}),(0,n.jsx)("input",{type:"email",id:"email",name:"email",value:a.email,onChange:u,className:"w-full px-3 py-2 border border-gray-300 rounded",required:!0})]}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{htmlFor:"phone",className:"block font-bold mb-2",children:"Phone"}),(0,n.jsx)("input",{type:"tel",id:"phone",name:"phone",value:a.phone,onChange:u,className:"w-full px-3 py-2 border border-gray-300 rounded",required:!0})]}),(0,n.jsx)("button",{type:"submit",className:"bg-blue-500 text-white px-4 py-2 rounded",children:o?"Update Employee":"Create Employee"})]})},i=()=>{let[e,t]=(0,l.useState)([]),[r,o]=(0,l.useState)(!0);(0,l.useEffect)(()=>{(async()=>{try{let e=await fetch("/api/employees"),r=await e.json();t(r),o(!1)}catch(e){console.error("Error fetching employees:",e),o(!1)}})()},[]);let a=async r=>{try{let n=await fetch("/api/employees",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(n.ok){let r=await n.json();t([...e,r])}else console.error("Error creating employee:",await n.text())}catch(e){console.error("Error:",e)}},i=async r=>{try{let n=await fetch("/api/employees/".concat(r),{method:"DELETE"});n.ok?t(e.filter(e=>e.id!==r)):console.error("Error deleting employee:",await n.text())}catch(e){console.error("Error deleting employee:",e)}};return(0,n.jsxs)("div",{className:"container mx-auto py-8",children:[(0,n.jsx)("h1",{className:"text-3xl font-bold mb-4",children:"Employee Management"}),(0,n.jsx)(u,{onSubmit:a}),r?(0,n.jsx)("p",{children:"Loading employees..."}):(0,n.jsx)(s,{employees:e,handleDeleteEmployee:i})]})}},1664:function(e,t,r){e.exports=r(9577)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);