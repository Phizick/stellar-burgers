import React from "react";
import {useState} from "react";
import {Form} from "../../components/Form/Form";
import {Input, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';
import {resetPassword} from "../../services/actions/user";
import {useDispatch} from "react-redux";


export const ResetPasswordPage = () => {
    const [value, setValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const dispatch = useDispatch()

    return (
        <Form formTitle={'Восстановление пароля'}
              buttonText={'Сохранить'}
              firstQuestion={'Вспомнили пароль?'}
              fistQuestionLinkText={'Войти'}
              ForwardLinkFirst={'/login'}
              FormSubmitFunc={(e) => {
                  e.preventDefault();
                  dispatch(resetPassword({password: passwordValue, token: value}))

              }}
        >
            <li className={`mt-6`}>
                <PasswordInput
                    value={passwordValue}
                    name={'password'}
                    placeholder={'Введите новый пароль'}
                    onChange={(e) => {
                        setPasswordValue(e.target.value)
                    }}

                />
            </li>
            <li className={`mt-6`}>
                <Input value={value}
                       onChange={(e) => {
                           setValue(e.target.value)
                       }}
                       type={'text'}
                       placeholder={'Введите код из письма'}
                       name={'email'}
                />
            </li>
        </Form>
    )
};
