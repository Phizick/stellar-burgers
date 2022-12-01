import React from "react";
import {useState} from "react";
import {Form} from "../../components/Form/Form";
import {Input, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';


export const LoginPage = () => {
    const loginInputRef = React.useRef(null);
    const [value, setValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')

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
                  console.log(123)
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

                />
            </li>
            <li className={`mt-6`}>
                <PasswordInput
                    value={passwordValue}
                    name={'password'}
                    onChange={(e) => {
                    setPasswordValue(e.target.value)
                }}

                />
            </li>
        </Form>
    )
};
