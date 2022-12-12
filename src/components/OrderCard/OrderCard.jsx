import stylesOrderCard from './OrderCard.module.css'
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useSelector} from "react-redux";
import {OrderIngredientsImage} from "../OrderIngredientsImage/OrderIngredientsImage";

const burg = {
    "success": true,
    "orders": [
        {
            "ingredients": [
                "60d3463f7034a000269f45e7",
                "60d3463f7034a000269f45e9",
                "60d3463f7034a000269f45e8",
                "60d3463f7034a000269f45ea"
            ],
            "_id": "",
            "status": "done",
            "number": 0,
            "createdAt": "2021-06-23T14:43:22.587Z",
            "updatedAt": "2021-06-23T14:43:22.603Z"
        }
    ],
    "total": 1,
    "totalToday": 1
}


export const OrderCard = () => {
    const ingredients = useSelector(state => state.ingredients.data)
    return (
        <div className={stylesOrderCard.container}>
            <div className={stylesOrderCard.head}>
                <p className={`text text_type_digits-default`}>#0345353</p>
                <p className={`text text_type_main-default text_color_inactive`}>Сегодня, 16:20 i-GMT+3</p>
            </div>
            <p className={`text text_type_main-medium ${stylesOrderCard.title}`}>Death Star Starship Main бургер</p>
            <div className={stylesOrderCard.about}>
                <ul className={stylesOrderCard.ingredientsList}>
                    {ingredients && ingredients
                        .slice(0, 5)
                        .map((item) => {
                        return (
                            <li className={stylesOrderCard.listItem}>
                                {item &&
                                <OrderIngredientsImage item={item.image} alt={item.alt}/>
                                }
                            </li>
                        )
                    })
                    }
                </ul>
                <div className={stylesOrderCard.price}>
                    <p className={`text text_type_digits-default ${stylesOrderCard.priceScore}`}>480</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>

    )
}