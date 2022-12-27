import stylesOrderList from './OrdersList.module.css'
import {OrderCard} from "../OrderCard/OrderCard";
import {Link, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {MODAL_OPENED} from "../../services/actions";


export const OrdersList = (props) => {
    const dispatch = useDispatch()
    const location = useLocation()

    const handleModalOpen = () => {
        dispatch({
            type: MODAL_OPENED,
            payload: {
                isOpened: true,
                modalType: 'orderModal'
            }
        })
    }

    return (
        <div className={stylesOrderList.list}>
            { props.orders &&
                props.orders
                    .map((item, index) => {
                        return(
                            <Link className={stylesOrderList.link} to={`/feed/${item._id}`} key={item._id} onClick={handleModalOpen}>
                                <OrderCard order={item} key={index}/>
                            </Link>
                        )
                    })
            }
        </div>
    )

}