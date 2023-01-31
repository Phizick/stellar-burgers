import { useMemo, FC } from "react";
import stylesOrderInfo from "./OrderInfo.module.css";
import { OrderIngredientsInfo } from "../OrderIngredientsInfo/OrderIngredientsInfo";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useParams } from "react-router-dom";
import {TIngredient, TOrder} from "../../services/types/types";

interface IOrderRender {
    order: TOrder;
    ingredients: TIngredient[];
}

export const OrderRender: FC<IOrderRender> = (props) => {
    const { id } = useParams<{ id: string }>();

    const selectedOrderData = useMemo(() => {
        return props.order?.ingredients.map((id: any) => {
            console.log(typeof id)
            return props.ingredients?.find((item) => {
                return id === item._id
            })
        })
    }, [props.order?.ingredients, props.ingredients]);

    const orderTotalPrice = useMemo<number>(() => {
        return selectedOrderData?.reduce((sum, item: TIngredient | undefined) => {
            if (item?.type === "bun") {
                return (sum += item.price * 2);
            }
            return (sum += item ? item.price : 0);
        }, 0);
    }, [selectedOrderData]);

    console.log(selectedOrderData)

    const currentDay = new Date().getDate();
    const { createdAt } = props.order;
    const orderDay = createdAt.includes(`${currentDay}`);

    return (
        <>
            {props.order && (
                <div className={stylesOrderInfo.container}>
                    <p className={`text text_type_digits-default ${stylesOrderInfo.orderNumber}`}>#{props.order.number}</p>
                    <div className={stylesOrderInfo.info}>
                        <h1 className={`text text_type_main-medium ${stylesOrderInfo.title}`}>{props.order.name}</h1>
                        {!!props.order.status && (
                            <p className={stylesOrderInfo.status}>{props.order.status === "done" ? "Выполнен" : props.order.status === "pending" ? "Готовится" : props.order.status === "created" ? "Создан" : "Выполнен"}</p>
                        )}
                    </div>
                    <p className={`text text_type_main-medium ${stylesOrderInfo.about}`}>Состав:</p>
                    <div className={stylesOrderInfo.ingredients}>

                            <OrderIngredientsInfo data={selectedOrderData} key={id}/>

                    </div>
                    <div className={stylesOrderInfo.footer}>
                        <p className={`text text_type_main-default text_color_inactive`}>
                            {orderDay ? "Сегодня" : "Вчера"}, {createdAt.slice(11, 16)} {`i-GMT+3`}
                        </p>
                        <div className={stylesOrderInfo.priceContainer}>
                            <p className={`text text_type_digits-default`}>{orderTotalPrice}</p>
                            <CurrencyIcon type="primary" />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};


