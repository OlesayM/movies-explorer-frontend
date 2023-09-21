import './MoreButton.css';
import React from 'react';

function MoreButton({handleMoreButtonClick}) {
  return (
    <section className="more">
      <button className= "more__button" type="submit" onClick={handleMoreButtonClick}>Ещё</button>
    </section>
  );
}

export default MoreButton;