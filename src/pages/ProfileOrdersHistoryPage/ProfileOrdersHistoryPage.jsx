import { ProfileNavigation } from "../../components/ProfileNavigation/ProfileNavigation";
import stylesProfileOrder from "./ProfileOrdersHistoryPage.module.css";
import {OrdersList} from "../../components/OrdersList/OrdersList";
import {useLocation, Link} from "react-router-dom";
import {useSelector} from "react-redux";

export const ProfileOrdersHistoryPage = () => {
    const location = useLocation();
    const orders = useSelector(state => state.wsAuthOrders.orders)

    return (
        <div className={stylesProfileOrder.container}>
            <ProfileNavigation isActive={true} active={false} />
            {orders && orders?.map((item) => {
                    return (
                        <Link className={stylesProfileOrder.link} to={{pathname: `/profile/orders/${item._id}`, state: {background: location}}} key={item._id}>
                            <OrdersList/>
                        </Link>
                    )
            })
            }
        </div>
    );
};
