
export class FormValidator {
  constructor(obj,element){
      this._element = element;
      this._obj = obj;
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
    button.classList.remove(this._obj.inactiveButtonClass);
    button.removeAttribute("disabled", true);
  }

_disableButton = (button) => {
    button.classList.add(this._obj.inactiveButtonClass);
    button.setAttribute("disabled", true);
  }


_showError = (input) => {
    const currentInputErrorContainer = this._element.querySelector(`#${input.id}-error`);
    input.classList.add(this._obj.inputErrorClass);
    currentInputErrorContainer.classList.add(this._obj.errorClass);
    currentInputErrorContainer.textContent = input.validationMessage;
   }
  
_hideError = (input) => {
    const currentInputErrorContainer = this._element.querySelector(`#${input.id}-error`);
    input.classList.remove(this._obj.inputErrorClass);
    currentInputErrorContainer.textContent ='';
  }
  


_setEventListeners(){
    const inputElements = Array.from(this._element.querySelectorAll(this._obj.inputSelector));
    console.log(inputElements);
    const formButton = this._element.querySelector(this._obj.submitButtonSelector); 
    this._disableButton(formButton);    
    inputElements.forEach(input => {
        input.addEventListener('input', () => {
          this._checkInputValidaty(input);
        if (this._hasInvalidInput(inputElements)){
          this._disableButton(formButton); 
        }else {
          this._enableButton(formButton);
        }
        })
    })


}
   
enableValidation = () => {
  this._setEventListeners();
}
}



