import { useState, useEffect, useCallback } from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreButton from '../MoreButton/MoreButton';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import { filterMovies, filterShortFilm } from '../../utils/utils';
import Preloader from '../Preloader/Preloader';

function Movies({ loggedIn, savedMoviesUser, onMovieSave, onSaveMovie }) {
  const [isLoading, setIsLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [savedMovieList, setSavedMovieList] = useState([]);
  const [errorSearch, setErrorSearch] = useState('');
  const [statusCheckBox, setStatusCheckBox] = useState(JSON.parse(localStorage.getItem('shortFilmChecked')) || false);
  const [filtredResult, setFiltredResult] = useState([]);
  const [query, setQuery] = useState(localStorage.getItem('textQuery') || '');
  const [initialValue, setInitialValue] = useState(0);

  function findSaveMoviesById(movie, savedMovies) {
    return savedMovies.find((saveMovie) => saveMovie.movieId === movie.id);
  }

  const updatedSearchResults = filtredResult.map((item) => ({ ...item, isSave: findSaveMoviesById(item, savedMovieList) }));

  useEffect(() => {
    const savedFilteredSearchMovies = localStorage.getItem('filtredSearchMovies');
    const storedSavedMovies = localStorage.getItem('savedMoviesLocalStorage');
    setMovieList(JSON.parse(savedFilteredSearchMovies));
    if (savedFilteredSearchMovies) {
      setFiltredResult(JSON.parse(savedFilteredSearchMovies));
    }
    if (storedSavedMovies) {
      setSavedMovieList(JSON.parse(storedSavedMovies));
    }
  }, [setMovieList]);

  function filteringMoviesForSearch(filteredMovies) {
    if (statusCheckBox) {
      const filteredShortMovies = filterShortFilm(filteredMovies, statusCheckBox);
      localStorage.setItem('filtredSearchMovies', JSON.stringify(filteredShortMovies));
      localStorage.setItem('textQuery', query);
      setFiltredResult(filteredShortMovies);
    } else {
      setFiltredResult(filteredMovies);
      localStorage.setItem('filtredSearchMovies', JSON.stringify(filteredMovies));
      localStorage.setItem('textQuery', query);
    }
  }

  function handleSearch() {
    const dataStorageMovies = localStorage.getItem('allMovies');
    if (dataStorageMovies) {
      setMovieList(JSON.parse(dataStorageMovies));
      const filteredMovies = filterMovies(JSON.parse(dataStorageMovies), query);
      filteringMoviesForSearch(filteredMovies);
      setIsLoading(false);
    } else {
      setIsLoading(true);
      mainApi
        .getSavedMoviesList()
        .then((data) => {
          setSavedMovieList(data.movies);
          localStorage.setItem('savedMoviesLocalStorage', JSON.stringify(data.movies));
        })
        .catch((err) => {
          console.log(err);
        });
      moviesApi
        .getMovies()
        .then((res) => {
          setMovieList(res);
          localStorage.setItem('allMovies', JSON.stringify(res));
          const filteredMovies = filterMovies(res, query);
          filteringMoviesForSearch(filteredMovies);
          localStorage.setItem('shortFilmChecked', statusCheckBox);
        })
        .catch((err) => {
          setErrorSearch(
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
          );
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }

  //ошибка при пустом поиске
  useEffect(() => {
    if (localStorage.getItem('textQuery')) {
      if (filtredResult.length === 0) {
        setErrorSearch('По вашему запросу ничего не найдено');
        return;
      } else {
        setErrorSearch('');
      }
    }
  }, [filtredResult]);

  const handleCheckBox = (statusCheckBox) => {
    setStatusCheckBox(statusCheckBox);
    const dataStorageMovies = localStorage.getItem('allMovies');

    if (!dataStorageMovies) {
      return;
    }
    const filteredMovies = filterMovies(JSON.parse(dataStorageMovies), query);

    if (statusCheckBox) {
      const filteredShortMovies = filterShortFilm(filteredMovies, statusCheckBox);
      localStorage.setItem('filtredSearchMovies', JSON.stringify(filteredShortMovies));
      setFiltredResult(filteredShortMovies);
      setStatusCheckBox(true);
      localStorage.setItem('shortFilmChecked', statusCheckBox);
    } else {
      setFiltredResult(filteredMovies);
      localStorage.setItem('filtredSearchMovies', JSON.stringify(filteredMovies));
      setStatusCheckBox(false);
      localStorage.setItem('shortFilmChecked', statusCheckBox);
    }
  };

  //отрисовываю карточки в нужном колличестве
  function displayMovies() {
    const display = window.innerWidth;
    if (display < 658) {
      setInitialValue(5);
    } else if (display <= 1279) {
      setInitialValue(8);
    } else if (display >= 1280) {
      setInitialValue(12);
    }
  }
  //добавить еще карточки
  const handleMoreButtonClick = useCallback(() => {
    const display = window.innerWidth;
    if (display < 659) {
      setInitialValue(initialValue + 2);
    } else if (display <= 1279) {
      setInitialValue(initialValue + 2);
    } else if (display >= 1280) {
      setInitialValue(initialValue + 3);
    }
  }, [initialValue]);

  useEffect(() => {
    displayMovies();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener('resize', displayMovies);
    }, 500);
    return () => {
      window.removeEventListener('resize', displayMovies);
    };
  });

  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className='movies-page'>
        <SearchForm
          handleSearch={handleSearch}
          query={query}
          setQuery={setQuery}
          setErrorSearch={setErrorSearch}
          statusCheckBox={statusCheckBox}
          setStatusCheckBox={setStatusCheckBox}
          onCheckboxChange={handleCheckBox}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            moviesList={updatedSearchResults.slice(0, initialValue)}
            savedMoviesUser={savedMoviesUser}
            onMovieSave={onMovieSave}
            onSaveMovie={onSaveMovie}
            errorSearch={errorSearch}
            setSavedMovies={setSavedMovieList}
            savedMovies={savedMovieList}
          />
        )}
        {initialValue < filtredResult.length && (
          <MoreButton initialValue={initialValue} setInitialValue={setInitialValue} handleMoreButtonClick={handleMoreButtonClick} />
        )}
      </section>
      <Footer loggedIn={loggedIn} />
    </>
  );
}
export default Movies;
