import * as constants from "./const";
const url = constants.url;

export default function getData() {
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
