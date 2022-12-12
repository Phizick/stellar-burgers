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
import {ProfileOrdersHistoryPage} from "../../pages/ProfileOrdersHistoryPage/ProfileOrdersHistoryPage";
import {FeedPage} from "../../pages/FeedPage/FeedPage";

const RoutesSwitchHandler = () => {
    const history = useHistory();
    const location = useLocation();
    const background = location.state?.background;
    const dispatch = useDispatch()
    const [isOpenedIngredientsModal, setModalIngredientsState] = useState(false);

    const closeIngredientModal = () => {
        dispatch(clearIngredientDetails());
        setModalIngredientsState(false);
        history.goBack()
    };

    const openIngredientModal = (data) => {
        setModalIngredientsState(true)
        dispatch(getIngredientDetails(data))
    }

    return (
        <>
            <AppHeader />
            <Switch location={ background || location}>
                <Route path='/' exact>
                    <MainPage openModal={openIngredientModal}/>
                </Route>
                <ProtectedRoute path='/login' onlyForAuth={false} exact>
                    <LoginPage />
                </ProtectedRoute>
                <ProtectedRoute path='/register' onlyForAuth={false} exact>
                    <RegisterPage />
                </ProtectedRoute>
                <ProtectedRoute path='/forgot-password' onlyForAuth={false} exact>
                    <ForgotPasswordPage />
                </ProtectedRoute>
                <ProtectedRoute path='/reset-password' onlyForAuth={false} exact>
                    <ResetPasswordPage />
                </ProtectedRoute>
                <Route path='/orders'  exact>
                    <FeedPage/>
                </Route>
                <Route path='/feed/123' exact>

                </Route>
                <ProtectedRoute path='/profile' onlyForAuth={true} exact>
                    <ProfilePage />
                </ProtectedRoute>
                <Route path='/ingredients/:id' exact>
                    <IngredientDetails active={true}/>
                </Route>
                <Route path='/profile/orders' exact>
                    <ProfileOrdersHistoryPage/>
                </Route>
                <Route path='*'>
                    <ErrorPage/>
                </Route>
            </Switch>
            {background && (
                <Route path='/ingredients/:id' exact>
                    <Modal title={"Детали ингредиента"} closeModal={closeIngredientModal}
                               isOpened={isOpenedIngredientsModal}>
                            <IngredientDetails active={false}/>
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
