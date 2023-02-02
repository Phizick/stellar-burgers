import {getUser, patchUser} from "../../services/actions/user";
import stylesProfile from "../../pages/ProfilePage/ProfilePage.module.css";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useEffect, FC} from "react";
import {useAppDispatch, useAppSelector} from "../../services/hooks/hooks";
import {useForm} from "../../services/hooks/useForm";
import {ProfileNavigation} from "../ProfileNavigation/ProfileNavigation";
import {getUserInfo} from "../../services/selectors/userSelectors";

export const ProfileEditForm: FC = () => {
    const { name, email } = useAppSelector(getUserInfo);
    const user = useAppSelector(getUserInfo);
    const dispatch = useAppDispatch();

    const {values, handleChange, setValues} = useForm({ email: '', name: '', password: ''});

    useEffect(() => {
        if (user) {
            dispatch(getUser());
            setValues({name: name, email: email, password: ''});
        }
    }, []);

    const restoreChanges = () => {
        setValues({email: email, name: name, password: ''});
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
                            value={values?.name}
                            onChange={handleChange}
                            type={"text"}
                            placeholder={"Имя"}
                            name={"name"}
                            icon={"EditIcon"}
                            error={false}
                        />
                    </li>
                    <li className={`mt-6`}>
                        <Input
                            value={values.email || ''}
                            onChange={handleChange}
                            placeholder={"Email"}
                            name={"email"}
                            icon={"EditIcon"}
                            error={false}
                        />
                    </li>
                    <li className={`mt-6`}>
                        <PasswordInput
                            value={values.password}
                            name={"password"}
                            onChange={handleChange}
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
    )
}