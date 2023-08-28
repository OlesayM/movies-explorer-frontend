import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
// import NavTab from "../NavTab/NavTab";
import Portfolio from "../Portfolio/Portfolio";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Main({loggedIn}) {
    return (
        <div className="main">
            <Header loggedIn={loggedIn}/>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio /> 
            <Footer />
        </div>
    )
}

export default Main;