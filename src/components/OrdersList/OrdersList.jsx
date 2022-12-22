import stylesOrderList from './OrdersList.module.css'
import {OrderCard} from "../OrderCard/OrderCard";
import {Link, useLocation} from "react-router-dom";
import { useSelector} from "react-redux";


export const OrdersList = (props) => {


    const location = useLocation()



    return (
        <div className={stylesOrderList.list}>
            { props.orders &&
                props.orders
                    .map((item, index) => {
                        return(
                            <Link className={stylesOrderList.link} to={{pathname: `/feed/${item.number}`, state: {background: location}}} key={item._id}>
                                <OrderCard order={item} key={index}/>
                            </Link>
                        )
                    })
            }
        </div>
    )

}