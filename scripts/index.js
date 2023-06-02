import {Card} from './card.js'
import {FormValidator} from './validation.js';
import {validationConfig} from './settings.js';
import {initialCards} from './cards.js';

const popupOpenButtonElementProfile = document.querySelector('.profile__button-border') ;
const popupOpenButtonElementCard = document.querySelector('.profile__add-button-border');
const popupElementProfile = document.querySelector('.popup_profile');
const popupElementCard = document.querySelector('.popup_card');

export const popupElementPicture = document.querySelector('.popup_picture');
const popupCloseButtonElementProfile = popupElementProfile.querySelector('.popup__close-button');
const popupCloseButtonElementCard = popupElementCard.querySelector(".popup__close-button");

const itemTemplate = document.querySelector('.item_template').content.querySelector('.group__card');
console.log(itemTemplate);
const groupCard = document.querySelector(".group");

const popupSaveButton = popupElementCard.querySelector('.popup__button');

const popupOpenButtonElementPicture = itemTemplate.querySelector(".group__button");

export const popupPhoto = popupElementPicture.querySelector('.popup__photo-picture');
export const popupTitlePicture = popupElementPicture.querySelector('.popup__title-picture');
const popupCloseButtonElementPicture = popupElementPicture.querySelector(".popup__close-button");
const formElementProfile = popupElementProfile.querySelector('.popup__form');
const nameInput = popupElementProfile.querySelector('.popup__input_type_name');
const jobInput = popupElementProfile.querySelector('.popup__input_type_job');

const nameCardInput = popupElementCard.querySelector('.popup__input_type_name');
const linkInput = popupElementCard.querySelector('.popup__input_type_job');
const formElementCard = popupElementCard.querySelector('.popup__form');

const nameOutput = document.querySelector('.profile__title');
const jobOutput = document.querySelector('.profile__subtitle');

popupElementPicture.addEventListener('click',closeOverlay);

popupElementCard.addEventListener('click',closeOverlay);

popupElementProfile.addEventListener('click',closeOverlay)



export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
}

export function closePopup(popup) {
  document.removeEventListener('keydown',closeByEsc);
  popup.classList.remove('popup_opened');
}

popupOpenButtonElementProfile.addEventListener('click', function(){
  openPopup(popupElementProfile)
  nameInput.value = nameOutput.textContent; 
  jobInput.value = jobOutput.textContent;
});
popupCloseButtonElementProfile.addEventListener('click', function(){
  closePopup(popupElementProfile)
});
popupOpenButtonElementCard.addEventListener('click', function(){
  nameCardInput.value = ''; 
  linkInput.value = '';
  validators[formElementCard.getAttribute('name')].disableButton(popupSaveButton);
  openPopup(popupElementCard)
  
});
popupCloseButtonElementCard.addEventListener('click', function(){
  closePopup(popupElementCard)
});
popupCloseButtonElementPicture.addEventListener('click',function(){
  closePopup(popupElementPicture)
});



function handleFormSubmitProfile (evt) {
  evt.preventDefault(); 
  nameOutput.textContent = nameInput.value; 
  jobOutput.textContent = jobInput.value; 
  closePopup(popupElementProfile); 
}

function renderCard(element) {
  groupCard.prepend(element);
}
 
initialCards.reverse().forEach(element => {
  const cardItem = new Card(element.name, element.link,'item_template');
  renderCard(cardItem.generateCard());
});

function addCardSubmit (evt) {
  evt.preventDefault();
  const cardItem = new Card(nameCardInput.value, linkInput.value,'item_template');
  renderCard(cardItem.generateCard());
  closePopup(popupElementCard);
}

formElementProfile.addEventListener('submit', handleFormSubmitProfile);
formElementCard.addEventListener('submit', addCardSubmit);

function closeOverlay (evt) { 
  const overlay = document.querySelector('.popup_opened');
  console.log(overlay);
  if (evt.target === overlay) {
   closePopup(overlay); 
  } 
}

export function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup); 
  }
}  

const validators = {};

const validationForms = Array.from(document.querySelectorAll('.popup__form'));
validationForms.forEach((form)=> {
  const formValidator = new FormValidator(validationConfig, form);
  validators[form.getAttribute('name')] = formValidator;
  formValidator.enableValidation();
})
