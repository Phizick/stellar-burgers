import React from "react";
import { ProfileOrdersHistoryPage } from "../ProfileOrdersHistoryPage/ProfileOrdersHistoryPage";
import { Route } from "react-router-dom";
import { ProfileEditForm } from "../../components/ProfileEditForm/ProfileEditForm";

export const ProfilePage = () => {
    return (
        <>
            <Route path={"/profile"}>
                <ProfileEditForm />
            </Route>
            <Route path={"/profile/orders"}>
                <ProfileOrdersHistoryPage />
            </Route>
        </>
    );
};
