/**
 * компонент конструктора бургера. принимает в пропсы данные полученые с сервера / функционал модальных окон
 * @component
 * @returns
 * разметку конструктора бургера со скроллом
 */

import React from "react";
import stylesBurgerConstructor from "../BurgerConstructor/BurgerConstructor.module.css";
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import {ingredientType} from "../../utils/type";

const BurgerConstructor = (props) => {
    return (
        <section className={`${stylesBurgerConstructor.section} mt-25 pb-30`}>
            <ul className={stylesBurgerConstructor.list}>
                <li className={`${stylesBurgerConstructor.listItem} pl-5 mr-5 pb-2`}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${props.data[0].name} (верх)`}
                        price={props.data[0].price}
                        thumbnail={props.data[0].image}
                    />
                </li>
                <ul className={stylesBurgerConstructor.items}>
                    {props.data
                        .filter((item) => item.type !== "bun")
                        .map((item) => {
                            return (
                                <li className={`${stylesBurgerConstructor.listItem} pb-2 pt-2 pr-2`} key={item._id}>
                                    <DragIcon type={"primary"} />
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
                        text={`${props.data[0].name} (низ)`}
                        price={props.data[0].price}
                        thumbnail={props.data[0].image}
                    />
                </li>
            </ul>
            <div className={`${stylesBurgerConstructor.totalScore} mt-10`}>
                <p className={`text text_type_digits-medium mr-10`}>
                    610
                    <CurrencyIcon type={"primary"} />
                </p>
                <div onClick={props.openModal}>
                    <Button type="primary" size="large">
                        Оформить заказ
                    </Button>
                </div>
            </div>
        </section>
    );
};

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(ingredientType.isRequired).isRequired,
    openModal: PropTypes.func.isRequired
};

export default BurgerConstructor;
