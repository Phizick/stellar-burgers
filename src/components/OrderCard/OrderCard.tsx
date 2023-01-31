import stylesOrderCard from "./OrderCard.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import {useAppSelector} from "../../services/hooks/hooks";
import { OrderIngredientsImage } from "../OrderIngredientsImage/OrderIngredientsImage";
import { useMemo, FC} from "react";
import uuid from "react-uuid";
import {getIngredients} from "../../services/selectors/ingredientsSelectors";
import {TIngredient, TOrder} from "../../services/types/types";

type TOrderCard = {
    order: TOrder
}

export const OrderCard: FC<TOrderCard> = (props) => {
    const ingredients = useAppSelector(getIngredients)
    const { createdAt, number, name, status } = props.order;
    const orderMaxLength = props.order.ingredients.length;
    const ingredientsLength = orderMaxLength - 6;
    const currentDay = new Date().getDate();
    const orderDay = createdAt.includes(`${currentDay}`);

    const orderIngredients = useMemo(() => {
        return props.order?.ingredients.map((element: TIngredient) => {
            return ingredients?.find((item: TIngredient) => {
                return element.id === item?._id
            })
        })
    }, [props.order?.ingredients, ingredients]);

    const orderTotalPrice = useMemo<number>(() => {
        return orderIngredients?.reduce((sum, item: TIngredient | undefined) => {
            return (item?.type === "bun" ? sum + item.price * 2 : sum + (item ? item.price : 0))
        }, 0)
    }, [orderIngredients]);

    return (
        <div className={stylesOrderCard.container}>
            <div className={stylesOrderCard.head}>
                <p className={`text text_type_digits-default`}>#{number}</p>
                <p className={`text text_type_main-default text_color_inactive`}>
                    {orderDay ? "Сегодня" : "Вчера"}, {createdAt.slice(11, 16)} {`i-GMT+3`}
                </p>
            </div>
            <p className={`text text_type_main-medium ${stylesOrderCard.title}`}>{name}</p>
            <p className={`text text_type_main-default ${stylesOrderCard.status}`}>{status === "done" ? "Выполнен" : status === "pending" ? "Готовится" : status === "created" ? "Создан" : "Выполнен"}</p>
            <div className={stylesOrderCard.about}>
                <ul className={stylesOrderCard.ingredientsList}>
                    {orderIngredients &&
                        orderMaxLength <= 5 &&
                        orderIngredients.map((item: TIngredient | undefined) => {
                            return (
                                <li className={stylesOrderCard.listItem} key={uuid()}>
                                    {item && <OrderIngredientsImage item={item.image} alt={item.name} />}
                                </li>
                            );
                        })}
                    {orderIngredients &&
                        orderMaxLength >= 6 &&
                        orderIngredients.slice(0, 5).map((item: TIngredient | undefined) => {
                            return (
                                <li className={stylesOrderCard.listItem} key={uuid()}>
                                    {item && <OrderIngredientsImage item={item.image} alt={item.name} />}
                                </li>
                            );
                        })}
                    {orderIngredients &&
                        orderMaxLength > 6 &&
                        orderIngredients.slice(5, 6).map((item: TIngredient | undefined) => {
                            return (
                                <li className={stylesOrderCard.listItem} key={uuid()}>
                                    {item && (
                                        <>
                                            <p className={`text text_type_main-default ${stylesOrderCard.disabledCount}`}>{`+${ingredientsLength}`}</p>
                                            <div className={stylesOrderCard.disabledImage}>
                                                <OrderIngredientsImage item={item.image} alt={item.name} />
                                            </div>
                                        </>
                                    )}
                                </li>
                            );
                        })}
                </ul>
                <div className={stylesOrderCard.price}>
                    <p className={`text text_type_digits-default ${stylesOrderCard.priceScore}`}>{orderTotalPrice}</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
    );
};

