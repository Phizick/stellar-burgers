/**
 * компонент конструктора бургера. принимает в пропсы данные полученые с сервера / функционал модальных окон
 * @component
 * @returns
 * разметку конструктора бургера со скроллом
 */

import React, {useCallback} from "react";
import stylesBurgerConstructor from "../BurgerConstructor/BurgerConstructor.module.css";
import { ConstructorElement, CurrencyIcon, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import {ingredientType} from "../../utils/type";
import { useSelector, useDispatch} from "react-redux";
import {useDrop} from "react-dnd";
import {
    SET_DEFAULT_CONSTRUCTOR,
    SORTED_CONSTRUCTOR,
    REFRESH_CONSTRUCTOR_BUN
} from "../../services/actions";
import ConstructorSortedItem from "../ConstructorSortedItem/ConstructorSortedItem";
import { v4 as uuidv4 } from 'uuid';

const BurgerConstructor = (props) => {
    const ingredients = useSelector(store => store.burgerIngredients.ingredients);
    const bunData = useSelector(store => store.bunData.bun);

    const dispatch = useDispatch();
    const price = ingredients.reduce((a, b) => a + b.price, 0);

    const [, dropRef] = useDrop({
        accept: 'ingredient',
        drop: (item => ingredientTypeOf(item))
    });

    const ingredientTypeOf = (item) => {
        if (item.type === 'bun' && ingredients.find(item => item.type === 'bun')) {
            dispatch({
                type: REFRESH_CONSTRUCTOR_BUN,
                data: item
            })
        } else if (item.type === 'bun') {
            dispatch({
                type: SET_DEFAULT_CONSTRUCTOR,
                data: item
            })
            dispatch({
                type: REFRESH_CONSTRUCTOR_BUN,
                data: item
            })
        }
        else {
            dispatch({
                type: SET_DEFAULT_CONSTRUCTOR,
                data: item
            })
        }
    };

    const moveIngredientCard = useCallback((dragIndex, hoverIndex) => {
        dispatch({
            type: SORTED_CONSTRUCTOR,
            itemFrom: dragIndex,
            itemTo: hoverIndex
        })
    }, [ingredients]);


    return (
        <>
        <section className={`${stylesBurgerConstructor.section} mt-25 pb-30`} ref={dropRef}>
            {ingredients.length > 0 ?
                <>
                    <ul className={stylesBurgerConstructor.list}>
                        <li className={`${stylesBurgerConstructor.listItem} pl-5 mr-5 pb-2`}>
                            {bunData ?
                            <ConstructorElement
                                type="top"
                                isLocked={true}
                                text={`${bunData.name} (верх)`}
                                price={bunData.price}
                                thumbnail={bunData.image}
                            />
                                :
                                <div className={`${stylesBurgerConstructor.bunareaTop} text text_type_main-default`}>выберете булку</div>
                            }
                        </li>

                        <ul className={stylesBurgerConstructor.items}>
                            {ingredients.length >= 1 ?
                                ingredients
                                .filter((item) => item.type !== "bun")
                                .map((item, index) => {
                                    item.ID = uuidv4();
                                    item.index = index
                                    return (
                                        <li className={`${stylesBurgerConstructor.listItem} pb-2 pt-2 pr-2`}
                                            key={index}>
                                            <ConstructorSortedItem id={item.ID} moveIngredientCard={moveIngredientCard} index={index} data={item}/>
                                        </li>
                                    );
                                })
                            :
                            <div className={`${stylesBurgerConstructor.ingredientArea}  text text_type_main-default`}>выберете начинку</div>
                            }
                        </ul>
                        <li className={`${stylesBurgerConstructor.listItem} pl-6 mr-5 pt-2`}>
                            {bunData ?
                                <ConstructorElement
                                    type="bottom"
                                    isLocked={true}
                                    text={`${bunData.name} (низ)`}
                                    price={bunData.price}
                                    thumbnail={bunData.image}
                                />
                                :
                                <div className={`${stylesBurgerConstructor.bunareaBtm}  text text_type_main-default`}>выберете булку</div>
                            }
                        </li>
                    </ul>
                    {ingredients.length > 1 && bunData ?
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
                        :
                        <></>
                    }
                </>
                :
                <>
                    <div className={`${stylesBurgerConstructor.bunareaTop} text text_type_main-default`}>выберете булку</div>
                    <div className={`${stylesBurgerConstructor.ingredientArea} text text_type_main-default`}>выберете начинку</div>
                    <div className={`${stylesBurgerConstructor.bunareaBtm} text text_type_main-default`}>выберете булку</div>
                </>
            }

        </section>
        </>
    );
};

BurgerConstructor.propTypes = {
    openModal: PropTypes.func.isRequired
};

export default BurgerConstructor;
