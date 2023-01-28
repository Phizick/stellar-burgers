import {useDispatch, useSelector} from "../../services/hooks/hooks";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getAuthOrders, getOrders } from "../../services/actions/order";
import { OrderRender } from "./OrderRender";
import {getIngredients, getWsData} from "../../utils/constants";

export const OrderInfo = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const ingredients = useSelector(getIngredients);
    const location = useLocation();
    const pathLinkName = "/profile/orders"



    useEffect(() => {
        location.pathname.indexOf(pathLinkName) !== -1 ? dispatch(getAuthOrders()) : dispatch(getOrders());
    }, [dispatch]);

    const { data } = useSelector(getWsData);
    let order = data.orders?.find((order: any) => order._id === id);

    return (
        <>
            <OrderRender order={order} ingredients={ingredients} />
        </>
    );
};
