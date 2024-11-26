const bigPictureElement = document.querySelector('.big-picture');
const bigPictureImageElement = bigPictureElement.querySelector('.big-picture__img img');
const likesCountElement = bigPictureElement.querySelector('.likes-count');
const commentsCountElement = bigPictureElement.querySelector('.comments-count');
const socialCaptionElement = bigPictureElement.querySelector('.social__caption');
const socialCommentsElement = bigPictureElement.querySelector('.social__comments');

const renderBigPicture = (photo) => {
  bigPictureImageElement.src = photo.url;
  likesCountElement.textContent = photo.likes;
  commentsCountElement.textContent = photo.comments.length;
  socialCaptionElement.textContent = photo.description;
  socialCommentsElement.innerHTML = '';

  const fragment = document.createDocumentFragment();
  photo.comments.forEach((comment) => {
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');

    const commentAvatarElement = document.createElement('img');
    commentAvatarElement.classList.add('social__picture');
    commentAvatarElement.src = comment.avatar;
    commentAvatarElement.alt = comment.name;
    commentAvatarElement.width = 35;
    commentAvatarElement.height = 35;

    const commentTextElement = document.createElement('p');
    commentTextElement.classList.add('social__text');
    commentTextElement.textContent = comment.message;

    commentElement.appendChild(commentAvatarElement);
    commentElement.appendChild(commentTextElement);
    fragment.appendChild(commentElement);
  });

  socialCommentsElement.appendChild(fragment);
  bigPictureElement.classList.remove('hidden');
};

export { renderBigPicture };
