import React, { useRef, FC } from "react";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { useDrop, useDrag } from "react-dnd";
import { deleteConstructorElement } from "../../services/actions/ConstructorActions";
import stylesConstructorSortedItem from "../ConstructorSortedItem/ConstructorSortedItem.module.css";


type TDragItem = {
    index: number;
    type: string;
    id?: string;
}

interface Ingredient {
    calories: number;
    carbohydrates: number;
    fat: number;
    image: string;
    image_large: string;
    image_mobile: string;
    name: string;
    price: number;
    proteins: number;
    type: "bun" | "main" | "sauce";
    __v: number;
    _id: string;
    id?: string;
    count?: number;
}

type TSortedItems = {
    index: number;
    items: Ingredient;
}
const ConstructorSortedItem: FC<TSortedItems> = (props: any) => {
    const dispatch = useDispatch();
    const ref = useRef(null);
    const removeIngredient = (removedIngredient: string) => {
        dispatch(deleteConstructorElement(removedIngredient));
    };

    const [, drop] = useDrop<TDragItem>({
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



export default ConstructorSortedItem;
