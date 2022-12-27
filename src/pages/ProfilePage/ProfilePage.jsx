import React, { useEffect, useState} from "react";
import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import stylesProfile from "./ProfilePage.module.css";
import { ProfileNavigation } from "../../components/ProfileNavigation/ProfileNavigation";
import { useDispatch, useSelector } from "react-redux";
import { getUser, patchUser } from "../../services/actions/user";
import {useForm} from "../../services/hooks/useForm";
import {ProfileOrdersHistoryPage} from "../ProfileOrdersHistoryPage/ProfileOrdersHistoryPage";
import {Route} from "react-router-dom";
import {WS_CONNECTION_START, WS_CONNECTION_STOP} from "../../services/actions/wsActions";
import {ProfileEditForm} from "./ProfileEditForm";



export const ProfilePage = () => {
   const dispatch = useDispatch()

    const { data } = useSelector(state => state?.wsOrders)




    useEffect(() => {
        dispatch({
            type: WS_CONNECTION_START,
            payload: {
                url: 'wss://norma.nomoreparties.space/orders',
                isAuth: true
            }
        })
        return () => {
            dispatch({
                type: WS_CONNECTION_STOP
            })
        }
    }, [dispatch])



    return (
        <>
            <Route path={'/profile'} exact>
                <ProfileEditForm/>
            </Route>

        <Route path={'/profile/orders'} exact>
            <ProfileOrdersHistoryPage orders={data} />
        </Route>

            </>

    );
};
