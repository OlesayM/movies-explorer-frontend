import './Register.css';
import { Link } from 'react-router-dom';
import { React, useState } from 'react';
import { useFormValidation } from '../../hooks/useFormValidation';

function Register({ handleRegistration, isSuccess, status: { message } }) {
  const { values, handleChange, errors, isValid } = useFormValidation();


  const isDisabled = !isValid;
  const [isInputActive, setIsInputActive] = useState(true);

    function handleSubmit(event) {
    event.preventDefault();
    handleRegistration({
      name: values.name,
      email: values.email,
      password: values.password,
    });
    setIsInputActive(false);
  }

  return (
    <section className="register">
      <Link to="/" className="register__logo" />
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="form"  noValidate>
        <fieldset className="form__container">
          <div className="form__input-container">
            <label className="form__label" htmlFor="name-input">
              Имя
            </label>
            <input
              id="name-input"
              className="form__input form__input_info_name"
              type="text"
              name="name"
              placeholder="Имя пользователя"
              required
              minLength="2"
              maxLength="30"
              pattern="^[A-Za-zА-Яа-я\s]{2,30}$"
              value={values.name || ''}
              onChange={handleChange}
            />
              <span id="name-error" className={`register__error ${errors.name && 'register__error_visible'}`}>
            {errors.name}
          </span>
          </div>

          <div className="form__input-container">
            <label className="form__label" htmlFor="email-input">
              E-mail
            </label>
            <input
              id="email-input"
              className="form__input form__input_info_email"
              type="email"
              name="email"
              placeholder="E-mail"
              required
              pattern='^[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}$'
              value={values.email || ''}
              onChange={handleChange}
            />
            <span id="name-error" className={`register__error ${errors.email && 'register__error_visible'}`}>
            {errors.email}
          </span>
          </div>

          <div className="form__input-container">
            <label className="form__label" htmlFor="password-input">
              Пароль
            </label>
            <input
              id="password-input"
              className="form__input form__input_info_password"
              type="password"
              name="password"
              placeholder="Пароль"
              required
              minLength="6"
              maxLength="16"
              value={values.password || ''}
              onChange={handleChange}
            />
            <span
              id="password-error"
              className={`register__error ${
                errors.password && 'register__error_visible'
              }`}
            >
              {errors.password}
            </span>
          </div>
        </fieldset>
        <span id="name-error" className={`register__error ${errors.password && 'register__error_visible'}`}>
            {errors.passwor}
          </span>
        <button
          className={`register__button ${
            isDisabled && 'register__button_disabled'
          }`}
          type="button"
          onClick={handleSubmit}
        >
          Зарегистрироваться
        </button>
        <div className="form__link-container">
          <p className="form__question">Уже зарегистрированы?</p>
          <Link to="/signin" className="register__link">
            Войти
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Register;
