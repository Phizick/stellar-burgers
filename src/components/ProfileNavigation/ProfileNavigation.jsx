import { NavLink } from "react-router-dom";
import React from "react";
import stylesProfile from "./ProfileNavigation.module.css";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../services/actions/user";
import PropTypes from "prop-types";

export const ProfileNavigation = (props) => {
    const dispatch = useDispatch();

    return (
        <>
            <ul className={stylesProfile.navList}>
                <li>
                    <NavLink to={"/profile"} className={stylesProfile.navLink}>
                        <p className={`${stylesProfile.text} ${props.active && stylesProfile.active}`}>Профиль</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/profile/orders"} className={stylesProfile.navLink}>
                        <p className={`${stylesProfile.text} ${props.isActive && stylesProfile.active}`}>История заказов</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/login"} className={stylesProfile.navLink} onClick={() => dispatch(logoutUser())}>
                        <p className={stylesProfile.text}>Выход</p>
                    </NavLink>
                </li>
                <p className={`${stylesProfile.about} ${props.isActive && stylesProfile.disabled}`}>
                    В этом разделе вы можете изменить свои персональные данные
                </p>
            </ul>
    </>
    );
};

ProfileNavigation.propTypes = {
    active: PropTypes.bool.isRequired,
    isActive: PropTypes.bool.isRequired,
};
