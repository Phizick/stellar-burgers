import { request } from "./index";
import { getCookie, setCookie } from "../../utils/cookieFunc";
import {Dispatch} from "react";



export const loginUser = (values: any, history: any) => {
    return (dispatch: Dispatch<any>) => {
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
            .then((res: any) => {
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

export const registerUser = (values: any, history: any) => {
    return (dispatch: Dispatch<any>) => {
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
            .then((res: any) => {
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

const forgotPassword = (data: any) => {
    return (dispatch: Dispatch<any>) => {
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
            .then((res: any) => {
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
    return (dispatch: Dispatch<any>) => {
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
            .then((res: any) => {
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
    return (dispatch: Dispatch<any>) => {
        dispatch({
            type: GET_USER,
        });
        const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json", Authorization: "Bearer " + getCookie("accessToken") },
        };
        request("auth/user", requestOptions)
            .then((res:any) => {
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
    return (dispatch: Dispatch<any>) => {
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
            .then((res: any) => {
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
    return (dispatch: Dispatch<any>) => {
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
            .then((res: any) => {
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
    return (dispatch: Dispatch<any>) => {
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
            .then((res: any) => {
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
