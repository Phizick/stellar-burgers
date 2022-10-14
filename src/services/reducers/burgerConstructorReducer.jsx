import { ADD_CONSTRUCTOR_INGREDIENT, SET_DEFAULT_CONSTRUCTOR, DELETE_CONSTRUCTOR_INGREDIENT, SORTED_CONSTRUCTOR,REFRESH_CONSTRUCTOR_BUN} from "../actions";


const initialState = {
    ingredients: [],
    bun: null
}

export const burgerConstructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DEFAULT_CONSTRUCTOR:
            return {
                ...state,
                ingredients: [...state.ingredients, action.data]
            }
        case ADD_CONSTRUCTOR_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients.splice(0, action.data.index), {...action.data, keyId: action.keyId}, ...state.ingredients.slice(action.data.index)]
            }
        case SORTED_CONSTRUCTOR: {
            const newIngredients = [...state.ingredients];
            newIngredients.splice(action.itemTo, 0, newIngredients.splice(action.itemFrom, 1)[0]);
            return {
                ...state,
                ingredients: newIngredients
            }
        }
        case DELETE_CONSTRUCTOR_INGREDIENT:
            const newIngredientsState = { ...state };
            const indexIngredient = newIngredientsState.ingredients.findIndex(
                (item) => item.key === action.data
            );
            if (indexIngredient !== -1) {
                newIngredientsState.ingredients.splice(indexIngredient, 1);
            }
            return {
                ...state,
                ingredients: [...newIngredientsState.ingredients],
            };
        default: {
            return state
        }
    }
};

export const bunStateData = (state = initialState, action) => {
    switch (action.type) {
        case REFRESH_CONSTRUCTOR_BUN:
            return {
                ...state,
                bun: action.data
            }
        default: {
            return state;
        }
    }
};