import { ADD_CONSTRUCTOR_INGREDIENT, SET_DEFAULT_BURGER, DELETE_CONSTRUCTOR_INGREDIENT, SORTED_CONSTRUCTOR} from "../actions";


const initialState = {
    ingredients: [],
    bun: null
}

export const burgerConstructorData = (state = initialState, action) => {
    switch (action.type) {
        case SET_DEFAULT_BURGER:
            return {
                ...state,
                ingredients: [...state.ingredients, action.data]
            }
        case ADD_CONSTRUCTOR_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients.splice(0, action.data.index), {...action.data, uuid: action.data.uuid}, ...state.ingredients.slice(action.data.index)]
            }
        case SORTED_CONSTRUCTOR: {
            const sortedIngredients = [...state.ingredients];
            sortedIngredients.splice(action.toIndex, 0, sortedIngredients.splice(action.fromIndex, 1)[0]);
            return {
                ...state,
                ingredients: sortedIngredients
            }
        }
        case DELETE_CONSTRUCTOR_INGREDIENT:
            const newState = { ...state };
            const indexIngredient = newState.ingredients.findIndex(
                (item) => item._id === action.index
            );
            if (indexIngredient !== -1) {
                newState.ingredients.splice(indexIngredient, 1);
            }
            return {
                ...state,
                ingredients: [...newState.ingredients],
            };
        default: {
            return state
        }
    }
}