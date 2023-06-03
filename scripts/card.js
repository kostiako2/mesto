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
        this._cardElementLike.classList.toggle('group__like_active');
    }
  
   
  
    _createCard () {
        this._cardElement = this._getCard();
        this._cardElementTitle =  this._cardElement.querySelector('.group__title');
        this._cardElementPhoto = this._cardElement.querySelector('.group__photo');
        this._cardElementLike = this._cardElement.querySelector('.group__like');
        this._cardElementTrash = this._cardElement.querySelector('.group__trash');
        this._cardElementButton = this._cardElement.querySelector('.group__button');
        this._cardElementPhoto.alt = this._name;
        this._cardElementPhoto.src = this._link;
        this._cardElementTitle.textContent = this._name;
        this._setEventListeners();
    }
  
    _setEventListeners() {
      this._cardElementTrash.addEventListener('click', this._deleteCard) ;
      this._cardElementLike.addEventListener('click', this._likeCard);
      this._cardElementButton.addEventListener('click', () => {
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
  
