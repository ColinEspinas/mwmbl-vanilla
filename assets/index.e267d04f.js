(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const a="modulepreload",m=function(n){return"/"+n},u={},c=function(r,i,l){return!i||i.length===0?r():Promise.all(i.map(e=>{if(e=m(e),e in u)return;u[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const o=document.createElement("link");if(o.rel=t?"stylesheet":a,t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t)return new Promise((d,f)=>{o.addEventListener("load",d),o.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>r())};(async()=>{const{redirectToSuggestions:n}=await c(()=>import("./suggestions.8a89998e.js"),["assets/suggestions.8a89998e.js","assets/config.d02c906f.js"]);n()||(c(()=>import("./app.a1279ed1.js"),["assets/app.a1279ed1.js","assets/define.b7078a0a.js","assets/config.d02c906f.js"]),c(()=>import("./search-bar.b95e50e7.js"),["assets/search-bar.b95e50e7.js","assets/define.b7078a0a.js","assets/config.d02c906f.js","assets/events.7f8add71.js"]),c(()=>import("./results.0bf07fd5.js"),["assets/results.0bf07fd5.js","assets/define.b7078a0a.js","assets/config.d02c906f.js","assets/events.7f8add71.js"]),c(()=>import("./footer.2171cc7d.js"),["assets/footer.2171cc7d.js","assets/define.b7078a0a.js","assets/config.d02c906f.js"]))})();
