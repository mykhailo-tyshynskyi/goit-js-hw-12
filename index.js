import{a as $,S as H,i as a}from"./assets/vendor-DCE23fse.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=c(e);fetch(e.href,s)}})();async function m(t,r){return(await $.get("https://pixabay.com/api/",{params:{key:"55993457-c2c59480978811e479ce5b7cc",q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:!0,page:`${r}`,per_page:15}})).data}let N=new H(".gallery-item a",{captionsData:"alt",captionDelay:250});const d=document.querySelector(".loader"),g=document.querySelector(".gallery"),y=document.querySelector(".load-more");function f(t){const r=t.map(c=>{const{tags:o,comments:e,downloads:s,views:i,likes:b,webformatURL:q,largeImageURL:v}=c;return`<li class="gallery-item">
	<a class="gallery-link" href="${v}">
		<img 
		  class="gallery-image" 
		  src="${q}"
		  alt="${o}" 
		/>
         <ul class="img-data">
    <li class="img-data-item">
    <span class="accent">Likes</span>${b}
    </li>
      <li class="img-data-item">
    <span class="accent">Views</span>${i}
    </li>
      <li class="img-data-item">
    <span class="accent">Comments</span>${e}
    </li>
      <li class="img-data-item">
    <span class="accent">Downloads</span>${s}
    </li>
    </ul>
	</a>
   
</li>
`}).join("");g.insertAdjacentHTML("beforeend",r),N.refresh()}function P(){g.innerHTML=""}function h(){d.classList.remove("isHiden")}function p(){d.classList.add("isHiden")}function L(){y.classList.remove("isHiden")}function w(){y.classList.add("isHiden")}const B=document.querySelector(".form"),M=document.querySelector('[name="search-text"]'),T=document.querySelector(".load-more");let u,l,n,S;B.addEventListener("submit",O);async function O(t){if(t.preventDefault(),w(),l=M.value.trim(),u=1,n=0,l!=="")try{P(),h();const r=await m(l,u);r.total===0?a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"}):(f(r.hits),S=document.querySelector(".gallery-item").getBoundingClientRect().height,n+=r.hits.length,n===r.totalHits?a.success({message:"We're sorry, but you've reached the end of search results.",position:"center"}):L(),t.target.reset())}catch{a.error({message:"Something went wrong. Please try again later."})}finally{p()}}T.addEventListener("click",async()=>{w(),h(),u+=1;try{const t=await m(l,u);t.total===0?a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"}):(f(t.hits),window.scrollBy({top:S*2,left:0,behavior:"smooth"}),n+=t.hits.length,n===t.totalHits?a.success({message:"We're sorry, but you've reached the end of search results.",position:"center"}):L())}catch{a.error({message:"Something went wrong. Please try again later."})}finally{p()}});
//# sourceMappingURL=index.js.map
