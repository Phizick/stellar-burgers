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
                <BurgerIngredients ingrArrayData={ingredients}/>
                <BurgerConstructor data={ingredients}/>
            </section>
        </div>
    )
}
export default App