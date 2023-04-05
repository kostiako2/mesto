const popupOpenButtonElement = document.querySelector('.profile__button-border') ;
const popupOpenButtonElementCard = document.querySelector('.profile__add-button-border');
const popupElement = document.querySelector('.popup');
const popupElementPicture = document.querySelector('.popup-picture')
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const itemTemplate = document.querySelector(".item_template").content;
const groupCard = document.querySelector(".group");
const popupOpenButtonElementPicture = document.querySelector('.group__button');
let likeButton = document.querySelectorAll(".group__like");
let deleteButton = document.querySelectorAll(".group__trash");
let formElement = popupElement.querySelector('.popup__form');
let nameInput = popupElement.querySelector('.popup__input_type_name');
let jobInput = popupElement.querySelector('.popup__input_type_job');
let nameOutput = document.querySelector('.profile__title');
let jobOutput = document.querySelector('.profile__subtitle');
let cardTitle = document.querySelector('.group__title');
let photo = document.querySelectorAll(".group__photo");
let count = 0;

console.log(popupElementPicture);


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
}

likeButton.forEach(likeButton => likeButton.addEventListener('click', function () {
  likeButton.classList.toggle('group__like_active');
}))

deleteButton.forEach(deleteButton => deleteButton.addEventListener('click', function () {
  let card = document.querySelector(".group__card");
  card.remove();
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

const openPopupPicture = function() {
  popupElementPicture.classList.add('popup-picture_opened');
  console.log(popupElementPicture);
}


const closePopup = function() { 
    popupElement.classList.remove('popup_opened')
}
popupOpenButtonElementCard.addEventListener('click', openPopupCard);
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupOpenButtonElementPicture.addEventListener('click',openPopupPicture)



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
  }
  closePopup();
}


formElement.addEventListener('submit', handleFormSubmit);
formElement.addEventListener('submit', addCardSubmit);



