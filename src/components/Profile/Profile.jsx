import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import Header from '../Header/Header';
import { useFormValidation } from '../../hooks/useFormValidation';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile( {loggedIn, logout}) {
    
    const currentUser = useContext(CurrentUserContext);
    const { values, handleChange, setValues, setIsValid, isValid, errors, resetForm } = useFormValidation();
    const [isInfoChanged, setIsInfoChanged] = useState(false);
    const [isInputActive, setIsInputActive] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    
    useEffect(() => {
      setName(currentUser.user.name);
      setEmail(currentUser.user.email);
    }, [currentUser]);


    return (
  <>
  <Header loggedIn={loggedIn}/>
      <section className="profile">
        <h1 className="profile__greeting">Привет,{currentUser.user.name}!</h1>
        <form className="profile__form">
  
          <label className="profile__label">
            <span className="profile__label-text">Имя</span>
            <input
              className="profile__input"
              type="text"
              value={name || ''}
              onChange={handleChange}
              id="name"
              name="name"
              // placeholder="Имя"
              // disabled={isInputActive}
            />
          </label>
          {/* <span id="name-input-error"className= " profile__error profile__error_visible"> Текст </span> */}
          <label className="profile__label">
            <span className="profile__label-text">E-mail</span>
            <input
              className="profile__input"
              type="email"
              value={email || ''}
              onChange={handleChange}
              id="email"
              name="email"
              // placeholder="Email"
              // disabled={!isInputActive}
            />
          </label> 
          {/* <span id="email-input-error"className= " profile__error profile__error_visible">Текст</span> */}
         
          {!isInfoChanged
            ?
            <>
            <button
              className="profile__edit-button"
              type="button">
              Редактировать
            </button>
            <Link to="/" className="profile__link-exit" onClick={logout} >Выйти из аккаунта</Link>
            </> 
            : <>
            {/* <span className= " profile__message profile__message_visible"> При обновлении профиля произошла ошибка </span> */}
              <button
              className="profile__save-button"
                // className={`profile__save-button ${!isDisabled && "profile__save-button_disabled"}`}
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