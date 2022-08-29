import React from 'react';
import {AppHeader} from '../AppHeader/AppHeader';
import {BurgerIngredients} from '../BurgerIngredients/BurgerIngredients'
import {BurgerConstructor} from '../BurgerConstructor/BurgerConstructor'

const App = () => {
    React.useEffect(() => {
        const getResponse = async () => {
            try {
                const res = await fetch('https://norma.nomoreparties.space/api/ingredients')
                if (res.status === 200) {
                    const resData = await res.json()
                    console.log(resData)
                } throw new Error('error')
            } catch (err) {
                console.log(err)
            }
        }
        getResponse()
            .then()
    }, [])
}