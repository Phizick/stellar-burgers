import stylesIngredientDetails from "../../components/IngredientDetails/IngredientDetails.module.css";
import IngredientDetails from "../../components/IngredientDetails/IngredientDetails";
import { FC } from 'react';

export const IngredientPage: FC = () => {
    return (
        <div>
            <h1 className={stylesIngredientDetails.head}>Детали ингредиента</h1>
            <IngredientDetails />
        </div>
    );
};
