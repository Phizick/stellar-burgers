import {ReactNode} from "react";
import { rootReducer } from "../reducers/rootReducer";
import { ThunkDispatch } from "redux-thunk";
import {TOrderActions, TOrderType} from "../reducers/getOrderReducer";
import {TWsActions} from "../actions/wsActions";
import {TUserActions, TUserInitialState} from "../reducers/userReducer";
import {TIngredientsActions, TIngredientState} from "../reducers/getIngredientsReducer";
import {TModalState, TModalStateTypes} from "../reducers/modalReducer";
import {TConstructorActions, TConstructorInitialState} from "../reducers/burgerConstructorReducer";
import {TIngredientCardActions, TSelectedIngredient} from "../reducers/getIngredientCardReducer";
import {TWsInitialState} from "../reducers/wsReducers";

type TAppActions =
    | TWsActions
    | TOrderActions
    | TUserActions
    | TIngredientsActions
    | TModalStateTypes
    | TConstructorActions
    | TIngredientCardActions


export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, never, TAppActions>;


export type TIngredient = {
    calories: number;
    carbohydrates: number;
    fat: number;
    image: string;
    image_large: string;
    image_mobile: string;
    name: string;
    price: number;
    proteins: number;
    type: "bun" | "main" | "sauce";
    __v: number;
    _id: string;
    keyId?: string;
    count?: number;
}

export type TStateSelectors = {
    burgerIngredients: TConstructorInitialState;
    ingredientDetail: TSelectedIngredient;
    ingredients: TIngredientState;
    modalState: TModalState;
    order: TOrderType | ReactNode | any;
    orderState: TOrderType;
    user: TUserInitialState;
    wsOrders: TWsInitialState;
}



export type TModal = {
    title: string;
    children: ReactNode;
}

export type TModalSelector = {
    modalState: TModalState
}

export type TModalOverlay = {
    isActive: boolean;
    children: ReactNode;
    closeModal: () => void;
}

export type TUser = {
    email: string;
    name: string;
}

export type TUserSelector = {
    user: {
        user: TUser
    }
}

export type TOrder = {
    ingredients: TIngredient[];
    name: string;
    number: number;
    status: string;
    owner: TUser;
    price: number;
    createdAt: string;
    _id: string;
}

export type TUserResponse = {
    success: boolean;
    user: TUser;
    accessToken: string;
    refreshToken: string;
    message: string;
    data: any;
    orders: TOrder[]
}
