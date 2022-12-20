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
// ������� ���� ����� � DOM
let nameInput = popupElement.querySelector('.popup__field_name');
let jobInput = popupElement.querySelector('.popup__field_job');
let nameOutput = document.querySelector('.profile__title');
let jobOutput = document.querySelector('.profile__subtitle');

// ���������� ��������� �����, ���� ����
// ��� ������ ������������ �� �����
function handleFormSubmit (evt) {
    evt.preventDefault(); // ��� ������� �������� ����������� �������� �����.
                                                // ��� �� ����� ���������� ���� ������ ��������.
                                                // � ���, ��� ��� ������, ��������� �����.

    // �������� �������� ����� jobInput � nameInput �� �������� value
   
    nameOutput.textContent = nameInput.value;
    jobOutput.textContent = jobInput.value;
    // �������� ��������, ���� ������ ���� ��������� �������� �����

    // �������� ����� �������� � ������� textContent
}

// ����������� ���������� � �����:
const popupSaveButtonElement = popupElement.querySelector('.popup__button');

popupSaveButtonElement.addEventListener('click', handleFormSubmit)
popupSaveButtonElement.addEventListener('click', closePopup)

// �� ����� ������� �� �������� �submit� - ���������
formElement.addEventListener('submit', handleFormSubmit); 

