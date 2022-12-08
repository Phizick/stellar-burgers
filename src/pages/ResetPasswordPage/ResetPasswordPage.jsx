import React from "react";
import { useEffect } from "react";
import { Form } from "../../components/Form/Form";
import { Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { resetPassword } from "../../services/actions/user";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import {useForm} from "../../services/hooks/useForm";

export const ResetPasswordPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const validUser = useSelector((state) => state.user.validUser);
    const {values, handleChange} = useForm({ password: '', token: ''});

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
                dispatch(resetPassword(values));
                history.replace("/login");
            }}
            ForwardLinkSecond={""}
            firstQuestionLinkText={""}
            secondQuestion={""}
            secondQuestionLinkText={""}
        >
            <li className={`mt-6`}>
                <PasswordInput
                    value={values.password}
                    name={"password"}
                    placeholder={"Введите новый пароль"}
                    onChange={handleChange}
                />
            </li>
            <li className={`mt-6`}>
                <Input
                    value={values.token}
                    onChange={handleChange}
                    type={"text"}
                    placeholder={"Введите код из письма"}
                    name={"token"}
                />
            </li>
        </Form>
    );
};
