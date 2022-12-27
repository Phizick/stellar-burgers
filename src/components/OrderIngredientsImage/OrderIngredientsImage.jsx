import stylesOrderIngredientsImage from "./OrderIngredientsImage.module.css";
import PropTypes from "prop-types";


export const OrderIngredientsImage = (props) => {

return (
    <div className={stylesOrderIngredientsImage.itemBorder}>
        <div className={stylesOrderIngredientsImage.image}>
            <img className={stylesOrderIngredientsImage.pic} src={props.item} alt={props.alt} />
        </div>
    </div>
)
};

OrderIngredientsImage.propTypes = {
    item: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};