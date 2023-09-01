import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import Portfolio from "../Portfolio/Portfolio";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import Preloader from "../Preloader/Preloader";

function Main({loggedIn}) {
    return (
        <div className="main">
            <Header loggedIn={loggedIn}/>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio /> 
            {/* <Preloader/> */}
            <Footer />
        </div>
    )
}

export default Main;