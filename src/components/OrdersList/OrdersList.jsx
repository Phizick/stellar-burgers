import stylesOrderList from './OrdersList.module.css'
import {OrderCard} from "../OrderCard/OrderCard";
import {Link} from "react-router-dom";


export const OrdersList = () => {
    return (
        <div className={stylesOrderList.list}>
            <Link className={stylesOrderList.link} to={{pathname: `/feed/123`}}>
            <OrderCard/>
            </Link>
            <Link className={stylesOrderList.link} to={{pathname: `/feed/123`}}>
                <OrderCard/>
            </Link>
            <Link className={stylesOrderList.link} to={{pathname: `/feed/123`}}>
                <OrderCard/>
            </Link>
            <Link className={stylesOrderList.link} to={{pathname: `/feed/123`}}>
                <OrderCard/>
            </Link>

        </div>
    )

}