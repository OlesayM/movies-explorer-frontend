// import './Navigation.css';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

// function Navigation(loggedIn) {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   function handleMenuOpen() {
//     setIsMenuOpen(true);
//   }

//   function handleMenuClose() {
//     setIsMenuOpen(false);
//   }

//   return (
//     <div className="navigation">
//       {loggedIn ?
//         (<>
//           <button className="button button-burger" onClick={handleMenuOpen}></button>
//           <nav className={`navigation__container-menu ${isMenuOpen ? "navigation__container-menu_opened" : ""}`} onClick={handleMenuClose}>
//             <ul className="navigation__container navigation__container_type_logged-in" onClick={e => { e.stopPropagation() }}>
//               <div className="navigation__box">
//                 <li>
//                   <NavLink
//                     exact to="/"
//                     className="link link_type_logged-in hover-link"
//                     onClick={handleMenuClose}>
//                     Главная
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     to="/movies"
//                     className="link link_type_logged-in hover-link"
//                     activeClassName="link_active"
//                     onClick={handleMenuClose}>
//                     Фильмы
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     to="/saved-movies"
//                     className="link link_type_logged-in hover-link"
//                     activeClassName="link_active"
//                     onClick={handleMenuClose}>
//                     Сохранённые фильмы
//                   </NavLink>
//                 </li>
//               </div>
//               <li>
//                 <Link to="/profile" className="link link_type_account hover-link" onClick={handleMenuClose}>
//                   <p className="navigation__account">Аккаунт</p>
//                   <div className="navigation__account-icon"></div>
//                 </Link>
//               </li>
//             </ul>
//             <button className="button button-close-menu hover-link" onClick={handleMenuClose}></button>
//           </nav>
//         </>
//         ) : (
//           <>
//             <ul className="navigation__container">
//               <li>
//                 <Link to='/signup' className="link link_type_main hover-link">Регистрация</Link>
//               </li>
//               <li>
//                 <Link to='/signin' className="link">
//                   <button className="button button_type_header hover-button" >Войти</button>
//                 </Link>
//               </li>
//             </ul>
//           </>
//         )}
//     </div>
//   )
// }

// export default Navigation;
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
          <Link className="navigation__registr hover-link" to="/signup">Регистрация</Link>
          <Link className="navigation__login hover-link" to="/signin">Войти</Link>
        </div>
      ) : (
        <>
          <div className="navigation__movies navigation-desktop">
            <Link className="navigation__movies-link hover-link" to="/movies">Фильмы</Link>
            <Link className="navigation__saved-movies-link hover-link" to="/saved-movies">Сохранённые фильмы</Link>
          </div>
          <div className="navigation__profile navigation-desktop">
            <Link to="/profile" className="navigation__profile-link hover-link"><span className="navigation__profile-icon"></span></Link>
          </div>
          <button className="navigation__menu-icon" onClick={handleMenuOpen} type="button"></button>
        </>
      )}

      <nav className={`navigation__mobile-menu ${isMenuOpen ? "navigation__mobile-menu_opened" : ""}`}>
        <div className="navigation__mobile-container">
          <nav className="navigation__mobile-link">
            <NavLink exact to="/" className="menu_link hover-link" onClick={handleMenuClose}>Главная</NavLink>
            <NavLink to="/movies" className="menu_link hover-link" onClick={handleMenuClose}>Фильмы</NavLink>
            <NavLink to="/saved-movies" className="menu_link hover-link" onClick={handleMenuClose}>Сохранённые фильмы</NavLink>
          </nav>
          <Link to="/profile" className="navigation__profile-link hover-link"><span className="navigation__profile-icon" onClick={handleMenuClose}></span></Link>
        </div>
        <button className="navigation__menu-close hover-link" onClick={handleMenuClose}></button>
      </nav>
    </nav>
  );
}