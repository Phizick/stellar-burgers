import { ProfileNavigation } from "../../components/ProfileNavigation/ProfileNavigation";
import stylesProfileOrder from "./ProfileOrdersHistoryPage.module.css";
import {OrdersList} from "../../components/OrdersList/OrdersList";
export const ProfileOrdersHistoryPage = () => {
    return (
        <div className={stylesProfileOrder.container}>
            <ProfileNavigation isActive={true} active={false} />
            <OrdersList/>
        </div>
    );
};
