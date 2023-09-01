import './AboutMe.css';
import Me from '../../images/me.jpg';

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__information">
          <h2 className="about-me__name">Олеся</h2>
          <p className="about-me__occupation">Фронтенд-разработчик, 31 год</p>
          <p className="about-me__description">
            Живу в Москве, по образованию - педагог профессионального обучения.
            Работаю по профессии в Колледже автомобильного транспорта. У меня
            есть сын и муж. В свободное время занимаюсь спортом и фотографирую.
          </p>
          <a
            className="about-me__link"
            href="https://github.com/OlesayM/"
            target="blank"
          >
            Github
          </a>

          <img className="about-me__photo" src={Me} alt="Фото профиля"></img>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
