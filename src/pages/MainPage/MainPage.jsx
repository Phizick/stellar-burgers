import MainPageStyles from './MainPage.module.css';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import BurgerIngredients from "../../components/BurgerIngredients/BurgerIngredients";
import Modal from "../../components/Modal/Modal";
import BurgerConstructor from "../../components/BurgerConstructor/BurgerConstructor";
import IngredientDetails from "../../components/IngredientDetails/IngredientDetails";
import OrderDetails from "../../components/OrderDetails/OrderDetails";
import {clearIngredientDetails, getIngredientDetails, setOrder} from "../../services/actions";

export const MainPage = () => {
    const dispatch = useDispatch();
    const [isOpenedOrderModal, setModalOrderState] = useState(false);
    const [isOpenedIngredientsModal, setModalIngredientsState] = useState(false);
    const ingredients = useSelector((store) => store.ingredients.data);

    const openIngredientModal = (i) => {
        dispatch(getIngredientDetails(i));
        setModalIngredientsState(true);
    };

    const closeIngredientModal = () => {
        dispatch(clearIngredientDetails());
        setModalIngredientsState(false);
    };


    const openOrderModal = () => {
        setModalOrderState(true);
        dispatch(setOrder(ingredients.map((item) => item._id)));
    };

    const closeOrderModal = () => {
        setModalOrderState(false);
    };

    return (
        <>

                        <DndProvider backend={HTML5Backend}>
                            <main className={MainPageStyles.mainContent}>
                                <BurgerIngredients activeModal={openIngredientModal} />
                                <BurgerConstructor openModal={openOrderModal} />
                            </main>
                        </DndProvider>
                        <Modal title={"Детали ингредиента"} closeModal={closeIngredientModal} isOpened={isOpenedIngredientsModal}>
                            <IngredientDetails />
                         </Modal>
                         <Modal closeModal={closeOrderModal} isOpened={isOpenedOrderModal}>
                             <OrderDetails />
                         </Modal>
                     </>
    )
};