import {NavLink} from "react-router-dom";
import React from "react";
import stylesProfile from './ProfileNavigation.module.css'
import {useDispatch} from "react-redux";
import {logoutUser, updateUserToken} from "../../services/actions/user";


export const ProfileNavigation = (props) => {
    const dispatch = useDispatch();

    const logoutUserWithUpdateToken = () => {
        dispatch(updateUserToken());
        dispatch(logoutUser())
    }

return (
<div className={stylesProfile.container}>
    <div className={stylesProfile.nav}>
        <ul className={stylesProfile.navList}>
            <li className={stylesProfile.navListItem}>
                <NavLink to={'/profile'} className={stylesProfile.navLink}>
                    <p className={`${stylesProfile.text} ${props.active && stylesProfile.active}`}>Профиль</p>
                </NavLink>
            </li>
            <li className={stylesProfile.navListItem}>
                <NavLink to={'/profile/orders'} className={stylesProfile.navLink}>
                    <p className={stylesProfile.text}>История заказов</p>
                </NavLink>
            </li>
            <li className={stylesProfile.navListItem}>
                <NavLink to={'/profile'} className={stylesProfile.navLink} onClick={() => logoutUserWithUpdateToken()}>
                    <p className={stylesProfile.text}>Выход</p>
                </NavLink>
            </li>
            <p className={stylesProfile.about}>В этом разделе вы можете
                изменить свои персональные данные</p>
        </ul>
    </div>
</div>
    )
    }