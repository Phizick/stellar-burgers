import React, {FormEvent} from "react";
import { useEffect, FC } from "react";
import { Form } from "../../components/Form/Form";
import { Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { resetPassword } from "../../services/actions/user";
import { useHistory } from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../services/hooks/hooks";
import {useForm} from "../../services/hooks/useForm";
import {getUserData} from "../../services/selectors/userSelectors";

export const ResetPasswordPage: FC = () => {
    const dispatch = useAppDispatch();
    const history = useHistory();
    const {validUser} = useAppSelector(getUserData);
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
            firstQuestionLinkText={"Войти"}
            ForwardLinkFirst={"/login"}
            FormSubmitFunc={(e: FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                dispatch(resetPassword(values));
                history.replace("/login");
            }}
            ForwardLinkSecond={""}
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
