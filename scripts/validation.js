
export class FormValidator {
  constructor(validationSettings,formElement){
      this._formElement = formElement;
      this._validationSettings = validationSettings;
  }
  

  _checkInputValidaty = (input) => {
    if (input.checkValidity()) {
      this._hideError(input);
    }else {
      this._showError(input);
    }
  }

_hasInvalidInput = () => {
    return this._inputElements.some(item => !item.validity.valid)

  }


_enableButton = () => {
    this._formButton.classList.remove(this._validationSettings.inactiveButtonClass);
    this._formButton.removeAttribute("disabled", true);
  }

disableButton = () => {
  this._formButton.classList.add(this._validationSettings.inactiveButtonClass);
  this._formButton.setAttribute("disabled", true);
  }


_showError = (input) => {
    const currentInputErrorContainer = this._formElement.querySelector(`#${input.id}-error`);
    input.classList.add(this._validationSettings.inputErrorClass);
    currentInputErrorContainer.classList.add(this._validationSettings.errorClass);
    currentInputErrorContainer.textContent = input.validationMessage;
   }
  
_hideError = (input) => {
    const currentInputErrorContainer = this._formElement.querySelector(`#${input.id}-error`);
    input.classList.remove(this._validationSettings.inputErrorClass);
    currentInputErrorContainer.textContent ='';
  }
  


_setEventListeners(){
    this._inputElements = Array.from(this._formElement.querySelectorAll(this._validationSettings.inputSelector));
    this._formButton = this._formElement.querySelector(this._validationSettings.submitButtonSelector); 
    console.log(this._formButton);
    this.disableButton();    
    this._inputElements.forEach(input => {
        input.addEventListener('input', () => {
          this._checkInputValidaty(input);
        if (this._hasInvalidInput()){
          this.disableButton(); 
        }else {
          this._enableButton();
        }
        })
    })


}
   
enableValidation = () => {
  this._setEventListeners();
}
}



