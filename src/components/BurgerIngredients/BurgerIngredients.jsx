/**
 * компонент списка ингредиентов для бургера. принимает в пропсы данные ингредиентов с сервера / функциональность модального окна
 * @component
 * @returns
 * разметку-список ингредиентов для бургера, разбитых по категориям
 */

import React, { useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import stylesBurgerIngredients from "../BurgerIngredients/BurgerIngredients.module.css";
import BurgerIngredientTypeGroup from "../BurgerIngredientTypeGroup/BurgerIngredientTypeGroup";
import PropTypes from "prop-types";


const BurgerIngredients = (props) => {
    const [current, setCurrent] = useState("one");

    return (
        <section className={`${stylesBurgerIngredients.section} mt-10`}>
            <h2 className={"text text_type_main-large p-4"}>Соберите бургер</h2>
            <div style={{ display: "flex" }}>
                <a className={stylesBurgerIngredients.link} href='#bun'>
                    <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    Булки
                </Tab>
                </a>
                <a className={stylesBurgerIngredients.link} href='#sauce'>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Соусы
                </Tab>
                </a>
                <a className={stylesBurgerIngredients.link} href='#ingredients'>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Начинки
                </Tab>
                </a>
            </div>
            <ul className={`${stylesBurgerIngredients.list} mt-10 pl-1 pr-2`}>
                <BurgerIngredientTypeGroup listType={"bun"} title={"Булки"} activeModal={props.activeModal} ID={'bun'}/>
                <BurgerIngredientTypeGroup listType={"sauce"} title={"Соусы"} activeModal={props.activeModal} ID={'sauce'}/>
                <BurgerIngredientTypeGroup listType={"main"} title={"Начинки"} activeModal={props.activeModal}  ID={'ingredients'}/>
            </ul>
        </section>
    );
};

BurgerIngredients.propTypes = {
    activeModal: PropTypes.func.isRequired
};

export default BurgerIngredients;
