import stylesOrderInfo from './OrderInfo.module.css'
import {useSelector} from "react-redux";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {OrderIngredientsImage} from "../OrderIngredientsImage/OrderIngredientsImage";
import {OrderIngredientsInfo} from "../OrderIngredientsInfo/OrderIngredientsInfo";


export const OrderInfo = () => {
    const ingredients = useSelector(state => state.ingredients.data)
    return (
        <div className={stylesOrderInfo.container}>
            <p className={`text text_type_digits-default ${stylesOrderInfo.orderNumber}`}>#34533</p>
            <div className={stylesOrderInfo.info}>
                <h1 className={`text text_type_main-medium ${stylesOrderInfo.title}`}>Black Hole Singularity острый бургер</h1>
                <p className={stylesOrderInfo.status}>Выполнен</p>
            </div>
            <p className={`text text_type_main-medium ${stylesOrderInfo.about}`}>Состав:</p>
            <ul className={stylesOrderInfo.ingredients}>
                {ingredients && ingredients
                    .slice(0, 5)
                    .map((item) => {
                        console.log(item)
                        return (
                            <li className={stylesOrderInfo.listItem}>
                                {item &&
                                    <>
                                    <OrderIngredientsImage item={item.image} alt={item.alt}/>
                                    <OrderIngredientsInfo name={item.name} price={item.price}/>
                                    </>
                                }
                            </li>
                        )
                    })
                }
            </ul>
            <div className={stylesOrderInfo.footer}>
                <p className={`text text_type_main-default text_color_inactive`}>Вчера, 13:50 i-GMT+3</p>
                <div className={stylesOrderInfo.priceContainer}>
                    <p className={`text text_type_digits-default`}>510</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
    )
}