(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();function a(o){const i=o.match(/\/\/[.?;*\-+=]+\\n/gm),c=i?[...i[0].matchAll(/\/\/(.*)\\n/gm)]:null;let s="";c&&(s=c[0][1]);const e=o.slice(i?i[0].length:0),t=[",","\\n"];s&&t.push(s);let r="",f=0,u="";for(let n=0;n<e.length;n++){let m=!1;for(let l=0;l<t.length;l++)if(t[l]===e.slice(n,t[l].length+n)){m=!0,n+=t[l].length-1;break}if(m&&r!==""){const l=Number(r);l<0&&(u+=" "+r),f+=l,r=""}else if(e[n]==="-"||!isNaN(Number(e[n])))r+=e[n];else throw new Error("Invalid input")}if(r!==""){const n=Number(r);n<0&&(u+=" "+r),f+=n}if(u.length>0)throw new Error(`negative numbers no allowed${u}`);return f}const g=document.getElementById("input"),p=document.getElementById("btn"),d=document.getElementById("output");p.addEventListener("click",()=>{console.log("dsd");try{const o=a(g.value);d.style.color="black",d.innerText="Output: "+String(o)}catch(o){o instanceof Error&&(d.style.color="red",d.innerText="Error: "+String(o.message))}});
