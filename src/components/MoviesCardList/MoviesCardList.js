import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import React from 'react';
import MoreButton from '../MoreButton/MoreButton';

function MoviesCardList() {
  return (
    <section className="movies">
      <ul className="movies__list movies__list_type_saved">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </ul>
    <MoreButton />
    </section>
  );
}

export default MoviesCardList;
