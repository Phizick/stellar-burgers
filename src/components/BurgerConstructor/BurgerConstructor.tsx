/**
 * компонент конструктора бургера. принимает в пропсы данные полученые с сервера / функционал модальных окон
 * @component
 * @returns
 * разметку конструктора бургера со скроллом
 */

import React, {useCallback, useMemo, FC} from "react";
import stylesBurgerConstructor from "../BurgerConstructor/BurgerConstructor.module.css";
import { ConstructorElement, CurrencyIcon, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch} from '../../services/hooks/hooks'
import {useDrop} from "react-dnd";
import {
    addConstructorBun, addConstructorIngredient, setDefaultConstructor
} from "../../services/actions/ConstructorActions";
import ConstructorSortedItem from "../ConstructorSortedItem/ConstructorSortedItem";
import {getBunData, getBurgerIngredients} from "../../utils/constants";
import { TIngredient } from "../../services/types/types";

interface IBurgerConstructor {
    openModal: () => void
}

const BurgerConstructor: FC<IBurgerConstructor> = (props) => {
    const ingredients = useSelector(getBurgerIngredients);
    const bunData = useSelector(getBunData);
    const dispatch = useDispatch();

    const price = useMemo(() => {
        return (ingredients.length > 0 && bunData) && bunData.price * 2 + ingredients.reduce((a: number, b: TIngredient) => a + b.price, 0);
    }, [ingredients, bunData])

    const [ { isOver }, dropRef] = useDrop({
        accept: 'ingredient',
        drop: ((item: TIngredient) => {
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

    const moveIngredientCard = useCallback((dragIndex: number, hoverIndex: number) => {
        const sortedIngredients = [...ingredients];
        sortedIngredients[dragIndex] = ingredients[hoverIndex];
        sortedIngredients[hoverIndex] = ingredients[dragIndex];
        dispatch(setDefaultConstructor(sortedIngredients));
    }, [ingredients])

    console.log(ingredients)



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
                                    <Button type="primary" size="large" onClick={props.openModal} htmlType={'button'}>
                                        Оформить заказ
                                    </Button>
                                </div>
                            </div>
                            :
                            <div className={`${stylesBurgerConstructor.totalScore} mt-10`}>
                                <div >
                                    <Button disabled={true} type="primary" size="large" onClick={props.openModal} htmlType={'button'}>
                                        Оформить заказ
                                    </Button>
                                </div>
                            </div>
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

export default BurgerConstructor;
