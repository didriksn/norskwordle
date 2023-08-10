import{s as M,n as C}from"../chunks/scheduler.e108d1fd.js";import{S as N,i as O,g as b,s as W,h as k,y as j,c as T,j as A,f as u,k as _,a as m,x as U,z as S,l as p,A as E,m as B,n as H,o as q}from"../chunks/index.555af959.js";function y(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function D(r,s,i){const t=r.slice();return t[9]=s[i],t[11]=i,t}function L(r,s,i){const t=r.slice();return t[9]=s[i],t[13]=i,t}function z(r){let s;return{c(){s=B(V)},l(i){s=H(i,V)},m(i,t){m(i,s,t)},p:C,d(i){i&&u(s)}}}function F(r){let s=r[0][r[11]][r[13]].toUpperCase()+"",i;return{c(){i=B(s)},l(t){i=H(t,s)},m(t,n){m(t,i,n)},p(t,n){n&1&&s!==(s=t[0][t[11]][t[13]].toUpperCase()+"")&&q(i,s)},d(t){t&&u(i)}}}function R(r){let s,i;function t(e,l){return e[0][e[11]]&&e[13]<e[0][e[11]].length?F:z}let n=t(r),o=n(r);return{c(){s=b("div"),o.c(),this.h()},l(e){s=k(e,"DIV",{class:!0,style:!0});var l=A(s);o.l(l),l.forEach(u),this.h()},h(){_(s,"class",i="box "+(r[0][r[11]]&&r[13]<r[0][r[11]].length?"filled":"")+" "+(r[3]&&r[0][r[11]]&&r[13]<r[0][r[11]].length?"flipping":"")),p(s,"background-color",r[2][r[11]][r[13]]),p(s,"border-color",r[0][r[11]]&&r[13]<r[0][r[11]].length?r[2][r[11]][r[13]]:"#d3d6da"),p(s,"color",r[2][r[11]][r[13]]!==""?"white":"black"),E(s,"correct",r[1]&&r[4].includes(r[11]))},m(e,l){m(e,s,l),o.m(s,null)},p(e,l){n===(n=t(e))&&o?o.p(e,l):(o.d(1),o=n(e),o&&(o.c(),o.m(s,null))),l&9&&i!==(i="box "+(e[0][e[11]]&&e[13]<e[0][e[11]].length?"filled":"")+" "+(e[3]&&e[0][e[11]]&&e[13]<e[0][e[11]].length?"flipping":""))&&_(s,"class",i),l&4&&p(s,"background-color",e[2][e[11]][e[13]]),l&5&&p(s,"border-color",e[0][e[11]]&&e[13]<e[0][e[11]].length?e[2][e[11]][e[13]]:"#d3d6da"),l&4&&p(s,"color",e[2][e[11]][e[13]]!==""?"white":"black"),l&27&&E(s,"correct",e[1]&&e[4].includes(e[11]))},d(e){e&&u(s),o.d()}}}function I(r){let s,i,t=y(Array.from({length:5})),n=[];for(let o=0;o<t.length;o+=1)n[o]=R(L(r,t,o));return{c(){s=b("div");for(let o=0;o<n.length;o+=1)n[o].c();i=W(),this.h()},l(o){s=k(o,"DIV",{class:!0});var e=A(s);for(let l=0;l<n.length;l+=1)n[l].l(e);i=T(e),e.forEach(u),this.h()},h(){_(s,"class","row")},m(o,e){m(o,s,e);for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(s,null);U(s,i)},p(o,e){if(e&31){t=y(Array.from({length:5}));let l;for(l=0;l<t.length;l+=1){const f=L(o,t,l);n[l]?n[l].p(f,e):(n[l]=R(f),n[l].c(),n[l].m(s,i))}for(;l<n.length;l+=1)n[l].d(1);n.length=t.length}},d(o){o&&u(s),S(n,o)}}}function K(r){let s,i='<h1 class="title">NORSK WORDLE</h1>',t,n,o,e=y(Array.from({length:v})),l=[];for(let f=0;f<e.length;f+=1)l[f]=I(D(r,e,f));return{c(){s=b("div"),s.innerHTML=i,t=W(),n=b("div"),o=b("div");for(let f=0;f<l.length;f+=1)l[f].c();this.h()},l(f){s=k(f,"DIV",{class:!0,"data-svelte-h":!0}),j(s)!=="svelte-1171ivy"&&(s.innerHTML=i),t=T(f),n=k(f,"DIV",{class:!0});var a=A(n);o=k(a,"DIV",{class:!0});var h=A(o);for(let g=0;g<l.length;g+=1)l[g].l(h);h.forEach(u),a.forEach(u),this.h()},h(){_(s,"class","header"),_(o,"class","grid"),_(n,"class","center")},m(f,a){m(f,s,a),m(f,t,a),m(f,n,a),U(n,o);for(let h=0;h<l.length;h+=1)l[h]&&l[h].m(o,null)},p(f,[a]){if(a&31){e=y(Array.from({length:v}));let h;for(h=0;h<e.length;h+=1){const g=D(f,e,h);l[h]?l[h].p(g,a):(l[h]=I(g),l[h].c(),l[h].m(o,null))}for(;h<l.length;h+=1)l[h].d(1);l.length=e.length}},i:C,o:C,d(f){f&&(u(s),u(t),u(n)),S(l,f)}}}let v=6,V="",P="CRANE";function G(r,s,i){let t="",n=0,o=Array.from({length:v},()=>""),e=!1,l=[],f=Array.from({length:v},()=>Array.from({length:5},()=>"")),a=!1;function h(){i(3,a=!0),setTimeout(()=>{i(3,a=!1)},1e3)}function g(){const d=t.trim().toUpperCase(),w=P.trim().toUpperCase();i(2,f[n]=Array.from({length:5},()=>"#787c7e"),f);for(let c=0;c<d.length;c++)d[c]===w[c]?i(2,f[n][c]="#6AAA64",f):w.includes(d[c])&&i(2,f[n][c]="#C9B458",f);i(1,e=!0);for(let c=0;c<d.length;c++)if(d[c]!==w[c]){i(1,e=!1);break}e&&l.push(n)}return window.addEventListener("keydown",d=>{d.key.length===1&&/^[a-æøåA-ÆØÅ]+$/.test(d.key)&&t.length<5?(t+=d.key,i(0,o[n]=t,o)):d.key==="Backspace"?(t=t.slice(0,-1),i(0,o[n]=t,o)):d.key==="Enter"&&t.length===5&&(h(),g(),n=(n+1)%v,t=o[n]||"")}),[o,e,f,a,l]}class X extends N{constructor(s){super(),O(this,s,G,K,M,{})}}export{X as component};
