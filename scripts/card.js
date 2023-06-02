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
        this.cardElementLike.classList.toggle('group__like_active');
    }
  
   
  
    _createCard () {
        this._cardElement = this._getCard();
        this.cardElementTitle =  this._cardElement.querySelector('.group__title');
        this.cardElementPhoto = this._cardElement.querySelector('.group__photo');
        this.cardElementLike = this._cardElement.querySelector('.group__like');
        this.cardElementTrash = this._cardElement.querySelector('.group__trash');
        this.cardElementButton = this._cardElement.querySelector('.group__button');
        this.cardElementPhoto.alt = this._name;
        this.cardElementPhoto.src = this._link;
        this.cardElementTitle.textContent = this._name;
        this._setEventListeners();
    }
  
    _setEventListeners() {
      this.cardElementTrash.addEventListener('click', this._deleteCard) ;
      this.cardElementLike.addEventListener('click', this._likeCard);
      this.cardElementButton.addEventListener('click', () => {
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
  
