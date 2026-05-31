import { getImagesByQuery } from './js/pixabay-api';
import { createGallery } from './js/render-functions';
import iziToast from 'izitoast';
import { clearGallery } from './js/render-functions';
import { showLoader } from './js/render-functions';
import { hideLoader } from './js/render-functions';
import { showMoreBTN } from './js/render-functions';
import { hideMoreBTN } from './js/render-functions';

const form = document.querySelector('.form');
const input = document.querySelector('[name="search-text"]');
const loadMoreBTN = document.querySelector('.load-more');
let page;
let query;
let cumNumberImg;
let itemHight;

form.addEventListener('submit', handleSearchSubmit);
async function handleSearchSubmit(event) {
  event.preventDefault();
  hideMoreBTN();
  query = input.value.trim();
  page = 1;
  cumNumberImg = 0;
  if (query === '') {
    return;
  } else {
    try {
      clearGallery();
      showLoader();
      const data = await getImagesByQuery(query, page);
      if (data.total === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'center',
        });
      } else {
        createGallery(data.hits);
        itemHight = document
          .querySelector('.gallery-item')
          .getBoundingClientRect().height;

        cumNumberImg += data.hits.length;
        if (cumNumberImg === data.totalHits) {
          iziToast.success({
            message:
              "We're sorry, but you've reached the end of search results.",
            position: 'center',
          });
        } else {
          showMoreBTN();
        }

        event.target.reset();
      }
    } catch (error) {
      iziToast.error({
        message: 'Something went wrong. Please try again later.',
      });
    } finally {
      hideLoader();
    }
  }
}

loadMoreBTN.addEventListener('click', async () => {
  hideMoreBTN();
  showLoader();
  page += 1;
  try {
    const data = await getImagesByQuery(query, page);
    if (data.total === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'center',
      });
    } else {
      createGallery(data.hits);

      window.scrollBy({
        top: itemHight * 2,
        left: 0,
        behavior: 'smooth',
      });

      cumNumberImg += data.hits.length;
      if (cumNumberImg === data.totalHits) {
        iziToast.success({
          message: "We're sorry, but you've reached the end of search results.",
          position: 'center',
        });
      } else {
        showMoreBTN();
      }
    }
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
    });
  } finally {
    hideLoader();
  }
});
