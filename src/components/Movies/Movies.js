import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreButton from '../MoreButton/MoreButton';

function Movies(loggedIn) {
  return (
    <>
    <Header loggedIn={loggedIn}/>
    <main className="movies-page">
      <SearchForm />
      <MoviesCardList />
      <MoreButton/>
    </main>
    <Footer loggedIn={loggedIn}/>
    </>
  );
}
export default Movies;
