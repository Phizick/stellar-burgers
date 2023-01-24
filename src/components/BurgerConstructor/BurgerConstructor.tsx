/**
 * компонент конструктора бургера. принимает в пропсы данные полученые с сервера / функционал модальных окон
 * @component
 * @returns
 * разметку конструктора бургера со скроллом
 */

import React, {useCallback, useMemo, FC} from "react";
import stylesBurgerConstructor from "../BurgerConstructor/BurgerConstructor.module.css";
import { ConstructorElement, CurrencyIcon, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import { useSelector, useDispatch} from "react-redux";
import {useDrop} from "react-dnd";
import {
    addConstructorBun, addConstructorIngredient, setDefaultConstructor
} from "../../services/actions/ConstructorActions";
import ConstructorSortedItem from "../ConstructorSortedItem/ConstructorSortedItem";
import {getBunData, getBurgerIngredients} from "../../utils/constants";

interface Ingredient {
    calories: number;
    carbohydrates: number;
    fat: number;
    image: string;
    image_large: string;
    image_mobile: string;
    name: string;
    price: number;
    proteins: number;
    type: "bun" | "main" | "sauce";
    __v: number;
    _id: string;
    id?: string;
    count?: number;
}

const BurgerConstructor: FC = (props: any) => {
    const ingredients = useSelector(getBurgerIngredients);
    const bunData = useSelector(getBunData);
    const dispatch = useDispatch();

    const price = useMemo(() => {
        return (ingredients.length > 0 && bunData) && bunData.price * 2 + ingredients.reduce((a: object, b: any) => a + b.price, 0);
    }, [ingredients, bunData])

    const [ { isOver }, dropRef] = useDrop({
        accept: 'ingredient',
        drop: ((item: Ingredient) => {
            if (item.type === 'bun') {
                dispatch(addConstructorBun(item))
            }
            else {
                dispatch(addConstructorIngredient(item))
            }
        }),
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    });

    const moveIngredientCard = useCallback((dragIndex: any, hoverIndex: any) => {
        const sortedIngredients = [...ingredients];
        sortedIngredients[dragIndex] = ingredients[hoverIndex];
        sortedIngredients[hoverIndex] = ingredients[dragIndex];
        dispatch(setDefaultConstructor(sortedIngredients));
    }, [ingredients])

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <>
            <section className={`${stylesBurgerConstructor.section}  mt-25 pb-30`} ref={dropRef}>
                {ingredients.length >= 0 ?
                    <>
                        <ul className={isOver ? `${stylesBurgerConstructor.border_drag} ${stylesBurgerConstructor.list}` : `${stylesBurgerConstructor.list}`}>
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

                            <ul className={ingredients.length === 0 ? `${stylesBurgerConstructor.items} ${stylesBurgerConstructor.noneitems}` : `${stylesBurgerConstructor.items}`}>
                                {ingredients.length >= 1 ?
                                    (ingredients
                                            .filter((item: any) => item.type !== "bun")
                                            .map((item: any, index: any) => {
                                                return (
                                                    <ConstructorSortedItem  key={item.keyId} moveIngredientCard={moveIngredientCard} index={index} data={item}/>
                                                );
                                            }))
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
                        {ingredients.length >= 1 && bunData ?
                            <div className={`${stylesBurgerConstructor.totalScore} mt-10`}>
                                <p className={`text text_type_digits-medium mr-10`}>
                                    {price}
                                    <CurrencyIcon type={"primary"}/>
                                </p>
                                <div >
                                    <Button type="primary" size="large" onClick={props.openModal}>
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
