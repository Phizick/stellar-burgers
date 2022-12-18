import stylesOrderList from './OrdersList.module.css'
import {OrderCard} from "../OrderCard/OrderCard";
import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";


export const OrdersList = () => {
    const location = useLocation()
    const orders = useSelector(state => state.wsOrders.orders)



    return (
        <div className={stylesOrderList.list}>
            { orders &&
                orders
                    .map((item, index) => {
                        return(
                            <Link className={stylesOrderList.link} to={{pathname: `/feed/${item._id}`, state: {background: location}}} key={index}>
                                <OrderCard order={item} key={index}/>
                            </Link>
                        )
                    })
            }
        </div>
    )

}