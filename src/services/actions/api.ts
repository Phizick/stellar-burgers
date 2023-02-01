
const baseUrl: string = "https://norma.nomoreparties.space/api/";


export const checkResponse = <T>(res: Response): Promise<T> => {
    if (res.ok) {
        return res.json();
    } else {
        throw Error (`error ${res}`);
    }
}

export function request(url: string, options?: RequestInit) {
    return fetch(`${baseUrl}${url}`, options).then(checkResponse<any>);
}


