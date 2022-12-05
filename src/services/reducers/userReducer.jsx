import {
    FORGOT_PASSWORD, FORGOT_PASSWORD_FAILED, FORGOT_PASSWORD_SUCCESS, GET_USER, GET_USER_FAILED, GET_USER_SUCCESS,
    LOGIN_USER,
    LOGIN_USER_FAILED,
    LOGIN_USER_SUCCESS, PATCH_USER, PATCH_USER_FAILED, PATCH_USER_SUCCESS,
    REGISTER_USER, REGISTER_USER_FAILED,
    REGISTER_USER_SUCCESS, RESET_PASSWORD, RESET_PASSWORD_FAILED, RESET_PASSWORD_SUCCESS
} from "../actions/user";

const initialState = {
    user: {
        email: '',
        name: ''
    },
    accessToken: '',
    refreshToken: '',
    success: false,
    pending: true,
    password: '',
    error: ''

}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER: {
            return {
                ...state,
                success: true,
                pending: false,
            };
        }
        case LOGIN_USER_SUCCESS: {
            return {
                ...state,
                user: action.user,
                accessToken: action.accessToken,
                refreshToken: action.refreshToken
            };
        }
        case LOGIN_USER_FAILED: {
            return {
                ...state,
                success: false,
                error: action.error
            };
        }
        case REGISTER_USER: {
            return {
                ...state,
                success: true,
                pending: false,

            };
        }
        case REGISTER_USER_SUCCESS: {
            return {
                ...state,
                user: action.user,
                accessToken: action.accessToken,
                refreshToken: action.refreshToken

            };
        }
        case REGISTER_USER_FAILED: {
            return {
                ...state,
                success: false,
                error: action.error
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
                success: true,
                pending: false,
            }
        }
        case PATCH_USER_SUCCESS: {
            return {
                ...state,
                user: action.user
            }
        }
        case PATCH_USER_FAILED: {
            return {
                ...state,
                success: false,
                error: action.error
            }
        }
        case GET_USER: {
            return {
                ...state,
                success: true,
                accessToken: action.accessToken,
                refreshToken: action.refreshToken
            }
        }
        case GET_USER_SUCCESS: {
            return {
                ...state,
                user: action.user
            }
        }
        case GET_USER_FAILED: {
            return {
                ...state,
                error: action.error
            }
        }
        default: {
            return state;
        }
    }
}