const popupOpenButtonElement = document.querySelector('.profile__button-border') ;
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button')



const openPopup = function() {
    popupElement.classList.add('popup_opened')
}

const closePopup = function() {
    popupElement.classList.remove('popup_opened')
}

popupOpenButtonElement.addEventListener('click', openPopup)
popupCloseButtonElement.addEventListener('click', closePopup)


let formElement = popupElement.querySelector('.popup__form');
// Находим поля формы в DOM
let nameInput = popupElement.querySelector('.popup__input_type_name');
let jobInput = popupElement.querySelector('.popup__input_type_job');
let nameOutput = document.querySelector('.profile__title');
let jobOutput = document.querySelector('.profile__subtitle');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
   
    nameOutput.textContent = nameInput.value;
    jobOutput.textContent = jobInput.value;
    closePopup();
    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:



// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit); 

