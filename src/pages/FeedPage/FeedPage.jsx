import stylesFeedPage from './FeedPage.module.css'
import {OrderStates} from "../../components/OrdersStates/OrdersStates";
import {OrdersList} from "../../components/OrdersList/OrdersList";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {wsConnectionClosed, wsConnectionOpen} from "../../services/actions/wsActions";
export const FeedPage = () => {

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