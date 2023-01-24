

export const modalContainer = document.getElementById('modal-root');



export const getIngredients = (state) => state.ingredients.data
export const getBurgerIngredients = (state) => state.burgerIngredients.ingredients;
export const getBunData = (state) => state.burgerIngredients.bun;
export const getWsData = (state) => state.wsOrders;
export const getSelectedIngredient = (state) => state.burgerIngredients;
export const getUserData = (state) => state.user;
export const getIngredient = (state) => state.ingredientDetail.selectedIngredient;
export const getModalState = (state) => state.modalState;
export const getOrderState = (state) => state.order;
export const getUserInfo = (state) => state.user.user;


