import{w as ne}from"./entry.DBFxKD5s.js";import{X as ze,Y as He,Z as Te,s as Q,e as g,a as x,b as y,g as P,c as L,j as E,d as b,f as w,i as M,l as _,A as Ae,u as Z,n as A,C as ke,o as j,_ as Ee,$ as De,r as $,z as fe,p as $e,q as Pe,F as Ue,a0 as Be,a1 as Ve,t as H,k as T,m as U,y as S,x as qe}from"./scheduler.C1l866yk.js";import{S as R,i as W,c as X,a as G,m as J,t as N,b as ee,d as te}from"./index.6PR-mAdx.js";import{e as K,r as Oe,d as pe,h as Fe,a as de}from"./globals.BVZkYgP4.js";const Ze=ne(void 0);function je(a,e){const{computePosition:n,autoUpdate:t,offset:o,shift:l,flip:p,arrow:c,size:f,autoPlacement:v,hide:d,inline:m}=ze(Ze),r={open:!1,autoUpdateCleanup:()=>{}},u=':is(a[href], button, input, textarea, select, details, [tabindex]):not([tabindex="-1"])';let h;const i="https://www.skeleton.dev/utilities/popups";let s,C;function B(){s=document.querySelector(`[data-popup="${e.target}"]`)??document.createElement("div"),C=s.querySelector(".arrow")??document.createElement("div")}B();function q(){var I,D,F,le,re,se,oe,ie;if(!s)throw new Error(`The data-popup="${e.target}" element was not found. ${i}`);if(!n)throw new Error(`Floating UI 'computePosition' not found for data-popup="${e.target}". ${i}`);if(!o)throw new Error(`Floating UI 'offset' not found for data-popup="${e.target}". ${i}`);if(!l)throw new Error(`Floating UI 'shift' not found for data-popup="${e.target}". ${i}`);if(!p)throw new Error(`Floating UI 'flip' not found for data-popup="${e.target}". ${i}`);if(!c)throw new Error(`Floating UI 'arrow' not found for data-popup="${e.target}". ${i}`);const k=[];f&&k.push(f((I=e.middleware)==null?void 0:I.size)),v&&k.push(v((D=e.middleware)==null?void 0:D.autoPlacement)),d&&k.push(d((F=e.middleware)==null?void 0:F.hide)),m&&k.push(m((le=e.middleware)==null?void 0:le.inline)),n(a,s,{placement:e.placement??"bottom",middleware:[o(((re=e.middleware)==null?void 0:re.offset)??8),l(((se=e.middleware)==null?void 0:se.shift)??{padding:8}),p((oe=e.middleware)==null?void 0:oe.flip),c(((ie=e.middleware)==null?void 0:ie.arrow)??{element:C||null}),...k]}).then(({x:Le,y:Me,placement:Se,middlewareData:Ce})=>{if(Object.assign(s.style,{left:`${Le}px`,top:`${Me}px`}),C){const{x:ce,y:ue}=Ce.arrow,Ie={top:"bottom",right:"left",bottom:"top",left:"right"}[Se.split("-")[0]];Object.assign(C.style,{left:ce!=null?`${ce}px`:"",top:ue!=null?`${ue}px`:"",right:"",bottom:"",[Ie]:"-4px"})}})}function V(){s&&(r.open=!0,e.state&&e.state({state:r.open}),q(),s.style.display="block",s.style.opacity="1",s.style.pointerEvents="auto",s.removeAttribute("inert"),r.autoUpdateCleanup=t(a,s,q),h=Array.from(s==null?void 0:s.querySelectorAll(u)))}function z(k){if(!s)return;const I=parseFloat(window.getComputedStyle(s).transitionDuration.replace("s",""))*1e3;setTimeout(()=>{r.open=!1,e.state&&e.state({state:r.open}),s.style.opacity="0",s.setAttribute("inert",""),r.autoUpdateCleanup&&r.autoUpdateCleanup(),k&&k()},I)}function O(){r.open===!1?V():z()}function Y(k){if(r.open===!1||a.contains(k.target))return;if(s&&s.contains(k.target)===!1){z();return}const I=e.closeQuery===void 0?"a[href], button":e.closeQuery;if(I==="")return;const D=s==null?void 0:s.querySelectorAll(I);D==null||D.forEach(F=>{F.contains(k.target)&&z()})}const ae=k=>{if(r.open===!1)return;const I=k.key;if(I==="Escape"){k.preventDefault(),a.focus(),z();return}h=Array.from(s==null?void 0:s.querySelectorAll(u)),r.open&&document.activeElement===a&&(I==="ArrowDown"||I==="Tab")&&u.length>0&&h.length>0&&(k.preventDefault(),h[0].focus())};switch(e.event){case"click":a.addEventListener("click",O,!0),window.addEventListener("click",Y,!0);break;case"hover":a.addEventListener("mouseover",V,!0),a.addEventListener("mouseleave",()=>z(),!0);break;case"focus-blur":a.addEventListener("focus",O,!0),a.addEventListener("blur",()=>z(),!0);break;case"focus-click":a.addEventListener("focus",V,!0),window.addEventListener("click",Y,!0);break;default:throw new Error(`Event value of '${e.event}' is not supported. ${i}`)}return window.addEventListener("keydown",ae,!0),q(),{update(k){z(()=>{e=k,q(),B()})},destroy(){a.removeEventListener("click",O,!0),a.removeEventListener("mouseover",V,!0),a.removeEventListener("mouseleave",()=>z(),!0),a.removeEventListener("focus",O,!0),a.removeEventListener("focus",V,!0),a.removeEventListener("blur",()=>z(),!0),window.removeEventListener("click",Y,!0),window.removeEventListener("keydown",ae,!0)}}}const xe="drawerStore";function ct(){const a=He(xe);if(!a)throw new Error("drawerStore is not initialized. Please ensure that `initializeStores()` is invoked in the root layout file of this app!");return a}function ut(){const a=Ke();return Te(xe,a)}function Ke(){const{subscribe:a,set:e,update:n}=ne({});return{subscribe:a,set:e,update:n,open:t=>n(()=>({open:!0,...t})),close:()=>n(t=>(t.open=!1,t))}}const he=ne(!1);function Qe(a){let e,n='<p class="text-black">Si tu trouves un bug, contact <span class="text-blue-500">@Pepe</span> sur Onche</p> <div class="arrow bg-white"></div>',t,o,l,p='<button type="button" class="transition-colors opacity-60 hover:opacity-100"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" class="size-6"><g fill="#ffffff"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g></svg></button>',c,f,v='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" class="size-6"><path fill-rule="evenodd" d="M8.478 1.6a.75.75 0 0 1 .273 1.026 3.72 3.72 0 0 0-.425 1.121c.058.058.118.114.18.168A4.491 4.491 0 0 1 12 2.25c1.413 0 2.673.651 3.497 1.668.06-.054.12-.11.178-.167a3.717 3.717 0 0 0-.426-1.125.75.75 0 1 1 1.298-.752 5.22 5.22 0 0 1 .671 2.046.75.75 0 0 1-.187.582c-.241.27-.505.52-.787.749a4.494 4.494 0 0 1 .216 2.1c-.106.792-.753 1.295-1.417 1.403-.182.03-.364.057-.547.081.152.227.273.476.359.742a23.122 23.122 0 0 0 3.832-.803 23.241 23.241 0 0 0-.345-2.634.75.75 0 0 1 1.474-.28c.21 1.115.348 2.256.404 3.418a.75.75 0 0 1-.516.75c-1.527.499-3.119.854-4.76 1.049-.074.38-.22.735-.423 1.05 2.066.209 4.058.672 5.943 1.358a.75.75 0 0 1 .492.75 24.665 24.665 0 0 1-1.189 6.25.75.75 0 0 1-1.425-.47 23.14 23.14 0 0 0 1.077-5.306c-.5-.169-1.009-.32-1.524-.455.068.234.104.484.104.746 0 3.956-2.521 7.5-6 7.5-3.478 0-6-3.544-6-7.5 0-.262.037-.511.104-.746-.514.135-1.022.286-1.522.455.154 1.838.52 3.616 1.077 5.307a.75.75 0 1 1-1.425.468 24.662 24.662 0 0 1-1.19-6.25.75.75 0 0 1 .493-.749 24.586 24.586 0 0 1 4.964-1.24h.01c.321-.046.644-.085.969-.118a2.983 2.983 0 0 1-.424-1.05 24.614 24.614 0 0 1-4.76-1.05.75.75 0 0 1-.516-.75c.057-1.16.194-2.302.405-3.417a.75.75 0 0 1 1.474.28c-.164.862-.28 1.74-.345 2.634 1.237.371 2.517.642 3.832.803.085-.266.207-.515.359-.742a18.698 18.698 0 0 1-.547-.08c-.664-.11-1.311-.612-1.417-1.404a4.535 4.535 0 0 1 .217-2.103 6.788 6.788 0 0 1-.788-.751.75.75 0 0 1-.187-.583 5.22 5.22 0 0 1 .67-2.04.75.75 0 0 1 1.026-.273Z" clip-rule="evenodd"></path></svg>',d,m,r='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" class="size-6"><path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z"></path></svg>',u,h;return{c(){e=g("div"),e.innerHTML=n,t=x(),o=g("div"),l=g("a"),l.innerHTML=p,c=x(),f=g("button"),f.innerHTML=v,d=x(),m=g("button"),m.innerHTML=r,this.h()},l(i){e=y(i,"DIV",{class:!0,"data-popup":!0,"data-svelte-h":!0}),P(e)!=="svelte-13490m3"&&(e.innerHTML=n),t=L(i),o=y(i,"DIV",{class:!0});var s=E(o);l=y(s,"A",{href:!0,target:!0,class:!0,"data-svelte-h":!0}),P(l)!=="svelte-108q4pd"&&(l.innerHTML=p),c=L(s),f=y(s,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),P(f)!=="svelte-25pomy"&&(f.innerHTML=v),d=L(s),m=y(s,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),P(m)!=="svelte-1sznqmc"&&(m.innerHTML=r),s.forEach(b),this.h()},h(){w(e,"class","p-4 bg-white rounded"),w(e,"data-popup","popupClick"),w(l,"href","https://github.com/Unonche"),w(l,"target","_blank"),w(l,"class","mr-3 flex"),w(f,"type","button"),w(f,"class","mr-3 transition-colors opacity-60 hover:opacity-100"),w(m,"type","button"),w(m,"class","transition-colors opacity-60 hover:opacity-100"),w(o,"class","flex items-center justify-center px-2")},m(i,s){M(i,e,s),M(i,t,s),M(i,o,s),_(o,l),_(o,c),_(o,f),_(o,d),_(o,m),u||(h=[Ae(je.call(null,f,a[1])),Z(m,"click",a[3])],u=!0)},p:A,i:A,o:A,d(i){i&&(b(e),b(t),b(o)),u=!1,ke(h)}}}function Re(a,e,n){let t;j(a,he,c=>n(0,t=c));const o={event:"click",target:"popupClick",placement:"bottom"},l=Ee();return[t,o,l,()=>{l("openHelp"),De(he,t=!0,t)}]}class We extends R{constructor(e){super(),W(this,e,Re,Qe,Q,{})}}function me(a,e,n){const t=a.slice();return t[7]=e[n],t}function Ye(a){let e,n,t=a[7].text+"";return{c(){e=g("i"),n=new Be(!1),this.h()},l(o){e=y(o,"I",{});var l=E(e);n=Ve(l,!1),l.forEach(b),this.h()},h(){n.a=null},m(o,l){M(o,e,l),n.m(t,e)},p(o,l){l&2&&t!==(t=o[7].text+"")&&n.p(t)},d(o){o&&b(e)}}}function Xe(a){let e,n=a[7].playerName+"",t,o,l=a[7].text+"",p;return{c(){e=g("span"),t=H(n),o=H(": "),p=H(l),this.h()},l(c){e=y(c,"SPAN",{class:!0});var f=E(e);t=T(f,n),f.forEach(b),o=T(c,": "),p=T(c,l),this.h()},h(){w(e,"class","text-primary-400")},m(c,f){M(c,e,f),_(e,t),M(c,o,f),M(c,p,f)},p(c,f){f&2&&n!==(n=c[7].playerName+"")&&U(t,n),f&2&&l!==(l=c[7].text+"")&&U(p,l)},d(c){c&&(b(e),b(o),b(p))}}}function ve(a){let e,n;function t(p,c){return p[7].playerName?Xe:Ye}let o=t(a),l=o(a);return{c(){e=g("div"),l.c(),n=x(),this.h()},l(p){e=y(p,"DIV",{class:!0});var c=E(e);l.l(c),n=L(c),c.forEach(b),this.h()},h(){w(e,"class","break-words")},m(p,c){M(p,e,c),l.m(e,null),_(e,n)},p(p,c){o===(o=t(p))&&l?l.p(p,c):(l.d(1),l=o(p),l&&(l.c(),l.m(e,n)))},d(p){p&&b(e),l.d()}}}function Ge(a){let e,n,t,o,l,p,c,f='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z"></path></svg>',v,d,m=K(a[1]),r=[];for(let u=0;u<m.length;u+=1)r[u]=ve(me(a,m,u));return{c(){e=g("div"),n=g("div");for(let u=0;u<r.length;u+=1)r[u].c();t=x(),o=g("div"),l=g("input"),p=x(),c=g("button"),c.innerHTML=f,this.h()},l(u){e=y(u,"DIV",{class:!0});var h=E(e);n=y(h,"DIV",{id:!0,class:!0,style:!0});var i=E(n);for(let C=0;C<r.length;C+=1)r[C].l(i);i.forEach(b),t=L(h),o=y(h,"DIV",{class:!0});var s=E(o);l=y(s,"INPUT",{class:!0,type:!0,placeholder:!0}),p=L(s),c=y(s,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),P(c)!=="svelte-fqcru7"&&(c.innerHTML=f),s.forEach(b),h.forEach(b),this.h()},h(){w(n,"id","chat-box"),w(n,"class","mt-auto mb-4 overflow-y-auto text-sm"),$(n,"flex-grow","0"),$(n,"flex-shrink","1"),w(l,"class","input mr-2"),w(l,"type","text"),w(l,"placeholder","Message..."),w(c,"type","button"),w(c,"class","btn-icon btn-icon-md variant-filled-primary rounded-lg shrink-0"),w(o,"class","flex"),w(e,"class","h-full min-h-0 flex flex-col p-4")},m(u,h){M(u,e,h),_(e,n);for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(n,null);_(e,t),_(e,o),_(o,l),fe(l,a[0]),_(o,p),_(o,c),v||(d=[Z(l,"input",a[4]),Z(l,"keydown",a[3]),Z(c,"click",a[2])],v=!0)},p(u,[h]){if(h&2){m=K(u[1]);let i;for(i=0;i<m.length;i+=1){const s=me(u,m,i);r[i]?r[i].p(s,h):(r[i]=ve(s),r[i].c(),r[i].m(n,null))}for(;i<r.length;i+=1)r[i].d(1);r.length=m.length}h&1&&l.value!==u[0]&&fe(l,u[0])},i:A,o:A,d(u){u&&b(e),$e(r,u),v=!1,ke(d)}}}function Je(a,e,n){let t,o,l;j(a,Oe,d=>n(5,o=d)),j(a,pe,d=>n(1,l=d));function p(){t.trim().length!==0&&(o.send("chat_msg",{text:t.trim()}),n(0,t=""))}function c(d){d.key==="Enter"&&(p(),d.preventDefault())}Pe(()=>f());const f=async()=>{const d=document.getElementById("chat-box");d&&d.scroll({top:d.scrollHeight,behavior:"smooth"})};pe.subscribe(async()=>{const d=document.getElementById("chat-box");d&&Math.abs(d.scrollHeight-d.scrollTop-d.clientHeight)<100&&(await Ue(),f())});function v(){t=this.value,n(0,t)}return n(0,t=""),[t,l,p,c,v]}class Ne extends R{constructor(e){super(),W(this,e,Je,Ge,Q,{})}}function we(a,e,n){const t=a.slice();return t[1]=e[n],t}function _e(a){let e,n='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" class="size-6"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path><path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd"></path></svg>';return{c(){e=g("span"),e.innerHTML=n,this.h()},l(t){e=y(t,"SPAN",{class:!0,style:!0,"data-svelte-h":!0}),P(e)!=="svelte-wbpuf1"&&(e.innerHTML=n),this.h()},h(){w(e,"class","badge-icon variant-filled ml-1 z-10 shrink-0"),$(e,"background","rgba(255, 255, 255, 0.2)"),$(e,"padding","3px")},m(t,o){M(t,e,o)},d(t){t&&b(e)}}}function be(a){let e,n='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#fbbf24" d="M576 136c0 22.09-17.91 40-40 40c-.248 0-.4551-.1266-.7031-.1305l-50.52 277.9C482 468.9 468.8 480 453.3 480H122.7c-15.46 0-28.72-11.06-31.48-26.27L40.71 175.9C40.46 175.9 40.25 176 39.1 176c-22.09 0-40-17.91-40-40S17.91 96 39.1 96s40 17.91 40 40c0 8.998-3.521 16.89-8.537 23.57l89.63 71.7c15.91 12.73 39.5 7.544 48.61-10.68l57.6-115.2C255.1 98.34 247.1 86.34 247.1 72C247.1 49.91 265.9 32 288 32s39.1 17.91 39.1 40c0 14.34-7.963 26.34-19.3 33.4l57.6 115.2c9.111 18.22 32.71 23.4 48.61 10.68l89.63-71.7C499.5 152.9 496 144.1 496 136C496 113.9 513.9 96 536 96S576 113.9 576 136z"></path></svg>';return{c(){e=g("span"),e.innerHTML=n,this.h()},l(t){e=y(t,"SPAN",{class:!0,style:!0,"data-svelte-h":!0}),P(e)!=="svelte-1tql6pb"&&(e.innerHTML=n),this.h()},h(){w(e,"class","badge-icon ml-1 z-10 p-1 shrink-0"),$(e,"background","rgba(200, 200, 50, 0.3)")},m(t,o){M(t,e,o)},d(t){t&&b(e)}}}function ge(a){let e,n=a[1].handSize+"",t,o,l=a[1].handSize>1?"s":"",p;return{c(){e=g("span"),t=H(n),o=H(" carte"),p=H(l),this.h()},l(c){e=y(c,"SPAN",{class:!0,style:!0});var f=E(e);t=T(f,n),o=T(f," carte"),p=T(f,l),f.forEach(b),this.h()},h(){w(e,"class","text-sm ml-auto pl-1"),$(e,"white-space","nowrap")},m(c,f){M(c,e,f),_(e,t),_(e,o),_(e,p)},p(c,f){f&1&&n!==(n=c[1].handSize+"")&&U(t,n),f&1&&l!==(l=c[1].handSize>1?"s":"")&&U(p,l)},d(c){c&&b(e)}}}function ye(a){let e,n,t,o,l,p=a[1].name+"",c,f,v,d,m,r=a[1].spectator&&_e(),u=a[0].kingPlayerId===a[1].id&&be(),h=!a[1].spectator&&a[0].playing&&ge(a);return{c(){e=g("li"),n=g("div"),t=g("div"),o=x(),l=g("span"),c=H(p),f=x(),r&&r.c(),v=x(),u&&u.c(),d=x(),h&&h.c(),m=x(),this.h()},l(i){e=y(i,"LI",{class:!0});var s=E(e);n=y(s,"DIV",{style:!0,class:!0});var C=E(n);t=y(C,"DIV",{class:!0,style:!0}),E(t).forEach(b),C.forEach(b),o=L(s),l=y(s,"SPAN",{class:!0});var B=E(l);c=T(B,p),B.forEach(b),f=L(s),r&&r.l(s),v=L(s),u&&u.l(s),d=L(s),h&&h.l(s),m=L(s),s.forEach(b),this.h()},h(){w(t,"class","rounded-full bg-surface-900"),$(t,"transform","scale(0.28)"),$(t,"transform-origin","0 0"),$(t,"width","100px"),$(t,"height","100px"),$(t,"background-image","url('avatars.png')"),$(t,"background-position",-de.indexOf(a[1].avatar)*100+"px 0"),S(t,"grayscale",a[1].spectator),$(n,"width","28px"),$(n,"height","28px"),w(n,"class","relative inline-block mr-2 shrink-0 overflow-hidden"),w(l,"class","truncate text-sm"),S(l,"text-slate-500",a[1].spectator),S(l,"text-primary-200",!a[1].spectator),w(e,"class","border-l-2 px-4 py-1 flex items-center"),S(e,"border-primary-200",a[1].id===a[0].currentPlayerId),S(e,"border-transparent",a[1].id!==a[0].currentPlayerId),S(e,"bg-primary-800",a[1].id===a[0].currentPlayerId)},m(i,s){M(i,e,s),_(e,n),_(n,t),_(e,o),_(e,l),_(l,c),_(e,f),r&&r.m(e,null),_(e,v),u&&u.m(e,null),_(e,d),h&&h.m(e,null),_(e,m)},p(i,s){s&1&&$(t,"background-position",-de.indexOf(i[1].avatar)*100+"px 0"),s&1&&S(t,"grayscale",i[1].spectator),s&1&&p!==(p=i[1].name+"")&&U(c,p),s&1&&S(l,"text-slate-500",i[1].spectator),s&1&&S(l,"text-primary-200",!i[1].spectator),i[1].spectator?r||(r=_e(),r.c(),r.m(e,v)):r&&(r.d(1),r=null),i[0].kingPlayerId===i[1].id?u||(u=be(),u.c(),u.m(e,d)):u&&(u.d(1),u=null),!i[1].spectator&&i[0].playing?h?h.p(i,s):(h=ge(i),h.c(),h.m(e,m)):h&&(h.d(1),h=null),s&1&&S(e,"border-primary-200",i[1].id===i[0].currentPlayerId),s&1&&S(e,"border-transparent",i[1].id!==i[0].currentPlayerId),s&1&&S(e,"bg-primary-800",i[1].id===i[0].currentPlayerId)},d(i){i&&b(e),r&&r.d(),u&&u.d(),h&&h.d()}}}function et(a){let e,n,t=a[0].players.size+"",o,l,p,c,f=K(a[0].players.values()),v=[];for(let d=0;d<f.length;d+=1)v[d]=ye(we(a,f,d));return{c(){e=g("div"),n=g("span"),o=H(t),l=H("/6 kheys connectés"),p=x(),c=g("ul");for(let d=0;d<v.length;d+=1)v[d].c();this.h()},l(d){e=y(d,"DIV",{class:!0,style:!0});var m=E(e);n=y(m,"SPAN",{class:!0});var r=E(n);o=T(r,t),l=T(r,"/6 kheys connectés"),r.forEach(b),p=L(m),c=y(m,"UL",{});var u=E(c);for(let h=0;h<v.length;h+=1)v[h].l(u);u.forEach(b),m.forEach(b),this.h()},h(){w(n,"class","text-center text-sm mb-2"),w(e,"class","h-full flex flex-col py-2 bg-surface-700 rounded-lg overflow-auto"),$(e,"max-height","297px")},m(d,m){M(d,e,m),_(e,n),_(n,o),_(n,l),_(e,p),_(e,c);for(let r=0;r<v.length;r+=1)v[r]&&v[r].m(c,null)},p(d,[m]){if(m&1&&t!==(t=d[0].players.size+"")&&U(o,t),m&1){f=K(d[0].players.values());let r;for(r=0;r<f.length;r+=1){const u=we(d,f,r);v[r]?v[r].p(u,m):(v[r]=ye(u),v[r].c(),v[r].m(c,null))}for(;r<v.length;r+=1)v[r].d(1);v.length=f.length}},i:A,o:A,d(d){d&&b(e),$e(v,d)}}}function tt(a,e,n){let t;return j(a,Fe,o=>n(0,t=o)),[t]}class nt extends R{constructor(e){super(),W(this,e,tt,et,Q,{})}}function at(a){let e,n,t,o,l,p,c,f,v,d,m,r;return p=new We({}),p.$on("openHelp",a[1]),v=new nt({}),m=new Ne({}),{c(){e=g("div"),n=g("div"),t=g("img"),l=x(),X(p.$$.fragment),c=x(),f=g("div"),X(v.$$.fragment),d=x(),X(m.$$.fragment),this.h()},l(u){e=y(u,"DIV",{class:!0});var h=E(e);n=y(h,"DIV",{class:!0});var i=E(n);t=y(i,"IMG",{src:!0,alt:!0,class:!0}),l=L(i),G(p.$$.fragment,i),i.forEach(b),c=L(h),f=y(h,"DIV",{class:!0});var s=E(f);G(v.$$.fragment,s),s.forEach(b),d=L(h),G(m.$$.fragment,h),h.forEach(b),this.h()},h(){qe(t.src,o="logo.png")||w(t,"src",o),w(t,"alt","logo"),w(t,"class","w-auto h-8 p-1 mr-auto"),w(n,"class","h-auto z-40 px-4 py-2 flex"),w(f,"class","h-auto px-4"),w(e,"class","flex flex-col card rounded-none w-full h-full")},m(u,h){M(u,e,h),_(e,n),_(n,t),_(n,l),J(p,n,null),_(e,c),_(e,f),J(v,f,null),_(e,d),J(m,e,null),r=!0},p:A,i(u){r||(N(p.$$.fragment,u),N(v.$$.fragment,u),N(m.$$.fragment,u),r=!0)},o(u){ee(p.$$.fragment,u),ee(v.$$.fragment,u),ee(m.$$.fragment,u),r=!1},d(u){u&&b(e),te(p),te(v),te(m)}}}function lt(a){const e=Ee();return[e,()=>e("openHelp")]}class ft extends R{constructor(e){super(),W(this,e,lt,at,Q,{})}}export{ft as L,he as a,ct as g,ut as i,Ze as s};
