import {v4 as uuid4} from "uuid";
import { ADD_CONSTRUCTOR_BUN,
ADD_CONSTRUCTOR_INGREDIENT,
SORTED_CONSTRUCTOR,
DELETE_CONSTRUCTOR_INGREDIENT} from "./actionsTypes/constructorTypes";



export const addConstructorBun = (item: object) => {
    return {
        type: ADD_CONSTRUCTOR_BUN,
        data: item,
    };
};

export const addConstructorIngredient = (item: any) => {
    return {
        type: ADD_CONSTRUCTOR_INGREDIENT,
        data: item,
        keyId: uuid4(),
    };
};

export const setDefaultConstructor = (ingredients: any) => {
    return {
        type: SORTED_CONSTRUCTOR,
        data: ingredients,
    };
};

export const deleteConstructorElement = (id: any) => {
    return {
        type: DELETE_CONSTRUCTOR_INGREDIENT,
        id: id,
    };
};
