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
import {getIngredients, getIngredient, deleteIngredient} from '../../services/actions/index'

const App = () => {
    const dispatch = useDispatch();
    const ingredients = useSelector(state => state.ingredients.ingredients)
    const [isOpenedIngredientsModal, setModalIngredientsState] = useState(false)
    const [isOpenedOrderModal, setModalOrderState] = useState(false)
    // const [currentIngredient, setCurrentIngredient] = useState({})
console.log(typeof ingredients)
    useEffect(() => {
        dispatch(getIngredients())
    }, [dispatch])

    const handleOrderState = () => {
        setModalOrderState(!isOpenedOrderModal)
    };
    const handleIngredientState = (i) => {
        dispatch(getIngredient(i));
        setModalIngredientsState(true)
    };
    const closeOrderModal = () => {
        dispatch(deleteIngredient())
        setModalOrderState(false)
    };
    const closeIngredientModal = () => {
        setModalIngredientsState(false)
    };

    return (
        <>
            <AppHeader />
            <main className={stylesApp.mainContent}>
                {ingredients &&
                    <>
                        <BurgerIngredients openModal={handleIngredientState} />
                        <BurgerConstructor openModal={handleOrderState}/>
                    </>
                }
            </main>
            <Modal activeModal={isOpenedIngredientsModal} title={"Детали ингредиента"} closeModal={closeIngredientModal}>
                <IngredientDetails />
            </Modal>
            <Modal activeModal={isOpenedOrderModal} closeModal={closeOrderModal} >
                <OrderDetails />
            </Modal>
        </>
    )
};
export default App




