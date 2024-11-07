import { getRandomNumber, getRandomElement } from './util.js';

const commentTexts = [
    'Всё отлично!',
    'Всё отлично!1',
    'Всё отлично!2',
    'Всё отлично!3',
    'Всё отлично!4',
];

const commentatorNames = ['Чел1', 'Чел2', 'Чел3', 'Чел4', 'Чел5', 'Чел6', 'Чел7'];

const generateComment = () => ({
    id: getRandomNumber(1, 1000),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: getRandomElement(commentTexts),
    name: getRandomElement(commentatorNames)
});

const generateComments = (count) => Array.from({ length: count }, generateComment);

/**
 * Гененрирует объект фотографию
 * @param {int} id - уникальный идентификатор
 * @returns {Object} - данные фотографии
 */
const generatePhotoDescription = (id) => ({
    id,
    url: `photos/${id}.jpg`,
    description: `Описание фотографии ${id}`,
    likes: getRandomNumber(15, 200),
    comments: generateComments(getRandomNumber(1, 5))
});

const createPhotoDescriptions = () => Array.from({ length: 25 }, (_, index) => generatePhotoDescription(index + 1));

export { createPhotoDescriptions };