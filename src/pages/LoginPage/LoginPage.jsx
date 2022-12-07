import React from "react";
import {useState} from "react";
import {Form} from "../../components/Form/Form";
import {Input, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';
import {useDispatch} from "react-redux";
import {useHistory, Redirect} from "react-router-dom";
import {loginUser} from "../../services/actions/user";
import {getCookie} from "../../utils/cookieFunc";


export const LoginPage = () => {
    const loginInputRef = React.useRef(null);
    const [value, setValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handlePassword = (e) => {
        setPasswordValue(e.target.value)
    };

    const refreshToken = localStorage.getItem('refreshToken');
    const accessToken = getCookie('accessToken');
    if (refreshToken && accessToken) {
        history.push('/')
    } else {

        return (
            <Form formTitle={'Вход'}
                  buttonText={'Войти'}
                  firstQuestion={'Вы - новый пользователь?'}
                  fistQuestionLinkText={'Зарегитрироваться'}
                  ForwardLinkFirst={'/register'}
                  secondQuestion={'Забыли пароль?'}
                  secondQuestionLinkText={'Восстановить пароль'}
                  ForwardLinkSecond={'/forgot-password'}
                  FormSubmitFunc={(e) => {
                      e.preventDefault();
                      dispatch(loginUser(value, passwordValue, history))
                  }}
            >
                <li className={`mt-6`}>
                    <Input value={value}
                           onChange={(e) => {
                               setValue(e.target.value)
                           }}
                           type={'email'}
                           placeholder={'E-mail'}
                           ref={loginInputRef}
                           name={'email'}
                           extraClass="ml-1"
                    />
                </li>
                <li className={`mt-6`}>
                    <PasswordInput
                        value={passwordValue}
                        name={'password'}
                        onChange={handlePassword}
                        extraClass="ml-1"
                    />
                </li>
            </Form>
        )
    }
}
