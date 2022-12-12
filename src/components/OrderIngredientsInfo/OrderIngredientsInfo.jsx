import stylesOrderIngredientsInfo from './OrderIngredientsInfo.module.css'
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

export const OrderIngredientsInfo = (props) => {


    return (
        <div className={stylesOrderIngredientsInfo.container}>
            <p className={`text text_type_main-default`}>{props.name}</p>
            <div className={stylesOrderIngredientsInfo.price}>
                <p className={`text text_type_digits-default`}>{props.price}</p>
                <CurrencyIcon type="primary" />
            </div>
        </div>
    )
}