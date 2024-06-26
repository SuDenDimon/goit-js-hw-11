import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImage } from './js/pixabay-api';
import { imageTemplate } from './js/render-functions';

export const imgGallery = document.querySelector(".gallery");

export const formEl = document.querySelector('.form');

const loader = document.querySelector('.loader');

function hideLoader() {
    loader.classList.add("hidden");
}
function showLoader() {
    loader.classList.remove("hidden");
}
const galleryCfg = {
        captionsData: 'alt',
      };
      let lightbox = new SimpleLightbox('.gallery a', galleryCfg);
      lightbox.on('show.simplelightbox', function () {});

      hideLoader();

formEl.addEventListener('submit', event => {
    event.preventDefault();
    const inputValue = event.currentTarget.elements.image.value.trim();
    imgGallery.innerHTML = '<div class="loader"></div>';

    getImage(inputValue).then(data =>{
        hideLoader();
      const markup = imageTemplate(data.hits);
       imgGallery.innerHTML = markup; 
       lightbox.refresh();
       if (data.hits.length === 0) {
        iziToast.error({
            maxWidth: '432px',
            height: '48px',
            color: 'red',
            position: 'topRight',
            message: "Sorry, there are no images matching your search query. Please try again!",
        })
      }
      
    })
    .catch(error => {

        iziToast.error({
          maxWidth: '432px',
          height: '48px',
          color: 'red',
          position: 'topRight',
          message: "Sorry, there are no images matching your search query. Please try again!",
        })
          })
  .finally(() => {       
    formEl.reset()
  });
  });
