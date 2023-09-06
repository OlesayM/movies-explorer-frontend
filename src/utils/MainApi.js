class MainApi {
    constructor({baseUrl, headers}) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }
  
    // информация о пользователе с сервера
    getProfileInfo() {
      return fetch(`${this._baseUrl}/users/me`, {
        headers: {
          authorization: this._getToken(),
          'Content-Type': 'application/json',
         }
      })
      .then(this._checkResponseStatus)
    }
  
    //редактирование профиля
    setProfileInfo(name, email) {
      return fetch (`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: {
          authorization: this._getToken(),
          'Content-Type': 'application/json',
         },
        body: JSON.stringify({
          name,
          email
        })
      })
      .then(this._checkResponseStatus)
    }
  
    //загрузка карточек с фильмами
    getSavedMoviesList() {
      return fetch(`${this._baseUrl}/movies`, {
        headers: {
          authorization: this._getToken(),
          'Content-Type': 'application/json',
         }
      })
      .then(this._checkResponseStatus)
    }
    
  //добавление в сохраненные
    saveMovie(movie) {
      return fetch (`${this._baseUrl}/movies`, {
        method: 'POST',
        headers: {
          authorization: this._getToken(),
          'Content-Type': 'application/json',
         },
        body: JSON.stringify(movie)
      })
      .then(this._checkResponseStatus)
    }
  
  //удаление
    deleteMovie(data) {
      return fetch (`${this._baseUrl}/movies/${data._id}`, {
        method: 'DELETE',
        headers: {
          authorization: this._getToken(),
          'Content-Type': 'application/json',
         },
      })
      .then(this._responseStatus)
    }

  //токен
    _getToken() {
      return `Bearer ${localStorage.getItem('token')}`
    }

  // ответ сервера
    _checkResponseStatus(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`)
    }
  }
  
  //создание экземпляра класса
  const mainApi = new MainApi({
    baseUrl: 'http://localhost:4000',
  });
  
  export default mainApi;