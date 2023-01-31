import {useDispatch, useSelector} from "../../services/hooks/hooks";
import { useEffect, FC } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getAuthOrders, getOrders } from "../../services/actions/order";
import { OrderRender } from "./OrderRender";
import {getIngredients, getWsData} from "../../utils/constants";
import {TOrder} from "../../services/types/types";

export const OrderInfo: FC = () => {
    const dispatch = useDispatch();
    const { id } = useParams<{ id: string }>();
    const ingredients = useSelector(getIngredients);
    const location = useLocation();
    const pathLinkName = "/profile/orders"


    useEffect(() => {
        location.pathname.indexOf(pathLinkName) !== -1 ? dispatch(getAuthOrders()) : dispatch(getOrders());
    }, [dispatch]);

    const { data } = useSelector(getWsData);
    let order = data.orders?.find((order: TOrder) => order._id === id);

    return (
        <>
            <OrderRender order={order} ingredients={ingredients} />
        </>
    );
};
