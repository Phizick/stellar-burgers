import React from 'react';
import {AppHeader} from '../AppHeader/AppHeader';
import stylesApp from '../App/App.module.css'
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";

import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'

const App = () => {
    const [ingredients, setIngredients] = React.useState([])
     React.useEffect(() => {
        const getResponse = async () => {
             try {
                 const res = await fetch('https://norma.nomoreparties.space/api/ingredients')
                 if (res.status === 200) {
                    const resData = await res.json()
                     setIngredients(resData.data)
                 } throw new Error('error')
            } catch (err) {
                 console.log(err)
             }
         }
         getResponse()
             .then()
    }, [])

    console.log(ingredients)

    return (
        <div>
            <AppHeader />
            <section className={stylesApp.main}>
                <BurgerIngredients />
                <BurgerConstructor />
            </section>
        </div>
    )
}
export default App