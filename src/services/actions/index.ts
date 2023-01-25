



const baseUrl: string = "https://norma.nomoreparties.space/api/";



export const checkResponse = <T>(res: Response): Promise<T> => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`error ${res}`);
}

export function request(url: string, options: object) {
    return fetch(`${baseUrl}${url}`, options).then(checkResponse);
}


