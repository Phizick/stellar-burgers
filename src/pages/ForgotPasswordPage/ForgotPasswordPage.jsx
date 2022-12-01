import React from "react";
import {useState} from "react";
import {Form} from "../../components/Form/Form";
import {Input, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';


export const ForgotPasswordPage = () => {
    const loginInputRef = React.useRef(null);
    const [value, setValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')

    return (
        <Form formTitle={'Восстановление пароля'}
              buttonText={'Восстановить'}
              firstQuestion={'Вспомнили пароль?'}
              fistQuestionLinkText={'Войти'}
              ForwardLinkFirst={'/login'}
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
                       placeholder={'укажите e-mail'}
                       ref={loginInputRef}
                       name={'email'}

                />
            </li>
        </Form>
    )
};
