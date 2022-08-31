import React,{useState, useEffect} from 'react';
import {AppHeader} from '../AppHeader/AppHeader';
import stylesApp from '../App/App.module.css'
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import Modal from '../Modal/Modal'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'

const App = () => {
    const [ingredients, setIngredients] = useState([])
    const [isOpened, setOpenedModal] = useState(false)
    const [target, setTarget] = useState('')
    const [selectedElement, setSelectedElement] = useState({})

    const handleOpenState = () => {
        setOpenedModal(!isOpened)
    }

    const selectedItem = (i) => {
        setSelectedElement(i)
    }

    useEffect(() => {
        const getResponse = async () => {
            try {
                const res = await fetch('https://norma.nomoreparties.space/api/ingredients')
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
        <div>
            <AppHeader />
            <section className={stylesApp.main}>
                {ingredients.length &&
                    <>
                        <BurgerIngredients data={ingredients} handleOpenState={(e) => {
                            setTarget(e.target.tagName)
                            handleOpenState()}
                        } selectedItem={selectedItem}/>
                        <BurgerConstructor data={ingredients} openModal={(e) => {
                            handleOpenState()
                            setTarget(e.target.tagName)
                        }
                        }/>
                    </>
                }
            </section>
            {isOpened &&
                <Modal
                    target={target}
                    handleOpenState={handleOpenState}
                    closeModal={handleOpenState}
                    handleActive={selectedItem}
                    selectedElement={selectedElement}
                />
            }
        </div>
    )
}
export default App