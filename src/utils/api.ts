import {BASE_URL} from "../const";
import {checkResponse, request} from "./functions";
import {AuthResponse, Credentials, TUser} from "./types";

// Запрос на сброс пароля
export const apiForgotPassword = (email: string): Promise<void> => {
    return fetch(BASE_URL + '/password-reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({
            email: email
        })
    })
        .then(checkResponse<void>)
};

// Запрос восстановления пароля
export const apiResetPassword = (password: string, code: string): Promise<void> => {
    return fetch(BASE_URL + '/password-reset/reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({
            password: password,
            token: code
        })
    })
        .then(checkResponse<void>)
};

// Запрос авторизации
export const apiUserLogIn = (email: string, password: string): Promise<{success: boolean} & AuthResponse> => {
    return fetch(BASE_URL + '/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
        .then(checkResponse<{success: boolean} & AuthResponse>)
};

// Запрос регистрации
export const apiUserRegIn = (email: string, name: string, password: string):Promise<{success: boolean} & AuthResponse> => {
    return fetch(BASE_URL + '/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({
            email: email,
            name: name,
            password: password
        })
    })
        .then(checkResponse<{success: boolean} & AuthResponse>)
}

export const getUserApi = (): Promise<{success: boolean, user: Omit<TUser, 'password'>}> => {
    return fetch(BASE_URL + '/auth/user', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Authorization: getToken(),
        } as HeadersInit,
    })
        .then(checkResponse<{success: boolean, user: Omit<TUser, 'password'>}>)
};

export const apiUserLogOut = (): Promise<{success: boolean}> => {
    return fetch(BASE_URL + '/api/auth/logout', {
        method: "POST",
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({
            token: localStorage.getItem("refreshToken"),
        }),
    })
        .then(checkResponse<{success: boolean}>)
}

export const refreshToken = (): Promise<Credentials & { success: boolean}> => {
    return fetch(BASE_URL + '/api/auth/token', {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
            token: localStorage.getItem("refreshToken"),
        }),
    })
        .then(checkResponse<Credentials & { success: boolean}>)
        .then(res => {
            if (!res.success) {
                return Promise.reject(res);
            }

            localStorage.setItem("refreshToken", res.refreshToken);
            localStorage.setItem("accessToken", res.accessToken);
            return res;
        })

};

export const getToken = (): string | null => {
    return localStorage.getItem("accessToken")
};

export const fetchWithRefresh = async <T>(url: string, options: RequestInit): Promise<T> => {
    try {
        const res = await fetch(url, options);
        return await checkResponse(res);
    } catch (err) {
        if ((err as {message: string}).message === "jwt expired") {
            const refreshData = await refreshToken(); //обновляем токен
            (options.headers as {[key: string]: string}).authorization = refreshData.accessToken;
            const res = await fetch(url, options); //повторяем запрос
            return await checkResponse(res);
        } else {
            return Promise.reject(err);
        }
    }
};

export const apiUpdateUser = (email: string, name: string, password: string): Promise<{success: boolean, user: Omit<TUser, 'password'>}> => {
    return fetch(BASE_URL + '/api/auth/user', {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Authorization: getToken(),
        } as HeadersInit,
        body: JSON.stringify({
            email: email,
            name: name,
            password: password
        }),
    })
        .then(checkResponse<{success: boolean, user: Omit<TUser, 'password'>}>)
};

export const getOrderInfoData = (order: number): Promise<any> => request(`${BASE_URL}/orders/${order}`);
