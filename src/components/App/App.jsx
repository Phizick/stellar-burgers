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
import {apiUrl} from "../../utils/constants";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";

const App = () => {
    const [ingredients, setIngredients] = useState([])
    const [isOpenedIngredientsModal, setModalIngredientsState] = useState(false)
    const [isOpenedOrderModal, setModalOrderState] = useState(false)
    const [currentIngredient, setCurrentIngredient] = useState({})

    const handleOrderState = () => {
        setModalOrderState(!isOpenedOrderModal)
    }
    const handleIngredientState = (i) => {
        setCurrentIngredient(i);
        setModalIngredientsState(t => !t)
    }

    const closeOrderModal = () => {
        setModalOrderState(false)
    }

    const closeIngredientModal = () => {
        setModalIngredientsState(false)
    }

    useEffect(() => {
        fetch(apiUrl)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(res.status);
            })
            .then(response => setIngredients(response.data))
            .catch(err => console.error(err))
    }, [])

    return (
        <>
            <AppHeader />
            <main className={stylesApp.mainContent}>
                {ingredients.length &&
                    <>
                        <BurgerIngredients data={ingredients} openModal={handleIngredientState} />
                        <BurgerConstructor data={ingredients} openModal={handleOrderState}/>
                    </>
                }
            </main>
            <Modal activeModal={isOpenedIngredientsModal}  handleModalState={handleIngredientState} title={"Детали ингредиента"} closeModal={closeIngredientModal}>
                <IngredientDetails selectedElement={currentIngredient}/>
            </Modal>
            <Modal activeModal={isOpenedOrderModal} handleModalState={handleOrderState} closeModal={closeOrderModal} >
                <OrderDetails />
            </Modal>
        </>
    )
};
export default App