import {MODAL_CLOSED, MODAL_OPENED} from "../actions/actionsTypes/modalTypes";

const initialState = {
    modalType: '',
    isOpened: false
}

export const modalReducer = (state = initialState, action: any) => {
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