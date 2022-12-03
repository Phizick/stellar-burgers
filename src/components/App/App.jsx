/**
 * главный компонент приложения 'Звездная бургерная'. Содержит список ингредиентов и конструктор бургеров
 * @component
 * @returns
 * разметку страницы, содержащую компоненты BurgerIngredients / AppHeader / BurgerConstructor / Modal
 */

import React, {  useEffect } from "react";
import { AppHeader } from "../AppHeader/AppHeader";
import {MainPage} from "../../pages/MainPage/MainPage";
import {LoginPage} from "../../pages/LoginPage/LoginPage";
import {RegisterPage} from "../../pages/RegisterPage/RegisterPage";
import {ForgotPasswordPage} from "../../pages/ForgotPasswordPage/ForgotPasswordPage";
import {ResetPasswordPage} from "../../pages/ResetPasswordPage/ResetPasswordPage";
import {ProfilePage} from "../../pages/ProfilePage/ProfilePage";
import { useDispatch } from "react-redux";
import {
    getIngredients
} from "../../services/actions/index";

import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import {ErrorPage} from "../../pages/ErrorPage/ErrorPage";

const RoutesSwitchHandler = () => {

    return (
        <>
            <AppHeader />
            <Switch>
                <Route path='/' exact={true}>
                    <MainPage />
                </Route>
                <Route path='/login' exact={true}>
                    <LoginPage />
                </Route>
                <Route path='/register' exact={true}>
                    <RegisterPage />
                </Route>
                <Route path='/forgot-password' exact={true}>
                    <ForgotPasswordPage />
                </Route>
                <Route path='/reset-password' exact={true}>
                    <ResetPasswordPage />
                </Route>
                <Route path='/profile' exact={true}>
                    <ProfilePage />
                </Route>
                <Route path='*'>
                    <ErrorPage/>
                </Route>
            </Switch>

        </>
    )
};

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getIngredients());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <RoutesSwitchHandler />
        </BrowserRouter>
    )
}


export default App;
