import React, { useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';

export default function SavedMovies(loggedIn) {
    const [isSearchDone, setIsSearchDonen] = useState(true);

  return (
    <>
    <Header loggedIn={loggedIn}/>
    <section className="saved-movies">
      <SearchForm/>
      {isSearchDone ? 
      <MoviesCardList/>
          : (
            <span className="saved-movies__nothing-found">
              Ничего не найдено. Введите другое ключевое слово.
            </span>
          )
      }
    </section>
    <Footer loggedIn={loggedIn}/>
    </>
  )
}