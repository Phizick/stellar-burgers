import stylesOrderIngredientsInfo from "./OrderIngredientsInfo.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import {useAppSelector} from "../../services/hooks/hooks";
import { useMemo, FC} from "react";
import { OrderIngredientsImage } from "../OrderIngredientsImage/OrderIngredientsImage";
import {getIngredients} from "../../services/selectors/ingredientsSelectors";
import {TIngredient} from "../../services/types/types";

interface IOrderIngredientsInfo {
    data: (TIngredient | undefined)[];
}
export const OrderIngredientsInfo: FC<IOrderIngredientsInfo> = (props) => {
    const ingredients = useAppSelector(getIngredients);

    const count = (elem: TIngredient | undefined) => {
        let count = props.data.filter((item) => {
            return item === elem;
        }).length;
        return count;
    };

    const orderIngredient = useMemo(() => {
        return props.data?.map((elem) => {
            return ingredients?.find((item: TIngredient) => {
                return elem?._id === item?._id
            })
        })
    }, [props.data, ingredients]);


    return (
        <div className={stylesOrderIngredientsInfo.container}>
            {orderIngredient &&
                orderIngredient.map((item, index: number) => {
                    return (
                        <div key={index} className={stylesOrderIngredientsInfo.info}>
                            <div className={stylesOrderIngredientsInfo.about}>
                                <OrderIngredientsImage item={item?.image} alt={item?.name}/>
                                <p className={`text text_type_main-default`}>{item?.name}</p>
                            </div>
                            <div className={stylesOrderIngredientsInfo.price}>
                                <p className={`text text_type_digits-default`}>
                                    {item?.type === "bun" ? count(item) * 2 : count(item)} х {item?.price}
                                </p>
                                <CurrencyIcon type="primary" />
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

