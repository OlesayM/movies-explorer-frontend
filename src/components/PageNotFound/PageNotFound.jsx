import './PageNotFound.css';
import { Link, useNavigate} from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }
  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__subtitle">Страница не найдена</p>
      <button className="not-found__back" onClick={handleGoBack}>Назад</button>
    </section>
  )
}

export default PageNotFound;