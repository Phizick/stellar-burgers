import { ProfileNavigation } from "../../components/ProfileNavigation/ProfileNavigation";
import stylesProfileOrder from "./ProfileOrdersHistoryPage.module.css";
import stylesProfileHistory from "./ProfileOrdersHistoryPage.module.css";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import { OrderCard } from "../../components/OrderCard/OrderCard";
import { MODAL_OPENED } from "../../services/actions";
import {WS_CONNECTION_START, WS_CONNECTION_STOP} from "../../services/actions/wsActions";
import {getWsData} from "../../utils/constants";

export const ProfileOrdersHistoryPage = () => {

    const dispatch = useDispatch();
    const { data } = useSelector(getWsData);

    const handleModalOpen = () => {
        dispatch({
            type: MODAL_OPENED,
            payload: {
                isOpened: true,
                modalType: "profileOrderModal",
            },
        });
    };

    useEffect(() => {
        dispatch({
            type: WS_CONNECTION_START,
            payload: {
                url: "wss://norma.nomoreparties.space/orders",
                isAuth: true,
            },
        });
        return () => {
            dispatch({
                type: WS_CONNECTION_STOP,
            });
        };
    }, [dispatch]);


    return (
        <>
            {data.orders && (
                <div className={stylesProfileOrder.container}>
                    <ProfileNavigation isActive={true} active={false} />
                    <div className={stylesProfileHistory.listContainer}>
                        {data.orders
                            ?.map((item, index) => {
                                return (
                                    <Link className={stylesProfileOrder.link} to={`/profile/orders/${item._id}`} key={item._id} onClick={handleModalOpen}>
                                        <OrderCard order={item} key={index} />
                                    </Link>
                                );
                            })
                            .reverse()}
                    </div>
                </div>
            )}
        </>
    );
};

