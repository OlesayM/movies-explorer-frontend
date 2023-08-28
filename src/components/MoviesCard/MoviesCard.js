import './MoviesCard.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Film from '../../images/design33.jpg';

function MoviesCard() {
  const location = useLocation();
  const locationMovies = location.pathname === '/saved-movies';
  console.log(locationMovies);
  const [isSaved, setIsSaved] = useState(false);
  // const [isDisabled, setIsDisabled] = useState(true);

  return (
    <>
      <li className="card-movie">
          <button
            className={`card-movie__save-btn  ${!isSaved ? 'card-movie__save-btn_type_active' : ''} ${locationMovies ? 'card-movie__delete-btn' : ''}`}
            >Сохранить
          </button>
        <img src={Film} alt="постер" className="card-movie__img" />
        <div className="card-movie__container">
          <h2 className="card-movie__name">33 слова о дизайне</h2>
          <span className="card-movie__duration">1ч 17м</span>
        </div>
      </li>
    </>
  );
}

export default MoviesCard;
