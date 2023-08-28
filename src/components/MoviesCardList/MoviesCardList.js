import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
import React from 'react';

function MoviesCardList(props) {
  const location = useLocation();
  const locationMovies = location.pathname === '/movies';
  const moviesSaved = props.onMovieSearch ? props.foundMoviesInSavedMovies : props.movies;

  const windowWidth = () => { return window.innerWidth };
  const [size, setSize] = React.useState(windowWidth());

  const [numberOfCards, setNumberOfCards] = React.useState(0);
  const [showMoreCards, setShowMoreCards] = React.useState(0);
  const [moviesToRender, setMoviesToRender] = React.useState([]);

  

  return (
    <section className="movies">

          <ul className="movies-list movies-list_type_saved">
        <MoviesCard />
          </ul>
          <button className="button button_type_more hover-button">Ещё</button>

    </section>
  )
}

export default MoviesCardList;