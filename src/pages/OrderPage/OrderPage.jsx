import stylesOrderPage from './OrderPage.module.css'
import OrderDetails from "../../components/OrderDetails/OrderDetails";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams} from "react-router-dom";
import React, {useEffect, useMemo} from "react";
import {getAuthOrders, getOrders} from "../../services/actions/order";
import stylesOrderInfo from "../../components/OrderInfo/OrderInfo.module.css";
import {OrderIngredientsInfo} from "../../components/OrderIngredientsInfo/OrderIngredientsInfo";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {OrderInfo} from "../../components/OrderInfo/OrderInfo";
import {OrderRender} from "../../components/OrderInfo/OrderRender";
import stylesIngredientDetails from "../../components/IngredientDetails/IngredientDetails.module.css";
import {InfinitySpin} from "react-loader-spinner";

export const OrderPage = () => {

    const dispatch = useDispatch();
    const {id}= useParams();
    const ingredients = useSelector(state => state.ingredients.data)

    const location = useLocation();


    useEffect( () => {
        location.pathname.indexOf('/profile/orders') !== -1
            ?
            dispatch(getAuthOrders())
            :
            dispatch(getOrders())
    }, [dispatch])

    const orderList = useSelector(state => state.orderState.orderList)
    console.log(orderList)

    let order = orderList?.find((order) => order._id === id)

    console.log(order)


    return (
        <>
        {order !== undefined ? (

            <OrderRender order={order} ingredients={ingredients}/>

        ) : (
            <div className={stylesIngredientDetails.loader}>
                <InfinitySpin width="200" color="#4c4cff" />
            </div>
        )
        }
        </>
    )











}