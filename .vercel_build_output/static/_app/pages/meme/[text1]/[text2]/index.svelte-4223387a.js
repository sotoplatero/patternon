import{M as s,S as e,i as r,s as a,e as i,c as n,a as t,d as c,f as o,J as u,N as b}from"../../../../chunks/vendor-83f128ef.js";const g={subscribe:e=>(()=>{const e=s("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session}})().page.subscribe(e)};function p(s){let e;return{c(){e=i("picture")},l(s){e=n(s,"PICTURE",{}),t(e).forEach(c)},m(s,r){o(s,e,r)},p:u,i:u,o:u,d(s){s&&c(e)}}}function d(s,e,r){let a;return b(s,g,(s=>r(0,a=s))),a.params,[]}class l extends e{constructor(s){super(),r(this,s,d,p,a,{})}}export{l as default};
