/**
 * компонент списка ингредиентов для бургера. принимает в пропсы данные ингредиентов с сервера / функциональность модального окна
 * @component
 * @returns
 * разметку-список ингредиентов для бургера, разбитых по категориям
 */

import React, {useEffect, useRef, useState} from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import stylesBurgerIngredients from "../BurgerIngredients/BurgerIngredients.module.css";
import BurgerIngredientTypeGroup from "../BurgerIngredientTypeGroup/BurgerIngredientTypeGroup";
import PropTypes from "prop-types";


const BurgerIngredients = (props) => {
    const [current, setCurrent] = useState("bun");
    const [bunActive, setBunActive] = useState(false);
    const [sauceActive, setSauceActive] = useState(false);
    const [ingredientsActive, setIngredientsActive] = useState(false);
    const bunsRef = useRef(null);
    const saucesRef = useRef(null);
    const ingredientsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                entry.target.id === "bun" && setBunActive(entry.isIntersecting);
                entry.target.id === "sauce" && setSauceActive(entry.isIntersecting);
                entry.target.id === "ingredients" && setIngredientsActive(entry.isIntersecting);
            });
        });
        bunsRef.current !== null && observer.observe(bunsRef.current);
        saucesRef.current !== null && observer.observe(saucesRef.current);
        ingredientsRef.current !== null && observer.observe(ingredientsRef.current);
    }, []);

    useEffect(() => {
        bunActive && setCurrent("bun");
        !bunActive && sauceActive && setCurrent("sauce");
        !sauceActive && ingredientsActive && setCurrent("ingredients");
    }, [bunActive, sauceActive, ingredientsActive]);

    const setCurrentTab = (tab) => {
        if (tab !== current) {
            switch (tab) {
                case "bun":
                    bunsRef.current.scrollIntoView({ behavior: "smooth" });
                    setCurrent("bun");
                    break;
                case "sauce":
                    saucesRef.current.scrollIntoView({ behavior: "smooth" });
                    setCurrent("sauce");
                    break;
                case "ingredients":
                    ingredientsRef.current.scrollIntoView({ behavior: "smooth" });
                    setCurrent("ingredients");
            }
        }
    };

    return (
        <section className={`${stylesBurgerIngredients.section} mt-10`} id={"section_ingredients"}>
            <h2 className={"text text_type_main-large p-4"}>Соберите бургер</h2>
            <div style={{ display: "flex" }} id={"tab_nav"}>
                <Tab value="bun" active={current === "bun"} onClick={setCurrentTab} id={"bun"}>
                    Булки
                </Tab>
                <Tab value="sauce" active={current === "sauce"} onClick={setCurrentTab} id={"sauce"}>
                    Соусы
                </Tab>
                <Tab value="ingredients" active={current === "ingredients"} onClick={setCurrentTab} id={"ingredients"}>
                    Начинки
                </Tab>
            </div>
            <ul className={`${stylesBurgerIngredients.list} mt-10 pl-1 pr-2`} id={"ingredients_list"}>
                <BurgerIngredientTypeGroup ref={bunsRef} listType={"bun"} title={"Булки"} activeModal={props.activeModal} id={"bun"} />
                <BurgerIngredientTypeGroup ref={saucesRef} listType={"sauce"} title={"Соусы"} activeModal={props.activeModal} id={"sauce"} />
                <BurgerIngredientTypeGroup ref={ingredientsRef} listType={"main"} title={"Начинки"} activeModal={props.activeModal} id={"ingredients"} />
            </ul>
        </section>
    );
};


BurgerIngredients.propTypes = {
    activeModal: PropTypes.func.isRequired
};

export default BurgerIngredients;
