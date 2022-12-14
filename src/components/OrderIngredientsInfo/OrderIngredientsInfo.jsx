import stylesOrderIngredientsInfo from "./OrderIngredientsInfo.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { OrderIngredientsImage } from "../OrderIngredientsImage/OrderIngredientsImage";
import PropTypes from "prop-types";
import {getIngredients} from "../../utils/constants";

export const OrderIngredientsInfo = (props) => {
    const ingredients = useSelector(getIngredients);

    const count = (elem) => {
        let count = props.data.filter((item) => {
            return item === elem;
        }).length;
        return count;
    };

    const orderIngredient = useMemo(() => {
        return props.data?.map((elem) => {
            return ingredients?.find((item) => {
                return elem._id === item._id
            })
        })
    }, [props.data, ingredients]);

    return (
        <div className={stylesOrderIngredientsInfo.container}>
            {orderIngredient &&
                orderIngredient.map((item) => {
                    return (
                        <div key={item._id} className={stylesOrderIngredientsInfo.info}>
                            <div className={stylesOrderIngredientsInfo.about}>
                                <OrderIngredientsImage item={item.image} alt={item.name} />
                                <p className={`text text_type_main-default`}>{item.name}</p>
                            </div>
                            <div className={stylesOrderIngredientsInfo.price}>
                                <p className={`text text_type_digits-default`}>
                                    {item.type === "bun" ? count(item) * 2 : count(item)} х {item.price}
                                </p>
                                <CurrencyIcon type="primary" />
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

OrderIngredientsInfo.propTypes = {
    data: PropTypes.array.isRequired
};
