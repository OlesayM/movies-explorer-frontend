import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className="search">
      <div className="search__container">
        <form className="search__box">
            <input
              id="search"
              name="search"
              className="search__input-search"
              type="text"
              placeholder="Фильм"
            />
          <button className="search__button" type="submit"></button>
        </form>
        <div className="search__box-checkbox">
        <input className="search__input" type="checkbox" id="switch" /><label className='search__label' for="switch"></label>
          <p className="search__checked-title">Короткометражки</p>
        </div>
      </div>
    </section>
  )
}

export default SearchForm;