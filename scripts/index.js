const popupOpenButtonElement = document.querySelector('.profile__button-border') ;
const popupOpenButtonElementCard = document.querySelector('.profile__add-button-border');
const popupElement = document.querySelector('.popup');
const popupElementCard = document.querySelector('.popup_card');
const popupElementPicture = document.querySelector('.popup_picture')
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupCloseButtonElementCard = popupElementCard.querySelector(".popup__close-button");

const itemTemplate = document.querySelector(".item_template").content;
const groupCard = document.querySelector(".group");

let formElement = popupElement.querySelector('.popup__form');
let nameInput = popupElement.querySelector('.popup__input_type_name');
let jobInput = popupElement.querySelector('.popup__input_type_job');

let nameCardInput = popupElementCard.querySelector('.popup__input_type_name');
let linkInput = popupElementCard.querySelector('.popup__input_type_job');
let formElementCard = popupElementCard.querySelector('.popup__form');


let nameOutput = document.querySelector('.profile__title');
let jobOutput = document.querySelector('.profile__subtitle');


const openPopup = function() {
    popupElement.classList.add('popup_opened');
    nameInput.value = nameOutput.textContent; 
    jobInput.value = jobOutput.textContent;
}

const openPopupCard = function() {
    popupElementCard.classList.add('popup_opened');
    nameCardInput.value="";
    linkInput.value="";
}

const closePopup = function() { 
    popupElement.classList.remove('popup_opened')
}

const closePopupCard = function() { 
  popupElementCard.classList.remove('popup_opened');
}


const closePopupPicture = function() { 
  popupElementPicture.classList.remove('popup_opened');

}



popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupOpenButtonElementCard.addEventListener('click', openPopupCard);
popupCloseButtonElementCard.addEventListener('click', closePopupCard);



function handleFormSubmit (evt) {
    evt.preventDefault(); 
    nameOutput.textContent = nameInput.value; 
    jobOutput.textContent = jobInput.value; 
    closePopup(); 
  
}

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


function addCard (name,link) {
    let htmlElement = itemTemplate.cloneNode(true);
    let like = htmlElement.querySelector(".group__like");
    let deleteTrash = htmlElement.querySelector(".group__trash");
    let card = htmlElement.querySelector(".group__card");
    let popupPhoto = popupElementPicture.querySelector('.popup-picture__photo');
    let popupTitlePicture = popupElementPicture.querySelector('.popup-picture__title');
    let popupOpenButtonElementPicture = htmlElement.querySelector(".group__button")
    let popupCloseButtonElementPicture = popupElementPicture.querySelector(".popup-picture__close-button");

    htmlElement.querySelector(".group__title").textContent = name;
    htmlElement.querySelector(".group__photo").src = link;
    groupCard.prepend(htmlElement);

    function addLike () {
      like.classList.toggle('group__like_active');
    }
    like.addEventListener('click', addLike);

    function removeCard () {
      card.remove();
    }
    deleteTrash.addEventListener('click', removeCard);

    function openPopupPicture() {
      popupElementPicture.classList.add('popup_opened');
      popupTitlePicture.textContent = name;
      popupPhoto.src = link;
    }
    popupOpenButtonElementPicture.addEventListener('click', openPopupPicture);

    function closePopupPicture() {
      popupElementPicture.classList.remove('popup_opened');     
    }

    popupCloseButtonElementPicture.addEventListener('click', closePopupPicture);
}

 
initialCards.reverse().forEach(element => {
  addCard(element.name, element.link);
});

function addCardSubmit (evt) {
  evt.preventDefault();
  addCard(nameCardInput.value,linkInput.value);
  closePopupCard();
}


formElement.addEventListener('submit', handleFormSubmit);
formElementCard.addEventListener('submit', addCardSubmit);
