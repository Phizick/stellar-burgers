import { CHOICE_INGREDIENT, DELETE_INGREDIENT } from "../actions";

const initialState = {
    selectedIngredient: {}
};

export const getIngredientCard = (state = initialState, action) => {
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
