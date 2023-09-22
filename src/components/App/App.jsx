import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
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
import Preloader from '../Preloader/Preloader';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import * as auth from '../../utils/auth';

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isSuccessRegister, setIsSuccessRegister] = useState(false);
  const [isSuccessLogin, setIsSuccessLogin] = useState(false);
  const [isSuccessUpdateProfile, setIsSuccessUpdateProfile] = useState(false);
  const [isUserChecked, setIsUserChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [statusProfile, setStatusProfile] = useState({});
  const [statusRegister, setStatusRegister] = useState({});
  const [statusLogin, setStatusLogin] = useState({});

  //регистрация
  const handleRegistration = (data) => {
    auth
      .registration(data)
      .then(() => {
        handleLogin({ password: data.password, email: data.email });
      })
      .catch((err) => {
        setIsSuccessRegister(false);
        if (err.status === 500) {
          setStatusRegister({ message: 'На сервере произошла ошибка' });
        } else if (err.status === 409) {
          setStatusRegister({
            message: 'Пользователь с таким email уже существует',
          });
        } else {
          setStatusRegister({
            message: 'При регистрации пользователя произошла ошибка',
          });
        }
        setTimeout(() => {
          setStatusRegister('');
        }, 3000);
      });
  };

  //вход
  const handleLogin = (data) => {
    auth
      .authorization(data)
      .then((res) => {
        localStorage.setItem('token', res.token);
        setLoggedIn(true);
        navigate('/movies');
      })
      .catch((err) => {
        setIsSuccessRegister(false);
        if (err.status === 500) {
          setStatusLogin({ message: 'На сервере произошла ошибка' });
        } else if (err.status === 409) {
          setStatusLogin({
            message: 'Пользователь с таким email уже существует',
          });
        } else if (err.status === 401) {
          setStatusLogin({ message: 'Вы ввели неправильный логин или пароль' });
        } else {
          setStatusLogin({ message: 'При авторизации произошла ошибка' });
        }
        setTimeout(() => {
          setStatusLogin('');
        }, 3000);
      });
  };

  // выход
  function logout() {
    setLoggedIn(false);
    localStorage.clear();
    navigate('/');
  }

  //данные профиля
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (loggedIn) {
      mainApi
        .getProfileInfo(token)
        .then((data) => {
          setCurrentUser(data.user);
          setLoggedIn(true);
          setIsUserChecked(true);
        })
        .catch((err) => {
          console.log(`Error: ${err}`);
          setIsUserChecked(true);
        });
    }
  }, [loggedIn]);

  //обновление профиля
  function handleUpdateProfile({ name, email }) {
    mainApi
      .setProfileInfo({ name, email })
      .then((data) => {
        setCurrentUser(data.user);
        setIsSuccessUpdateProfile(true);
        setStatusProfile({ message: 'Вы успешно обновили профиль' });
        setTimeout(() => {
          setStatusProfile('');
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        setIsSuccessUpdateProfile(false);
        if (err.status === 500) {
          setStatusProfile({ message: 'На сервере произошла ошибка' });
        } else if (err.status === 409) {
          setStatusProfile({
            message: 'Пользователь с таким email уже существует',
          });
        } else {
          setStatusProfile({
            message: 'При обновлении пользователя произошла ошибка',
          });
        }
        setTimeout(() => {
          setStatusProfile('');
        }, 3000);
      });
  }

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
      })
      .catch((err) => setLoggedIn(false))
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="page">
      {isLoading ? (
        <Preloader />
      ) : (
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route path="/" element={<Main loggedIn={loggedIn} />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  element={Movies}
                  loggedIn={loggedIn}
                  isLoading={isLoading}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  element={SavedMovies}
                  loggedIn={loggedIn}
                  isLoading={isLoading}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  element={Profile}
                  loggedIn={loggedIn}
                  logout={logout}
                  onUpdateProfile={handleUpdateProfile}
                  isSuccessRequest={isSuccessUpdateProfile}
                  status={statusProfile}
                />
              }
            />
            <Route
              path="/signup"
              element={
                loggedIn ? (
                  <Navigate to="/movies" replace />
                ) : (
                  <Register
                  isSuccess={isSuccessRegister}
                  handleRegistration={handleRegistration}
                  isSuccessRequest={isSuccessRegister}
                  status={statusRegister}
                />
                )
              }
            ></Route>
            <Route
              path="/signin"
              element={
                loggedIn ? (
                  <Navigate to="/movies" replace />
                ) : (
                  <Login
                  isSuccess={isSuccessLogin}
                  handleLogin={handleLogin}
                  isSuccessRequest={isSuccessLogin}
                  status={statusLogin}
                />
                )
              }
            ></Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </CurrentUserContext.Provider>
      )}
    </div>
  );
}
export default App;
