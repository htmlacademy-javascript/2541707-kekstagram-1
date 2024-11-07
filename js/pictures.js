
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPictures = (photosData) => {
  const fragment = document.createDocumentFragment();
  const cb = (photo) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = photo.url;
    pictureElement.querySelector('.picture__likes').textContent = photo.likes;
    pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
    fragment.appendChild(pictureElement);
  };
  photosData.forEach(cb);

  document.querySelector('.pictures').appendChild(fragment);
};

export { renderPictures };
