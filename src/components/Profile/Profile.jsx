import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import Header from '../Header/Header';
import { useFormValidation } from '../../hooks/useFormValidation';
import { InputValidation } from '../../utils/validation';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile( {loggedIn, logout, onUpdateProfile, isSuccess, isSuccessRequest, status:{message}}) {
    
    const currentUser = useContext(CurrentUserContext);
    const { values, handleChange, setValues, isValid,  errors} = useFormValidation();
    const initialValues = {
      name: currentUser.name || "",
      email: currentUser.email || "",
    };
    const isFormChanged = values.name !== initialValues.name || values.email !== initialValues.email;
    const [isInputActive, setIsInputActive] = useState(false);
    const isDisabled = !isValid || !isFormChanged;

   useEffect(() => {
      if (currentUser) {
        setValues({
          name: currentUser.name,
          email: currentUser.email
        })
      }
      }, [currentUser, setValues])


//сохранить результаты редактирования
    function handleSubmit(event) {
      event.preventDefault();
      setIsInputActive(false);
      onUpdateProfile({name: values.name,
        email: values.email});
    }
  //редактирование, разблокировать инпуты
    function handleUpdateProfile(event) {
      event.preventDefault();
      setIsInputActive(true);
      
    }
  


    return (
  <>
  <Header loggedIn={loggedIn}/>
      <section className="profile">
        <h1 className="profile__greeting">Привет,&nbsp;{currentUser.name}!</h1>
        <form className="profile__form" noValidate>
  
          <label className="profile__label">
            <span className="profile__label-text">Имя</span>
            <input
              className="profile__input"
              type="text"
              value={values.name || ''}
              id="name"
              name="name"
              onChange={handleChange}
              placeholder="Имя"
              required
              minLength="2"
              maxLength="30"
              pattern="^[A-Za-zА-Яа-я\s]{2,30}$"
              disabled={!isInputActive}
            />
          </label>
          <span id="name-error" className={`profile__error ${errors.name && 'profile__error_visible'}`}>
            {errors.name}
          </span>
          <label className="profile__label">
            <span className="profile__label-text">E-mail</span>
            <input
              className="profile__input"
              type="email"
              value={values.email || ''}
              id="email"
              name="email"
              pattern='^[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}$'
              onChange={handleChange}
              placeholder="Email"
              disabled={!isInputActive}
            />
          </label> 
          <span id="email-error" className={`profile__error ${errors.email && 'profile__error_visible'}`}>
            {errors.email}
          </span>
        <span className= {`profile__server-status ${setIsInputActive? "profile__server-status_visible" : ""}`}>{message}</span> 
          {!isInputActive
            ?
            <>
            <button
              className="profile__edit-button"
              type="button" onClick={handleUpdateProfile}>
              Редактировать
              
            </button>
            <Link to="/" className="profile__link-exit" onClick={logout} >Выйти из аккаунта</Link>
            </> 
            : <>
  
              <button
              // className="profile__save-button"
                className={`profile__save-button ${isDisabled && "profile__save-button_disabled"}`}
                type="button"
                onClick={handleSubmit}
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