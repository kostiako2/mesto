const popupOpenButtonElementProfile = document.querySelector('.profile__button-border') ;
const popupOpenButtonElementCard = document.querySelector('.profile__add-button-border');
const popupElementProfile = document.querySelector('.popup_profile');
const popupElementCard = document.querySelector('.popup_card');
const popupElementPicture = document.querySelector('.popup_picture')
const popupCloseButtonElementProfile = popupElementProfile.querySelector('.popup__close-button');
const popupCloseButtonElementCard = popupElementCard.querySelector(".popup__close-button");

const itemTemplate = document.querySelector('.item_template').content.querySelector('.group__card');
console.log(itemTemplate);
const groupCard = document.querySelector(".group");

const popupOpenButtonElementPicture = itemTemplate.querySelector(".group__button");

const popupPhoto = popupElementPicture.querySelector('.popup__photo-picture');
const popupTitlePicture = popupElementPicture.querySelector('.popup__title-picture');
const popupCloseButtonElementPicture = popupElementPicture.querySelector(".popup__close-button");

const formElementProfile = popupElementProfile.querySelector('.popup__form');
const nameInput = popupElementProfile.querySelector('.popup__input_type_name');
const jobInput = popupElementProfile.querySelector('.popup__input_type_job');

const nameCardInput = popupElementCard.querySelector('.popup__input_type_name');
const linkInput = popupElementCard.querySelector('.popup__input_type_job');
const formElementCard = popupElementCard.querySelector('.popup__form');

const nameOutput = document.querySelector('.profile__title');
const jobOutput = document.querySelector('.profile__subtitle');

function openPopup(popup) {
  popup.classList.add('popup_opened')
  closeOverlay(popup);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened')
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

function addCard (name,link) {
  const htmlElement = itemTemplate.cloneNode(true);
  const like = htmlElement.querySelector(".group__like");
  const deleteTrash = htmlElement.querySelector(".group__trash");
  const popupOpenButtonElementPicture = htmlElement.querySelector(".group__button");

  htmlElement.querySelector(".group__title").textContent = name;
  const photo = htmlElement.querySelector(".group__photo");
  photo.src = link;
  photo.alt = name;
  

  function toggleLike () {
    like.classList.toggle('group__like_active');
  }
  like.addEventListener('click', toggleLike);

  function removeCard () {
    htmlElement.remove();
  }
  deleteTrash.addEventListener('click', removeCard);
  
  popupOpenButtonElementPicture.addEventListener('click', function(){
    openPopup(popupElementPicture)
    popupTitlePicture.textContent = name;
    popupPhoto.src = link;
    photo.alt = name;
  });
  
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
  closePopup(popupElementCard);
}

formElementProfile.addEventListener('submit', handleFormSubmitProfile);
formElementCard.addEventListener('submit', addCardSubmit);

function closeOverlay (popup) {
  const overlay = document.querySelector('.popup_opened');
  overlay.addEventListener('click', (evt) => {
  if (evt.target === overlay) {
    closePopup(popup);
  }
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      closePopup(popup);
    }
  });
  })
};