import stylesOrderList from "./OrdersList.module.css";
import { OrderCard } from "../OrderCard/OrderCard";
import { Link } from "react-router-dom";
import {useDispatch} from "../../services/hooks/hooks";
import {MODAL_OPENED} from "../../services/actions/actionsTypes/modalTypes";
import { FC } from 'react'
import { TOrder} from "../../services/types";

interface IOrderList {
    orders: TOrder[];
}

export const OrdersList: FC<IOrderList> = (props) => {
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
                props.orders.map((item: TOrder) => {
                    return (
                        <Link className={stylesOrderList.link} to={`/feed/${item._id}`} key={item._id} onClick={handleModalOpen}>
                            <OrderCard order={item} key={item._id} />
                        </Link>
                    );
                })}
        </div>
    );
};

