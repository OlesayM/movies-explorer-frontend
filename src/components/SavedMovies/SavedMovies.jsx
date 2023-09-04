import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';

export default function SavedMovies(loggedIn) {
  return (
    <>
    <Header loggedIn={loggedIn}/>
    <section className="saved-movies">
      <SearchForm/>
      <MoviesCardList/>
    </section>
    <Footer loggedIn={loggedIn}/>
    </>
  )
}