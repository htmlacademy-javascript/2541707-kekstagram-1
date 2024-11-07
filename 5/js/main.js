import { renderPictures } from './pictures.js';
import { createPhotoDescriptions } from './data.js';

const photoDescriptions = createPhotoDescriptions();

renderPictures(photoDescriptions);