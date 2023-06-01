import {openPopup,popupElementPicture,popupTitlePicture,popupPhoto} from "./index.js";
export class Card {
    constructor(name,link,templateSelector){
        this._name = name;
        this._link = link;
        this._templateSelector = templateSelector;
    }
  
    _getCard () {
        const cardElement = document
            .querySelector('.item_template')
            .content
            .querySelector('.group__card')
            .cloneNode(true);
        
        return cardElement;
    }
    
    _deleteCard = () => {
        this._cardElement.remove();
    }
  
    _likeCard = () => {
        this._cardElement.querySelector('.group__like').classList.toggle('group__like_active');
    }
  
   
  
    _createCard () {
        this._cardElement = this._getCard();
        this._cardElement.querySelector('.group__title').textContent = this._name;
        this._cardElement.querySelector('.group__photo').alt = this._name;
        this._cardElement.querySelector('.group__photo').src = this._link;
  
        this._setEventListeners();
    }
  
    _setEventListeners() {
      this._cardElement.querySelector('.group__trash').addEventListener('click', this._deleteCard) ;
      this._cardElement.querySelector('.group__like').addEventListener('click', this._likeCard);
      this._cardElement.querySelector('.group__button').addEventListener('click', () => {
            openPopup(popupElementPicture);
            popupTitlePicture.textContent = this._name;
            popupPhoto.src = this._link;
            popupPhoto.alt = this._name;
          });
    } 
  
    generateCard () {
        this._createCard();
        return this._cardElement;
    }
  
  }
  
