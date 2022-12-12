import stylesOrderIngredientsImage from "./OrderIngredientsImage.module.css";


export const OrderIngredientsImage = (props) => {
return (
    <div className={stylesOrderIngredientsImage.itemBorder}>
        <div className={stylesOrderIngredientsImage.image}>
            <img className={stylesOrderIngredientsImage.pic} src={props.item} alt={props.alt} />
        </div>
    </div>
)
}