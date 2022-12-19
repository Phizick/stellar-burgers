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
import {useDispatch, useSelector} from "react-redux";
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
import {OrderInfo} from "../OrderInfo/OrderInfo";
import {useRouteMatch} from "react-router-dom";
import OrderDetails from "../OrderDetails/OrderDetails";

const RoutesSwitchHandler = () => {
    const history = useHistory();
    const location = useLocation();
    const background = location.state?.background;
    const dispatch = useDispatch()
    const [isOpenedIngredientsModal, setModalIngredientsState] = useState(false);
    const orderNumber = useSelector(state => state.order.order);
    const orderRoute = useRouteMatch(['/profile/orders/:id','/feed/:id'])?.params?.id;


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
                <Route path='/feed'  exact>
                    <FeedPage/>
                </Route>
                <ProtectedRoute path='/profile' onlyForAuth={true} exact>
                    <ProfilePage />
                </ProtectedRoute>
                <Route path='/ingredients/:id' exact>
                    <IngredientDetails active={true}/>
                </Route>
                <ProtectedRoute path='/profile/orders' exact onlyForAuth={true}>
                    <ProfileOrdersHistoryPage/>
                </ProtectedRoute>
                <ProtectedRoute path='/profile/orders/:id' exact onlyForAuth={true}>
                        <OrderInfo/>
                    </ProtectedRoute>
                <Route path='/feed/:id' exact >
                        <OrderInfo/>
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
            )
            }
            {background && orderRoute && (
                <>
                <ProtectedRoute path='/profile/orders/:id' exact onlyForAuth={true}>
                <Modal title={""} closeModal={closeIngredientModal}
                isOpened={isOpenedIngredientsModal}>
                <OrderInfo/>
                </Modal>
                </ProtectedRoute>
                <Route path='/feed/:id' exact>
                <Modal title={""} closeModal={closeIngredientModal}
                isOpened={isOpenedIngredientsModal}>
                <OrderInfo/>
                </Modal>
                </Route>
                    </>
                )}
            {!!orderNumber &&
                <Modal title={''} closeModal={closeIngredientModal}
                       isOpened={isOpenedIngredientsModal}>
                    <OrderDetails/>
                </Modal>
            }


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
    }, [dispatch, cookie, userToken])

    return (
        <BrowserRouter>
            <RoutesSwitchHandler />
        </BrowserRouter>
    )
}


export default App;
