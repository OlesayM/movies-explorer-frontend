import '../Login/Login.css';
import { Link } from 'react-router-dom';
import React from 'react';

function Login() {
  
  return (
    <section className="login">
      <Link to="/" className="header__logo" />
      <h2 className="login__title">Рады видеть!</h2>
      <form className="form">
        <fieldset className="form__container">
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
          {/* <span id="email-input-error"className="login__error login__error_visible">Текст</span> */}
         
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
              minlength="8"
              maxlength="16"
            />
            {/* <span id="password-input-error"className="login__error login__error_visible">Текст</span> */}
          </div>
        </fieldset>

        <button className= "login__button" type="submit"  >Войти</button>
        <div className="form__link-container">
          <p className="form__question">Ещё не зарегистрированы?</p>
          <Link to="signup" className="login__link">Регистрация</Link>
        </div>
      </form>

    </section>
  )
}

export default Login;