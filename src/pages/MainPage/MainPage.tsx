import MainPageStyles from "./MainPage.module.css";
import {useAppDispatch, useAppSelector} from "../../services/hooks/hooks";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import BurgerIngredients from "../../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../../components/BurgerConstructor/BurgerConstructor";
import {MODAL_OPENED} from "../../services/actions/actionsTypes/modalTypes";
import { getCookie } from "../../utils/cookieFunc";
import {useHistory} from "react-router-dom";
import { setOrder} from "../../services/actions/order";
import {getSelectedIngredient} from "../../services/selectors/burgerIngredientsSelectors";
import { FC } from 'react'

export const MainPage: FC = () => {
    const dispatch = useAppDispatch();
    const history = useHistory();
    const { ingredientsAdded } = useAppSelector(getSelectedIngredient);

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
                    <BurgerIngredients/>
                    <BurgerConstructor openModal={openOrderModal} />
                </main>
            </DndProvider>
        </>
    );
};


