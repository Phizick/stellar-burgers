/**
 * компонент ингредиента бургера. принимает в пропсы данные, полученные с сервера (через родительский компонент - BurgerIngredientTypeGroup) / функционал модальных окон
 * @component
 * @returns
 * разметку карточки ингредиента бургера с функциональностью открытия модального окна с информацией о нем
 */

import stylesBurgerIngredient from "../BurgerIngredient/BurgerIngredient.module.css";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag} from "react-dnd";
import {useSelector} from "../../services/hooks/hooks";
import {getBunData, getBurgerIngredients} from "../../utils/constants";
import { FC } from 'react'
import {TIngredient} from "../../services/types";

interface IBurgerIngredient {
    data: TIngredient;
    activeModal: (data: TIngredient) => void;
}

const BurgerIngredient: FC<IBurgerIngredient> = (props) => {
    const ingredients = useSelector(getBurgerIngredients);
    const bun = useSelector(getBunData);
    const setCounter = () => {
        if (props.data.type !== 'bun') {
            return ingredients.filter((item: TIngredient) => item._id === props.data._id).length
        } else if (bun?._id === props.data._id) {
            return 2
        } else return 0
    };

    const count = setCounter();

    const [, dragRef] = useDrag({
        type: 'ingredient',
        item: props.data
    });

    return (
        <li className={`${stylesBurgerIngredient.li} mt-6`} onClick={() => props.activeModal(props.data)} draggable ref={dragRef}>
            <img src={props.data.image} alt={props.data.name} />
            {count > 0 ? <Counter count={count} size="default" /> : <></>}
            <div className={`${stylesBurgerIngredient.price} text text_type_digits-default mt-4 mb-4`}>
                <p className={`${stylesBurgerIngredient.priceNumber} p-2`}>{props.data.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={"text text_type_main-default"}>{props.data.name}</p>
        </li>
    );
};

export default BurgerIngredient;
