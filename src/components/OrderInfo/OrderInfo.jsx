import stylesOrderInfo from './OrderInfo.module.css'
import {useDispatch, useSelector} from "react-redux";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useMemo, useEffect} from "react";

import {useLocation, useParams} from "react-router-dom";
import {
    wsAuthConnectionClosed,
    wsAuthConnectionOpen,
    wsConnectionClosed,
    wsConnectionOpen
} from "../../services/actions/wsActions";
import {OrderIngredientsInfo} from "../OrderIngredientsInfo/OrderIngredientsInfo";
import {getAllOrders, getUserOrders} from "../../services/actions/order";
import {useState} from "react";


export const OrderInfo = () => {
    const dispatch = useDispatch();
    const {id}= useParams();
    const ingredients = useSelector(state => state.ingredients.data)
    const orderList  = useSelector(state => state.orderState.orderList)
    const location = useLocation();


    useEffect( () => {
        location.pathname.indexOf('/profile/orders') !== -1
            ?
            dispatch(getUserOrders())
            :
            dispatch(getAllOrders())
    }, [dispatch])

    let order = orderList?.find((order) => order._id === id)





    // const orders = useSelector(store => store.wsOrders.orders);
    // const authOrders = useSelector(store => store.wsAuthOrders.orders)


    // let ordersHandler = match.path === isProfile ? authOrders : orders
    // let order = ordersHandler?.find((order) => order._id === params.id)



    console.log(order)




    const selectedOrderData = useMemo(() => {
        return order?.ingredients.map((id) => {
            return ingredients?.find((item) => {
                return id === item._id
            })
        })
    }, [order?.ingredients, ingredients])


    const orderTotalPrice = useMemo(() => {
        return selectedOrderData?.reduce((sum, item) => {
            if (item?.type === 'bun') {
                return sum += item.price * 2
            }
            return sum += (item ? item.price : 0);
        }, 0);
    }, [selectedOrderData])

    const currentDay = new Date().getDate()

    const { createdAt } = order
    const orderDay = createdAt.includes(`${currentDay}`)

    // useEffect(() => {
    //     if (!order) {
    //         if (match.path === isProfile) {
    //             dispatch(wsAuthConnectionOpen())
    //         }
    //         if (match.path === isFeed) {
    //             dispatch(wsConnectionOpen())
    //         }
    //     }
    //     return () => {
    //         if (match.path === isProfile) {
    //             dispatch(wsAuthConnectionClosed())
    //         }
    //         if (match.path === isFeed) {
    //             dispatch(wsConnectionClosed())
    //         }
    //     }
    // }, [ dispatch, orderOne, match.path, match.url])



    return (
        <>
        { order && (
        <div className={stylesOrderInfo.container}>
            <p className={`text text_type_digits-default ${stylesOrderInfo.orderNumber}`}>#{order.number}</p>
            <div className={stylesOrderInfo.info}>
                <h1 className={`text text_type_main-medium ${stylesOrderInfo.title}`}>{order.name}</h1>
                {!!order.status &&
                    <p className={stylesOrderInfo.status}>{order.status === 'done' ? 'Выполнен' : order.status === 'pending' ? 'Готовится' : order.status === 'created' ? 'Создан' : 'Выполнен'}</p>
                }
            </div>
            <p className={`text text_type_main-medium ${stylesOrderInfo.about}`}>Состав:</p>
            <ul className={stylesOrderInfo.ingredients}>
                <OrderIngredientsInfo data={selectedOrderData} key={id}/>
            </ul>
            <div className={stylesOrderInfo.footer}>
                <p className={`text text_type_main-default text_color_inactive`}>{orderDay ? 'Сегодня' : 'Вчера'}, {createdAt.slice(11, 16)} {`i-GMT+3`}</p>
                <div className={stylesOrderInfo.priceContainer}>
                    <p className={`text text_type_digits-default`}>{orderTotalPrice}</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
            )}

        </>
    )
}