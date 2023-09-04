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
          <NavLink className="navigation__registr" to="/signup">Регистрация</NavLink>
          <NavLink className="navigation__login" to="/signin">Войти</NavLink>
        </div>
      ) : (
        <>
          <nav className="navigation__movies navigation__movies_type_desktop">
            <NavLink  className={({ isActive}) => isActive ? "navigation__movies-link_active" : "navigation__movies-link"
  } to="/movies">Фильмы</NavLink>

            <NavLink className={({ isActive}) =>
    isActive ? "navigation__saved-movies-link_active" : "navigation__saved-movies-link"
  } to="/saved-movies">Сохранённые фильмы</NavLink>
          </nav>


          <div className="navigation__profile navigation__profile_type_desktop">
            <Link to="/profile" className="navigation__profile-link"><span className="navigation__profile-icon"></span></Link>
          </div>
          <button className="navigation__menu-icon" onClick={handleMenuOpen} type="button"></button>
        </>
      )}

      <nav className={`mobile-menu ${isMenuOpen ? "mobile-menu_opened" : ""}`}>
        <div className="mobile-container">
          <nav className="mobile-navigation">
            <NavLink to="/" className={({ isActive}) => isActive ? "menu-link_active" : "menu-link"
  } onClick={handleMenuClose}>Главная</NavLink>
            <NavLink to="/movies" className={({ isActive}) => isActive ? "menu-link_active" : "menu-link"
  } onClick={handleMenuClose}>Фильмы</NavLink>
            <NavLink to="/saved-movies" className={({ isActive}) => isActive ? "menu-link_active" : "menu-link"
  } onClick={handleMenuClose}>Сохранённые фильмы</NavLink>
          </nav>
          <Link to="/profile" className="mobile-container__profile-link"><span className="mobile-container__profile-icon" onClick={handleMenuClose}></span></Link>
        </div>
        <button className="btn-close" onClick={handleMenuClose}></button>
      </nav>
    </nav>
  );
}