import stylesOrdersStates from "./OrdersStates.module.css";
import { useSelector } from "react-redux";
import {getWsData} from "../../utils/constants";

export const OrderStates = () => {
    const { data } = useSelector(getWsData);

    const completedOrders = data.orders.filter((order) => order.status === "done").filter((order, index) => index <= 15);
    const upcomingOrders = data.orders.filter((order) => order.status !== "done").filter((order, index) => index <= 10);

    return (
        <div className={stylesOrdersStates.container}>
            <div className={stylesOrdersStates.head}>
                <div >
                    <h2 className={stylesOrdersStates.title}>Готовы:</h2>
                    <ul className={stylesOrdersStates.list}>
                        {completedOrders.map((order, index) => {
                            return (
                                <li className={`text text_type_digits-default ${stylesOrdersStates.li}`} key={index}>
                                    {order.number}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div >
                    <h2 className={stylesOrdersStates.title}>В работе:</h2>
                    <ul className={stylesOrdersStates.list}>
                        {upcomingOrders.map((order, index) => {
                            return (
                                <li className={`text text_type_digits-default ${stylesOrdersStates.li_upcoming}`} key={index}>
                                    {order.number}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className={stylesOrdersStates.content}>
                <h2 className={stylesOrdersStates.title}>Выполнено за все время:</h2>
                <p className={`text text_type_digits-large ${stylesOrdersStates.text}`}>{data.total}</p>
            </div>
            <div className={stylesOrdersStates.content}>
                <h2 className={stylesOrdersStates.title}>Выполнено за сегодня:</h2>
                <p className={`text text_type_digits-large ${stylesOrdersStates.text}`}>{data.totalToday}</p>
            </div>
        </div>
    );
};
