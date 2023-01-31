import {ReactNode} from "react";
import { rootReducer } from "../reducers/rootReducer";
import { store } from "../store";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Action, ActionCreator } from "redux";


import {TOrderActions} from "../actions/order";
import {TWsActions} from "../actions/wsActions";
import {TUserActions} from "../actions/user";

type TAppActions =
    | TWsActions
    | TOrderActions
    | TUserActions

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, TAppActions>
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

export type TModal = {
    title: string;
    children: ReactNode;
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

export type TOrdersData  = {
    orders: {
        ingredients: TIngredient[];
        name: string;
        number: number;
        status: string;
        owner: TUser;
        price: number;
        createdAt: string;
        _id: string;
    }
    total: number;
    totalToday: number;
    length: number;
}


export type TUserResponse = {
    success: boolean;
    user: TUser;
    accessToken: string;
    refreshToken: string;
    message: string;
}
