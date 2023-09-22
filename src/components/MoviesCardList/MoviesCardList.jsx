import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import React from 'react';

function MoviesCardList({moviesList, onSaveMovie, errorSearch, deleteMovie, setMovieList, setSavedMovies,savedMovies}) {

  return (
    <section className="movies">
              <span
          className={`movies__error ${
            errorSearch ? 'movies__error_active' : ''
          }`}
        >
          {errorSearch}
        </span>
      <ul className="movies__list movies__list_type_saved">
        {moviesList.map((movie) => (
          <MoviesCard  
          key={movie.id || movie._id}
          card={movie}
          onSaveMovie={onSaveMovie}
          onDeleteMovie={deleteMovie}
          setMovieList={setMovieList}
          setSavedMovies={setSavedMovies}
          savedMovies={savedMovies}
          />
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
