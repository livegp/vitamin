if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let d={};const l=e=>r(e,o),t={module:{uri:o},exports:d,require:l};s[o]=Promise.all(i.map((e=>t[e]||l(e)))).then((e=>(n(...e),d)))}}define(["./workbox-56a10583"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/Details-4bf64a6e.js",revision:null},{url:"assets/Gallery-a98917fe.js",revision:null},{url:"assets/Head-0f611a6e.js",revision:null},{url:"assets/index-24ce040d.css",revision:null},{url:"assets/index-69312214.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"index.html",revision:"4ecd0241d33492b026fa45e51185edd2"},{url:"favicon.png",revision:"ddc7574953929ad7d634cff3303ba0e3"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"apple-touch-icon.png",revision:"78dafd7f571c791fce6e6d465c936f21"},{url:"android-chrome-192x192.png",revision:"7544febbd35ebecee9ad709ac9d166d8"},{url:"android-chrome-512x512.png",revision:"6d627213d96bfde91c649fd1274e6baf"},{url:"icons/arrow-left.svg",revision:"5344bb894484f478b2ad912ef0440436"},{url:"fonts/Inter-Bold.woff2",revision:"444a7284663a3bc886683eb81450b294"},{url:"fonts/Inter-Medium.woff2",revision:"75db5319e7e87c587019a5df08d7272c"},{url:"fonts/Inter-Regular.woff2",revision:"dc131113894217b5031000575d9de002"},{url:"manifest.webmanifest",revision:"4c417b71264f19ddf24a3c098e324410"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
