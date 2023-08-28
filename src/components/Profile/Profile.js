import React from 'react';
import { useState } from 'react';
import './Profile.css';
import Header from '../Header/Header';

function Profile({ loggedIn,isSuccess }) {
    const [isInputActive, setIsInputActive] = useState(true);
    const [isInfoChanged, setIsInfoChanged] = useState(true);
    
    const isDisabled = !isSuccess;
    return (
  <>
  <Header loggedIn={loggedIn}/>
      <section className="profile">
        <h1 className="profile__greeting">Привет, ИМЯ!</h1>
        <form className="profile__form">
  
          <label className="profile__label">
            <span className="profile__label-text">Имя</span>
            <input
              className="profile__input"
              type="text"
              id="name"
              name="name"
              placeholder="Имя"
              disabled={!isInputActive}
            />
          </label>
          {/* <span id="name-input-error"className= " profile__error profile__error_visible"> Текст </span> */}
          <label className="profile__label">
            <span className="profile__label-text">E-mail</span>
            <input
              className="profile__input"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              disabled={!isInputActive}
            />
          </label> 
          {/* <span id="email-input-error"className= " profile__error profile__error_visible">Текст</span> */}
         
          {!isInfoChanged
            ?
            <>
            <button
              className="profile__form_edit-button"
              type="button">
              Редактировать
            </button>
            <button type="button" className="profile__form_exit-button">Выйти из аккаунта</button>
            </> 
            : <>
            {/* <span className= " profile__message profile__message_visible"> При обновлении профиля произошла ошибка </span> */}
              <button
                className={`profile__form_save-button ${isDisabled && "profile__form_save-button_disabled"}`}
                type="submit"
                >
                Сохранить
              </button></>
          }
  
        </form>
        
      </section >
      </>
    );
}

export default Profile;