import './Footer.css';
function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <h4 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h4>
                <div className="footer__info" >
                    <p className="footer__copyright">&copy; 2023</p>
                    <ul className="footer__list">
                        <li className="footer__list-item"><a className="footer__link" href='https://practicum.yandex.ru/' target='blank'>Яндекс.Практикум</a></li>
                        <li className="footer__list-item"><a className="footer__link" href='https://github.com/OlesayM' target='blank'>Github</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;