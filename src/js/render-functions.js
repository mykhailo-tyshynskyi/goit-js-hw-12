import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export let lightbox = new SimpleLightbox('.gallery-item a', {
  captionsData: 'alt',
  captionDelay: 250,
});





const container = document.querySelector('.gallery');

export function createGallery(images) {
  const murkup = images
    .map(img => {
      const {
        tags,
        comments,
        downloads,
        views,
        likes,
        webformatURL: preview,
        largeImageURL,
      } = img;
      return `<li class="gallery-item">
	<a class="gallery-link" href="${largeImageURL}">
		<img 
		  class="gallery-image" 
		  src="${preview}"
		  alt="${tags}" 
		/>
         <ul class="img-data">
    <li class="img-data-item">
    <span class="accent">Likes</span>${likes}
    </li>
      <li class="img-data-item">
    <span class="accent">Views</span>${views}
    </li>
      <li class="img-data-item">
    <span class="accent">Comments</span>${comments}
    </li>
      <li class="img-data-item">
    <span class="accent">Downloads</span>${downloads}
    </li>
    </ul>
	</a>
   
</li>
`;
    })
    .join('');

   container.innerHTML = murkup;
    lightbox.refresh();
}

export function clearGallery() {
   container.innerHTML = '';
}

export function showLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.remove('isHiden');
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.add('isHiden');
}
