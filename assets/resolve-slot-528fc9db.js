import{ab as a,ac as o,F as i}from"./app-157886d0.js";function l(r,...e){if(Array.isArray(r))r.forEach(n=>l(n,...e));else return r(...e)}function t(r){return r.some(e=>a(e)?!(e.type===o||e.type===i&&!t(e.children)):!0)?r:null}function f(r,e){return r&&t(r())||e()}function c(r,e,n){return r&&t(r(e))||n(e)}function p(r,e){const n=r&&t(r());return e(n||null)}function m(r,e,n){const u=r&&t(r(e));return n(u||null)}function d(r){return!(r&&t(r()))}export{c as a,m as b,l as c,f as d,d as i,p as r};