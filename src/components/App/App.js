import { BrowserRouter, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  const [loggedIn, setLoggedIn] = useState(true); // вошедший в систему
  const [isSuccessRegister, setIsSuccessRegister] = useState(false);
  const [isSuccessLogin, setIsSuccessLogin] = useState(false);

  return (
    <div className="page">
      <BrowserRouter>
        <Route exact path="/">
          <Main loggedIn={loggedIn}/>
        </Route>
        <Route path="/movies">
          <Movies loggedIn={loggedIn} />
        </Route>
        {/* <Route path="/saved-movies">
          <SavedMovies loggedIn={loggedIn} />
        </Route> */}
        <Route path="/profile">
          <Profile loggedIn={loggedIn} />
        </Route>
        <Route path="/signup">
          <Register isSuccess={isSuccessRegister} />
        </Route>
        <Route path="/signin">
          <Login isSuccess={isSuccessLogin}/>
        </Route>
        {/* <Route path="*">
          <PageNotFound />
        </Route> */}
      </BrowserRouter>
    </div>
  );
}
export default App;
