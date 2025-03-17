import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getImage } from './js/pixabay-api';
import { createImagesCard } from './js/render-functions';

const refs = {
    form: document.querySelector(".form"),
    gallery: document.querySelector(".gallery"),
    loader: document.querySelector('.loader'),
}

function hideLoader() {
    refs.loader.classList.add("hidden");
}
function showLoader() {
    refs.loader.classList.remove("hidden");
}

const galleryCfg = {
    captionsData: 'alt',
  };
  let lightbox = new SimpleLightbox('.gallery a', galleryCfg);
    hideLoader();

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    refs.gallery.innerHTML = "";

    const form = e.currentTarget;
    const inputValue = form.elements.searchInput.value;

    if (inputValue === "") {
        return;
    }
        showLoader();
    
    getImage(inputValue).then(data => { 

        const markUp = createImagesCard(data.hits);
        refs.gallery.insertAdjacentHTML("beforeend", markUp);

        lightbox.refresh();

        if (data.hits.length === 0) {
            iziToast.show({
                maxWidth: '432px',
                height: '48px',
                color: 'red',
                position: 'topRight',
                message: "Sorry, there are no images matching your search query. Please try again!",
            });
        }
    }).catch(error => {
        iziToast.show({
                maxWidth: '432px',
                height: '48px',
                color: 'red',
                position: 'topRight',
                message: "Sorry, there are no images matching your search query. Please try again!",
    }); 
}).finally(() => {   
    hideLoader();    
    refs.form.reset();
  });
}
