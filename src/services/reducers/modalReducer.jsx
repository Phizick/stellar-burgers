import {MODAL_CLOSED, MODAL_OPENED} from "../actions";

const initialState = {
    modalType: '',
    isOpened: false
}

export const modalReducer = (state = initialState, action) => {
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