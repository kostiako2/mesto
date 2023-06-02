
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

_hasInvalidInput = (validationElements) => {
    return validationElements.some(item => !item.validity.valid)

  }


_enableButton = (button) => {
    button.classList.remove(this._validationSettings.inactiveButtonClass);
    button.removeAttribute("disabled", true);
  }

disableButton = (button) => {
  button.classList.add(this._validationSettings.inactiveButtonClass);
  button.setAttribute("disabled", true);
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
    this.inputElements = Array.from(this._formElement.querySelectorAll(this._validationSettings.inputSelector));
    this.formButton = this._formElement.querySelector(this._validationSettings.submitButtonSelector); 
    this.disableButton(this.formButton);    
    this.inputElements.forEach(input => {
        input.addEventListener('input', () => {
          this._checkInputValidaty(input);
        if (this._hasInvalidInput(this.inputElements)){
          this.disableButton(this.formButton); 
        }else {
          this._enableButton(this.formButton);
        }
        })
    })


}
   
enableValidation = () => {
  this._setEventListeners();
}
}



