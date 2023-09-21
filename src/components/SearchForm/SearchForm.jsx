import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({ query, setQuery, handleSearch, onCheckboxChange, statusCheckBox }) {
  const [inputError, setInputError] = useState('');

  function handleChange(e) {
    setQuery(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (query === '') {
      setInputError('Нужно ввести ключевое слово');
    } else {
      handleSearch();
      setInputError('');
    }
  }

  const handleCheckboxChange = () => {
    onCheckboxChange(!statusCheckBox);
  };

  return (
    <section className='search'>
      <div className='search__container'>
        <form className='search__box' onSubmit={handleSubmit} name='search'>
          <input
            id='search'
            name='search'
            className='search__input-search'
            type='text'
            placeholder='Фильм'
            onChange={handleChange}
            value={query}
          />
          <button className='search__button' type='submit'></button>
        </form>
        <span className={`search__error ${inputError ? 'search__error_active' : ''}`}>{inputError}</span>
        <div className='search__box-checkbox'>
          <input className='search__input' type='checkbox' id='switch' checked={statusCheckBox} onChange={handleCheckboxChange} />
          <label className='search__label' htmlFor='switch'></label>
          <p className='search__checked-title'>Короткометражки</p>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
