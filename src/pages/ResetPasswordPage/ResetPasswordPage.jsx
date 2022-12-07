import React from "react";
import { useState, useEffect } from "react";
import { Form } from "../../components/Form/Form";
import { Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { resetPassword } from "../../services/actions/user";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export const ResetPasswordPage = () => {
    const [value, setValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    const validUser = useSelector((state) => state.user.validUser);

    useEffect(() => {
        if (!validUser) {
            return history.replace({ pathname: "/forgot-password" });
        }
    });

    return (
        <Form
            formTitle={"Восстановление пароля"}
            buttonText={"Сохранить"}
            firstQuestion={"Вспомнили пароль?"}
            fistQuestionLinkText={"Войти"}
            ForwardLinkFirst={"/login"}
            FormSubmitFunc={(e) => {
                e.preventDefault();
                dispatch(resetPassword({ password: passwordValue, token: value }));
                history.replace("/login");
            }}
            ForwardLinkSecond={""}
            firstQuestionLinkText={""}
            secondQuestion={""}
            secondQuestionLinkText={""}
        >
            <li className={`mt-6`}>
                <PasswordInput
                    value={passwordValue}
                    name={"password"}
                    placeholder={"Введите новый пароль"}
                    onChange={(e) => {
                        setPasswordValue(e.target.value);
                    }}
                />
            </li>
            <li className={`mt-6`}>
                <Input
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    type={"text"}
                    placeholder={"Введите код из письма"}
                    name={"email"}
                />
            </li>
        </Form>
    );
};
