import{S as a,i as s,s as r,e,t as n,k as t,c as i,a as c,g as o,d,n as l,b as f,K as h,f as u,F as p,L as v,h as g,J as $,T as b}from"../chunks/vendor-83f128ef.js";function y(a){let s,r,b,y,w,L,T,m,E,H,M=JSON.stringify(a[2].turndown(a[0]))+"";return{c(){s=e("div"),r=e("a"),b=n(a[1]),y=t(),w=e("div"),L=t(),T=e("div"),m=n(M),this.h()},l(e){s=i(e,"DIV",{class:!0});var n=c(s);r=i(n,"A",{href:!0,class:!0});var t=c(r);b=o(t,a[1]),t.forEach(d),y=l(n),w=i(n,"DIV",{class:!0,contenteditable:!0}),c(w).forEach(d),L=l(n),T=i(n,"DIV",{});var f=c(T);m=o(f,M),f.forEach(d),n.forEach(d),this.h()},h(){f(r,"href",a[1]),f(r,"class",""),f(w,"class","border py-2 px-4"),f(w,"contenteditable","true"),void 0===a[0]&&h((()=>a[4].call(w))),f(s,"class","space-y-4")},m(e,n){u(e,s,n),p(s,r),p(r,b),p(s,y),p(s,w),void 0!==a[0]&&(w.innerHTML=a[0]),p(s,L),p(s,T),p(T,m),E||(H=v(w,"input",a[4]),E=!0)},p(a,[s]){2&s&&g(b,a[1]),2&s&&f(r,"href",a[1]),1&s&&a[0]!==w.innerHTML&&(w.innerHTML=a[0]),1&s&&M!==(M=JSON.stringify(a[2].turndown(a[0]))+"")&&g(m,M)},i:$,o:$,d(a){a&&d(s),E=!1,H()}}}function w(a,s,r){let e,n;var t=new b;let i="generador de url<br>escriba el contenido de la diapositiva para generar la url";return a.$$.update=()=>{1&a.$$.dirty&&r(3,e=t.turndown(i)),8&a.$$.dirty&&r(1,n=`/show/${e.trim().replace(/\n\s+/g,"\n").replace(/\n+/g,"|")}`)},[i,n,t,e,function(){i=this.innerHTML,r(0,i)}]}class L extends a{constructor(a){super(),s(this,a,w,y,r,{})}}export{L as default};
