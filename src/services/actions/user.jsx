import {request} from "./index";

export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCSESSFUL';
export const LOGIN_USER_FAILED = 'LOGIN_USER_FAILED';
export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILED = 'REGISTER_USER_FAILED';
export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILED = 'FORGOT_PASSWORD_FAILED';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';


export const loginUser = (data) => {
    return (dispatch) => {
        dispatch({
            type: LOGIN_USER,
            email: data.email,
            password: data.password,
        });
        const requestOptions = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: `${data.email}`,
                password: `${data.password}`,
            }),
        };
        dispatch({
            type: LOGIN_USER_SUCCESS
        });
        request('auth/login', requestOptions)
            .then((res) => {
               if (res.success) {
                   if (!localStorage.length) {
                       localStorage.setItem('accessToken', res.accessToken);
                       localStorage.setItem('refreshToken', res.refreshToken);
                   }
                   data.history.replace({pathname: '/'});
               }
            })
            .catch((err) => {
                dispatch({
                    type: LOGIN_USER_FAILED,
                    error: err.message,
                });
            });
    }
}


