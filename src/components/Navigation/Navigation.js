import { React, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation({ loggedIn }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuOpen() {
    setIsMenuOpen(true);
  }

  function handleMenuClose() {
    setIsMenuOpen(false);
  }

  return (
    <nav className="navigation">
      {!loggedIn ? (
        <div className="navigation__auth">
          <Link className="navigation__registr" to="/signup">Регистрация</Link>
          <Link className="navigation__login" to="/signin">Войти</Link>
        </div>
      ) : (
        <>
          <div className="navigation__movies navigation__movies_type_desktop">
            <Link className="navigation__movies-link" to="/movies">Фильмы</Link>
            <Link className="navigation__saved-movies-link" to="/saved-movies">Сохранённые фильмы</Link>
          </div>
          <div className="navigation__profile navigation-desktop">
            <Link to="/profile" className="navigation__profile-link"><span className="navigation__profile-icon"></span></Link>
          </div>
          <button className="navigation__menu-icon" onClick={handleMenuOpen} type="button"></button>
        </>
      )}

      <nav className={`navigation__mobile-menu ${isMenuOpen ? "navigation__mobile-menu_opened" : ""}`}>
        <div className="navigation__mobile-container">
          <nav className="navigation__mobile-link">
            <NavLink exact to="/" className="menu_link" onClick={handleMenuClose}>Главная</NavLink>
            <NavLink to="/movies" className="menu_link" onClick={handleMenuClose}>Фильмы</NavLink>
            <NavLink to="/saved-movies" className="menu_link" onClick={handleMenuClose}>Сохранённые фильмы</NavLink>
          </nav>
          <Link to="/profile" className="navigation__profile-link"><span className="navigation__profile-icon" onClick={handleMenuClose}></span></Link>
        </div>
        <button className="navigation__menu-close" onClick={handleMenuClose}></button>
      </nav>
    </nav>
  );
}