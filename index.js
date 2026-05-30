import{a as d,S as f,i as n}from"./assets/vendor-CuY1bPUi.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function p(r){return d.get("https://pixabay.com/api/",{params:{key:"55993457-c2c59480978811e479ce5b7cc",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data)}let g=new f(".gallery-item a",{captionsData:"alt",captionDelay:250});const l=document.querySelector(".gallery");function y(r){const a=r.map(s=>{const{tags:i,comments:e,downloads:t,views:o,likes:c,webformatURL:u,largeImageURL:m}=s;return`<li class="gallery-item">
	<a class="gallery-link" href="${m}">
		<img 
		  class="gallery-image" 
		  src="${u}"
		  alt="${i}" 
		/>
         <ul class="img-data">
    <li class="img-data-item">
    <span class="accent">Likes</span>${c}
    </li>
      <li class="img-data-item">
    <span class="accent">Views</span>${o}
    </li>
      <li class="img-data-item">
    <span class="accent">Comments</span>${e}
    </li>
      <li class="img-data-item">
    <span class="accent">Downloads</span>${t}
    </li>
    </ul>
	</a>
   
</li>
`}).join("");l.innerHTML=a,g.refresh()}function h(){l.innerHTML=""}function L(){document.querySelector(".loader").classList.remove("isHiden")}function S(){document.querySelector(".loader").classList.add("isHiden")}const w=document.querySelector(".form"),b=document.querySelector('[name="search-text"]');w.addEventListener("submit",q);function q(r){r.preventDefault();const a=b.value.trim();a!==""&&(h(),L(),p(a).then(s=>{s.total===0?n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"}):(y(s.hits),r.target.reset())}).catch(s=>{n.error({message:"Something went wrong. Please try again later."})}).finally(()=>{S()}))}
//# sourceMappingURL=index.js.map
