
import {useAppDispatch, useAppSelector} from "../../services/hooks/hooks";
import { useLocation, useParams } from "react-router-dom";
import React, { useEffect, FC } from "react";
import { getAuthOrders, getOrders } from "../../services/actions/order";
import { OrderRender } from "../../components/OrderInfo/OrderRender";
import stylesIngredientDetails from "../../components/IngredientDetails/IngredientDetails.module.css";
import { InfinitySpin } from "react-loader-spinner";
import {getIngredients} from "../../services/selectors/ingredientsSelectors";
import {TOrder} from "../../services/types/types";

export const OrderPage: FC = () => {
    const { id } = useParams<{id:string}>();
    const ingredients = useAppSelector(getIngredients);
    const location = useLocation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        location.pathname.indexOf("/profile/orders") !== -1 ? dispatch(getAuthOrders()) : dispatch(getOrders());
    }, [dispatch, location.pathname]);

    const orderList = useAppSelector((state) => state.orderState.orderList);
    const order = orderList?.find((order: TOrder) => order._id === id);

    return (
        <>
            {order !== undefined && ingredients !== null ? (
                <OrderRender order={order} ingredients={ingredients} />
            ) : (
                <div className={stylesIngredientDetails.loader}>
                    <InfinitySpin width="200" color="#4c4cff" />
                </div>
            )}
        </>
    );
};
