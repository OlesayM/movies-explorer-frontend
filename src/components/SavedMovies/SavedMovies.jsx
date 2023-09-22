import { useState, useEffect } from 'react';
import mainApi from '../../utils/MainApi';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import Preloader from '../Preloader/Preloader';
import { filterMovies, filterShortFilm } from '../../utils/utils';

export default function SavedMovies({ loggedIn, onSaveMovie,}) {
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusCheckBox, setStatusCheckBox] = useState(false);
  const [errorSearch, setErrorSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    mainApi
      .getSavedMoviesList()
      .then((data) => {
        setSavedMovies(data.movies);
        localStorage.setItem('savedMoviesLocalStorage', JSON.stringify(data.movies));
      })
      .catch((err) => {
        console.log(err);
      })
    .finally(() => {
      setIsLoading(false);
    });
  }, [setSavedMovies]);

  function handleSearchSavedMovies() {
    const savedMoviesLocalStorage = localStorage.getItem('savedMoviesLocalStorage');
    if (savedMoviesLocalStorage) {
      setSavedMovies(JSON.parse(savedMoviesLocalStorage));
      const filteredMovies = filterMovies(JSON.parse(savedMoviesLocalStorage), searchQuery);

      if (filteredMovies.length === 0) {
        setErrorSearch('По вашему запросу ничего не найдено');
        return;
      } else {
        setErrorSearch('');
      }
      if (statusCheckBox) {
        const filteredShortMovies = filterShortFilm(filteredMovies, statusCheckBox);
        setSavedMovies(filteredShortMovies);
      } else {
        setSavedMovies(filteredMovies);
      }
    }
  }

  const handleCheckBox = (statusCheckBox) => {
    setStatusCheckBox(statusCheckBox);
    const dataStorageMovies = localStorage.getItem('savedMoviesLocalStorage');

    if (!dataStorageMovies) {
      return;
    }
    if (!statusCheckBox) {
      const filteredMovies = filterMovies(JSON.parse(dataStorageMovies), searchQuery);
      setSavedMovies(filteredMovies);
    } else {
      const filteredShortMovies = filterShortFilm(savedMovies, statusCheckBox);
      setSavedMovies(filteredShortMovies);
    }
  };

  function deleteSavedMovie(movieId) {
    mainApi
      .deleteMovie(movieId)
      .then(() => {
        const modifyMovie = savedMovies.filter((movie) => movie._id !== movieId);
        setSavedMovies(modifyMovie);
        const modifySavedMovie = JSON.parse(localStorage.getItem('savedMoviesLocalStorage')).filter((item) => item._id !== movieId);
        localStorage.setItem('savedMoviesLocalStorage', JSON.stringify(modifySavedMovie));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className='saved-movies'>
        <SearchForm
          handleSearch={handleSearchSavedMovies}
          onCheckboxChange={handleCheckBox}
          query={searchQuery}
          setQuery={setSearchQuery}
          statusCheckBox={statusCheckBox}
        />
        {isLoading ? <Preloader /> : <MoviesCardList onSaveMovie={onSaveMovie} moviesList={savedMovies} deleteMovie={deleteSavedMovie} />}
      </section>
      <Footer loggedIn={loggedIn} />
    </>
  );
}
