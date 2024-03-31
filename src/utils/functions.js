import * as constants from "../const";
const url = constants.url;

export function getData() {
        return fetch(url)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                return Promise.reject(response);
            })
            .then((data) => data)
            .catch((error) => console.log(error));

}

export function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}
