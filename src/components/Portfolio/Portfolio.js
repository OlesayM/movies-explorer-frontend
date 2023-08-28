// import './Portfolio.css';

// function Portfolio() {
//   return (
//     <section className="portfolio">
//       <h2 className="portfolio__title">Портфолио</h2>
//       <ul className="portfolio__container">
//         <li className="portfolio__box">
//           <p className="portfolio__website">Статичный сайт</p>
//           <a className="portfolio__link hover-link" href="https://github.com/OlesayM/how-to-learn" target="blank"></a>
//         </li>
//         <li className="portfolio__box">
//           <p className="portfolio__website">Адаптивный сайт</p>
//           <a className="portfolio__link hover-link" href="https://OlesayM.github.io/russian-travel/" target="blank"></a>
//         </li>
//         <li className="portfolio__box">
//           <p className="portfolio__website">Одностраничное приложение</p>
//           <a className="portfolio__link hover-link" href="https://github.com/OlesayM/react-mesto-auth" target="blank"></a>
//         </li>
//       </ul>
//     </section>
//   )
// }

// export default Portfolio;
import './Portfolio.css';

function Portfolio() {
    return (
        <section className="portfolio">
            <div className="portfolio__container">
                <h3 className="portfolio__title">Портфолио</h3>
                <ul className="portfolio__list">
                    <li><a href="https://github.com/OlesayM/how-to-learn" target='blank'>Статичный сайт</a></li>
                    <li><a href="https://OlesayM.github.io/russian-travel/" target='blank'>Адаптивный сайт</a></li>
                    <li><a href="https://github.com/OlesayM/react-mesto-auth" target='blank'>Одностраничное приложение</a></li>
                </ul>
            </div>
        </section>
    )
}

export default Portfolio;