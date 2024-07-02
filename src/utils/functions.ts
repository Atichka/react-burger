import {BASE_URL} from "../const";
const url = BASE_URL;

export function getData() {
        return request(url + '/ingredients')
            .then((data) => data)
            .catch((error) => console.log(error));

}

export function checkResponse<T>(res: Response): Promise<T> {
    console.log(res);
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}

export function request<T>(url: string, options?: RequestInit): Promise<T> {
    return fetch(url, options).then(checkResponse<T>)
}

export const getStatus = (status: string): string => {
    switch (status) {
        case "done":
            return "Выполнен";
        case "created":
            return "Создан";
        case "pending":
            return "Готовится";
        default:
            return "Отменен";
    }
};
