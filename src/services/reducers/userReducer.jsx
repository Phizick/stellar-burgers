import {
    FORGOT_PASSWORD, FORGOT_PASSWORD_FAILED, FORGOT_PASSWORD_SUCCESS,
    LOGIN_USER,
    LOGIN_USER_FAILED,
    LOGIN_USER_SUCCESS, PATCH_USER, PATCH_USER_FAILED, PATCH_USER_SUCCESS,
    REGISTER_USER, REGISTER_USER_FAILED,
    REGISTER_USER_SUCCESS, RESET_PASSWORD, RESET_PASSWORD_FAILED, RESET_PASSWORD_SUCCESS
} from "../actions/user";

const initialState = {
    email: '',
    password: '',
    token: '',
    name: '',
    success: false,
    pending: true,

}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER: {
            return {
                ...state,
                email: action.email,
                password: action.password
            };
        }
        case LOGIN_USER_SUCCESS: {
            return {
                ...state,
                success: true,
                pending: false,

            };
        }
        case LOGIN_USER_FAILED: {
            return {
                ...state,
                success: false
            };
        }
        case REGISTER_USER: {
            return {
                ...state,
                email: action.email,
                password: action.password,
                name: action.name
            };
        }
        case REGISTER_USER_SUCCESS: {
            return {
                ...state,
                success: true,
                pending: false,

            };
        }
        case REGISTER_USER_FAILED: {
            return {
                ...state,
                success: false
            }
        }
        case FORGOT_PASSWORD: {
            return {
                ...state,
                email: action.email
            };
        }
        case FORGOT_PASSWORD_SUCCESS: {
            return {
                ...state,
                success: true,
                pending: false
            };
        }
        case FORGOT_PASSWORD_FAILED: {
            return {
                ...state,
                success: false
            };
        }
        case RESET_PASSWORD: {
            return {
                ...state,
                token: action.token
            };
        }
        case RESET_PASSWORD_SUCCESS: {
            return {
                ...state,
                success: true,
                pending: false
            };
        }
        case RESET_PASSWORD_FAILED: {
            return {
                ...state,
                success: false
            };
        }
        case PATCH_USER: {
            return {
                ...state,
                email: action.email,
                name: action.name
            }
        }
        case PATCH_USER_SUCCESS: {
            return {
                ...state,
                success: true,
                pending: false
            }
        }
        case PATCH_USER_FAILED: {
            return {
                ...state,
                success: false
            }
        }
        default: {
            return state;
        }
    }
}