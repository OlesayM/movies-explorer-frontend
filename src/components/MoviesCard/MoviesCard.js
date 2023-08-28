import './MoviesCard.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import  Film  from "../../images/design33.jpg"

function MoviesCard() {
  const location = useLocation();
  const [isSaved, setIsSaved] = useState(true);


  return (
    <>
    <div className="card-movie">
      {isSaved ? (
        <button
          className="card-movie__save-btn"
          type="button">Сохранить</button>
      ):
      (
        <button
          className="card-movie__save-btn card-movie__save-btn_type_active"
          type="button"
        />
      )
      }
      <img
        src={ Film }
        alt="постер"
        className="card-movie__img"
      />
      <div className="card-movie__container">
        <h2 className="card-movie__name">33 слова о дизайне</h2>
        <span className="card-movie__duration">1ч 17м</span>
        </div>
    </div>
    <div className="card-movie">
    {isSaved ? (
      <button
        className="card-movie__save-btn"
        type="button">Сохранить</button>
    ):
    (
      <button
        className="card-movie__save-btn card-movie__save-btn_type_active"
        type="button"
      />
    )
    }
    <img
      src={ Film }
      alt="постер"
      className="card-movie__img"
    />
    <div className="card-movie__container">
      <h2 className="card-movie__name">33 слова о дизайне</h2>
      <span className="card-movie__duration">1ч 17м</span>
      </div>
  </div>
  <div className="card-movie">
  {isSaved ? (
    <button
      className="card-movie__save-btn"
      type="button">Сохранить</button>
  ):
  (
    <button
      className="card-movie__save-btn card-movie__save-btn_type_active"
      type="button"
    />
  )
  }
  <img
    src={ Film }
    alt="постер"
    className="card-movie__img"
  />
  <div className="card-movie__container">
    <h2 className="card-movie__name">33 слова о дизайне</h2>
    <span className="card-movie__duration">1ч 17м</span>
    </div>
</div>
<div className="card-movie">
      {isSaved ? (
        <button
          className="card-movie__save-btn"
          type="button">Сохранить</button>
      ):
      (
        <button
          className="card-movie__save-btn card-movie__save-btn_type_active"
          type="button"
        />
      )
      }
      <img
        src={ Film }
        alt="постер"
        className="card-movie__img"
      />
      <div className="card-movie__container">
        <h2 className="card-movie__name">33 слова о дизайне</h2>
        <span className="card-movie__duration">1ч 17м</span>
        </div>
    </div>
    <div className="card-movie">
    {isSaved ? (
      <button
        className="card-movie__save-btn"
        type="button">Сохранить</button>
    ):
    (
      <button
        className="card-movie__save-btn card-movie__save-btn_type_active"
        type="button"
      />
    )
    }
    <img
      src={ Film }
      alt="постер"
      className="card-movie__img"
    />
    <div className="card-movie__container">
      <h2 className="card-movie__name">33 слова о дизайне</h2>
      <span className="card-movie__duration">1ч 17м</span>
      </div>
  </div>
  <div className="card-movie">
  {isSaved ? (
    <button
      className="card-movie__save-btn"
      type="button">Сохранить</button>
  ):
  (
    <button
      className="card-movie__save-btn card-movie__save-btn_type_active"
      type="button"
    />
  )
  }
  <img
    src={ Film }
    alt="постер"
    className="card-movie__img"
  />
  <div className="card-movie__container">
    <h2 className="card-movie__name">33 слова о дизайне</h2>
    <span className="card-movie__duration">1ч 17м</span>
    </div>
</div>
<div className="card-movie">
      {isSaved ? (
        <button
          className="card-movie__save-btn"
          type="button">Сохранить</button>
      ):
      (
        <button
          className="card-movie__save-btn card-movie__save-btn_type_active"
          type="button"
        />
      )
      }
      <img
        src={ Film }
        alt="постер"
        className="card-movie__img"
      />
      <div className="card-movie__container">
        <h2 className="card-movie__name">33 слова о дизайне</h2>
        <span className="card-movie__duration">1ч 17м</span>
        </div>
    </div>
    <div className="card-movie">
    {isSaved ? (
      <button
        className="card-movie__save-btn"
        type="button">Сохранить</button>
    ):
    (
      <button
        className="card-movie__save-btn card-movie__save-btn_type_active"
        type="button"
      />
    )
    }
    <img
      src={ Film }
      alt="постер"
      className="card-movie__img"
    />
    <div className="card-movie__container">
      <h2 className="card-movie__name">33 слова о дизайне</h2>
      <span className="card-movie__duration">1ч 17м</span>
      </div>
  </div>
  <div className="card-movie">
  {isSaved ? (
    <button
      className="card-movie__save-btn"
      type="button">Сохранить</button>
  ):
  (
    <button
      className="card-movie__save-btn card-movie__save-btn_type_active"
      type="button"
    />
  )
  }
  <img
    src={ Film }
    alt="постер"
    className="card-movie__img"
  />
  <div className="card-movie__container">
    <h2 className="card-movie__name">33 слова о дизайне</h2>
    <span className="card-movie__duration">1ч 17м</span>
    </div>
</div>
<div className="card-movie">
      {isSaved ? (
        <button
          className="card-movie__save-btn"
          type="button">Сохранить</button>
      ):
      (
        <button
          className="card-movie__save-btn card-movie__save-btn_type_active"
          type="button"
        />
      )
      }
      <img
        src={ Film }
        alt="постер"
        className="card-movie__img"
      />
      <div className="card-movie__container">
        <h2 className="card-movie__name">33 слова о дизайне</h2>
        <span className="card-movie__duration">1ч 17м</span>
        </div>
    </div>
    <div className="card-movie">
    {isSaved ? (
      <button
        className="card-movie__save-btn"
        type="button">Сохранить</button>
    ):
    (
      <button
        className="card-movie__save-btn card-movie__save-btn_type_active"
        type="button"
      />
    )
    }
    <img
      src={ Film }
      alt="постер"
      className="card-movie__img"
    />
    <div className="card-movie__container">
      <h2 className="card-movie__name">33 слова о дизайне</h2>
      <span className="card-movie__duration">1ч 17м</span>
      </div>
  </div>
  <div className="card-movie">
  {isSaved ? (
    <button
      className="card-movie__save-btn"
      type="button">Сохранить</button>
  ):
  (
    <button
      className="card-movie__save-btn card-movie__save-btn_type_active"
      type="button"
    />
  )
  }
  <img
    src={ Film }
    alt="постер"
    className="card-movie__img"
  />
  <div className="card-movie__container">
    <h2 className="card-movie__name">33 слова о дизайне</h2>
    <span className="card-movie__duration">1ч 17м</span>
    </div>
</div>
</>
  )
}

export default MoviesCard;