import {
    FORGOT_PASSWORD,
    FORGOT_PASSWORD_FAILED,
    FORGOT_PASSWORD_SUCCESS,
    GET_USER,
    GET_USER_FAILED,
    GET_USER_SUCCESS,
    LOGIN_USER,
    LOGIN_USER_FAILED,
    LOGIN_USER_SUCCESS,
    PATCH_USER,
    PATCH_USER_FAILED,
    PATCH_USER_SUCCESS,
    REGISTER_USER,
    REGISTER_USER_FAILED,
    REGISTER_USER_SUCCESS,
    RESET_PASSWORD,
    RESET_PASSWORD_FAILED,
    RESET_PASSWORD_SUCCESS,
    LOGOUT_USER_FAILED,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER,
} from '../actions/actionsTypes/userTypes';
import {TUser} from "../types/types";

type TUserInitialState = {
    user: {
        email: string;
        name: string;
    };
    accessToken: string;
    refreshToken: string,
    success: boolean,
    pending: boolean,
    password: string,
    error?: string | boolean,
    authorizedUser?: string | boolean,
    validUser?: boolean,
    email?: string,
    token?: string,

}

const initialState = {
    user: {
        email: "",
        name: "",
    },
    accessToken: "",
    refreshToken: "",
    success: false,
    pending: true,
    password: "",
    error: "",
    authorizedUser: false,
    validUser: false,
};


interface ILoginUser {
    readonly type: typeof LOGIN_USER;
    success: boolean,
    pending: boolean,
    authorizedUser?: boolean,
}

interface ILoginUserSuccess {
    readonly type: typeof LOGIN_USER_SUCCESS;
    user: {
        email: string,
        name: string,
    },
    accessToken: string,
    refreshToken: string,
}

interface ILoginUserFailed {
    readonly type: typeof LOGIN_USER_FAILED;
    success: boolean,
    error?: string,
}

interface IRegisterUser {
    readonly type: typeof REGISTER_USER;
    success: boolean,
    pending?: boolean,
}

interface IRegisterUserSuccess {
    readonly type: typeof REGISTER_USER_SUCCESS;
    user: {
        email: string;
        name: string;
    };
    accessToken: string;
    refreshToken: string;
}

interface IRegisterUserFailed {
    readonly type: typeof REGISTER_USER_FAILED;
    success?: boolean,
    error?: string,
}

interface IForgotPassword {
    readonly type: typeof FORGOT_PASSWORD
    email: string;
}

interface IForgotPasswordSuccess {
    readonly type: typeof FORGOT_PASSWORD_SUCCESS
    success: boolean,
    pending: boolean,
    validUser: boolean,
}

interface IForgotPasswordFailed {
    readonly type: typeof FORGOT_PASSWORD_FAILED
    success: boolean,

}

interface IResetPassword {
    readonly type: typeof RESET_PASSWORD
    token: string,
}

interface IResetPasswordSuccess {
    readonly type: typeof RESET_PASSWORD_SUCCESS
    success: boolean,
    pending: boolean,
}

interface IResetPasswordFailed {
    readonly type: typeof RESET_PASSWORD_FAILED
    success: boolean,
}

interface IGetUser {
    readonly type: typeof GET_USER
    success: boolean,
}

interface IGetUserSuccess {
    readonly type: typeof GET_USER_SUCCESS
    user: {
        name: string,
        email: string,
    },
    authorizedUser?: boolean,
}

interface IGetUserFailed {
    readonly type: typeof GET_USER_FAILED
    error: string,

}

interface IPatchUser {
    readonly type: typeof PATCH_USER
    success: boolean,
    pending: boolean,
}

interface IPatchUserSuccess {
    readonly type: typeof PATCH_USER_SUCCESS
    user: {
        email: string,
        name: string,
    }
}

interface IPatchUserFailed {
    readonly type: typeof PATCH_USER_FAILED
    success: boolean,
    error?: string,
}

interface ILogoutUser {
    readonly type: typeof LOGOUT_USER
    success: boolean,
    authorizedUser?: boolean,
}

interface ILogoutUserSuccess {
    readonly type: typeof LOGOUT_USER_SUCCESS
    user: {
        name: string,
        email: string,
    },
    accessToken: string,
    refreshToken: string,
}

interface ILogoutUserFailed {
    readonly type: typeof LOGOUT_USER_FAILED
    error: string,
}

export type TUserActions =
    | ILogoutUserFailed
    | ILogoutUserSuccess
    | ILogoutUser
    | IPatchUserFailed
    | IPatchUserSuccess
    | IPatchUser
    | IGetUserFailed
    | IGetUserSuccess
    | IGetUser
    | IResetPasswordFailed
    | IResetPasswordSuccess
    | IResetPassword
    | IForgotPasswordFailed
    | IForgotPasswordSuccess
    | IForgotPassword
    | IRegisterUserFailed
    | IRegisterUserSuccess
    | IRegisterUser
    | ILoginUserFailed
    | ILoginUserSuccess
    | ILoginUser



export const userReducer = (state: TUserInitialState = initialState, action: TUserActions): TUserInitialState => {
    switch (action.type) {
        case LOGIN_USER: {
            return {
                ...state,
                success: true,
                pending: false,
                authorizedUser: action.authorizedUser,
            };
        }
        case LOGIN_USER_SUCCESS: {
            return {
                ...state,
                user: action.user,
                accessToken: action.accessToken,
                refreshToken: action.refreshToken,
            };
        }
        case LOGIN_USER_FAILED: {
            return {
                ...state,
                success: false,
                error: action.error,
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
                refreshToken: action.refreshToken,
            };
        }
        case REGISTER_USER_FAILED: {
            return {
                ...state,
                success: false,
                error: action.error,
            };
        }
        case FORGOT_PASSWORD: {
            return {
                ...state,
                email: action.email,
            };
        }
        case FORGOT_PASSWORD_SUCCESS: {
            return {
                ...state,
                success: true,
                pending: false,
                validUser: true,
            };
        }
        case FORGOT_PASSWORD_FAILED: {
            return {
                ...state,
                success: false,
            };
        }
        case RESET_PASSWORD: {
            return {
                ...state,
                token: action.token,
            };
        }
        case RESET_PASSWORD_SUCCESS: {
            return {
                ...state,
                success: true,
                pending: false,
            };
        }
        case RESET_PASSWORD_FAILED: {
            return {
                ...state,
                success: false,
            };
        }
        case PATCH_USER: {
            return {
                ...state,
                success: true,
                pending: false,
            };
        }
        case PATCH_USER_SUCCESS: {
            return {
                ...state,
                user: action.user,
            };
        }
        case PATCH_USER_FAILED: {
            return {
                ...state,
                success: false,
                error: action.error,
            };
        }
        case GET_USER: {
            return {
                ...state,
                success: true,
            };
        }
        case GET_USER_SUCCESS: {
            return {
                ...state,
                user: action.user,
                authorizedUser: true,
            };
        }
        case GET_USER_FAILED: {
            return {
                ...state,
                error: action.error,
            };
        }
        case LOGOUT_USER: {
            return {
                ...state,
                success: true,
                authorizedUser: false,
            };
        }
        case LOGOUT_USER_SUCCESS: {
            return {
                ...state,
                user: action.user,
                accessToken: action.accessToken,
                refreshToken: action.refreshToken,
            };
        }
        case LOGOUT_USER_FAILED: {
            return {
                ...state,
                error: action.error,
            };
        }
        default: {
            return state;
        }
    }
};
