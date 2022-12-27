import React, { useRef } from "react";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { useDrop, useDrag } from "react-dnd";
import { deleteConstructorElement } from "../../services/actions";
import stylesConstructorSortedItem from "../ConstructorSortedItem/ConstructorSortedItem.module.css";
import PropTypes from "prop-types";
import {ingredientType} from "../../utils/type";


const ConstructorSortedItem = (props) => {
    const dispatch = useDispatch();
    const ref = useRef(null);
    const removeIngredient = (removedIngredient) => {
        dispatch(deleteConstructorElement(removedIngredient));
    };

    const [, drop] = useDrop({
        accept: "ingredientList",
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return;
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
            item.index = hoverIndex;
        },
    });

    const id = props.data.keyId;
    const index = props.index;


    const [{ isDragging }, dragRef] = useDrag({
        type: "ingredientList",
        item: () => {
            return { id, index };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    dragRef(drop(ref));

    return (
        <div ref={ref} className={isDragging ? `${stylesConstructorSortedItem.ref} ${stylesConstructorSortedItem.dragging}` : `${stylesConstructorSortedItem.ref}`}>
            <DragIcon type="primary" />
            <ConstructorElement text={props.data.name} handleClose={() => removeIngredient(props.id)} price={props.data.price} thumbnail={props.data.image} />
        </div>
    );
};

ConstructorSortedItem.propTypes = {
    index: PropTypes.number.isRequired,
    moveIngredientCard: PropTypes.func.isRequired,
    data: ingredientType.isRequired
};

export default ConstructorSortedItem;
