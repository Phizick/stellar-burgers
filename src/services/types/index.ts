import {ReactNode} from "react";
import { rootReducer } from "../reducers/rootReducer";
import { store } from "../store";
import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ActionCreator<ThunkAction<ReturnType, Action, RootState, any>>
export type AppDispatch = typeof store.dispatch;


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
    id?: string;
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

export type TWsSocketActions = {
    wsInit: string;
    wsClosed: string;
    wsSendMessage: string;
    onOpen: string;
    onClose: string;
    onError: string;
    onMessage: string;
}