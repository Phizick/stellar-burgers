/**
 * Компонент шапки страницы
 * @component
 * @returns
 * разметку шапки страницы, содержащую логотип, ссылки на "личный кабинет", "конструктор" и "ленту заказов".
 */

import React from "react";
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import stylesAppHeader from "./AppHeader.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const AppHeader = () => {
    const [linkState, setLinkState] = useState<string>("constructor");

    return (
        <header className={stylesAppHeader.header}>
            <nav className={`${stylesAppHeader.nav} pb-4 pt-4`}>
                <ul className={stylesAppHeader.ul}>
                    <li className={`${stylesAppHeader.li} pr-4`}>
                        <Link to={"/"}
                              className={linkState === "constructor" ? stylesAppHeader.linkActive : stylesAppHeader.link}
                              onClick={() => setLinkState("constructor")}
                        >
                            <div className={`${stylesAppHeader.headerLink} pl-5 pr-5`}>
                                <BurgerIcon type={linkState === "constructor" ? "primary" : "secondary"} />
                                <p className={"text text_type_main-default pl-2"}>Конструктор</p>
                            </div>
                        </Link>
                    </li>
                    <Link to={"/feed"}
                          onClick={() => setLinkState("orders")}
                          className={linkState === "orders" ? stylesAppHeader.linkActive : stylesAppHeader.link}
                    >
                        <li className={`${stylesAppHeader.li} pr-4`}>
                            <div className={`${stylesAppHeader.headerLink} pl-5 pr-5`}>
                                <ListIcon type={linkState === "orders" ? "primary" : "secondary"} />
                                <p className={"text text_type_main-default pl-2"}>Лента заказов</p>
                            </div>
                        </li>
                    </Link>
                </ul>
                <Link to={"/"} onClick={() => setLinkState("")}>
                    <Logo />
                </Link>
                <ul className={stylesAppHeader.ul}>
                    <li className={`${stylesAppHeader.li} pr-4`}>
                        <Link to={"/profile"}
                              className={linkState === "profile" ? stylesAppHeader.linkActive : stylesAppHeader.link}
                              onClick={() => setLinkState("profile")}
                        >
                            <div className={`${stylesAppHeader.headerLink} pl-5 pr-5`}>
                                <ProfileIcon type={linkState === "profile" ? "primary" : "secondary"} />
                                <p className={"text text_type_main-default pl-2"}>Личный кабинет</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
