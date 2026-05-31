import{a as $,S as H,i}from"./assets/vendor-DCE23fse.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();async function m(s,t){return(await $.get("https://pixabay.com/api/",{params:{key:"55993457-c2c59480978811e479ce5b7cc",q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:!0,page:`${t}`,per_page:15}})).data}let N=new H(".gallery-item a",{captionsData:"alt",captionDelay:250});const d=document.querySelector(".loader"),g=document.querySelector(".gallery"),f=document.querySelector(".load-more");function y(s){const t=s.map(c=>{const{tags:a,comments:e,downloads:r,views:o,likes:S,webformatURL:q,largeImageURL:v}=c;return`<li class="gallery-item">
	<a class="gallery-link" href="${v}">
		<img 
		  class="gallery-image" 
		  src="${q}"
		  alt="${a}" 
		/>
         <ul class="img-data">
    <li class="img-data-item">
    <span class="accent">Likes</span>${S}
    </li>
      <li class="img-data-item">
    <span class="accent">Views</span>${o}
    </li>
      <li class="img-data-item">
    <span class="accent">Comments</span>${e}
    </li>
      <li class="img-data-item">
    <span class="accent">Downloads</span>${r}
    </li>
    </ul>
	</a>
   
</li>
`}).join("");g.insertAdjacentHTML("beforeend",t),N.refresh()}function B(){g.innerHTML=""}function h(){d.classList.remove("isHiden")}function p(){d.classList.add("isHiden")}function L(){f.classList.remove("isHiden")}function w(){f.classList.add("isHiden")}const M=document.querySelector(".form"),P=document.querySelector('[name="search-text"]'),T=document.querySelector(".load-more");let u,l,n,b;M.addEventListener("submit",O);async function O(s){if(s.preventDefault(),w(),l=P.value.trim(),u=1,n=0,l!==""){try{B(),h();const t=await m(l,u);t.total===0?i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"}):(y(t.hits),b=document.querySelector(".gallery-item").getBoundingClientRect().height,n+=t.hits.length,n===t.totalHits?i.success({message:"We're sorry, but you've reached the end of search results.",position:"center"}):L(),s.target.reset())}catch{i.error({message:"Something went wrong. Please try again later."})}p()}}T.addEventListener("click",async()=>{w(),h(),u+=1;const s=await m(l,u);s.total===0?i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"}):(y(s.hits),window.scrollBy({top:b*2,left:0,behavior:"smooth"}),n+=s.hits.length,n===s.totalHits?i.success({message:"We're sorry, but you've reached the end of search results.",position:"center"}):L()),p()});
//# sourceMappingURL=index.js.map
