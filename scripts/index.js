const popupOpenButtonElement = document.querySelector('.profile__button-border') ;
const popupOpenButtonElementPicture = document.querySelector('.profile__add-button-border');
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button')
let formElement = popupElement.querySelector('.popup__form');
let nameInput = popupElement.querySelector('.popup__input_type_name');
let jobInput = popupElement.querySelector('.popup__input_type_job');
let nameOutput = document.querySelector('.profile__title');
let jobOutput = document.querySelector('.profile__subtitle');



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
const photo = document.querySelectorAll(".group__photo");
for (let i = 0; i < initialCards.length; i++) {
    photo[i].src = initialCards[i].link;
}

  console.log(initialCards[0]);

const openPopup = function() {
    nameInput.placeholder = 'Введите имя';
    jobInput.placeholder = 'Введите описание ';
    const PopupTitle = document.querySelector('.popup__title');
    PopupTitle.textContent = 'Редактировать профиль';
    popupElement.classList.add('popup_opened');
    nameInput.value = nameOutput.textContent;
    jobInput.value = jobOutput.textContent;

}

const openPopupPicture = function() {
    popupElement.classList.add('popup_opened');
    nameInput.value = null; 
    jobInput.value = null;
    nameInput.placeholder = 'Название';
    jobInput.placeholder = 'Ссылка на картинку';
    const PopupTitle = document.querySelector('.popup__title');
    PopupTitle.textContent = 'Новое место';

}

const closePopup = function() { 
    popupElement.classList.remove('popup_opened')
}
popupOpenButtonElementPicture.addEventListener('click', openPopupPicture);
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);


function handleFormSubmit (evt) {
    evt.preventDefault(); 
    nameOutput.textContent = nameInput.value;
    jobOutput.textContent = jobInput.value;
    closePopup();
  
}

formElement.addEventListener('submit', handleFormSubmit); 

