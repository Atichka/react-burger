import * as constants from "../const";
const url = constants.url;

export function getData() {
        return request(url)
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
