import { ProfileNavigation } from "../../components/ProfileNavigation/ProfileNavigation";
import stylesProfileOrder from "./ProfileOrdersHistoryPage.module.css";
export const ProfileOrdersHistoryPage = () => {
    return (
        <div className={stylesProfileOrder.container}>
            <ProfileNavigation isActive={true} active={false} />
        </div>
    );
};
