import React from "react";
import { useState } from "react";
import { Form } from "../../components/Form/Form";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import forgotPassword from "../../services/actions/user";
import {getCookie} from "../../utils/cookieFunc";
import {setOrder} from "../../services/actions";

export const ForgotPasswordPage = () => {
    const loginInputRef = React.useRef(null);
    const [value, setValue] = useState("");
    const history = useHistory();
    const dispatch = useDispatch();


    const refreshToken = localStorage.getItem('refreshToken');
    const accessToken = getCookie('accessToken');
    if (refreshToken && accessToken) {
        history.push('/')
    } else {


        return (
            <Form
                formTitle={"Восстановление пароля"}
                buttonText={"Восстановить"}
                firstQuestion={"Вспомнили пароль?"}
                fistQuestionLinkText={"Войти"}
                ForwardLinkFirst={"/reset-password"}
                FormSubmitFunc={(e) => {
                    e.preventDefault();
                    dispatch(forgotPassword(value, history));
                    history.push('/reset-password');
                }}
            >
                <li className={`mt-6`}>
                    <Input
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value);
                        }}
                        size={"default"}
                        placeholder={"укажите e-mail"}
                        ref={loginInputRef}
                        name={"email"}
                    />
                </li>
            </Form>
        );
    }
}
