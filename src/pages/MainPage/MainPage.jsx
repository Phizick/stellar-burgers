import MainPageStyles from "./MainPage.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import BurgerIngredients from "../../components/BurgerIngredients/BurgerIngredients";
import Modal from "../../components/Modal/Modal";
import BurgerConstructor from "../../components/BurgerConstructor/BurgerConstructor";
import OrderDetails from "../../components/OrderDetails/OrderDetails";
import {clearOrderNum, MODAL_OPENED, setOrder} from "../../services/actions";
import { getCookie } from "../../utils/cookieFunc";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";

export const MainPage = (props) => {
    const dispatch = useDispatch();
    const [isOpenedOrderModal, setModalOrderState] = useState(false);
    const history = useHistory();
    const { ingredientsAdded } = useSelector(state => state.burgerIngredients)




    const openOrderModal = () => {
        const refreshToken = localStorage.getItem("refreshToken");
        const accessToken = getCookie("accessToken");
        if (refreshToken && accessToken) {
            dispatch({
                type: MODAL_OPENED,
                payload: {
                    isOpened: true,
                    modalType: 'setOrder'
                }
            })
            dispatch(setOrder(ingredientsAdded));
        } else {
            history.push("/login");
        }
    };



    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <main className={MainPageStyles.mainContent}>
                    <BurgerIngredients activeModal={props.openModal} />
                    <BurgerConstructor openModal={openOrderModal} />
                </main>
            </DndProvider>
        </>
    );
};


