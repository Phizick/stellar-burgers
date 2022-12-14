import { Form } from "../../components/Form/Form";
import { Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { registerUser } from "../../services/actions/user";
import {useForm} from "../../services/hooks/useForm";

export const RegisterPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {values, handleChange} = useForm({ email: '', name: '', password: ''});

        return (
            <Form
                formTitle={"Регистрация"}
                buttonText={"Зарегистрироваться"}
                firstQuestion={"Уже зарегистрированы?"}
                fistQuestionLinkText={"Войти"}
                ForwardLinkFirst={"/login"}
                FormSubmitFunc={(e) => {
                    e.preventDefault();
                    dispatch(registerUser(values, history));
                }}
                ForwardLinkSecond={""}
                firstQuestionLinkText={""}
                secondQuestion={""}
                secondQuestionLinkText={""}
            >
                <li className={`mt-6`}>
                    <Input
                        value={values.name}
                        onChange={handleChange}
                        type={"text"}
                        placeholder={"Имя"}
                        name={"name"}
                    />
                </li>
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
