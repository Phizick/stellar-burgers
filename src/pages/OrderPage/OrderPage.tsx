
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { getAuthOrders, getOrders } from "../../services/actions/order";
import { OrderRender } from "../../components/OrderInfo/OrderRender";
import stylesIngredientDetails from "../../components/IngredientDetails/IngredientDetails.module.css";
import { InfinitySpin } from "react-loader-spinner";
import {getIngredients} from "../../utils/constants";

export const OrderPage = () => {
    const { id } = useParams<{id:string}>();
    const ingredients = useSelector(getIngredients);
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        location.pathname.indexOf("/profile/orders") !== -1 ? dispatch(getAuthOrders()) : dispatch(getOrders());
    }, [dispatch]);

    const orderList = useSelector((state) => state.orderState.orderList);
    const order = orderList?.find((order) => order._id === id);

    return (
        <>
            {order !== undefined ? (
                <OrderRender order={order} ingredients={ingredients} />
            ) : (
                <div className={stylesIngredientDetails.loader}>
                    <InfinitySpin width="200" color="#4c4cff" />
                </div>
            )}
        </>
    );
};
