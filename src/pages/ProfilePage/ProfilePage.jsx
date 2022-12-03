import React from "react";
import {useState} from "react";

import {EmailInput, Input, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink} from "react-router-dom";
import stylesProfile from './ProfilePage.module.css'

export const ProfilePage = () => {
    const [value, setValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('');
    const [userName, setUserName] = useState('');


    return (
        <div className={stylesProfile.container}>
            <div className={stylesProfile.nav}>
                <ul className={stylesProfile.navList}>
                    <li className={stylesProfile.navListItem}>
                        <NavLink to={'/profile'} className={stylesProfile.navLink}>
                            <p className={stylesProfile.text}>Профиль</p>
                        </NavLink>
                    </li>
                    <li className={stylesProfile.navListItem}>
                        <NavLink to={'/profile/orders'} className={stylesProfile.navLink}>
                            <p className={stylesProfile.text}>История заказов</p>
                        </NavLink>
                    </li>
                    <li className={stylesProfile.navListItem}>
                        <NavLink to={'/profile'} className={stylesProfile.navLink}>
                            <p className={stylesProfile.text}>Выход</p>
                        </NavLink>
                    </li>
                    <p className={stylesProfile.about}>В этом разделе вы можете
                        изменить свои персональные данные</p>
                </ul>
            </div>

            <form>
                <ul className={stylesProfile.inputList}>
            <li className={`mt-6`}>
                <Input value={userName}
                       onChange={(e) => {
                           setUserName(e.target.value)
                       }}
                       type={'text'}
                       placeholder={'Имя'}
                       name={'email'}
                       extraClass="ml-1"
                       icon={'EditIcon'}
                />
            </li>
            <li className={`mt-6`}>
                <EmailInput value={value}
                            onChange={(e) => {
                                setValue(e.target.value)
                            }}
                            type={'email'}
                            placeholder={'E-mail'}
                            name={'email'}
                />
            </li>
            <li className={`mt-6`}>
                <PasswordInput
                    value={passwordValue}
                    name={'password'}
                    onChange={(e) => {
                        setPasswordValue(e.target.value)
                    }}
                    extraClass="ml-1"
                    icon={'EditIcon'}
                />
            </li>
                </ul>
            </form>
        </div>
    )
};
