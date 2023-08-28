import './PageNotFound.css';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const history = useNavigate();


  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__subtitle">Страница не найдена</p>
      <button className="not-found__back" onClick={() => history.goBack()}>Назад</button>
    </section>
  )
}

export default PageNotFound;