import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({ loggedIn }) {
  const endpoints = ['/', '/profile', '/movies', '/saved-movies'];
  return (
    <NavLink path={endpoints}>
      <header className="header">
        <div className="header__container">
          <Link to="/" className="header__logo" />
          <Navigation loggedIn={loggedIn}/>
        </div>
      </header>
    </NavLink>
  );
}
export default Header;
