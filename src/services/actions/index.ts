
export const MODAL_OPENED: 'MODAL_OPENED' = 'MODAL_OPENED';
export const MODAL_CLOSED: 'MODAL_CLOSED'  = 'MODAL_CLOSED';
export const ADD_CONSTRUCTOR_INGREDIENT: 'ADD_CONSTRUCTOR_INGREDIENT' = "ADD_CONSTRUCTOR_INGREDIENT";
export const DELETE_CONSTRUCTOR_INGREDIENT: 'DELETE_CONSTRUCTOR_INGREDIENT' = "DELETE_CONSTRUCTOR_INGREDIENT";
export const SORTED_CONSTRUCTOR: 'SORTED_CONSTRUCTOR' = "SORTED_CONSTRUCTOR";
export const ADD_CONSTRUCTOR_BUN: 'ADD_CONSTRUCTOR_BUN' = "ADD_CONSTRUCTOR_BUN";
export const CLEAR_CONSTRUCTOR: 'CLEAR_CONSTRUCTOR' = "CLEAR_CONSTRUCTOR";

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


