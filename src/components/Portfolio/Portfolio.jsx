import './Portfolio.css';

function Portfolio() {
    return (
        <section className="portfolio">
            <div className="portfolio__container">
                <h3 className="portfolio__title">Портфолио</h3>
                <ul className="portfolio__list">
                    <li className="portfolio__list-item"><a  className="portfolio__link" href="https://github.com/OlesayM/how-to-learn" target='blank'>Статичный сайт</a></li>
                    <li className="portfolio__list-item"><a className="portfolio__link" href="https://OlesayM.github.io/russian-travel/" target='blank'>Адаптивный сайт</a></li>
                    <li className="portfolio__list-item"><a className="portfolio__link" href="https://github.com/OlesayM/react-mesto-auth" target='blank'>Одностраничное приложение</a></li>
                </ul>
            </div>
        </section>
    )
}

export default Portfolio;