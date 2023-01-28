
export const modalContainer: Element = (document.getElementById('modal-root') as Element);

export const getIngredients = (state: any) => state.ingredients.data
export const getBurgerIngredients = (state: any) => state.burgerIngredients.ingredients;
export const getBunData = (state: any) => state.burgerIngredients.bun;
export const getWsData = (state: any) => state.wsOrders;
export const getSelectedIngredient = (state: any) => state.burgerIngredients;
export const getUserData = (state: any) => state.user;
export const getIngredient = (state: any) => state.ingredientDetail.selectedIngredient;
export const getModalState = (state: any) => state.modalState;
export const getOrderState = (state: any) => state.order;
export const getUserInfo = (state: any) => state.user.user;


