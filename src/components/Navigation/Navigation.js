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

      <nav className={`navigation__mobile-menu ${isMenuOpen ? "navigation__mobile-menu_opened" : ""}`}>
        <div className="navigation__mobile-container">
          <nav className="navigation__mobile-link">
            <NavLink to="/" className={({ isActive}) => isActive ? "navigation__menu-link_active" : "navigation__menu-link"
  } onClick={handleMenuClose}>Главная</NavLink>
            <NavLink to="/movies" className={({ isActive}) => isActive ? "navigation__menu-link_active" : "navigation__menu-link"
  } onClick={handleMenuClose}>Фильмы</NavLink>
            <NavLink to="/saved-movies" className={({ isActive}) => isActive ? "navigation__menu-link_active" : "navigation__menu-link"
  } onClick={handleMenuClose}>Сохранённые фильмы</NavLink>
          </nav>
          <Link to="/profile" className="navigation__profile-link"><span className="navigation__profile-icon" onClick={handleMenuClose}></span></Link>
        </div>
        <button className="navigation__menu-close" onClick={handleMenuClose}></button>
      </nav>
    </nav>
  );
}