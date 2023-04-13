

const validationConfig =  {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }; 
  
  
  


const enableValidation = ({formSelector, ...rest }) => {
    const forms = Array.from(document.querySelectorAll(formSelector));
    forms.forEach(form =>{
      setEventListeners(form,rest);
    })
    }
    

const setEventListeners = (formToValidate,{inputSelector,submitButtonSelector, ...rest }) => {
    const formInputs = Array.from(formToValidate.querySelectorAll(inputSelector));
    const formButton = formToValidate.querySelector(submitButtonSelector);  
    disableButton(formButton, rest);    
    formInputs.forEach(input => {
        input.addEventListener('input', () => {
        checkInputValidaty(input,rest);
        if (hasInvalidInput(formInputs)){
            disableButton(formButton, rest); 
        }else {
            enableButton(formButton, rest);
        }
        })
    })
  }
  
  const checkInputValidaty = (input,rest) => {
    if (input.checkValidity()) {
        hideError(input,rest);
    }else {
        showError(input,rest);
    }
  }
  
 const showError = (input,{inputErrorClass,errorClass, ...rest }) => {
  const currentInputErrorContainer = document.querySelector(`#${input.id}-error`);
  input.classList.add(inputErrorClass);
  currentInputErrorContainer.classList.add(errorClass);
  currentInputErrorContainer.textContent = input.validationMessage;
 }

const hideError = (input,{inputErrorClass, ...rest}) => {
  const currentInputErrorContainer = document.querySelector(`#${input.id}-error`);
  input.classList.remove(inputErrorClass);
  currentInputErrorContainer.textContent ='';
}

  
  const hasInvalidInput = (formInputs) => {
    return formInputs.some(item => !item.validity.valid)

  }
  
  const enableButton = (button,{inactiveButtonClass, ...rest}) => {
    button.classList.remove(inactiveButtonClass);
    button.removeAttribute("disabled", true);
  }
  
  const disableButton = (button,{inactiveButtonClass, ...rest}) => {
    button.classList.add(inactiveButtonClass);
    button.setAttribute("disabled", true);
  }


  enableValidation(validationConfig)