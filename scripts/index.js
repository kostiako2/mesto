const popupOpenButtonElement = document.querySelector('.profile__button-border') ;
const popupOpenButtonElementCard = document.querySelector('.profile__add-button-border');
const popupElement = document.querySelector('.popup');
const popupElementPicture = document.querySelector('.popup-picture')
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupCloseButtonElementPicture = popupElementPicture.querySelector(".popup-picture__close-button");
const itemTemplate = document.querySelector(".item_template").content;
const groupCard = document.querySelector(".group");
const popupOpenButtonElementPicture = document.querySelectorAll('.group__button');
let likeButton = document.querySelectorAll(".group__like");
let deleteButton = document.querySelectorAll(".group__trash");
let formElement = popupElement.querySelector('.popup__form');
let nameInput = popupElement.querySelector('.popup__input_type_name');
let jobInput = popupElement.querySelector('.popup__input_type_job');
let nameOutput = document.querySelector('.profile__title');
let jobOutput = document.querySelector('.profile__subtitle');
let cardTitle = document.querySelectorAll('.group__title');
let photo = document.querySelectorAll(".group__photo");
let count = 0;
const popupPhoto = document.querySelector('.popup-picture__photo');
const popupTitlePicture = document.querySelector('.popup-picture__title');

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
  
for (let i = 0; i < initialCards.length; i++) {
    photo[i].src = initialCards[i].link;
    cardTitle[i].textContent = initialCards[i].name;

}

likeButton.forEach(likeButton => likeButton.addEventListener('click', function () {
  likeButton.classList.toggle('group__like_active');
}))

deleteButton.forEach(deleteButton => deleteButton.addEventListener('click', function () {
  let card = document.querySelector(".group__card");
  card.remove();
}))

popupOpenButtonElementPicture.forEach(popupOpenButtonElementPicture => popupOpenButtonElementPicture.addEventListener('click', function() {
  popupElementPicture.classList.add('popup-picture_opened');
  popupPhoto.src = popupOpenButtonElementPicture.querySelector('.group__photo').src;
  popupTitlePicture.textContent = popupOpenButtonElementPicture.querySelector('.group__photo').alt;

}))


const openPopup = function() {
    nameInput.placeholder = 'Введите имя';
    jobInput.placeholder = 'Введите описание ';
    const PopupTitle = document.querySelector('.popup__title');
    PopupTitle.textContent = 'Редактировать профиль';
    popupElement.classList.add('popup_opened');
    nameInput.value = nameOutput.textContent;
    jobInput.value = jobOutput.textContent;
    count = 0;
}

const openPopupCard = function() {
    popupElement.classList.add('popup_opened');
    nameInput.value = null; 
    jobInput.value = null;
    nameInput.placeholder = 'Название';
    jobInput.placeholder = 'Ссылка на картинку';
    const PopupTitle = document.querySelector('.popup__title');
    PopupTitle.textContent = 'Новое место';
    count = 1;

}

const closePopup = function() { 
    popupElement.classList.remove('popup_opened')
}

const closePopupPicture = function() { 
  popupElementPicture.classList.remove('popup-picture_opened')
}


popupOpenButtonElementCard.addEventListener('click', openPopupCard);
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupCloseButtonElementPicture.addEventListener('click',closePopupPicture);



function handleFormSubmit (evt) {
    evt.preventDefault(); 
    if (count === 0) {
      nameOutput.textContent = nameInput.value;
      jobOutput.textContent = jobInput.value; 
  }
    closePopup();
  
}

function addCardSubmit (evt) {
  evt.preventDefault();
  if (count === 1) {
    const htmlElement = itemTemplate.cloneNode(true);
    htmlElement.querySelector(".group__title").textContent = nameInput.value;
    htmlElement.querySelector(".group__photo").src = jobInput.value;
    groupCard.prepend(htmlElement);

    const like = document.querySelector(".group__like");
    function addLike () {
      like.classList.toggle('group__like_active');
    }
    like.addEventListener('click', addLike);

    const deleteTrash = document.querySelector(".group__trash");
    function removeCard () {
      let card = document.querySelector(".group__card");
      card.remove();
    }
    deleteTrash.addEventListener('click', removeCard);
  
    const photoNew = document.querySelector('.group__photo');
    photoNew.alt = nameInput.value;
    function openPopupPicture () {
      popupElementPicture.classList.add('popup-picture_opened');
      popupPhoto.src = photoNew.src;
      popupTitlePicture.textContent = photoNew.alt;
    }
    photoNew.addEventListener('click',openPopupPicture);
  }
  closePopup();
  
}


formElement.addEventListener('submit', handleFormSubmit);
formElement.addEventListener('submit', addCardSubmit);



