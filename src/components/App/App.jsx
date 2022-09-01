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

const App = () => {
    const [ingredients, setIngredients] = useState([])
    const [isOpened, setModalState] = useState(false)
    const [target, setTarget] = useState('')
    const [selectedElement, setSelectedElement] = useState({})

    const handleOpenState = () => {
        setModalState(!isOpened)
    }
    const selectElement = (i) => {
        setSelectedElement(i)
    }

    useEffect(() => {
        const getResponse = async () => {
            try {
                const res = await fetch(apiUrl)
                if (res.status !== 200) {
                    throw new Error('error')
                }
                const resData = await res.json()
                setIngredients(resData.data)
            } catch (err) {
                console.error(err)
            }
        }
        getResponse()
    }, [])

    return (
        <>
            <AppHeader />
            <main className={stylesApp.mainContent}>
                {ingredients.length &&
                    <>
                        <BurgerIngredients data={ingredients} openModal={(e) => {
                            setTarget(e.target.tagName)
                            handleOpenState()}
                        } selectElement={selectElement}/>
                        <BurgerConstructor data={ingredients} openModal={(e) => {
                            handleOpenState()
                            setTarget(e.target.tagName)
                        }
                        }/>
                    </>
                }
            </main>
            {isOpened &&
                <Modal
                    target={target}
                    handleOpenState={handleOpenState}
                    closeModal={handleOpenState}
                    handleActive={selectElement}
                    selectedElement={selectedElement}
                    activeModal={isOpened}
                />
            }
        </>
    )
}
export default App