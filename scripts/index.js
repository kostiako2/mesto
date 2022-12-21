const popupOpenButtonElement = document.querySelector('.profile__button-border') ;
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button')
let formElement = popupElement.querySelector('.popup__form');
let nameInput = popupElement.querySelector('.popup__input_type_name');
let jobInput = popupElement.querySelector('.popup__input_type_job');
let nameOutput = document.querySelector('.profile__title');
let jobOutput = document.querySelector('.profile__subtitle');


const openPopup = function() {
    popupElement.classList.add('popup_opened')
    nameInput.value = nameOutput.textContent;
    jobInput.value = jobOutput.textContent;
}

const closePopup = function() {
    popupElement.classList.remove('popup_opened')
}

popupOpenButtonElement.addEventListener('click', openPopup)
popupCloseButtonElement.addEventListener('click', closePopup)


function handleFormSubmit (evt) {
    evt.preventDefault(); 
    nameOutput.textContent = nameInput.value;
    jobOutput.textContent = jobInput.value;
    closePopup();
  
}

formElement.addEventListener('submit', handleFormSubmit); 

