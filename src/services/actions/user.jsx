import {request} from "./index";
import {getCookie, setCookie} from "../../utils/cookieFunc";


export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILED = 'LOGIN_USER_FAILED';
export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILED = 'REGISTER_USER_FAILED';
export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILED = 'FORGOT_PASSWORD_FAILED';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILED = 'RESET_PASSWORD_FAILED';
export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';
export const PATCH_USER = 'PATCH_USER';
export const PATCH_USER_SUCCESS = 'PATCH_USER_SUCCESS';
export const PATCH_USER_FAILED = 'PATCH_USER_FAILED';
export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_FAILED = 'LOGOUT_USER_FAILED';
export const UPDATE_USER_TOKEN = 'UPDATE_USER_TOKEN';
export const UPDATE_USER_TOKEN_SUCCESS = 'UPDATE_USER_TOKEN_SUCCESS';
export const UPDATE_USER_TOKEN_FAILED = 'UPDATE_USER_TOKEN_FAILED'


export const loginUser = (email, password, history) => {
    return (dispatch) => {
        dispatch({
            type: LOGIN_USER,
            authorizedUser: true

        });
        const requestOptions = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: `${email}`,
                password: `${password}`,
            }),
        };
        request('auth/login', requestOptions)
            .then((res) => {
               if (res.success) {
                   if (!localStorage.length) {
                       setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
                       localStorage.setItem('refreshToken', res.refreshToken);
                       dispatch({
                           type: LOGIN_USER_SUCCESS,
                           user: res.user,
                           accessToken: res.accessToken,
                           refreshToken: res.refreshToken
                       });
                   }
                   history.replace({pathname: '/'});
               }
            })
            .catch((err) => {
                dispatch({
                    type: LOGIN_USER_FAILED,
                    error: err.message,
                });
            });
    }
};

export const registerUser = (email, password, name, history) => {
    return (dispatch) => {
        dispatch({
            type: REGISTER_USER
        });
        const requestOptions = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: `${email}`,
                password: `${password}`,
                name: `${name}`,
            }),
        };
        request('auth/register', requestOptions)
            .then((res) => {
              if (res && res.success) {
                  setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
                  localStorage.setItem('refreshToken', res.refreshToken);
                  dispatch({
                      type: REGISTER_USER_SUCCESS,
                      user: res.user,
                      accessToken: res.accessToken,
                      refreshToken: res.refreshToken
                  });
              }
                history.replace({pathname: '/'});
            })
            .catch((err) => {
                dispatch({
                    type: REGISTER_USER_FAILED,
                    error: err.message
                })
            })
    }
};

const forgotPassword = (data) => {
    return (dispatch) => {
        dispatch({
            type: FORGOT_PASSWORD
        });
        const requestOptions = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: data.email})
        };
        dispatch({
            type: FORGOT_PASSWORD_SUCCESS
        });
        request('password-reset', requestOptions)
            .then((res) => {
                if (res.success) {
                    return data.history.replace({pathname: '/reset-password'});
                }
                return null;
            })
            .catch((err) => {
                dispatch({
                    type: FORGOT_PASSWORD_FAILED,
                    error: err.message
                })
            })
    }
};

export const resetPassword = (data) => {
    return (dispatch) => {
        dispatch({
            type: RESET_PASSWORD
        });
        const requestOptions = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password: data.password, token: data.token })
        };
        dispatch({
            type: RESET_PASSWORD_SUCCESS
        });
        request('password-reset/reset', requestOptions)
            .then((res) => {
                if (!res.success) {
                    return null
                }
            })
            .catch((err) => {
                dispatch({
                    type: RESET_PASSWORD_FAILED,
                    error: err.message
                })
            })
    }
};

export const getUser = () => {
    return (dispatch) => {
        dispatch({
            type: GET_USER
        });
        const requestOptions = {
            method: 'GET',
            headers: { "Content-Type": "application/json",
                Authorization: 'Bearer ' + getCookie('accessToken'),
            }
        }
        request('auth/user', requestOptions)
            .then((res) => {
                if (res.success) {
                    dispatch({
                        type: GET_USER_SUCCESS,
                        user: res.user
                    })
                }
        })
            .catch((err) => {
                dispatch({
                    type: GET_USER_FAILED,
                    error: err.message
                })
            })
    }
};

export const patchUser = (email, name, password) => {
    return (dispatch) => {
        dispatch({
            type: PATCH_USER
        });
        const requestOptions = {
            method: 'PATCH',
            headers: { "Content-Type": "application/json",
                Authorization: 'Bearer ' + getCookie('accessToken'),
            },
            body: JSON.stringify({
                email: `${email}`,
                password: `${password}`,
                name: `${name}`
            })
        }
        request('auth/user', requestOptions)
            .then((res) => {
                if (res.success) {
                dispatch({
                    type: PATCH_USER_SUCCESS,
                    user: res.user
                })
            }
            })
            .catch((err) => {
                dispatch({
                    type: PATCH_USER_FAILED,
                    error: err.message
                })
            })

    }
}

export const logoutUser = () => {
    return (dispatch) => {
        dispatch({
            type: LOGOUT_USER
        })
        const requestOptions = {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
                token: localStorage.getItem('refreshToken')
            })
        }
        request('auth/logout', requestOptions)
            .then((res) => {
                if (res.success) {
                    setCookie('accessToken', '')
                    localStorage.removeItem(('refreshToken'));
                    dispatch({
                        type: LOGOUT_USER_SUCCESS,
                        user: '',
                        accessToken: '',
                        refreshToken: ''
                    })
                }
            })
            .catch((err) => {
                dispatch({
                    type: LOGOUT_USER_FAILED,
                    error: err.message
                })
            })

    }
}

export const updateUserToken = () => {
    return (dispatch) => {
        dispatch({
            type: UPDATE_USER_TOKEN
        });
        const requestOptions = {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
                token: localStorage.getItem('refreshToken')
            })
        }
        request('auth/token', requestOptions)
            .then((res) => {
                if (res.success) {
                    setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
                    localStorage.setItem('refreshToken', res.refreshToken)
                    dispatch({
                        type: UPDATE_USER_TOKEN_SUCCESS,
                        accessToken: res.accessToken,
                        refreshToken: res.refreshToken
                    })
                }
            })
            .catch((err) => {
                dispatch({
                    type:  UPDATE_USER_TOKEN_FAILED,
                    error: err.message
                })
            })
    }
}


export default forgotPassword


