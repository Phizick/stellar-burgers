
import React, {useCallback, useRef} from "react";
import stylesBurgerConstructor from "../BurgerConstructor/BurgerConstructor.module.css";
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import {ingredientType} from "../../utils/type";
import { useSelector, useDispatch} from "react-redux";
import {useDrop, useDrag} from "react-dnd";
import {SET_DEFAULT_BURGER, DELETE_CONSTRUCTOR_INGREDIENT, SORTED_CONSTRUCTOR} from "../../services/actions";

const ConstructorSortedItem = (props) => {
    const dispatch = useDispatch();
    const ref = useRef(null);

    const removeIngredient = (removedIngredient) => {
        dispatch({
            type: DELETE_CONSTRUCTOR_INGREDIENT,
            data: removedIngredient
        })
    }

    const [, drop] = useDrop({
        accept: 'ingredientOne',
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            props.moveIngredientCard(dragIndex, hoverIndex);
            item.index = hoverIndex
        }
    });

    const id = props.id;
    const index = props.index

    const [, dragRef] = useDrag({
        type: 'ingredientOne',
        item: () => {
            return {id, index}
        },

    })

    dragRef(drop(ref));

    return (
        <div ref={ref}  style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '10px' }} >
            <DragIcon type="primary" />
            <div>
                <ConstructorElement
                    text={props.data.name}
                    handleClose={() => removeIngredient(props.id)}
                    price={props.data.price}
                    thumbnail={props.data.image}

                />

            </div>
        </div>
    )
}

export default ConstructorSortedItem