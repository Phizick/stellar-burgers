import { v4 as uuid4 } from "uuid";

export const MODAL_OPENED = 'MODAL_OPENED';
export const MODAL_CLOSED = 'MODAL_CLOSED'



export const ADD_CONSTRUCTOR_INGREDIENT = "ADD_CONSTRUCTOR_INGREDIENT";
export const DELETE_CONSTRUCTOR_INGREDIENT = "DELETE_CONSTRUCTOR_INGREDIENT";
export const SORTED_CONSTRUCTOR = "SORTED_CONSTRUCTOR";
export const ADD_CONSTRUCTOR_BUN = "ADD_CONSTRUCTOR_BUN";
export const CLEAR_ORDER = "CLEAR_ORDER";
export const CLEAR_CONSTRUCTOR = "CLEAR_CONSTRUCTOR";



const baseUrl = "https://norma.nomoreparties.space/api/";

export function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`error ${res}`);
}

export function request(url, options) {
    return fetch(`${baseUrl}${url}`, options).then(checkResponse);
}






export const addConstructorBun = (item) => {
    return {
        type: ADD_CONSTRUCTOR_BUN,
        data: item,
    };
};

export const addConstructorIngredient = (item) => {
    return {
        type: ADD_CONSTRUCTOR_INGREDIENT,
        data: item,
        keyId: uuid4(),
    };
};

export const setDefaultConstructor = (ingredients) => {
    return {
        type: SORTED_CONSTRUCTOR,
        data: ingredients,
    };
};

export const deleteConstructorElement = (id) => {
    return {
        type: DELETE_CONSTRUCTOR_INGREDIENT,
        index: id,
    };
};

export const clearOrderNum = () => {
    return {
        type: CLEAR_ORDER,
    }
}
