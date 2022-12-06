import {Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import {getCookie} from "../../utils/cookieFunc";

export const ProtectedRoute = ({children, ...rest}) => {
    const user = useSelector((store) => store.user);
    const accessToken = getCookie('accessToken');

    return (
        <Route {...rest}
               render={({location}) =>
                   accessToken || user.authorizedUser || user?.name ? (
                       children
                   ) : (
                       <Redirect to={{
                           pathname: '/login',
                           state: {from: location},
                       }}
                       />
                   )
               }
        />
    )
}