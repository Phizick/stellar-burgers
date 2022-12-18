import { ProfileNavigation } from "../../components/ProfileNavigation/ProfileNavigation";
import stylesProfileOrder from "./ProfileOrdersHistoryPage.module.css";

import {useLocation, Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {wsAuthConnectionClosed, wsAuthConnectionOpen} from "../../services/actions/wsActions";
import {OrderCard} from "../../components/OrderCard/OrderCard";

export const ProfileOrdersHistoryPage = () => {
    const location = useLocation();
    const orders = useSelector(state => state.wsAuthOrders.orders);
    console.log(orders)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(wsAuthConnectionOpen());
        return () => {
            dispatch(wsAuthConnectionClosed())
        }
    }, [dispatch])

    return (
        <div className={stylesProfileOrder.container}>
            <ProfileNavigation isActive={true} active={false} />
            <div className={stylesProfileOrder.listContainer}>
            {orders?.map((item, index) => {
                    return (
                        <Link className={stylesProfileOrder.link} to={{pathname: `/profile/orders/${item._id}`, state: {background: location}}} key={item._id}>
                            <OrderCard order={item} key={index}/>
                        </Link>
                    )
            })
            }
            </div>
        </div>
    );
};
