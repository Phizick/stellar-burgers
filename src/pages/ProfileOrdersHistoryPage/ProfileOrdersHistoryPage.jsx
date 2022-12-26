import { ProfileNavigation } from "../../components/ProfileNavigation/ProfileNavigation";
import stylesProfileOrder from "./ProfileOrdersHistoryPage.module.css";

import {useLocation, Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
    WS_CONNECTION_START,
    WS_CONNECTION_STOP,
    wsAuthConnectionClosed,
    wsAuthConnectionOpen
} from "../../services/actions/wsActions";
import {OrderCard} from "../../components/OrderCard/OrderCard";

export const ProfileOrdersHistoryPage = () => {
    const location = useLocation();
    // const orders = useSelector(state => state.wsAuthOrders.orders);

    const dispatch = useDispatch()

    const { data } = useSelector(state => state.wsOrders)
    console.log(data)



    useEffect(() => {
        dispatch({
            type: WS_CONNECTION_START,
            payload: {
                url: 'wss://norma.nomoreparties.space/orders',
                isAuth: true
            }
        })
        return () => {
            dispatch({
                type: WS_CONNECTION_STOP
            })
        }

    }, [dispatch])

    // useEffect(() => {
    //     dispatch(wsAuthConnectionOpen());
    //     return () => {
    //         dispatch(wsAuthConnectionClosed())
    //     }
    // }, [dispatch])

    return (
        <div className={stylesProfileOrder.container}>
            <ProfileNavigation isActive={true} active={false} />
            <div className={stylesProfileOrder.listContainer}>
            {data?.map((item, index) => {
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
