import React from 'react';
import stylesBurgerConstructor from '../BurgerConstructor/BurgerConstructor.module.css'
import {ConstructorElement,CurrencyIcon,Button, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'

const BurgerConstructor = (props) => {
    return (
        <section className={`${stylesBurgerConstructor.section} mt-25`}>
            <ul className={stylesBurgerConstructor.list}>
                <li className={`${stylesBurgerConstructor.listItem} pl-5 mr-5`}>
                    <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${props.data[0].name} (верх)`}
                    price={props.data[0].price}
                    thumbnail={props.data[0].image}
                    />
                </li>
                <div className={stylesBurgerConstructor.items}>
                    {props.data
                        .filter(item => item.type !== 'bun')
                        .map((item, index) => {
                            return (
                                <li className={`${stylesBurgerConstructor.listItem} pb-2 pt-2`} key={index}>
                                    <DragIcon type={"primary"}/>
                                    <ConstructorElement
                                        text={item.name}
                                        price={item.price}
                                        thumbnail={item.image}
                                        isLocked={false}
                                    />
                                </li>
                            )
                        })}
                </div>
                <li className={`${stylesBurgerConstructor.listItem} pl-5 mr-5`}>
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
                <p className={`text text_type_digits-medium pr-5`}>
                    610
                    <CurrencyIcon type={'primary'}/>
                </p>

                <Button type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
        </section>
    )
}

export default BurgerConstructor