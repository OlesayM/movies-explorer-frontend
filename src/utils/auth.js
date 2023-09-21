const BASE_URL ='http://localhost:4000';
//'api.movie.olesaym.nomoredomainsicu.ru'

export const registration = ( {name, email, password} ) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( {name, email, password} )
    })
    .then(checkResponseStatus)
}

export const authorization = ({ email, password}) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(checkResponseStatus)
};

export const checkValidToken = (token) =>{
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
    .then(checkResponseStatus)
}

function checkResponseStatus(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(res)
}