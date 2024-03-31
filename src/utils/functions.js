import {BASE_URL} from "../const";
const url = BASE_URL;

export function getData() {
        return request(url + '/ingredients')
            .then((data) => data)
            .catch((error) => console.log(error));

}

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}

export function request(url, options) {
    return fetch(url, options).then(checkResponse)
}
