function D(){document.querySelectorAll('article object[type="image/svg+xml"], article img[src*=".svg"], article img[src*="excalidraw"]').forEach(t=>{if(t.dataset.excalidrawInit==="true")return;t.dataset.excalidrawInit="true";let s=t.parentElement;if(!s)return;s.classList.add("excalidraw-wrapper");let n=document.createElement("button");n.className="excalidraw-expand-btn",n.setAttribute("type","button"),n.setAttribute("aria-label","Expand and Explore Diagram"),n.innerHTML=`
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 3 21 3 21 9"></polyline>
        <polyline points="9 21 3 21 3 15"></polyline>
        <line x1="21" y1="3" x2="14" y2="10"></line>
        <line x1="3" y1="21" x2="10" y2="14"></line>
      </svg>
      <span>Explore / Zoom</span>
    `,s.appendChild(n);let i=o=>{o&&o.stopPropagation();let a="";t instanceof HTMLObjectElement?a=t.data:t instanceof HTMLImageElement&&(a=t.src),a&&X(a)};n.addEventListener("click",i),s.addEventListener("click",o=>{o.target.tagName.toLowerCase()!=="a"&&i(o)})})}function X(y){document.querySelector(".excalidraw-modal")?.remove();let t=document.createElement("div");t.className="excalidraw-modal",t.innerHTML=`
    <div class="excalidraw-modal-backdrop"></div>
    <div class="excalidraw-toolbar">
      <button class="excalidraw-tool-btn" data-action="zoom-in" title="Zoom In (+)">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
      </button>
      <button class="excalidraw-tool-btn" data-action="zoom-out" title="Zoom Out (-)">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
      </button>
      <button class="excalidraw-tool-btn" data-action="reset" title="Reset View (0)">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><polyline points="3 3 3 8 8 8"></polyline></svg>
      </button>
      <span class="excalidraw-zoom-level">100%</span>
      <button class="excalidraw-tool-btn excalidraw-close-btn" data-action="close" title="Close (Esc)">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    </div>
    <div class="excalidraw-viewport">
      <div class="excalidraw-canvas-container">
        <img src="${y}" class="excalidraw-modal-img" alt="Excalidraw Diagram" draggable="false" />
      </div>
      <div class="excalidraw-drag-capture"></div>
    </div>
    <div class="excalidraw-hint">Click & Drag to Pan \u2022 Scroll Wheel to Zoom \u2022 Esc to Close</div>
  `,document.body.appendChild(t);let s=document.body.style.overflow;document.body.style.overflow="hidden";let n=1,i=0,o=0,a=!1,f=0,g=0,E=0,b=0,d=t.querySelector(".excalidraw-viewport"),P=t.querySelector(".excalidraw-canvas-container"),u=t.querySelector(".excalidraw-drag-capture"),L=t.querySelector(".excalidraw-zoom-level");function r(){P.style.transform=`translate(${i}px, ${o}px) scale(${n})`,L&&(L.textContent=`${Math.round(n*100)}%`)}function k(){n=1,i=0,o=0,r()}function v(e,c,l){let x=n,m=Math.min(Math.max(.2,n*e),8);if(m!==x){if(c!==void 0&&l!==void 0){let h=d.getBoundingClientRect(),H=c-h.left-h.width/2,Y=l-h.top-h.height/2;i-=(H-i)*(m/x-1),o-=(Y-o)*(m/x-1)}n=m,r()}}function w(){t.classList.add("closing"),setTimeout(()=>{t.remove(),document.body.style.overflow=s},180),document.removeEventListener("keydown",M)}function M(e){e.key==="Escape"?w():e.key==="+"||e.key==="="?v(1.25):e.key==="-"?v(.8):e.key==="0"?k():e.key==="ArrowUp"||e.key==="w"?(o+=60,r()):e.key==="ArrowDown"||e.key==="s"?(o-=60,r()):e.key==="ArrowLeft"||e.key==="a"?(i+=60,r()):(e.key==="ArrowRight"||e.key==="d")&&(i-=60,r())}document.addEventListener("keydown",M),t.querySelector(".excalidraw-modal-backdrop")?.addEventListener("click",w),t.querySelectorAll(".excalidraw-tool-btn").forEach(e=>{e.addEventListener("click",c=>{c.stopPropagation();let l=e.dataset.action;l==="zoom-in"?v(1.25):l==="zoom-out"?v(.8):l==="reset"?k():l==="close"&&w()})});let S=e=>{e.preventDefault(),e.stopPropagation();let c=Math.min(Math.max(.92,Math.exp(-e.deltaY*.0015)),1.08);v(c,e.clientX,e.clientY)};t.addEventListener("wheel",S,{passive:!1}),u.addEventListener("pointerdown",e=>{e.button!==0&&e.pointerType==="mouse"||(a=!0,u.setPointerCapture(e.pointerId),f=e.clientX,g=e.clientY,E=i,b=o,d.classList.add("dragging"))}),u.addEventListener("pointermove",e=>{a&&(i=E+(e.clientX-f),o=b+(e.clientY-g),r())});let T=e=>{if(a){a=!1;try{u.releasePointerCapture(e.pointerId)}catch{}d.classList.remove("dragging")}};u.addEventListener("pointerup",T),u.addEventListener("pointercancel",T);let p=null,C=1;d.addEventListener("touchstart",e=>{e.touches.length===2&&(a=!1,p=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY),C=n)},{passive:!0}),d.addEventListener("touchmove",e=>{if(e.touches.length===2&&p!==null){e.preventDefault();let l=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY)/p;n=Math.min(Math.max(.2,C*l),8),r()}},{passive:!1}),d.addEventListener("touchend",()=>{p=null})}document.addEventListener("DOMContentLoaded",D);document.addEventListener("nav",D);
