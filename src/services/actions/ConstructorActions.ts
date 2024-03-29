import {v4 as uuid4} from "uuid";
import { ADD_CONSTRUCTOR_BUN,
ADD_CONSTRUCTOR_INGREDIENT,
SORTED_CONSTRUCTOR,
DELETE_CONSTRUCTOR_INGREDIENT} from "./actionsTypes/constructorTypes";
import {TIngredient} from "../types/types";

export const addConstructorBun = (item: TIngredient) => {
    return {
        type: ADD_CONSTRUCTOR_BUN,
        data: item,
    };
};

export const addConstructorIngredient = (item: TIngredient) => {
    return {
        type: ADD_CONSTRUCTOR_INGREDIENT,
        data: item,
        keyId: uuid4(),
    };
};

export const setDefaultConstructor = (ingredients: TIngredient[]) => {
    return {
        type: SORTED_CONSTRUCTOR,
        data: ingredients,
    };
};

export const deleteConstructorElement = (id: string | undefined) => {
    return {
        type: DELETE_CONSTRUCTOR_INGREDIENT,
        id: id,
    };
};
