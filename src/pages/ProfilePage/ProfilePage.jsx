import React, { useEffect } from "react";
import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import stylesProfile from "./ProfilePage.module.css";
import { ProfileNavigation } from "../../components/ProfileNavigation/ProfileNavigation";
import { useDispatch, useSelector } from "react-redux";
import { getUser, patchUser } from "../../services/actions/user";
import {useForm} from "../../services/hooks/useForm";


export const ProfilePage = () => {
    const name = useSelector((state) => state.user.user.name);
    const login = useSelector((state) => state.user.user.email);
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

    const {values, handleChange, setValues} = useForm({ email: '', name: '', password: ''});

    useEffect(() => {
        if (user) {
            dispatch(getUser());
            setValues({name: name, email: login, password: ''});
        }
    }, []);

    const restoreChanges = () => {
        setValues({email: login, name: name, password: ''});
    };


    return (
        <div className={stylesProfile.container}>
            <ProfileNavigation active={true} isActive={false} />
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(patchUser(values));
                }}
            >
                <ul className={stylesProfile.inputList}>
                    <li className={`mt-6`}>
                        <Input
                            value={values.name}
                            onChange={handleChange}
                            type={"text"}
                            placeholder={"Имя"}
                            name={"name"}
                            extraClass="ml-1"
                            icon={"EditIcon"}
                            error={false}
                        />
                    </li>
                    <li className={`mt-6`}>
                        <Input
                            value={values.email}
                            onChange={handleChange}
                            placeholder={"Email"}
                            name={"email"}
                            icon={"EditIcon"}
                        />
                    </li>
                    <li className={`mt-6`}>
                        <PasswordInput
                            value={values.password}
                            name={"password"}
                            onChange={handleChange}
                            extraClass="ml-1"
                            icon={"EditIcon"}
                        />
                    </li>
                    <li className={stylesProfile.li}>
                        <div className={stylesProfile.btn}>
                            <Button type={"secondary"} size={"medium"} htmlType={"button"} onClick={restoreChanges}>
                                Отмена
                            </Button>
                            <Button type={"primary"} size={"medium"} htmlType={"submit"}>
                                Сохранить
                            </Button>
                        </div>
                    </li>
                </ul>
            </form>
        </div>
    );
};
