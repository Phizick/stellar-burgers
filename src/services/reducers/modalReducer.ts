import {MODAL_CLOSED, MODAL_OPENED} from "../actions/actionsTypes/modalTypes";

const initialState = {
    modalType: '',
    isOpened: false
}

type TModalState = {
    modalType: string,
    isOpened: boolean,
}

interface IModalOpened {
    readonly type: typeof MODAL_OPENED
}

interface IModalClosed {
    readonly type: typeof MODAL_CLOSED
}

export type TModalStateTypes = IModalOpened | IModalClosed

export const modalReducer = (state: TModalState = initialState, action: any): TModalState => {
    switch (action.type) {
        case MODAL_OPENED: {
            return {
                ...state,
                ...action.payload
            }
        }
        case MODAL_CLOSED: {
            return {
                ...state,
                ...action.payload
            }
        }
        default: return state
    }
}