import {v4 as uuid4} from "uuid";
import {
    ADD_CONSTRUCTOR_BUN,
    ADD_CONSTRUCTOR_INGREDIENT,
    DELETE_CONSTRUCTOR_INGREDIENT,
    SORTED_CONSTRUCTOR
} from "./index";

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
