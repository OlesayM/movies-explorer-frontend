import './Register.css';
import { Link } from 'react-router-dom';
import {React, useState} from 'react';

function Register({handleRegistration}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    handleRegistration({
      name: name,
      email: email,
      password: password,
    });
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }
  return (
    <section className="register">
      <Link to="/" className="register__logo" />
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="form" onSubmit={handleSubmit} >
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
              value={name || ''}
              onChange={handleChangeName}
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
              value={email || ''}
              onChange={handleChangeEmail}
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
              maxLength="8"
              value={password || ''}
              onChange={handleChangePassword}
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