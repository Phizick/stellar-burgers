
import stylesIngredientDetails from "../../components/IngredientDetails/IngredientDetails.module.css";
import IngredientDetails from "../../components/IngredientDetails/IngredientDetails";

export const IngredientPage = () => {
    return (
        <div>
            <h1 className={stylesIngredientDetails.head}>Детали ингредиента</h1>
        <IngredientDetails/>
        </div>
    )
}