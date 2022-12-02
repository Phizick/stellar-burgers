import React from "react";
import {useState} from "react";
import {Form} from "../../components/Form/Form";
import {Input, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';
import {useDispatch} from "react-redux";
import {useHistory, Redirect} from "react-router-dom";
import {registerUser} from "../../services/actions/user";


export const RegisterPage = () => {
    const loginInputRef = React.useRef(null);

    const [value, setValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('');
    const [userName, setUserName] = useState('');
    const userToken = window.localStorage.getItem('accessToken');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleUserEmail = (e) => {
        setValue(e.target.value)
    };
    const handleUserPassword = (e) => {
        setPasswordValue(e.target.value)
    };
    const handleUserName = (e) => {
        setUserName(e.target.value)
    };

    if (userToken) {
        return <Redirect to={'/'}/>
    }

    return (
        <Form formTitle={'Регистрация'}
              buttonText={'Зарегистрироваться'}
              firstQuestion={'Уже зарегистрированы?'}
              fistQuestionLinkText={'Войти'}
              ForwardLinkFirst={'/login'}
              FormSubmitFunc={(e) => {
                  e.preventDefault();
                  dispatch(registerUser(value, passwordValue, userName, history))
              }}
        >
            <li className={`mt-6`}>
                <Input value={userName}
                       onChange={handleUserName}
                       type={'text'}
                       placeholder={'Имя'}
                       ref={loginInputRef}
                       name={'name'}
                />
            </li>
            <li className={`mt-6`}>
                <Input value={value}
                       onChange={handleUserEmail}
                       type={'email'}
                       placeholder={'E-mail'}
                       ref={loginInputRef}
                       name={'email'}
                />
            </li>
            <li className={`mt-6`}>
                <PasswordInput
                    value={passwordValue}
                    name={'password'}
                    onChange={handleUserPassword}
                />
            </li>
        </Form>
    )
};
