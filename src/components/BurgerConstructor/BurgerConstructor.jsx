/**
 * компонент конструктора бургера. принимает в пропсы данные полученые с сервера / функционал модальных окон
 * @component
 * @returns
 * разметку конструктора бургера со скроллом
 */

import React, {useCallback} from "react";
import stylesBurgerConstructor from "../BurgerConstructor/BurgerConstructor.module.css";
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import {ingredientType} from "../../utils/type";
import { useSelector, useDispatch} from "react-redux";
import {useDrop} from "react-dnd";
import { SET_DEFAULT_BURGER} from "../../services/actions";

const BurgerConstructor = (props) => {
    const ingredients = useSelector(store => store.burgerIngredients.ingredients);

    const dispatch = useDispatch()



    let bun = ingredients.length > 0 && ingredients.find(ingredient => ingredient.type === 'bun');
    let price = ingredients.length > 0 && bun.price * 2 + ingredients.filter(ing => ing.type !== 'bun').reduce((acc, item) => acc + item.price, 0);


    const [, dropRef] = useDrop({
        accept: 'ingredient',
        drop(item)  {
            dispatch({
                type: SET_DEFAULT_BURGER,
                data: item
            })
    }
    })


    return (
        <>
        <section className={`${stylesBurgerConstructor.section} mt-25 pb-30`} ref={dropRef}>
            {ingredients.length > 0 ?
                <>
                    <ul className={stylesBurgerConstructor.list}>
                        <li className={`${stylesBurgerConstructor.listItem} pl-5 mr-5 pb-2`}>
                            <ConstructorElement
                                type="top"
                                isLocked={true}
                                text={`${bun.name} (верх)`}
                                price={bun.price}
                                thumbnail={bun.image}
                            />
                        </li>
                        <ul className={stylesBurgerConstructor.items}>
                            {ingredients
                                .filter((item) => item.type !== "bun")
                                .map((item) => {
                                    return (
                                        <li className={`${stylesBurgerConstructor.listItem} pb-2 pt-2 pr-2`}
                                            key={item._id}>
                                            <DragIcon type={"primary"}/>
                                            <ConstructorElement
                                                text={item.name}
                                                price={item.price}
                                                thumbnail={item.image}
                                                isLocked={false}
                                            />
                                        </li>
                                    );
                                })}
                        </ul>
                        <li className={`${stylesBurgerConstructor.listItem} pl-6 mr-5 pt-2`}>
                            <ConstructorElement
                                type="bottom"
                                isLocked={true}
                                text={`${bun.name} (низ)`}
                                price={bun.price}
                                thumbnail={bun.image}
                            />
                        </li>
                    </ul>
                    <div className={`${stylesBurgerConstructor.totalScore} mt-10`}>
                        <p className={`text text_type_digits-medium mr-10`}>
                            {price}
                            <CurrencyIcon type={"primary"}/>
                        </p>
                        <div onClick={props.openModal}>
                            <Button type="primary" size="large">
                                Оформить заказ
                            </Button>
                        </div>
                    </div>
                </>
                :
                <div>Соберите бургер</div>
            }

        </section>
        </>
    );
};

// BurgerConstructor.propTypes = {
//     data: PropTypes.arrayOf(ingredientType.isRequired).isRequired,
//     openModal: PropTypes.func.isRequired
// };

export default BurgerConstructor;
