import { Route, Redirect, RouteComponentProps } from "react-router-dom";
import { getCookie } from "../../utils/cookieFunc";
import {useLocation} from "react-router-dom";
import {FC, HTMLProps, ReactNode} from 'react'

interface IProtectedRoute {
    children: ReactNode;
    onlyForAuth: boolean;
    path: string;
    exact?: boolean;
    rest?: HTMLProps<RouteComponentProps>
}

export const ProtectedRoute: FC<IProtectedRoute> = ({ onlyForAuth, children, ...rest }) => {
    const isAuthorized = getCookie("accessToken");
    const location = useLocation();

    if (!onlyForAuth && isAuthorized) {
        const { from }: any = location.state || { from: { pathname: "/" } };
        return (
            <Route {...rest}>
                <Redirect to={from} />
            </Route>
        );
    }
    if (onlyForAuth && !isAuthorized) {
        return (
            <Route {...rest}>
                <Redirect to={{ pathname: "/login", state: { from: location } }} />
            </Route>
        );
    }
    return <Route {...rest}>{children}</Route>;
};

