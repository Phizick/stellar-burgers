import {useSelector} from "react-redux";

export const modalContainer = document.getElementById('modal-root');

export const getIngredients = (state) => state.ingredients.data
export const getBurgerIngredients = (state) => state.burgerIngredients.ingredients;
export const getBunData = (state) => state.burgerIngredients.bun;
export const getWsData = (state) => state.wsOrders;

