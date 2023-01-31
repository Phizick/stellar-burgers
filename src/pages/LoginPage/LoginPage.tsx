import React, {FormEvent, FC} from "react";
import { Form } from "../../components/Form/Form";
import { Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch} from "../../services/hooks/hooks";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../services/actions/user";
import {useForm} from "../../services/hooks/useForm";



export const LoginPage: FC = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const {values, handleChange} = useForm({ email: '', password: ''});

        return (
            <Form
                formTitle={"Вход"}
                buttonText={"Войти"}
                firstQuestion={"Вы - новый пользователь?"}
                firstQuestionLinkText={"Зарегитрироваться"}
                ForwardLinkFirst={"/register"}
                secondQuestion={"Забыли пароль?"}
                secondQuestionLinkText={"Восстановить пароль"}
                ForwardLinkSecond={"/forgot-password"}
                FormSubmitFunc={(e: any) => {
                    e.preventDefault();
                    dispatch(loginUser(values, history));
                }}
            >
                <li className={`mt-6`}>
                    <Input
                        value={values.email}
                        onChange={handleChange}
                        type={"email"}
                        placeholder={"E-mail"}
                        name={"email"}
                    />
                </li>
                <li className={`mt-6`}>
                    <PasswordInput
                        value={values.password}
                        name={"password"}
                        onChange={handleChange}
                    />
                </li>
            </Form>
        );

};
