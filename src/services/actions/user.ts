import { request } from "./api";
import { getCookie, setCookie } from "../../utils/cookieFunc";
import {AppDispatch} from "../types/types";
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

interface IUserValues {
    name?: string;
    email?: string;
    password?: string
}

export const loginUser = (values: IUserValues, history: any) => {
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


export const registerUser = (values: IUserValues) => {
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



const forgotPassword = (data: IUserValues) => {
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



export const resetPassword = (data: any) => {
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




export const getUser = () => {
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





export const patchUser = (values: any) => {
    return (dispatch: any) => {
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




export const logoutUser = () => {
    return (dispatch: any) => {
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

export const updateUserToken = () => {
    return (dispatch: any) => {
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
