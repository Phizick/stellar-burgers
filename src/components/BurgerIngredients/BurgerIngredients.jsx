/**
 * компонент списка ингредиентов для бургера. принимает в пропсы данные ингредиентов с сервера / функциональность модального окна
 * @component
 * @returns
 * разметку-список ингредиентов для бургера, разбитых по категориям
 */

import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import stylesBurgerIngredients from "../BurgerIngredients/BurgerIngredients.module.css";
import BurgerIngredientTypeGroup from "../BurgerIngredientTypeGroup/BurgerIngredientTypeGroup";
import PropTypes from "prop-types";

const BurgerIngredients = (props) => {
    const [current, setCurrent] = React.useState("one");
    return (
        <section className={`${stylesBurgerIngredients.section} mt-10`}>
            <h2 className={"text text_type_main-large p-4"}>Соберите бургер</h2>
            <div style={{ display: "flex" }}>
                <Tab value="one" active={current === "one"} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="two" active={current === "two"} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="three" active={current === "three"} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <ul className={`${stylesBurgerIngredients.list} mt-10 pl-1 pr-2`}>
                <BurgerIngredientTypeGroup data={props.data} listType={"bun"} title={"Булки"} openModal={props.openModal}  />
                <BurgerIngredientTypeGroup data={props.data} listType={"sauce"} title={"Соусы"} openModal={props.openModal} />
                <BurgerIngredientTypeGroup data={props.data} listType={"main"} title={"Начинки"} openModal={props.openModal}  />
            </ul>
        </section>
    );
};

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired
    })),
    openModal: PropTypes.func,

};

export default BurgerIngredients;
