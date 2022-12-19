import stylesOrderInfo from './OrderInfo.module.css'
import {useDispatch, useSelector} from "react-redux";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {OrderIngredientsImage} from "../OrderIngredientsImage/OrderIngredientsImage";
import {useMemo, useEffect} from "react";

import {useLocation, useParams} from "react-router-dom";
import {
    wsAuthConnectionClosed,
    wsAuthConnectionOpen,
    wsConnectionClosed,
    wsConnectionOpen
} from "../../services/actions/wsActions";
import {getIngredientDetails, getOrder} from "../../services/actions";
import {useRouteMatch} from "react-router-dom";
import {OrderIngredientsInfo} from "../OrderIngredientsInfo/OrderIngredientsInfo";
import {getCookie} from "../../utils/cookieFunc";
import {WS_CONNECTION_START, WS_CONNECTION_CLOSED} from "../../services/actions/wsActions";



export const OrderInfo = () => {

    let match = useRouteMatch();
    const isProfile = '/profile/orders/:id';
    const isFeed = '/feed/:id';


    const ingredients = useSelector(state => state.ingredients.data)
    const orders = useSelector(state => state.wsOrders.orders);
    const authOrders = useSelector(state => state.wsAuthOrders.orders)
    const dispatch = useDispatch()
    const location = useLocation()


    const { id } = useParams()

    let ordersHandler = match.path === isProfile ? authOrders : orders
    let order = ordersHandler?.find((order) => order._id === id)

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



    useEffect(() => {
        if (!order) {
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
    }, [ dispatch, order, match.path, match.url])
    // useEffect(() => {
    //     if (location.pathname === `/feed/${id}`) {
    //         dispatch({
    //             type: WS_CONNECTION_START,
    //             payload: "wss://norma.nomoreparties.space/orders/all",
    //         });
    //     } else if (location.pathname === `/profile/orders/${id}`) {
    //         dispatch({
    //             type: WS_CONNECTION_START,
    //             payload: `wss://norma.nomoreparties.space/orders?token=${getCookie("accessToken")}`,
    //         });
    //     }
    //     return () => {
    //         dispatch({
    //             type: WS_CONNECTION_CLOSED,
    //         });
    //     };
    // }, [location.pathname, dispatch, id]);




    //
    //
    // const selectedOrder = orders.find((item) => item._id === id)
    // const selectedOrderIngredients = selectedOrder?.ingredients?.map((item) => {
    //     return ingredients?.filter((ing) => ing._id === item)
    // })
    //

    //
    // const countOfIngredients = (elem) => {
    //     return selectedOrderIngredients?.filter((item) => item[0]._id === elem[0]._id).length
    // }
    //
    // useEffect(() => {
    //     if (location.pathname === `/feed/${id}`) {
    //         dispatch(wsConnectionOpen())
    //     } else if (location.pathname === `/profile/orders/${id}`) {
    //         dispatch(wsAuthConnectionOpen())
    //     }
    //     return () => {
    //         dispatch(wsAuthConnectionClosed())
    //         dispatch(wsConnectionClosed())
    //     }
    // }, [location.pathname, dispatch, id])



    return (
        <>
        { order && (
        <div className={stylesOrderInfo.container}>
            <p className={`text text_type_digits-default ${stylesOrderInfo.orderNumber}`}>#{order.number}</p>
            <div className={stylesOrderInfo.info}>
                <h1 className={`text text_type_main-medium ${stylesOrderInfo.title}`}>{order.name}</h1>
                <p className={stylesOrderInfo.status}>{order.status === 'done' ? 'Выполнен' : order.status === 'pending' ? 'Готовится' : order.status === 'created' ? 'Создан' : 'Выполнен'}</p>
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