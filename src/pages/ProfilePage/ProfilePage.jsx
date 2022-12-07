import React, { useEffect } from "react";
import { useState } from "react";

import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";

import stylesProfile from "./ProfilePage.module.css";
import { ProfileNavigation } from "../../components/ProfileNavigation/ProfileNavigation";
import { useDispatch, useSelector } from "react-redux";
import { getUser, patchUser } from "../../services/actions/user";

export const ProfilePage = () => {
    const [value, setValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [userName, setUserName] = useState("");
    const name = useSelector((state) => state.user.user.name);
    const login = useSelector((state) => state.user.user.email);
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            dispatch(getUser());
            setUserName(name);
            setValue(login);
        }
    }, []);

    const restoreChanges = () => {
        setUserName(name);
        setValue(login);
    };

    return (
        <div className={stylesProfile.container}>
            <ProfileNavigation active={true} isActive={false} />
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(patchUser(value, userName, passwordValue));
                }}
            >
                <ul className={stylesProfile.inputList}>
                    <li className={`mt-6`}>
                        <Input
                            value={userName}
                            onChange={(e) => {
                                setUserName(e.target.value);
                            }}
                            type={"text"}
                            placeholder={"Имя"}
                            name={"email"}
                            extraClass="ml-1"
                            icon={"EditIcon"}
                            error={false}
                        />
                    </li>
                    <li className={`mt-6`}>
                        <Input
                            value={value}
                            onChange={(e) => {
                                setValue(e.target.value);
                            }}
                            placeholder={"Email"}
                            name={"email"}
                            icon={"EditIcon"}
                        />
                    </li>
                    <li className={`mt-6`}>
                        <PasswordInput
                            value={passwordValue}
                            name={"password"}
                            onChange={(e) => {
                                setPasswordValue(e.target.value);
                            }}
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
