/**
 * главный компонент приложения 'Звездная бургерная'. Содержит список ингредиентов и конструктор бургеров
 * @component
 * @returns
 * разметку страницы, содержащую компоненты BurgerIngredients / AppHeader / BurgerConstructor / Modal
 */

import React, {  useEffect } from "react";
import { AppHeader } from "../AppHeader/AppHeader";
import {MainPage} from "../../pages/MainPage/MainPage";
import { useDispatch } from "react-redux";
import {
    getIngredients
} from "../../services/actions/index";

import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

const RoutesSwitchHandler = () => {
    return (
        <>
            <AppHeader />
            <Switch>
                <Route path='/' exact={true}>
                    <MainPage />
                </Route>
                {/*<Route path='/login' exact={true}>*/}
                {/*    <LoginPage />*/}
                {/*</Route>*/}
                {/*<Route path='/register' exact={true}>*/}
                {/*    <RegisterPage />*/}
                {/*</Route>*/}
                {/*<Route path='/forgot-password' exact={true}>*/}
                {/*    <ForgotPasswordPage />*/}
                {/*</Route>*/}
                {/*<Route path='/reset-password' exact={true}>*/}
                {/*    <ResetPasswordPage />*/}
                {/*</Route>*/}
                {/*<Route path='/profile' exact={true}>*/}
                {/*    <ProfilePage />*/}
                {/*</Route>*/}
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
