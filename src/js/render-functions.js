
export function createImagesCard(images) {
    return images
      .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => {
        return `
      <li class="gallery-item">
              <a class="gallery-link" href="${largeImageURL}">
                  <img
                      class="gallery-image"
                      width="1280"
                      heigh="152"
                      src="${webformatURL}"
                      data-source="${largeImageURL}"
                      alt="${tags}"
                  />
                  <ul class="gallery-description">
                    <li><h3>likes:</h3><P>${likes}</p></li>
                    <li><h3>views:</h3><P>${views}</p></li>
                    <li><h3>comments:</h3><P>${comments}</p></li>
                    <li><h3>downloads:</h3><P>${downloads}</p></li>
                </ul>
              </a>
          </li>`;
      })
      .join("");
  }