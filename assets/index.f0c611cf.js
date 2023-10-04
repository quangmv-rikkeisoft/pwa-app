(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}})();const h="modulepreload",b=function(o){return"/"+o},f={},g=function(e,n,l){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(t=>{if(t=b(t),t in f)return;f[t]=!0;const i=t.endsWith(".css"),p=i?'[rel="stylesheet"]':"";if(!!l)for(let a=r.length-1;a>=0;a--){const c=r[a];if(c.href===t&&(!i||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${p}`))return;const s=document.createElement("link");if(s.rel=i?"stylesheet":h,i||(s.as="script",s.crossOrigin=""),s.href=t,document.head.appendChild(s),i)return new Promise((a,c)=>{s.addEventListener("load",a),s.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>e())};var u={exports:{}};u.exports=m;u.exports.isMobile=m;u.exports.default=m;const y=/(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,v=/CrOS/,w=/android|ipad|playbook|silk/i;function m(o){o||(o={});let e=o.ua;if(!e&&typeof navigator<"u"&&(e=navigator.userAgent),e&&e.headers&&typeof e.headers["user-agent"]=="string"&&(e=e.headers["user-agent"]),typeof e!="string")return!1;let n=y.test(e)&&!v.test(e)||!!o.tablet&&w.test(e);return!n&&o.tablet&&o.featureDetect&&navigator&&navigator.maxTouchPoints>1&&e.indexOf("Macintosh")!==-1&&e.indexOf("Safari")!==-1&&(n=!0),n}const x=u.exports(),k="React PWA",$="auther-email@gmail.com",_="https://github.com/suren-atoyan/react-pwa",L={app:{crash:{title:"Oooops... Sorry, I guess, something went wrong. You can:",options:{email:`contact with author by this email - ${$}`,reset:"Press here to reset the application"}}},loader:{fail:"Hmmmmm, there is something wrong with this component loading process... Maybe trying later would be the best idea"},images:{failed:"something went wrong during image loading :("},404:"Hey bro? What are you looking for?"},P={options:{anchorOrigin:{vertical:"bottom",horizontal:"left"},autoHideDuration:6e3},maxSnack:x?3:4},M={delay:300,minimumLoading:700},S={image:"/cover.png",description:"Starter kit for modern web applications"},A="https://giphy.com/embed/xTiN0L7EW5trfOvEk0";function d(){return Math.floor(Math.random()*256)}function E(){const o=d(),e=d(),n=d();return[`rgb(${o}, ${e}, ${n})`,`rgb(${255-o}, ${255-e}, ${255-n})`]}function O(){const[o,e]=E(),n=["font-size: 40px",`color: ${o}`,`border: 1px solid ${e}`,`background-color: ${e}`,"border-radius: 5px","padding: 10px"].join(";");console.log(`%c=== ${k} ===`,n)}Promise.all([g(()=>import("./Root.7c00fc05.js"),["assets/Root.7c00fc05.js","assets/index.7e592f2b.js","assets/index.module.d1a1ba8e.js"]),g(()=>import("./App.a6b2d970.js").then(o=>o.A),["assets/App.a6b2d970.js","assets/index.7e592f2b.js"])]).then(([{default:o},{default:e}])=>{o(e)});O();export{g as _,S as d,$ as e,A as g,M as l,L as m,P as n,_ as r,k as t};
