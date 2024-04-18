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
