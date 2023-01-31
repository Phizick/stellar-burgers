import stylesFeedPage from "./FeedPage.module.css";
import { OrderStates } from "../../components/OrdersStates/OrdersStates";
import { OrdersList } from "../../components/OrdersList/OrdersList";
import {useAppDispatch, useAppSelector} from "../../services/hooks/hooks";
import { useEffect, FC } from "react";
import { WS_CONNECTION_START, WS_CONNECTION_STOP} from "../../services/actions/actionsTypes/wsActionsTypes";
import {getWsData} from "../../services/selectors/webSocketSelectors";



export const FeedPage: FC = () => {
    const dispatch = useAppDispatch();
    const { data } = useAppSelector(getWsData);

    useEffect(() => {
        dispatch({
            type: WS_CONNECTION_START,
            payload: {
                url: "wss://norma.nomoreparties.space/orders/all",
                isAuth: true,
            },
        });
        return () => {
            dispatch({
                type: WS_CONNECTION_STOP,
            });
        };
    }, [dispatch]);

    return (
        <>
            <h1 className={stylesFeedPage.title}>Лента заказов</h1>
            <div className={stylesFeedPage.container}>
                <OrdersList orders={data.orders} />
                <OrderStates />
            </div>
        </>
    );
};
