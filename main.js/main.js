(()=>{"use strict";window.SimpleAnime&&new SimpleAnime,function(){let e;e=new MutationObserver((function(t){t[0].target.classList.contains("ativo")&&(e.disconnect(),document.querySelectorAll("[data-numero]").forEach((e=>{const t=+e.innerText,n=Math.floor(t/100);let o=0;const c=setInterval((()=>{o+=n,e.innerText=o,o>t&&(e.innerText=t,clearInterval(c))}),25*Math.random())})))}));const t=document.querySelector(".number");e.observe(t,{attributes:!0})}(),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".performace");function t(){for(let t=0;t<e.length;t+=1){const n=e[t],o=n.getBoundingClientRect();o.top<window.innerHeight&&o.bottom>=0?n.classList.add("ativo"):n.classList.contains("ativo")&&n.classList.remove("ativo")}}window.addEventListener("scroll",t),t()})),function(){const e=document.querySelector(".hamburger"),t=document.querySelector(".header-menu");let n=0;e.addEventListener("click",(()=>{e.classList.toggle("active"),t.classList.toggle("active")})),document.querySelectorAll(".nav-link").forEach((n=>n.addEventListener("click",(()=>{e.classList.remove("active"),t.classList.remove("active")})))),window.addEventListener("scroll",(()=>{const o=window.pageYOffset||document.documentElement.scrollTop;o>n&&t.classList.contains("active")&&(t.classList.remove("active"),e.classList.remove("active")),n=o}))}()})();