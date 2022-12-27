import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getAuthOrders, getOrders } from "../../services/actions/order";
import { OrderRender } from "./OrderRender";

export const OrderInfo = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const ingredients = useSelector((state) => state.ingredients.data);
    const location = useLocation();

    useEffect(() => {
        location.pathname.indexOf("/profile/orders") !== -1 ? dispatch(getAuthOrders()) : dispatch(getOrders());
    }, [dispatch]);

    const { data } = useSelector((state) => state.wsOrders);
    let order = data.orders?.find((order) => order._id === id);

    return (
        <>
            <OrderRender order={order} ingredients={ingredients} />
        </>
    );
};
