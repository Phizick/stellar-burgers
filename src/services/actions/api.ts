import {TUserResponse} from "../types/types";

const baseUrl: string = "https://norma.nomoreparties.space/api/";

export type TResponse = {
    ok: boolean,
    json: any,
}

export const checkResponse = <T>(res: TResponse): Promise<T> => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`error ${res}`);
}

export function request(url: string, options?: {}) {
    return fetch(`${baseUrl}${url}`, options).then(checkResponse<TUserResponse>);
}


