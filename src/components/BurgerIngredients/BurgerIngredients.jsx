import React from 'react';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import stylesBurgerIngredients from '../BurgerIngredients/BurgerIngredients.module.css'
import BurgerIngredientTypeGroup from "../BurgerIngredientTypeGroup/BurgerIngredientTypeGroup";

const BurgerIngredients = (props) => {
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
            <BurgerIngredientTypeGroup data={props.data} listType={'bun'} title={'Булки'} handleOpenState={props.handleOpenState} selectedItem={props.selectedItem}/>
                <BurgerIngredientTypeGroup data={props.data} listType={'sauce'} title={'Соусы'} handleOpenState={props.handleOpenState} selectedItem={props.selectedItem}/>
            <BurgerIngredientTypeGroup data={props.data} listType={'main'} title={'Начинки'} handleOpenState={props.handleOpenState} selectedItem={props.selectedItem}/>

            </ul>
        </section>
    )
}

export default BurgerIngredients