import stylesOrderInfo from './OrderInfo.module.css'
import {useDispatch, useSelector} from "react-redux";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useMemo, useEffect} from "react";

import {useLocation, useParams} from "react-router-dom";

import {OrderIngredientsInfo} from "../OrderIngredientsInfo/OrderIngredientsInfo";
import {getAuthOrders, getOrders} from "../../services/actions/order";
import {OrderRender} from "./OrderRender";


export const OrderInfo = () => {
    const dispatch = useDispatch();
    const {id}= useParams();
    const ingredients = useSelector(state => state.ingredients.data)
    const location = useLocation();
    // const orderList = useSelector(state => state.order.orderList)


    useEffect( () => {
        location.pathname.indexOf('/profile/orders') !== -1
            ?
            dispatch(getAuthOrders())
            :
            dispatch(getOrders())
    }, [dispatch])

    const orderList = useSelector(state => state.orderState.orderList)
    console.log(orderList)

    const { data } = useSelector(state => state.wsOrders)
    let order = data.orders?.find((order) => order._id === id)


   return (
       <>
           <OrderRender order={order} ingredients={ingredients}/>
       </>
   )
}