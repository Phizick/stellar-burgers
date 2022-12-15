import stylesOrderCard from './OrderCard.module.css'
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useSelector} from "react-redux";
import {OrderIngredientsImage} from "../OrderIngredientsImage/OrderIngredientsImage";
import { useMemo } from "react";


export const OrderCard = (props) => {
    const ingredients = useSelector(state => state.ingredients.data);
    const { createdAt, number, name } = props.order
    console.log(props.order)

    const orderMaxLength = props.order.ingredients.length;
    const ingredientsLength = orderMaxLength - 6;



    const orderIngredients = useMemo(() => props.order?.ingredients.map((id) => ingredients?.find((item) => id === item._id)), [props.order?.ingredients, ingredients]);
    const orderTotalPrice = useMemo(() => orderIngredients?.reduce((sum, item) => item?.type === 'bun' ? sum + item.price * 2 : sum + (item ? item.price : 0),0),[orderIngredients]);


    return (
        <div className={stylesOrderCard.container}>
            <div className={stylesOrderCard.head}>
                <p className={`text text_type_digits-default`}>#{number}</p>
                <p className={`text text_type_main-default text_color_inactive`}>{createdAt}</p>
            </div>
            <p className={`text text_type_main-medium ${stylesOrderCard.title}`}>{name}</p>
            <div className={stylesOrderCard.about}>
                <ul className={stylesOrderCard.ingredientsList}>
                    {orderIngredients && ingredientsLength <= 5 && orderIngredients
                        .map((item, index) => {
                            return (
                                <li className={stylesOrderCard.listItem} key={index}>
                                    {item &&
                                        <OrderIngredientsImage item={item.image} alt={item.name} key={index}/>
                                    }
                                </li>
                            )
                        })
                    }
                    {orderIngredients && ingredientsLength > 6 && orderIngredients
                        .slice(5, 6)
                        .map((item) => {
                        return (
                            <li className={stylesOrderCard.listItem}>
                                {item &&
                                <OrderIngredientsImage item={item.image} alt={item.name}/>
                                }
                            </li>
                        )
                    })
                    }
                </ul>
                <div className={stylesOrderCard.price}>
                    <p className={`text text_type_digits-default ${stylesOrderCard.priceScore}`}>{orderTotalPrice}</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>

    )
}