import React from 'react';
import {BurgerIcon,ListIcon,Logo,ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyles from './AppHeader.module.css'

export const AppHeader = () => {
    return (
        <header className={headerStyles.header}>
            <nav className={`${headerStyles.nav} pb-4 pt-4`}>
                <ul className={headerStyles.ul}>
                    <li className={`${headerStyles.li} pr-4`}>
                        <BurgerIcon type={"primary"}/>
                        <p className={'text text_type_main-default pl-2'}>Конструктор</p>
                    </li>
                    <li className={'headers-li pr-4'}>
                        <ListIcon type={"secondary"}/>
                        <p className={'text text_type_main-default text_color_inactive pl-2'}>Лента заказов</p>
                    </li>
                </ul>
                <Logo />
                <ul className={headerStyles.ul}>
                    <li className={`${headerStyles.li} pr-4`}>
                        <ProfileIcon type={"secondary"}/>
                        <p className={'text text_type_main-default text_color_inactive pl-2'}>Личный кабинет</p>
                    </li>
                </ul>
            </nav>
        </header>
    )
}