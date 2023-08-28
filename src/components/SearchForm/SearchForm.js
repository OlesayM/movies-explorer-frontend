import React from 'react';
import './SearchForm.css';
import { useLocation } from 'react-router-dom';

function SearchForm(props) {

  const location = useLocation();
  const locationMovies = location.pathname === '/movies';

  const stateCheckboxMovies = locationMovies ? localStorage.getItem('stateCheckbox') === 'true' : false;
  const [checkbox, setCheckbox] = React.useState(stateCheckboxMovies);

  const [isEmptyRequest, setIsEmptyRequest] = React.useState(false);

  return (
    <section className="search">
      {/* <span
        id="search-input-error"
        className="search__error search__error_active">
        Нужно ввести ключевое слово
      </span> */}
      <div className="search__container">
        <form className="search__box">
          {/* <div className="search__box-search"> */}
            {/* <div className="search__magnifier"></div> */}
            <input
              id="search"
              name="search"
              className="search__input"
              type="text"
              placeholder="Фильм"
            />
          {/* </div> */}
          <button className="search__button hover-button" type="submit"></button>
        </form>

        <div className="search__box-checkbox">
          <label className="search__checkbox">
              <input
                name="checkbox"
                value={checkbox}
                className="search__checkbox-input"
                type="checkbox"
                // onChange={handleCheckbox}
                checked={checkbox}
              />
            <span className="search__checkbox-slider"></span>
          </label>
          <p className="search__checked-title">Короткометражки</p>
        </div>

      </div>


    </section>
  )
}

export default SearchForm;