import{s as p,e as _,i as d,d as u,o as b,r as h,f as g,g as y,h as v,u as $,v as k,w,D as A}from"../chunks/scheduler.21029ae3.js";import{S as D,i as E,a as r,t as c,c as I,f as S,g as q}from"../chunks/index.2a05704c.js";import{w as C,b as F}from"../chunks/index.384f6c3d.js";import{c as L}from"../chunks/index.c0a58b45.js";function m(l){let a,n,e;const s=l[2].default,t=h(s,l,l[1],null);return{c(){a=g("div"),t&&t.c()},l(o){a=y(o,"DIV",{});var i=v(a);t&&t.l(i),i.forEach(u)},m(o,i){d(o,a,i),t&&t.m(a,null),e=!0},p(o,i){t&&t.p&&(!e||i&2)&&$(t,s,o,o[1],e?w(s,o[1],i,null):k(o[1]),null)},i(o){e||(r(t,o),o&&(n||A(()=>{n=S(a,F,{duration:500,easing:L,opacity:.5}),n.start()})),e=!0)},o(o){c(t,o),e=!1},d(o){o&&u(a),t&&t.d(o)}}}function M(l){let a,n,e=l[0]&&m(l);return{c(){e&&e.c(),a=_()},l(s){e&&e.l(s),a=_()},m(s,t){e&&e.m(s,t),d(s,a,t),n=!0},p(s,[t]){s[0]?e?(e.p(s,t),t&1&&r(e,1)):(e=m(s),e.c(),r(e,1),e.m(a.parentNode,a)):e&&(q(),c(e,1,1,()=>{e=null}),I())},i(s){n||(r(e),n=!0)},o(s){c(e),n=!1},d(s){s&&u(a),e&&e.d(s)}}}function N(l,a,n){let{$$slots:e={},$$scope:s}=a,t=!1;return b(async()=>{const o=await C("body#root");if(!o)console.error("unable to find the body element");else{const i=o,f=i.getAttribute("data-theme");(!f||f!=="mono")&&(console.log(f),i.setAttribute("data-theme","mono"))}n(0,t=!0)}),l.$$set=o=>{"$$scope"in o&&n(1,s=o.$$scope)},[t,s,e]}class G extends D{constructor(a){super(),E(this,a,N,M,p,{})}}export{G as component};