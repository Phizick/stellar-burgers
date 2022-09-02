/**
 * компонент ингредиента бургера. принимает в пропсы данные, полученные с сервера (через родительский компонент - BurgerIngredientTypeGroup) / функционал модальных окон
 * @component
 * @returns
 * разметку карточки ингредиента бургера с функциональностью открытия модального окна с информацией о нем
 */

import React from "react";
import stylesBurgerIngredient from "../BurgerIngredient/BurgerIngredient.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {ingredientType} from "../../utils/type";

const BurgerIngredient = (props) => {
    return (
        <li className={`${stylesBurgerIngredient.li} mt-6`} onClick={() => {props.openModal(props.data)}} >
            <img src={props.data.image} alt={props.data.name} />
            <div className={`${stylesBurgerIngredient.price} text text_type_digits-default mt-4 mb-4`}>
                <p className={`${stylesBurgerIngredient.priceNumber} p-2`}>{props.data.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={"text text_type_main-default"}>{props.data.name}</p>
        </li>
    );
};

BurgerIngredient.propTypes = {
    data: PropTypes.shape({ingredientType}).isRequired,
    openModal: PropTypes.func.isRequired
 };

export default BurgerIngredient;
