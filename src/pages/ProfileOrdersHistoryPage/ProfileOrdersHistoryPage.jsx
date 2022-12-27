import { ProfileNavigation } from "../../components/ProfileNavigation/ProfileNavigation";
import stylesProfileOrder from "./ProfileOrdersHistoryPage.module.css";
import stylesProfileHistory from './ProfileOrdersHistoryPage.module.css'

import {Link} from "react-router-dom";
import {useDispatch, } from "react-redux";
import React from "react";

import {OrderCard} from "../../components/OrderCard/OrderCard";
import {MODAL_OPENED} from "../../services/actions";


export const ProfileOrdersHistoryPage = (props) => {
    const data = props.orders.orders
    const dispatch = useDispatch()

    const handleModalOpen = () => {
        dispatch({
            type: MODAL_OPENED,
            payload: {
                isOpened: true,
                modalType: 'profileOrderModal'
            }
        })
    }

    return (
        <>
            { data && (
        <div className={stylesProfileOrder.container}>
            <ProfileNavigation isActive={true} active={false} />
            <div className={stylesProfileHistory.listContainer}>
            {data?.map((item, index) => {
                    return (
                        <Link className={stylesProfileOrder.link} to={`/profile/orders/${item._id}`} key={item._id} onClick={handleModalOpen}>
                            <OrderCard order={item} key={index}/>
                        </Link>
                    )
            }).reverse()
            }
            </div>
        </div>
            )}
        </>
    );
};
