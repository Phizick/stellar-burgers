/**
 * главный компонент приложения 'Звездная бургерная'. Содержит список ингредиентов и конструктор бургеров
 * @component
 * @returns
 * разметку страницы, содержащую компоненты BurgerIngredients / AppHeader / BurgerConstructor / Modal
 */

import React, {useEffect, useState} from "react";
import { AppHeader } from "../AppHeader/AppHeader";
import {MainPage} from "../../pages/MainPage/MainPage";
import {LoginPage} from "../../pages/LoginPage/LoginPage";
import {RegisterPage} from "../../pages/RegisterPage/RegisterPage";
import {ForgotPasswordPage} from "../../pages/ForgotPasswordPage/ForgotPasswordPage";
import {ResetPasswordPage} from "../../pages/ResetPasswordPage/ResetPasswordPage";
import {ProfilePage} from "../../pages/ProfilePage/ProfilePage";
import {ProtectedRoute} from "../ProtectedRoute/ProtectedRoute";


import {useDispatch} from "react-redux";
import {
    clearIngredientDetails, getIngredientDetails,
    getIngredients
} from "../../services/actions/index";

import {
    BrowserRouter,
    Switch,
    Route, useLocation, useHistory
} from "react-router-dom";
import {ErrorPage} from "../../pages/ErrorPage/ErrorPage";
import {getCookie} from "../../utils/cookieFunc";
import {getUser, updateUserToken} from "../../services/actions/user";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import Modal from "../Modal/Modal";

const RoutesSwitchHandler = () => {
    const history = useHistory();
    const location = useLocation();
    const background = location.state && location.state.background;
    const dispatch = useDispatch()
    const [isOpenedIngredientsModal, setModalIngredientsState] = useState(false);
    // const ingredient = useSelector((state) => state.ingredientDetail.selectedIngredient)

    const closeIngredientModal = () => {
        dispatch(clearIngredientDetails());
        setModalIngredientsState(false);
        history.goBack()
    };



    const openIngredientModal = (data) => {
        setModalIngredientsState(true)
        dispatch(getIngredientDetails(data))
    }

    console.log(window.localStorage)






    return (
        <>
            <AppHeader />
            <Switch location={ background || location}>
                <Route path='/' exact={true}>
                    <MainPage openModal={openIngredientModal}/>
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
                <ProtectedRoute path='/profile' exact={true}>
                    <ProfilePage />
                </ProtectedRoute>
                <Route path='*'>
                    <ErrorPage/>
                </Route>
                <Route patch='/ingredients/:id' exact={true}>
                    <IngredientDetails active={true}/>
                </Route>
            </Switch>
            {background && (
                <Route patch='/ingredients/:id'>
                    <Modal title={"Детали ингредиента"} closeModal={closeIngredientModal} isOpened={isOpenedIngredientsModal}>
                        <IngredientDetails />
                    </Modal>
                </Route>
                )}

        </>
    )
};

const App = () => {
    const dispatch = useDispatch();
    const cookie = getCookie('accessToken')
    const userToken = localStorage.getItem('refreshToken')
    useEffect(() => {
        dispatch(getIngredients());
    }, [dispatch]);

    useEffect(() => {
        if (!cookie && userToken) {
            dispatch(updateUserToken())
        } else if (cookie && userToken) {
            dispatch(getUser())
        }
    }, [cookie, userToken])

    return (
        <BrowserRouter>
            <RoutesSwitchHandler />
        </BrowserRouter>
    )
}


export default App;
