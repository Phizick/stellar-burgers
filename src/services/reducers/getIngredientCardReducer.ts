import {CHOICE_INGREDIENT, DELETE_INGREDIENT} from "../actions/actionsTypes/ingredientsTypes";


const initialState = {
    selectedIngredient: {}
};

export type TSelectedIngredient = {
    selectedIngredient: any
}

interface IChoiceIngredient {
    readonly type: typeof CHOICE_INGREDIENT
    data: any
}

interface IDeleteIngredient {
    readonly type: typeof DELETE_INGREDIENT
}

export type TIngredientCardActions =
    | IChoiceIngredient
    | IDeleteIngredient



export const getIngredientCard = (state: TSelectedIngredient = initialState, action: TIngredientCardActions): TSelectedIngredient => {
    switch (action.type) {
        case CHOICE_INGREDIENT: {
            return {
                ...state,
                selectedIngredient: {...state.selectedIngredient, ...action.data}
            };
        }
        case DELETE_INGREDIENT: {
            return {
                ...state,
                selectedIngredient: {}
            };
        }
        default:
            return state;
    }
};
