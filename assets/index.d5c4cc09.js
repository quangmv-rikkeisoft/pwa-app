import{M as c}from"./Meta.3c7fc421.js";import{s as g,F as l}from"./App.4c258790.js";import{a as i,B as a,F as m,j as t}from"./index.7e592f2b.js";import"./index.module.d1a1ba8e.js";import"./index.33872ac7.js";function n(){return window.innerHeight>window.innerWidth}function d(){const[s,o]=i.exports.useState(n());return i.exports.useEffect(()=>{function r(){o(n())}return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),s}const f="/assets/mui.3fef0fab.svg",u="/assets/pwa.b67007b6.svg",w="/assets/react_ed.bc50972b.svg",h="/assets/recoil.79a62d7b.svg",p="/assets/rr.0b77abf9.svg",v="/assets/ts.849f5fbf.svg",b="/assets/vite.63a26457.svg",e=g("img")({width:"10%",height:"10%",margin:4});function E(){const s=d();return a(m,{children:[t(c,{title:"Welcome"}),a(l,{flexDirection:s?"column":"row",children:[t(e,{alt:"react-router",src:p}),t(e,{alt:"vite",src:b}),t(e,{alt:"typescript",src:v}),t(e,{alt:"react",src:w,sx:{width:s?"40%":"30%",height:s?"30%":"40%"}}),t(e,{alt:"mui",src:f}),t(e,{alt:"recoil",src:h}),t(e,{alt:"pwa",src:u})]})]})}export{E as default};
