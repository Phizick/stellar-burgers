import stylesOrderIngredientsImage from "./OrderIngredientsImage.module.css";
import  {  FC} from "react";

type TOrderIngredientsImage = {
    item: string;
    alt: string;
}

export const OrderIngredientsImage: FC<TOrderIngredientsImage> = (props) => {

return (
    <div className={stylesOrderIngredientsImage.itemBorder}>
        <div className={stylesOrderIngredientsImage.image}>
            <img className={stylesOrderIngredientsImage.pic} src={props.item} alt={props.alt} />
        </div>
    </div>
)
};

