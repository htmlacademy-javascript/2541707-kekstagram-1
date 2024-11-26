import { renderPictures } from './pictures.js';
import { createPhotoDescriptions } from './data.js';
import { renderBigPicture } from './big-pictures.js';

const photoDescriptions = createPhotoDescriptions();

renderPictures(photoDescriptions);

document.querySelectorAll('.picture').forEach((pictureElement) => {
  pictureElement.addEventListener('click', () => {
    const photoId = +pictureElement.dataset.id;
    const photo = photoDescriptions.find((photo) => photo.id === photoId);
    renderBigPicture(photo);
  });
});

const cancelButton = document.getElementById('picture-cancel');

cancelButton.addEventListener('click', () => {
  document.querySelector('.big-picture').classList.add('hidden');
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    document.querySelector('.big-picture').classList.add('hidden');
  }
});
