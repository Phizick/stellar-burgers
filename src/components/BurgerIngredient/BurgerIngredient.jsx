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

const BurgerIngredient = (props) => {
    return (
        <li className={`${stylesBurgerIngredient.li} mt-6`} onClick={props.openModal} key={props.data._id}>
            <img src={props.data.image} alt={props.data.name} />
            <p className={`${stylesBurgerIngredient.price} text text_type_digits-default mt-4 mb-4`}>
                <p className={`${stylesBurgerIngredient.priceNumber} p-2`}>{props.data.price}</p>
                <CurrencyIcon type="primary" />
            </p>
            <p className={"text text_type_main-default"}>{props.data.name}</p>
        </li>
    );
};

BurgerIngredient.propTypes = {
        data: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            _id: PropTypes.string.isRequired
    })),
        openModal: PropTypes.func.isRequired
}


export default BurgerIngredient;
