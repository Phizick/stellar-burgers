import { useState } from "react";
import { Form } from "../../components/Form/Form";
import { Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { registerUser } from "../../services/actions/user";
import { getCookie } from "../../utils/cookieFunc";

export const RegisterPage = () => {
    const [value, setValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [userName, setUserName] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const refreshToken = localStorage.getItem("refreshToken");
    const accessToken = getCookie("accessToken");
    if (refreshToken && accessToken) {
        history.push("/");
    } else {
        return (
            <Form
                formTitle={"Регистрация"}
                buttonText={"Зарегистрироваться"}
                firstQuestion={"Уже зарегистрированы?"}
                fistQuestionLinkText={"Войти"}
                ForwardLinkFirst={"/login"}
                FormSubmitFunc={(e) => {
                    e.preventDefault();
                    dispatch(registerUser(value, passwordValue, userName, history));
                }}
                ForwardLinkSecond={""}
                firstQuestionLinkText={""}
                secondQuestion={""}
                secondQuestionLinkText={""}
            >
                <li className={`mt-6`}>
                    <Input
                        value={userName}
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }}
                        type={"text"}
                        placeholder={"Имя"}
                        name={"name"}
                    />
                </li>
                <li className={`mt-6`}>
                    <Input
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value);
                        }}
                        type={"email"}
                        placeholder={"E-mail"}
                        name={"email"}
                    />
                </li>
                <li className={`mt-6`}>
                    <PasswordInput
                        value={passwordValue}
                        name={"password"}
                        onChange={(e) => {
                            setPasswordValue(e.target.value);
                        }}
                    />
                </li>
            </Form>
        );
    }
};
