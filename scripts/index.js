const popupOpenButtonElement = document.querySelector('.profile__button-border') ;
const popupOpenButtonElementCard = document.querySelector('.profile__add-button-border');
const popupElementProfile = document.querySelector('.popup_profile');
const popupElementCard = document.querySelector('.popup_card');
const popupElementPicture = document.querySelector('.popup_picture')
const popupCloseButtonElement = popupElementProfile.querySelector('.popup__close-button');
const popupCloseButtonElementCard = popupElementCard.querySelector(".popup__close-button");

const itemTemplate = document.querySelector('.item_template').content.querySelector('.group__card');
console.log(itemTemplate);
const groupCard = document.querySelector(".group");

const popupPhoto = popupElementPicture.querySelector('.popup__photo-picture');
const popupTitlePicture = popupElementPicture.querySelector('.popup__title-picture');
const popupCloseButtonElementPicture = popupElementPicture.querySelector(".popup__close-button");

let formElementProfile = popupElementProfile.querySelector('.popup__form');
let nameInput = popupElementProfile.querySelector('.popup__input_type_name');
let jobInput = popupElementProfile.querySelector('.popup__input_type_job');

let nameCardInput = popupElementCard.querySelector('.popup__input_type_name');
let linkInput = popupElementCard.querySelector('.popup__input_type_job');
let formElementCard = popupElementCard.querySelector('.popup__form');

const nameOutput = document.querySelector('.profile__title');
const jobOutput = document.querySelector('.profile__subtitle');

const openPopupProfile = function() {
  popupElementProfile.classList.add('popup_opened');
  nameInput.value = nameOutput.textContent; 
  jobInput.value = jobOutput.textContent;
}

const openPopupCard = function() {
  popupElementCard.classList.add('popup_opened');
  nameCardInput.value="";
  linkInput.value="";
}

const closePopupProfile = function() { 
  popupElementProfile.classList.remove('popup_opened')
}

const closePopupCard = function() { 
  popupElementCard.classList.remove('popup_opened');
}

popupOpenButtonElement.addEventListener('click', openPopupProfile);
popupCloseButtonElement.addEventListener('click', closePopupProfile);
popupOpenButtonElementCard.addEventListener('click', openPopupCard);
popupCloseButtonElementCard.addEventListener('click', closePopupCard);

function handleFormSubmitProfile (evt) {
  evt.preventDefault(); 
  nameOutput.textContent = nameInput.value; 
  jobOutput.textContent = jobInput.value; 
  closePopupProfile(); 
}


function addCard (name,link) {
  let htmlElement = itemTemplate.cloneNode(true);
  let like = htmlElement.querySelector(".group__like");
  let deleteTrash = htmlElement.querySelector(".group__trash");
  let popupOpenButtonElementPicture = htmlElement.querySelector(".group__button")

  htmlElement.querySelector(".group__title").textContent = name;
  let photo = htmlElement.querySelector(".group__photo");
  photo.src = link;
  photo.alt = name;

  function addLike () {
    like.classList.toggle('group__like_active');
  }
  like.addEventListener('click', addLike);

  function removeCard () {
    htmlElement.remove();
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
  return htmlElement;
}

function renderCard(element) {
  groupCard.prepend(element);
}
 

initialCards.reverse().forEach(element => {
  renderCard(addCard(element.name, element.link));
});

function addCardSubmit (evt) {
  evt.preventDefault();
  renderCard(addCard(nameCardInput.value,linkInput.value));
  closePopupCard();
}


formElementProfile.addEventListener('submit', handleFormSubmitProfile);
formElementCard.addEventListener('submit', addCardSubmit);
