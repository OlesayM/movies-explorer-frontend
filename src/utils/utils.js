import { shortMovieDuration } from './constants';

export function filterMovies(arr, query) {
  const filteredMovies = arr.filter((item) => {
    const nameRuToLowerCase = item.nameRU.toLowerCase();
    const searchMessageToLowerCase = query.toLowerCase();
    const nameEnToLowerCase = item.nameEN.toLowerCase();
    return (
      nameRuToLowerCase.includes(searchMessageToLowerCase) ||
      nameEnToLowerCase.includes(searchMessageToLowerCase)
    );
  });
  return filteredMovies;
}
export function filterShortFilm(movies, statusCheckBox) {
  if (statusCheckBox) {
    return movies.filter((film) => film.duration <= shortMovieDuration);
  }
 
}
export function convertDuration(duration) {
  const hours = Math.trunc(duration / 60);
  const minutes = duration - 60 * hours;
  return `${hours}ч ${minutes}м`;
}
