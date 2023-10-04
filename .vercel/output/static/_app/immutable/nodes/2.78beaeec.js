import{A as ne,s as G,e as C,i as S,y as V,d as _,z as g,o as L,f as N,g as R,h as q,j as v,k as le,B as U,C as k,p as ce,r as ue,a as de,c as fe,x as me,u as pe,v as ge,w as he,D as _e}from"../chunks/scheduler.21029ae3.js";import{a as b,S as B,i as F,b as se,d as re,m as ie,t as I,e as ae,c as we,f as be,h as ye,g as ve}from"../chunks/index.2a05704c.js";import{w as ke,b as X}from"../chunks/index.384f6c3d.js";import{w as Ie}from"../chunks/index.427e088d.js";import{a as y}from"../chunks/anime.es.de4e5aa0.js";import{r as H,c as E,g as j,t as Y,a as $,b as z}from"../chunks/stores.0d77dcd8.js";import{c as Se,a as Me}from"../chunks/index.c0a58b45.js";function Z(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}function Ae(a,e){a.d(1),e.delete(a.key)}function Oe(a,e,s,t,r,l,i,o,n,u,c,oe){let p=a.length,w=l.length,h=p;const D={};for(;h--;)D[a[h].key]=h;const M=[],T=new Map,W=new Map,J=[];for(h=w;h--;){const d=oe(r,l,h),f=s(d);let m=i.get(f);m?t&&J.push(()=>m.p(d,e)):(m=u(f,d),m.c()),T.set(f,M[h]=m),f in D&&W.set(f,Math.abs(h-D[f]))}const K=new Set,P=new Set;function Q(d){b(d,1),d.m(o,c),i.set(d.key,d),c=d.first,w--}for(;p&&w;){const d=M[w-1],f=a[p-1],m=d.key,A=f.key;d===f?(c=d.first,p--,w--):T.has(A)?!i.has(m)||K.has(m)?Q(d):P.has(A)?p--:W.get(m)>W.get(A)?(P.add(m),Q(d)):(K.add(A),p--):(n(f,i),p--)}for(;p--;){const d=a[p];T.has(d.key)||n(d,i)}for(;w;)Q(M[w-1]);return ne(J),M}function x(a,e,s){const t=a.slice();return t[7]=e[s],t}function ee(a,e){let s,t,r,l,i;return{key:a,first:null,c(){s=N("div"),this.h()},l(o){s=R(o,"DIV",{role:!0,class:!0,style:!0,id:!0}),q(s).forEach(_),this.h()},h(){v(s,"role","none"),v(s,"class",t="min-w-full min-h-full "+e[1]+" relative z-10 bg-primary-500 border-primary-500 grid-item"),le(s,"transform","scale(1.1)"),v(s,"id",r=e[7].id.toString()),this.first=s},m(o,n){S(o,s,n),l||(i=[U(s,"click",e[2]),U(s,"keypress",e[3])],l=!0)},p(o,n){e=o,n&2&&t!==(t="min-w-full min-h-full "+e[1]+" relative z-10 bg-primary-500 border-primary-500 grid-item")&&v(s,"class",t),n&1&&r!==(r=e[7].id.toString())&&v(s,"id",r)},d(o){o&&_(s),l=!1,ne(i)}}}function He(a){let e=[],s=new Map,t,r=Z(a[0]);const l=i=>i[7].id;for(let i=0;i<r.length;i+=1){let o=x(a,r,i),n=l(o);s.set(n,e[i]=ee(n,o))}return{c(){for(let i=0;i<e.length;i+=1)e[i].c();t=C()},l(i){for(let o=0;o<e.length;o+=1)e[o].l(i);t=C()},m(i,o){for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(i,o);S(i,t,o)},p(i,[o]){o&15&&(r=Z(i[0]),e=Oe(e,o,l,1,i,r,s,t.parentNode,Ae,ee,t,x))},i:V,o:V,d(i){i&&_(t);for(let o=0;o<e.length;o+=1)e[o].d(i)}}}const O=Ie("cursor-pointer pointer-events-auto");function Ee(a,e,s){let t,r,l,i;g(a,H,c=>s(4,t=c)),g(a,E,c=>s(5,r=c)),g(a,j,c=>s(0,l=c)),g(a,O,c=>s(1,i=c));const o=c=>{O.set("cursor-wait pointer-events-none"),y({targets:".grid-item",scale:[{value:.1,easing:"easeOutSine",duration:500},{value:1.1,easing:"easeInOutQuad",duration:1200}],delay:y.stagger(200,{grid:[r,t],from:parseInt(c.currentTarget.id)}),update:u})},n=c=>{y({targets:".grid-item",scale:[{value:.1,easing:"easeOutSine",duration:500},{value:1.1,easing:"easeInOutQuad",duration:1200}],delay:y.stagger(200,{grid:[r,t],from:parseInt(c.currentTarget.id)}),update:u})},u=c=>{Math.round(c.progress)>98&&O.set("cursor-pointer pointer-events-auto")};return L(()=>{y({targets:".grid-item",scale:[{value:.1,easing:"easeOutSine",duration:500},{value:1.1,easing:"easeInOutQuad",duration:1200}],delay:y.stagger(200,{grid:[r,t],from:"center"}),update:u}),O.set("cursor-wait pointer-events-none")}),[l,i,o,n]}class $e extends B{constructor(e){super(),F(this,e,Ee,He,G,{})}}function ze(a){let e,s,t;return s=new $e({}),{c(){e=N("div"),se(s.$$.fragment),this.h()},l(r){e=R(r,"DIV",{class:!0});var l=q(e);re(s.$$.fragment,l),l.forEach(_),this.h()},h(){v(e,"class","w-screen h-screen grid fixed gap-0 content-center bg-transparent justify-center")},m(r,l){S(r,e,l),ie(s,e,null),a[3](e),t=!0},p:V,i(r){t||(b(s.$$.fragment,r),t=!0)},o(r){I(s.$$.fragment,r),t=!1},d(r){r&&_(e),ae(s),a[3](null)}}}function Ce(a,e,s){let t,r,l;g(a,H,n=>s(1,t=n)),g(a,E,n=>s(2,r=n)),g(a,j,n=>s(4,l=n));let i;Y.subscribe(n=>{k(j,l=Array.from(Array(n)).map((u,c)=>({id:c,i:c,key:c,columns:r,rows:t})),l)}),L(()=>{$.subscribe(n=>{E.set(Math.floor(n/50))}),z.subscribe(n=>{H.set(Math.floor(n/50))}),E.subscribe(n=>{s(0,i.style.gridTemplateColumns=`repeat(${n}, 1fr)`,i)}),H.subscribe(n=>{s(0,i.style.gridTemplateRows=`repeat(${n}, 1fr)`,i)})});function o(n){ce[n?"unshift":"push"](()=>{i=n,s(0,i)})}return a.$$.update=()=>{a.$$.dirty&6&&Y.set(r*t)},[i,t,r,o]}class De extends B{constructor(e){super(),F(this,e,Ce,ze,G,{})}}function te(a){let e,s,t,r,l,i;s=new De({});const o=a[2].default,n=ue(o,a,a[1],null);return{c(){e=N("div"),se(s.$$.fragment),t=de(),n&&n.c()},l(u){e=R(u,"DIV",{});var c=q(e);re(s.$$.fragment,c),t=fe(c),n&&n.l(c),c.forEach(_)},m(u,c){S(u,e,c),ie(s,e,null),me(e,t),n&&n.m(e,null),i=!0},p(u,c){n&&n.p&&(!i||c&2)&&pe(n,o,u,u[1],i?he(o,u[1],c,null):ge(u[1]),null)},i(u){i||(b(s.$$.fragment,u),b(n,u),u&&_e(()=>{i&&(l&&l.end(1),r=be(e,X,{duration:500,easing:Se,opacity:.5}),r.start())}),i=!0)},o(u){I(s.$$.fragment,u),I(n,u),r&&r.invalidate(),u&&(l=ye(e,X,{duration:500,easing:Me,opacity:.5})),i=!1},d(u){u&&_(e),ae(s),n&&n.d(u),u&&l&&l.end()}}}function Te(a){let e,s,t=a[0]&&te(a);return{c(){t&&t.c(),e=C()},l(r){t&&t.l(r),e=C()},m(r,l){t&&t.m(r,l),S(r,e,l),s=!0},p(r,[l]){r[0]?t?(t.p(r,l),l&1&&b(t,1)):(t=te(r),t.c(),b(t,1),t.m(e.parentNode,e)):t&&(ve(),I(t,1,1,()=>{t=null}),we())},i(r){s||(b(t),s=!0)},o(r){I(t),s=!1},d(r){r&&_(e),t&&t.d(r)}}}function We(a,e,s){let t,r;g(a,$,n=>s(3,t=n)),g(a,z,n=>s(4,r=n));let{$$slots:l={},$$scope:i}=e,o=!1;return L(async()=>{k(z,r=window.innerHeight,r),k($,t=window.innerWidth,t),window.addEventListener("resize",()=>{k(z,r=window.innerHeight,r),k($,t=window.innerWidth,t)});const n=await ke("body#root");if(!n)console.error("unable to find the body element");else{const u=n,c=u.getAttribute("data-theme");(!c||c!=="rainbow")&&u.setAttribute("data-theme","rainbow")}s(0,o=!0)}),a.$$set=n=>{"$$scope"in n&&s(1,i=n.$$scope)},[o,i,l]}class qe extends B{constructor(e){super(),F(this,e,We,Te,G,{})}}export{qe as component};
