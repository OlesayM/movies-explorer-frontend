import './AboutMe.css';
import Photo from '../../images/me.jpg';

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <img className="about-me__photo" src={Photo} alt="Фотография автора" />
        <div className="about-me__description">
          <h3 className="about-me__name">Олеся</h3>
          <p className="about-me__occupation">Фронтенд-разработчик, 31 год</p>
          <p className="about-me__information">Живу в Москве, по образованию - педагог профессионального обучения.
            Работаю по профессии в Колледже автомобильного транспорта. У меня
            есть сын и муж. В свободное время занимаюсь спортом и фотографирую. Внезапно решила исполнить мечту детства и попробовать себя в веб-разработке.</p>
          <a className="about-me__link" href="https://github.com/OlesayM" target="blank">Github</a>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;
