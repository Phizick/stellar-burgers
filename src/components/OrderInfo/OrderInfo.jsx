import stylesOrderInfo from './OrderInfo.module.css'
import {useDispatch, useSelector} from "react-redux";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useMemo, useEffect} from "react";

import { useParams} from "react-router-dom";
import {
    wsAuthConnectionClosed,
    wsAuthConnectionOpen,
    wsConnectionClosed,
    wsConnectionOpen
} from "../../services/actions/wsActions";
import {OrderIngredientsInfo} from "../OrderIngredientsInfo/OrderIngredientsInfo";
import {getOrder} from "../../services/actions";
import {useState} from "react";


export const OrderInfo = () => {
    const dispatch = useDispatch();
    const {id}= useParams();
    const ingredients = useSelector(state => state.ingredients.data)
    const [negativeId, setNegativeId] = useState(false)

    let order = 0
    let orderPrice = 0
    const ingredientList = []

    useEffect( () => {
        location.pathname.indexOf('/profile/orders') !== -1 ?
            dispatch(getOrder())
            :
            dispatch(getAuthOrder())
    }, [dispatch])



    // const orders = useSelector(store => store.wsOrders.orders);
    // const authOrders = useSelector(store => store.wsAuthOrders.orders)


    // let ordersHandler = match.path === isProfile ? authOrders : orders
    // let order = ordersHandler?.find((order) => order._id === params.id)



    console.log(orderOne)




    const selectedOrderData = useMemo(() => {
        return orderOne?.ingredients.map((id) => {
            return ingredients?.find((item) => {
                return id === item._id
            })
        })
    }, [orderOne?.ingredients, ingredients])


    const orderTotalPrice = useMemo(() => {
        return selectedOrderData?.reduce((sum, item) => {
            if (item?.type === 'bun') {
                return sum += item.price * 2
            }
            return sum += (item ? item.price : 0);
        }, 0);
    }, [selectedOrderData])

    const currentDay = new Date().getDate()

    const { createdAt } = orderOne
    const orderDay = createdAt.includes(`${currentDay}`)

    useEffect(() => {
        if (!orderOne) {
            if (match.path === isProfile) {
                dispatch(wsAuthConnectionOpen())
            }
            if (match.path === isFeed) {
                dispatch(wsConnectionOpen())
            }
        }
        return () => {
            if (match.path === isProfile) {
                dispatch(wsAuthConnectionClosed())
            }
            if (match.path === isFeed) {
                dispatch(wsConnectionClosed())
            }
        }
    }, [ dispatch, orderOne, match.path, match.url])



    return (
        <>
        { orderOne && (
        <div className={stylesOrderInfo.container}>
            <p className={`text text_type_digits-default ${stylesOrderInfo.orderNumber}`}>#{orderOne.number}</p>
            <div className={stylesOrderInfo.info}>
                <h1 className={`text text_type_main-medium ${stylesOrderInfo.title}`}>{orderOne.name}</h1>
                {!!orderOne.status &&
                    <p className={stylesOrderInfo.status}>{orderOne.status === 'done' ? 'Выполнен' : orderOne.status === 'pending' ? 'Готовится' : orderOne.status === 'created' ? 'Создан' : 'Выполнен'}</p>
                }
            </div>
            <p className={`text text_type_main-medium ${stylesOrderInfo.about}`}>Состав:</p>
            <ul className={stylesOrderInfo.ingredients}>
                <OrderIngredientsInfo data={selectedOrderData} key={params.id}/>
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