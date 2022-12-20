import stylesFeedPage from './FeedPage.module.css'
import {OrderStates} from "../../components/OrdersStates/OrdersStates";
import {OrdersList} from "../../components/OrdersList/OrdersList";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {wsConnectionClosed, wsConnectionOpen} from "../../services/actions/wsActions";
import {getOrder} from "../../services/actions";
import {useParams} from "react-router-dom";
export const FeedPage = () => {
    const params = useParams()

    const [orderOne , setOrder] = useState()
    useEffect(() => {
        setOrder(dispatch(getOrder(params.id)))

    }, [])

    console.log(orderOne)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(wsConnectionOpen());
        return () => {
            dispatch(wsConnectionClosed())
        }
    }, [dispatch])

    return (
        <>
            <h1 className={stylesFeedPage.title}>Лента заказов</h1>
        <div className={stylesFeedPage.container}>
            <OrdersList/>
            <OrderStates/>
        </div>
        </>

    )
}