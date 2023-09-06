import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';
import mainApi from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import * as auth from '../../utils/auth';

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false); // вошедший в систему
  const [currentUser, setCurrentUser] = useState({});
  const [isSuccessRegister, setIsSuccessRegister] = useState(false);
  const [isSuccessLogin, setIsSuccessLogin] = useState(false);
  const [isSuccessProfile, setIsSuccessProfile] = useState(false);
  //проверка наличия пользователя, если есть то переходит в защищенные роуты
  const [isUserChecked, setIsUserChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegistration = ({ name, password, email }) => {
    auth
      .registration({ name, password, email })
      .then(() => {
        handleLogin({ password: password, email: email });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogin = ({ password, email }) => {
    auth
      .authorization({ password, email })
      .then((res) => {
        localStorage.setItem('token', res.token);
        setLoggedIn(true);
        navigate('/movies');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (loggedIn) {
     mainApi
        .getProfileInfo(token)
        .then((data) => {
          setCurrentUser(data);
          setLoggedIn(true);
          setIsUserChecked(true);
        })
        .catch((err) => {
          console.log(`Error: ${err}`);
          setIsUserChecked(true);
        });
        
    }
  }, [loggedIn]);

  //проверка токена
  function checkToken() {
    const token = localStorage.getItem('token');
    auth
      .checkValidToken(token)
      .then((data) => {
        if (!data) {
          return;
        }
        setLoggedIn(true);
        navigate('/');
      })
      .catch((err) => setLoggedIn(false));
  }

  useEffect(() => {
    checkToken();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function logout() {
    setLoggedIn(false);
    localStorage.removeItem('token');
    setCurrentUser({ name: '', email: '' });
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn} />}></Route>
          <Route
            path="/movies"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Movies />
              </ProtectedRoute>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <SavedMovies />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Profile loggedIn={loggedIn} logout={logout} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <Register
                isSuccess={isSuccessRegister}
                handleRegistration={handleRegistration}
              />
            }
          ></Route>
          <Route
            path="/signin"
            element={
              <Login isSuccess={isSuccessLogin} handleLogin={handleLogin} />
            }
          ></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}
export default App;
