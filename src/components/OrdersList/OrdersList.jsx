import stylesOrderList from "./OrdersList.module.css";
import { OrderCard } from "../OrderCard/OrderCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MODAL_OPENED } from "../../services/actions";
import PropTypes from "prop-types";

export const OrdersList = (props) => {
    const dispatch = useDispatch();

    const handleModalOpen = () => {
        dispatch({
            type: MODAL_OPENED,
            payload: {
                isOpened: true,
                modalType: "orderModal",
            },
        });
    };

    return (
        <div className={stylesOrderList.list}>
            {props.orders &&
                props.orders.map((item) => {
                    return (
                        <Link className={stylesOrderList.link} to={`/feed/${item._id}`} key={item._id} onClick={handleModalOpen}>
                            <OrderCard order={item} key={item._id} />
                        </Link>
                    );
                })}
        </div>
    );
};

OrdersList.propTypes = {
    orders: PropTypes.array.isRequired
};