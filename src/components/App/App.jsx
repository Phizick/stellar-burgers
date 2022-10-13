/**
 * главный компонент приложения 'Звездная бургерная'. Содержит список ингредиентов и конструктор бургеров
 * @component
 * @returns
 * разметку страницы, содержащую компоненты BurgerIngredients / AppHeader / BurgerConstructor / Modal
 */


import React,{useState, useEffect} from 'react';
import {AppHeader} from '../AppHeader/AppHeader';
import stylesApp from '../App/App.module.css'
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import Modal from '../Modal/Modal'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";
import { useSelector, useDispatch } from "react-redux";
import {clearIngredientDetails, getIngredientDetails, getIngredients, setOrder} from '../../services/actions/index'
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";

const App = () => {
    const dispatch = useDispatch();
    const ingredients = useSelector(store => store.ingredients.data);
    const [isOpenedOrderModal, setModalOrderState] = useState(false)
    const [isOpenedIngredientsModal, setModalIngredientsState] = useState(false)


    useEffect(() => {
        dispatch(getIngredients())
    }, [dispatch])


    const openOrderModal = () => {
        setModalOrderState(true);
        dispatch(
            setOrder(ingredients.map(item => item._id))
        )
    }

    const closeOrderModal = () => {
        setModalOrderState(false)
    };

    const openIngredientModal = (i) => {
        dispatch(getIngredientDetails(i));
        setModalIngredientsState(true)
    }

    const closeIngredientModal = () => {
        dispatch(clearIngredientDetails())
        setModalIngredientsState(false);

    }


    return (
        <>
            <AppHeader />
            <DndProvider backend={HTML5Backend}>
            <main className={stylesApp.mainContent}>
                        <BurgerIngredients  activeModal={openIngredientModal}/>
                        <BurgerConstructor openModal={openOrderModal}/>
            </main>
                </DndProvider>
            <Modal  title={"Детали ингредиента"} closeModal={closeIngredientModal} isOpened={isOpenedIngredientsModal}>
                <IngredientDetails />
            </Modal>
            <Modal activeModal={openOrderModal} closeModal={closeOrderModal} isOpened={isOpenedOrderModal}>
                <OrderDetails />
            </Modal>
        </>
    )
};
export default App




