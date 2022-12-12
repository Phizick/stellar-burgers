import stylesFeedPage from './FeedPage.module.css'
import {OrderStates} from "../../components/OrdersStates/OrdersStates";

export const FeedPage = () => {
    return (
        <>
            <h1 className={stylesFeedPage.title}>Лента заказов</h1>
        <div className={stylesFeedPage.container}>
            <OrderStates/>

        </div>
        </>

    )
}