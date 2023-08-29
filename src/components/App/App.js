import { Routes, Route } from 'react-router-dom';
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
  const [loggedIn, setLoggedIn] = useState(false); // вошедший в систему
  const [isSuccessRegister, setIsSuccessRegister] = useState(false);
  const [isSuccessLogin, setIsSuccessLogin] = useState(false);

  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Main loggedIn={loggedIn} />}></Route>
        <Route path="/movies" element={<Movies loggedIn={loggedIn} />}></Route>
        <Route
          path="/saved-movies"
          element={<SavedMovies loggedIn={loggedIn} />}
        ></Route>
        <Route
          path="/profile"
          element={<Profile loggedIn={loggedIn} />}
        ></Route>
        <Route
          path="/signup"
          element={<Register isSuccess={isSuccessRegister} />}
        ></Route>
        <Route
          path="/signin"
          element={<Login isSuccess={isSuccessLogin} />}
        ></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}
export default App;
