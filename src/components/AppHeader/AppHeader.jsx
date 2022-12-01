/**
 * Компонент шапки страницы
 * @component
 * @returns
 * разметку шапки страницы, содержащую логотип, ссылки на "личный кабинет", "конструктор" и "ленту заказов".
 */

import React from "react";
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import stylesAppHeader from "./AppHeader.module.css";
import {NavLink} from "react-router-dom";

export const AppHeader = () => {
    return (
        <header className={stylesAppHeader.header}>
            <nav className={`${stylesAppHeader.nav} pb-4 pt-4`}>
                <ul className={stylesAppHeader.ul}>
                    <li className={`${stylesAppHeader.li} pr-4`}>
                        <a className={`${stylesAppHeader.headerLink} pl-5 pr-5`}>
                            <BurgerIcon type={"primary"} />
                            <p className={"text text_type_main-default pl-2"}>Конструктор</p>
                        </a>
                    </li>
                    <li className={`${stylesAppHeader.li} pr-4`}>
                        <a className={`${stylesAppHeader.headerLink} pl-5 pr-5`}>
                            <ListIcon type={"secondary"} />
                            <p className={"text text_type_main-default text_color_inactive pl-2"}>Лента заказов</p>
                        </a>
                    </li>
                </ul>
                <NavLink to={'/'}>
                <Logo />
                </NavLink>
                <ul className={stylesAppHeader.ul}>
                    <li className={`${stylesAppHeader.li} pr-4`}>
                        <a className={`${stylesAppHeader.headerLink} pl-5 pr-5`}>
                            <ProfileIcon type={"secondary"} />

                            <NavLink to={'/login'}>
                            <p className={"text text_type_main-default text_color_inactive pl-2"}>Личный кабинет</p>
                            </NavLink>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
