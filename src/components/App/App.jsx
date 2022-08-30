import React,{useState, useEffect} from 'react';
import {AppHeader} from '../AppHeader/AppHeader';
import stylesApp from '../App/App.module.css'
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";

import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'

const App = () => {
    const [ingredients, setIngredients] = useState([])
    const [isOpened, setOpenedModal] = useState(false)
     useEffect(() => {
        const getResponse = async () => {
             try {
                 const res = await fetch('https://norma.nomoreparties.space/api/ingredients')
                 console.log(res.status)
                 if (res.status !== 200) {
                     throw new Error('error')
                 }

                 const resData = await res.json()
                 setIngredients(resData.data)
            } catch (err) {
                 console.log(err)
             }
         }
         getResponse()

    }, [])





    return (
        <div>
            <AppHeader />
            <section className={stylesApp.main}>
                {ingredients.length && <BurgerIngredients ingrArrayData={ingredients}/>}
                {ingredients.length && <BurgerConstructor data={ingredients}/>}
            </section>
        </div>
    )
}
export default App