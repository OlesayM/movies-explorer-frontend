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
        <>
        <Header loggedIn={loggedIn}/>
        <main className="main">
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio /> 
            {/* <Preloader/> */}
        </main>
         <Footer />
         </>
    )
}

export default Main;