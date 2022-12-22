import stylesFeedPage from './FeedPage.module.css'
import {OrderStates} from "../../components/OrdersStates/OrdersStates";
import {OrdersList} from "../../components/OrdersList/OrdersList";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
    WS_CONNECTION_START, WS_CONNECTION_STOP,

} from "../../services/actions/wsActions";


export const FeedPage = () => {

    const dispatch = useDispatch()

    const { data } = useSelector(state => state.wsOrders)


    useEffect(() => {
        dispatch({
            type: WS_CONNECTION_START,
            payload: {
                url: 'wss://norma.nomoreparties.space/orders/all',
                isAuth: true
            }
        })
        return () => {
            dispatch({
                type: WS_CONNECTION_STOP
            })
        }

    }, [dispatch])

    console.log(data.orders)


    return (
        <>
            <h1 className={stylesFeedPage.title}>Лента заказов</h1>
        <div className={stylesFeedPage.container}>
            <OrdersList orders={data.orders}/>
            <OrderStates/>
        </div>
        </>

    )
}