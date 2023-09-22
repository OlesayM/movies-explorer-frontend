import './MoviesCard.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { convertDuration } from '../../utils/utils';
import mainApi from '../../utils/MainApi';

function MoviesCard({ card, onDeleteMovie, setSavedMovies, savedMovies }) {
  const location = useLocation();
  const locationMovies = location.pathname === '/saved-movies';
  const [isSaved, setIsSaved] = useState(card.isSave);
  const imageUrl = card.image.url ? `https://api.nomoreparties.co/${card.image.url}` : card.image;

  //меняю кнопки
  function handleButtonClick() {
    if (!locationMovies) {
      if (isSaved) {
        handleDeleteMovie(card);
      } else {
        handleSaveMovie(card);
      }
    } else {
      onDeleteMovie(card._id);
    }
  }
  //сохраняю
  function handleSaveMovie(movie) {
    setIsSaved(false);
    return mainApi
      .saveMovie({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co/${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      })
      .then((res) => {
        setIsSaved(true);
        setSavedMovies([res, ...savedMovies]);
        localStorage.setItem('savedMoviesLocalStorage', JSON.stringify([res, ...savedMovies]));
      })
      .catch((err) => {
        setIsSaved(false);
        console.error(err);
      });
  }

  //удаляю
  function handleDeleteMovie(movie) {
    setIsSaved(true);
    const findMovie = savedMovies.find((i) => i.movieId === movie.id);
    const movieId = findMovie._id;

    mainApi
      .deleteMovie(movieId)
      .then((res) => {
        setIsSaved(false);
        setSavedMovies((state) => state.filter((c) => c._id !== movieId));
        localStorage.setItem('savedMoviesLocalStorage', JSON.stringify(savedMovies.filter((item) => item._id !== movieId)));
      })
      .catch((err) => {
        setIsSaved(true);
        console.log(err);
      });
  }

  return (
    <>
      <section className='card-movie'>
        <button
          className={`card-movie__save-btn  ${isSaved ? 'card-movie__save-btn_type_active' : ''} ${
            locationMovies ? 'card-movie__delete-btn' : ''
          }`}
          onClick={handleButtonClick}
        ></button>
        <a href={card.trailerLink} target='_blank' rel='noreferrer'>
          <img src={imageUrl} alt={card.nameRU} className='card-movie__img' />
        </a>
        <div className='card-movie__container'>
          <h2 className='card-movie__name'>{card.nameRU}</h2>
          <span className='card-movie__duration'>{convertDuration(card.duration)}</span>
        </div>
      </section>
    </>
  );
}

export default MoviesCard;
