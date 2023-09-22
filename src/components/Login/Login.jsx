import '../Login/Login.css';
import { Link } from 'react-router-dom';
import { React, useState} from 'react';
import { useFormValidation } from '../../hooks/useFormValidation';
import { InputValidation } from '../../utils/validation';

function Login({ handleLogin, isSuccess, status:{message} }) {
  const { values, handleChange, errors, isValid } = useFormValidation();
  const [isInputActive, setIsInputActive] = useState(true);
  const isDisabled = !isValid;

 

  function handleSubmit(event) {
    event.preventDefault();
    handleLogin({
      email: values.email,
      password: values.password
    });
    setIsInputActive(false);
  }
  
  return (
    <section className="login">
      <Link to="/" className="login__logo" />
      <h2 className="login__title">Рады видеть!</h2>
      <form className="form" noValidate>
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
              pattern='^[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}$'
              value={values.email || ''}
              onChange={handleChange}
            />
          <span id="email-error" className={`login__error ${errors.email && 'login__error_visible'}`}>
            {errors.email}
          </span>
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
              minLength="6"
              maxLength="16"
              value={values.password || ''}
              onChange={handleChange}
            />
            <span id="password-error" className={`login__error ${errors.password && 'login__error_visible'}`}>
            {errors.password}
          </span>
          </div>
        </fieldset>
        <span className= {`login__server-status ${setIsInputActive? "login__server-status_visible" : ""}`}>{message}</span>
        <button className={`login__button ${isDisabled && "login__button_disabled"}`} type="button" onClick={handleSubmit}>Войти</button>
        <div className="form__link-container">
          <p className="form__question">Ещё не зарегистрированы?</p>
          <Link to="/signup" className="login__link">Регистрация</Link>
        </div>
      </form>

    </section>
  )
}

export default Login;