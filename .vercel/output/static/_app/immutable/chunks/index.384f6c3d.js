import{b as d}from"./index.c0a58b45.js";import{E as f}from"./scheduler.21029ae3.js";function _(t,{delay:e=0,duration:n=400,easing:c=d,amount:o=5,opacity:s=0}={}){const r=getComputedStyle(t),u=+r.opacity,a=r.filter==="none"?"":r.filter,m=u*(1-s),[b,l]=f(o);return{delay:e,duration:n,easing:c,css:(p,i)=>`opacity: ${u-m*i}; filter: ${a} blur(${i*b}${l});`}}function q(t){return new Promise(e=>{if(document.querySelector(t))return e(document.querySelector(t));new MutationObserver((c,o)=>{document.querySelector(t)&&(o.disconnect(),e(document.querySelector(t)))}).observe(document.body,{childList:!0,subtree:!0})})}export{_ as b,q as w};