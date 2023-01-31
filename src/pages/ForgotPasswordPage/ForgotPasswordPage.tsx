import React from "react";
import { Form } from "../../components/Form/Form";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { useHistory } from "react-router-dom";
import {useAppDispatch} from "../../services/hooks/hooks";
import forgotPassword from "../../services/actions/user";
import {useForm} from "../../services/hooks/useForm";
import { FC, FormEvent } from 'react'



export const ForgotPasswordPage: FC = () => {
    const history = useHistory();
    const dispatch = useAppDispatch();
    const {values, handleChange } = useForm({ email: ''});

        return (
            <Form
                formTitle={"Восстановление пароля"}
                buttonText={"Восстановить"}
                firstQuestion={"Вспомнили пароль?"}
                firstQuestionLinkText={"Войти"}
                ForwardLinkFirst={"/reset-password"}
                FormSubmitFunc={(e: FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    dispatch(forgotPassword(values.email));
                    history.push("/reset-password");
                }}
                ForwardLinkSecond={""}
                secondQuestion={""}
                secondQuestionLinkText={""}
            >
                <li className={`mt-6`}>
                    <Input
                        value={values.email}
                        onChange={handleChange}
                        size={"default"}
                        placeholder={"укажите e-mail"}
                        name={"email"}
                    />
                </li>
            </Form>
        );
};
