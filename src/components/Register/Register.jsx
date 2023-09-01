import './Register.css';
import { Link } from 'react-router-dom';
import React from 'react';

function Register() {
  return (
    <section className="register">
      <Link to="/" className="header__logo" />
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="form" >
        <fieldset className="form__container">
          <div className="form__input-container">
            <label className="form__label" htmlFor="name-input">Имя</label>
            <input
              id="name-input"
              className="form__input form__input_info_name"
              type="text"
              name="name"
              placeholder="Имя пользователя"
              required
              minLength="3"
              maxLength="20"
            />
            {/* <span id="name-input-error"className="register__error register__error_visible">Текст</span> */}
          </div>

          <div className="form__input-container">
            <label className="form__label" htmlFor="email-input">E-mail</label>
            <input
              id="email-input"
              className="form__input form__input_info_email"
              type="email"
              name="email"
              placeholder="E-mail"
              required
              minLength="3"
              maxLength="40"
               />
            {/* <span id="email-input-error"className="register__error register__error_visible">Текст</span> */}
          </div>

          <div className="form__input-container">
            <label className="form__label" htmlFor="password-input">Пароль</label>
            <input
              id="password-input"
              className="form__input form__input_info_password"
              type="password"
              name="password"
              placeholder="Пароль"
              required
              minLength="8"
              maxLength="16"
              />
            {/* <span id="password-input-error"className="register__error register__error_visible">Текст</span> */}
          </div>
        </fieldset>

        <button className= "register__button" type="submit" >
          Зарегистрироваться
        </button>
        <div className="form__link-container">
          <p className="form__question">Уже зарегистрированы?</p>
          <Link to="/signin" className="register__link">Войти</Link>
        </div>
      </form>
    </section>
  )
}

export default Register;