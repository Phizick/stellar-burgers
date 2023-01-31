import {useAppDispatch, useAppSelector} from "../../services/hooks/hooks";
import { useEffect, FC } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getAuthOrders, getOrders } from "../../services/actions/order";
import { OrderRender } from "./OrderRender";
import {getIngredients} from "../../services/selectors/ingredientsSelectors";
import {getWsData} from "../../services/selectors/webSocketSelectors";
import {TOrder} from "../../services/types/types";

export const OrderInfo: FC = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();
    const ingredients = useAppSelector(getIngredients);
    const location = useLocation();
    const pathLinkName = "/profile/orders"


    useEffect(() => {
        location.pathname.indexOf(pathLinkName) !== -1 ? dispatch(getAuthOrders()) : dispatch(getOrders());
    }, [dispatch]);

    const { data } = useAppSelector(getWsData);
    let order = data.orders?.find((order: TOrder) => order._id === id);

    return (
        <>
            {ingredients !== null
                ? <OrderRender order={order} ingredients={ingredients} />
                : <></>}

        </>
    );
};
