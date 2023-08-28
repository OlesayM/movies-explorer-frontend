import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(loggedIn) {
  return (
    <>
    <Header loggedIn={loggedIn}/>
    <main className="movies-page">
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList />
    </main>
    <Footer loggedIn={loggedIn}/>
    </>
  );
}
export default Movies;
