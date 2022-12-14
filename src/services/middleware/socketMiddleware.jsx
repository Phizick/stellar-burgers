import {getCookie} from "../../utils/cookieFunc";


export const socketMiddleware = (wsUrl, wsActions) => {
    return store => {
        let socket = null;
        return next => action => {
            const { dispatch } = store;
            const { type, payload } = action;
            const accessToken = getCookie('accessToken')






        }
    }
}