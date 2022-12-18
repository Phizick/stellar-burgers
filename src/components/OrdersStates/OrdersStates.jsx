import stylesOrdersStates from './OrdersStates.module.css'
import { useSelector} from "react-redux";



export const OrderStates = () => {
    const ordersData = useSelector(state => state.wsOrders);


    const completedOrders = ordersData.orders
        .filter(order => order.status === 'done')
        .filter((order, index) => index <= 17);
    const upcomingOrders = ordersData.orders
        .filter(order => order.status === 'pending')
        .filter((order, index) => index >= 17);



    return (
        <div className={stylesOrdersStates.container}>
            <div className={stylesOrdersStates.head}>
                <div className={stylesOrdersStates.listContainer}>
                    <h2 className={stylesOrdersStates.title}>Готовы:</h2>
                    <ul className={stylesOrdersStates.list}>
                        {
                            completedOrders
                                .map((order, index) => {
                                    return (
                                        <li className={`text text_type_digits-default ${stylesOrdersStates.li}`} key={index}>{order.number}</li>
                                    )
                                })
                        }
                    </ul>
                </div>
                <div className={stylesOrdersStates.listContainer}>
                    <h2 className={stylesOrdersStates.title}>В работе:</h2>
                    <ul className={stylesOrdersStates.list}>
                        {
                            upcomingOrders
                                .map((order, index) => {
                                    return (
                                        <li className={`text text_type_digits-default ${stylesOrdersStates.li_upcoming}`} key={index}>{order.number}</li>
                                    )
                                })
                        }
                    </ul>
                </div>
            </div>
            <div className={stylesOrdersStates.content}>
                <h2 className={stylesOrdersStates.title}>Выполнено за все время:</h2>
                <p className={`text text_type_digits-large ${stylesOrdersStates.text}`}>{ordersData.total}</p>
            </div>
            <div className={stylesOrdersStates.content}>
                <h2 className={stylesOrdersStates.title}>Выполнено за сегодня:</h2>
                <p className={`text text_type_digits-large ${stylesOrdersStates.text}`}>{ordersData.totalToday}</p>
            </div>
        </div>
    )
}