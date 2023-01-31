/**
 * главный компонент приложения 'Звездная бургерная'. Содержит список ингредиентов и конструктор бургеров
 * @component
 * @returns
 * разметку страницы, содержащую компоненты BurgerIngredients / AppHeader / BurgerConstructor / Modal
 */

import React, {useEffect, FC} from "react";
import { AppHeader } from "../AppHeader/AppHeader";
import { MainPage } from "../../pages/MainPage/MainPage";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { RegisterPage } from "../../pages/RegisterPage/RegisterPage";
import { ForgotPasswordPage } from "../../pages/ForgotPasswordPage/ForgotPasswordPage";
import { ResetPasswordPage } from "../../pages/ResetPasswordPage/ResetPasswordPage";
import { ProfilePage } from "../../pages/ProfilePage/ProfilePage";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import {useDispatch} from "../../services/hooks/hooks";
import { getIngredients } from "../../services/actions/ingredients";
import { Switch, Route, BrowserRouter as Router  } from "react-router-dom";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import { getCookie } from "../../utils/cookieFunc";
import { getUser, updateUserToken } from "../../services/actions/user";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { FeedPage } from "../../pages/FeedPage/FeedPage";
import { OrderInfo } from "../OrderInfo/OrderInfo";
import ModalSwitcher from "../../services/hocs/ModalSwitcher";
import { IngredientPage } from "../../pages/IngredientPage/IngredientPage";
import { OrderPage } from "../../pages/OrderPage/OrderPage";
import OrderDetails from "../OrderDetails/OrderDetails";

const App: FC = () => {
    const dispatch = useDispatch();
    const cookie = getCookie("accessToken");
    const userToken = localStorage.getItem("refreshToken");

    useEffect(() => {
        dispatch(getIngredients());
    }, [dispatch]);

    useEffect(() => {
        if (!cookie && userToken) {
            dispatch(updateUserToken());
        } else {
            dispatch(getUser());
        }
    }, [dispatch, cookie, userToken]);


    return (
        <Router>
            <AppHeader />
            <Switch>
                <Route exact path="/" >
                    <ModalSwitcher ModalComponent={OrderDetails} PageComponent={MainPage} nameOfModal={"setOrder"} modalTitle={""} />
                </Route>
                <ProtectedRoute path="/profile/orders/:id" exact onlyForAuth={true}>
                    <ModalSwitcher ModalComponent={OrderInfo} PageComponent={OrderPage} nameOfModal={"profileOrderModal"} modalTitle={''} />
                </ProtectedRoute>
                <ProtectedRoute path="/login" onlyForAuth={false} exact>
                    <LoginPage />
                </ProtectedRoute>
                <ProtectedRoute path="/register" onlyForAuth={false} exact>
                    <RegisterPage />
                </ProtectedRoute>
                <ProtectedRoute path="/forgot-password" onlyForAuth={false} exact>
                    <ForgotPasswordPage />
                </ProtectedRoute>
                <ProtectedRoute path="/reset-password" onlyForAuth={false} exact>
                    <ResetPasswordPage />
                </ProtectedRoute>
                <Route path="/feed" exact>
                    <FeedPage />
                </Route>
                <ProtectedRoute path="/profile" onlyForAuth={true}>
                    <ProfilePage />
                </ProtectedRoute>
                <Route path="/ingredients/:id" exact>
                    <ModalSwitcher ModalComponent={IngredientDetails} PageComponent={IngredientPage} nameOfModal={"ingredientModal"} modalTitle={"Детали ингридиента"} />
                </Route>
                <Route path="/feed/:id" exact>
                    <ModalSwitcher ModalComponent={OrderInfo} PageComponent={OrderPage} nameOfModal={"orderModal"} modalTitle={''} />
                </Route>
                <Route path="*" exact>
                    <ErrorPage />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
