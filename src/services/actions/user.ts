import { request } from "./index";
import { getCookie, setCookie } from "../../utils/cookieFunc";
import {AppDispatch, AppThunk, TUser} from "../types";
import { LOGIN_USER,
LOGIN_USER_FAILED,
LOGIN_USER_SUCCESS,
LOGOUT_USER,
LOGOUT_USER_FAILED,
LOGOUT_USER_SUCCESS,
FORGOT_PASSWORD,
FORGOT_PASSWORD_FAILED,
FORGOT_PASSWORD_SUCCESS,
GET_USER,
GET_USER_FAILED,
GET_USER_SUCCESS,
REGISTER_USER,
REGISTER_USER_FAILED,
REGISTER_USER_SUCCESS,
RESET_PASSWORD,
RESET_PASSWORD_FAILED,
RESET_PASSWORD_SUCCESS,
PATCH_USER,
PATCH_USER_FAILED,
PATCH_USER_SUCCESS,
UPDATE_USER_TOKEN,
UPDATE_USER_TOKEN_FAILED,
UPDATE_USER_TOKEN_SUCCESS
} from "./actionsTypes/userTypes";



interface ILoginUser {
    readonly type: typeof LOGIN_USER;
}

interface ILoginUserSuccess {
    readonly type: typeof LOGIN_USER_SUCCESS;
}

interface ILoginUserFailed {
    readonly type: typeof LOGIN_USER_FAILED;
}

interface IUserValues {
    email: string;
    password: string;
    name: string;
}

export const loginUser: AppThunk = (values: IUserValues, history: any) => {
    return (dispatch: AppDispatch) => {
        dispatch({
            type: LOGIN_USER,
            authorizedUser: true,
        });
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: `${values.email}`,
                password: `${values.password}`,
            }),
        };
        request("auth/login", requestOptions)
            .then((res) => {
                if (res.success) {
                    if (!localStorage.length) {
                        setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
                        localStorage.setItem("refreshToken", res.refreshToken);
                        dispatch({
                            type: LOGIN_USER_SUCCESS,
                            user: res.user,
                            accessToken: res.accessToken,
                            refreshToken: res.refreshToken,
                        });
                    }
                    history.replace({ pathname: "/" });
                }
            })
            .catch((err) => {
                dispatch({
                    type: LOGIN_USER_FAILED,
                    error: err.message,
                });
            });
    };
};



interface IRegisterUser {
    readonly type: typeof REGISTER_USER;
}

interface IRegisterUserSuccess {
    readonly type: typeof REGISTER_USER_SUCCESS;
    user: TUser;
    accessToken: string;
    refreshToken: string;
}

interface IRegisterUserFailed {
    readonly type: typeof REGISTER_USER_FAILED;
}

export const registerUser: AppThunk = (values: IUserValues) => {
    return (dispatch: AppDispatch) => {
        dispatch({
            type: REGISTER_USER,
        });
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: `${values.email}`,
                password: `${values.password}`,
                name: `${values.name}`,
            }),
        };
        request("auth/register", requestOptions)
            .then((res) => {
                if (res && res.success) {
                    setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
                    localStorage.setItem("refreshToken", res.refreshToken);
                    dispatch({
                        type: REGISTER_USER_SUCCESS,
                        user: res.user,
                        accessToken: res.accessToken,
                        refreshToken: res.refreshToken,
                    });
                }
                // history.replace({ pathname: "/" });
            })
            .catch((err) => {
                dispatch({
                    type: REGISTER_USER_FAILED,
                    error: err.message,
                });
            });
    };
};

interface IForgotPasswordData {
    email: string;
    history: any;
}

interface IForgotPassword {
    readonly type: typeof FORGOT_PASSWORD
}

interface IForgotPasswordSuccess {
    readonly type: typeof FORGOT_PASSWORD_SUCCESS
}

interface IForgotPAsswordFailed {
    readonly type: typeof FORGOT_PASSWORD_FAILED
}

const forgotPassword: AppThunk = (data: IForgotPasswordData) => {
    return (dispatch: AppDispatch) => {
        dispatch({
            type: FORGOT_PASSWORD,
        });
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: data.email }),
        };
        dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
        });
        request("password-reset", requestOptions)
            .then((res) => {
                if (res.success) {
                    return data.history.replace({ pathname: "/reset-password" });
                }
                return null;
            })
            .catch((err) => {
                dispatch({
                    type: FORGOT_PASSWORD_FAILED,
                    error: err.message,
                });
            });
    };
};

interface IResetPasswordData {
    password: string;
    token: string;
}

interface IResetPassword {
    readonly type: typeof RESET_PASSWORD
}

interface IResetPasswordSuccess {
    readonly type: typeof RESET_PASSWORD_SUCCESS
}

interface IResetPasswordFailed {
    readonly type: typeof RESET_PASSWORD_FAILED
}

export const resetPassword: AppThunk = (data: IResetPasswordData) => {
    return (dispatch: AppDispatch) => {
        dispatch({
            type: RESET_PASSWORD,
        });
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password: data.password, token: data.token }),
        };
        dispatch({
            type: RESET_PASSWORD_SUCCESS,
        });
        request("password-reset/reset", requestOptions)
            .then((res) => {
                if (!res.success) {
                    return null;
                }
            })
            .catch((err) => {
                dispatch({
                    type: RESET_PASSWORD_FAILED,
                    error: err.message,
                });
            });
    };
};

interface IGetUser {
    readonly type: typeof GET_USER
}

interface IGetUserSuccess {
    readonly type: typeof GET_USER_SUCCESS
}

interface IGetUserFailed {
    readonly type: typeof GET_USER_FAILED
}


export const getUser: AppThunk = () => {
    return (dispatch: AppDispatch) => {
        dispatch({
            type: GET_USER,
        });
        const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json", Authorization: "Bearer " + getCookie("accessToken") },
        };
        request("auth/user", requestOptions)
            .then((res) => {
                if (res.success) {
                    dispatch({
                        type: GET_USER_SUCCESS,
                        user: res.user,
                    });
                }
            })
            .catch((err) => {
                dispatch({
                    type: GET_USER_FAILED,
                    error: err.message,
                });
            });
    };
};

interface IPatchUser {
    readonly type: typeof PATCH_USER
}

interface IPatchUserSuccess {
    readonly type: typeof PATCH_USER_SUCCESS
}

interface IPatchUserFailed {
    readonly type: typeof PATCH_USER_FAILED
}



export const patchUser: AppThunk = (values: IUserValues) => {
    return (dispatch: AppDispatch) => {
        dispatch({
            type: PATCH_USER,
        });
        const requestOptions = {
            method: "PATCH",
            headers: { "Content-Type": "application/json", Authorization: "Bearer " + getCookie("accessToken") },
            body: JSON.stringify({
                email: `${values.email}`,
                password: `${values.password}`,
                name: `${values.name}`,
            }),
        };
        request("auth/user", requestOptions)
            .then((res) => {
                if (res.success) {
                    dispatch({
                        type: PATCH_USER_SUCCESS,
                        user: res.user,
                    });
                }
            })
            .catch((err) => {
                dispatch({
                    type: PATCH_USER_FAILED,
                    error: err.message,
                });
            });
    };
};

interface ILogoutUser {
    readonly type: typeof LOGOUT_USER
}

interface ILogoutUserSuccess {
    readonly type: typeof LOGOUT_USER_SUCCESS
}

interface ILogoutUserFailed {
    readonly type: typeof LOGOUT_USER_FAILED
}


export const logoutUser: AppThunk = () => {
    return (dispatch: AppDispatch) => {
        dispatch({
            type: LOGOUT_USER,
        });
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                token: localStorage.getItem("refreshToken"),
            }),
        };
        request("auth/logout", requestOptions)
            .then((res) => {
                if (res.success) {
                    setCookie("accessToken", "");
                    localStorage.removeItem("refreshToken");
                    dispatch({
                        type: LOGOUT_USER_SUCCESS,
                        user: "",
                        accessToken: "",
                        refreshToken: "",
                    });
                }
            })
            .catch((err) => {
                dispatch({
                    type: LOGOUT_USER_FAILED,
                    error: err.message,
                });
            });
    };
};

export const updateUserToken: AppThunk = () => {
    return (dispatch: AppDispatch) => {
        dispatch({
            type: UPDATE_USER_TOKEN,
        });
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                token: localStorage.getItem("refreshToken"),
            }),
        };
        request("auth/token", requestOptions)
            .then((res) => {
                if (res.success) {
                    setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
                    localStorage.setItem("refreshToken", res.refreshToken);
                    dispatch({
                        type: UPDATE_USER_TOKEN_SUCCESS,
                        accessToken: res.accessToken,
                        refreshToken: res.refreshToken,
                    });
                }
            })
            .catch((err) => {
                dispatch({
                    type: UPDATE_USER_TOKEN_FAILED,
                    error: err.message,
                });
            });
    };
};

export default forgotPassword;
