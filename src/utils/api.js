import {BASE_URL} from "../const";
import {checkResponse} from "./functions";

// Запрос на сброс пароля
export const apiForgotPassword = (email) => {
    return fetch(BASE_URL + '/password-reset', {
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
    return fetch(BASE_URL + '/password-reset/reset', {
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
    return fetch(BASE_URL + '/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
}

// Запрос регистрации
export const apiUserRegIn = (email, name, password) => {
    return fetch(BASE_URL + '/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({
            email: email,
            name: name,
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

export const getUserApi = () => {
    return fetch(BASE_URL + '/auth/user', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Authorization: getToken(),
        },
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
};


export const login = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                accessToken: "test-token",
                refreshToken: "test-refresh-token",
                user: {},
            });
        }, 1000);
    });

export const apiUserLogOut = () => {
    return fetch(BASE_URL + '/api/auth/logout', {
        method: "POST",
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({
            token: localStorage.getItem("refreshToken"),
        }),
    }).catch((error) => {
        console.error('Произошла ошибка при выходе пользователя:', error);
        return Promise.reject(error);
    });
}

export const refreshToken = () => {
    return fetch(BASE_URL + '/api/auth/token', {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
            token: localStorage.getItem("refreshToken"),
        }),
    }).then(checkResponse);
};

export const getToken = () => {
    return localStorage.getItem("accessToken")
};

export const fetchWithRefresh = async (url, options) => {
    try {
        const res = await fetch(url, options);
        return await checkResponse(res);
    } catch (err) {
        if (err.message === "jwt expired") {
            const refreshData = await refreshToken(); //обновляем токен
            if (!refreshData.success) {
                return Promise.reject(refreshData);
            }
            localStorage.setItem("refreshToken", refreshData.refreshToken);
            localStorage.setItem("accessToken", refreshData.accessToken);
            options.headers.authorization = refreshData.accessToken;
            const res = await fetch(url, options); //повторяем запрос
            return await checkResponse(res);
        } else {
            return Promise.reject(err);
        }
    }
};

export const apiUpdateUser = (email, name, password) => {
    return fetch(BASE_URL + '/api/auth/user', {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Authorization: getToken(),
        },
        body: JSON.stringify({
            email: email,
            name: name,
            password: password
        }),
    }).catch((error) => {
        console.error('Произошла ошибка при обновлении информации о пользователе:', error);
        return Promise.reject(error);
    });
};
