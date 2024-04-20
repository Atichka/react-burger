// Запрос на сброс пароля
export const apiForgotPassword = (email) => {
    return fetch('https://norma.nomoreparties.space/api/password-reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({
            email: email
        })
    })
        .then(res => {
            console.log(res);
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
};

// Запрос восстановления пароля
export const apiResetPassword = (password, code) => {
    return fetch('https://norma.nomoreparties.space/api/password-reset/reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({
            password: password,
            token: code
        })
    })
        .then(res => {
            console.log(res);
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
};

// Запрос авторизации
export const apiUserLogIn = (email, password) => {
    fetch('https://norma.nomoreparties.space/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
        .then(res => {
            console.log(res);
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
}
