import React from 'react';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import stylesBurgerIngredients from '../BurgerIngredients/BurgerIngredients.module.css'
import BurgerIngredientTypeGroup from "../BurgerIngredientTypeGroup/BurgerIngredientTypeGroup";

const BurgerIngredients = ({ingrArrayData}) => {
    const [current, setCurrent] = React.useState('one')
    return (

        <section className={`${stylesBurgerIngredients.section} mt-10`}>
        <h2 className={'text text_type_main-large p-4'}>Соберите бургер</h2>
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
            <ul className={stylesBurgerIngredients.list}>
            <BurgerIngredientTypeGroup ingrArrayData={ingrArrayData} listType={'bun'} title={'Булки'}/>
                <BurgerIngredientTypeGroup ingrArrayData={ingrArrayData} listType={'sauce'} title={'Соусы'}/>
            <BurgerIngredientTypeGroup ingrArrayData={ingrArrayData} listType={'main'} title={'Начинки'}/>

            </ul>
        </section>
    )
}

export default BurgerIngredients