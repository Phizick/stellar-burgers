import React from 'react';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import stylesBurgerIngredients from '../BurgerIngredients/BurgerIngredients.module.css'

const BurgerIngredients = () => {
    const [current, setCurrent] = React.useState('one')
    return (

        <section className={`${stylesBurgerIngredients.section} mt-10`}>
        <h2 className={'text text_type_main-large'}>Соберите бургер</h2>
        <div style={{ display: 'flex' }}>
            <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                Булки
            </Tab>
            <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                Соусы
            </Tab>
            <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                Начинки
            </Tab>
        </div>
        </section>
    )
}

export default BurgerIngredients