if(!self.define){let e,n={};const r=(r,i)=>(r=new URL(r+".js",i).href,n[r]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=n,document.head.appendChild(e)}else e=r,importScripts(r),n()})).then((()=>{let e=n[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,s)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(n[l])return;let o={};const u=e=>r(e,l),t={module:{uri:l},exports:o,require:u};n[l]=Promise.all(i.map((e=>t[e]||u(e)))).then((e=>(s(...e),o)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_nuxt/builds/latest.json",revision:"15a2a366a41658d07e07825d98b88d55"},{url:"_nuxt/builds/meta/23bb16f0-c2c6-4ae9-aa71-ec23bec31d2c.json",revision:null},{url:"_nuxt/CV3O7twB.js",revision:null},{url:"_nuxt/CX_c3s5J.js",revision:null},{url:"_nuxt/D5gOYdM7.js",revision:null},{url:"_nuxt/default-cover.oB27RXoN.svg",revision:null},{url:"_nuxt/entry.BayZIH2A.css",revision:null},{url:"_nuxt/error-404.CJkeVOTF.css",revision:null},{url:"_nuxt/error-500.D9UKVWqT.css",revision:null},{url:"_nuxt/profile-photo.CcXd1nkm.svg",revision:null},{url:"_nuxt/s4hr9iFY.js",revision:null},{url:"_payload.json",revision:"988d12dc6022e72b8b8a0a796def8b8f"},{url:"200",revision:"1c2969dff5045fc0b3b4395dafa1d22c"},{url:"404",revision:"1c2969dff5045fc0b3b4395dafa1d22c"},{url:"icon.svg",revision:"94bb710433a55d3c5b24d62b98feb9ec"},{url:"/inter-knot/",revision:"2e9df5228a4df12ce20442bfdc03f755"},{url:"pwa-999.png",revision:"307547c347d7a616cb88ce7a79ed965f"},{url:"manifest.webmanifest",revision:"30097da547b9d8b5752fffb752b93111"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/inter-knot/")))}));
