import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({ loggedIn }) {
  return (
      <header className="header">
        <div className="header__container">
          <Link to="/" className="header__logo" />
          <Navigation loggedIn={loggedIn}/>
        </div>
      </header>
  );
}
export default Header;
