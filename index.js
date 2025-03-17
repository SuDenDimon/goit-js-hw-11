import{a as h,S as d,i as l}from"./assets/vendor-h_xsmXee.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function f(a){const i="https://pixabay.com",o="/api/",t=new URLSearchParams({key:"22926721-5d20aa08498ffd1ff2f906542",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${i}${o}?${t}`;return h.get(e).then(r=>r.data).catch(r=>{console.log(r)})}function m(a){return a.map(({webformatURL:i,largeImageURL:o,tags:t,likes:e,views:r,comments:n,downloads:u})=>`
      <li class="gallery-item">
              <a class="gallery-link" href="${o}">
                  <img
                      class="gallery-image"
                      width="1280"
                      heigh="152"
                      src="${i}"
                      data-source="${o}"
                      alt="${t}"
                  />
                  <ul class="gallery-description">
                    <li><h3>likes:</h3><P>${e}</p></li>
                    <li><h3>views:</h3><P>${r}</p></li>
                    <li><h3>comments:</h3><P>${n}</p></li>
                    <li><h3>downloads:</h3><P>${u}</p></li>
                </ul>
              </a>
          </li>`).join("")}const s={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function c(){s.loader.classList.add("hidden")}function g(){s.loader.classList.remove("hidden")}const p={captionsData:"alt"};let y=new d(".gallery a",p);c();s.form.addEventListener("submit",L);function L(a){a.preventDefault(),s.gallery.innerHTML="";const o=a.currentTarget.elements.searchInput.value;o!==""&&(g(),f(o).then(t=>{const e=m(t.hits);s.gallery.insertAdjacentHTML("beforeend",e),y.refresh(),t.hits.length===0&&l.show({maxWidth:"432px",height:"48px",color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(t=>{l.show({maxWidth:"432px",height:"48px",color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{c(),s.form.reset()}))}
//# sourceMappingURL=index.js.map
