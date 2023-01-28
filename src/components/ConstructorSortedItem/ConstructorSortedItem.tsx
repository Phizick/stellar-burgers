import React, { useRef, FC } from "react";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch} from "../../services/hooks/hooks";
import {useDrop, useDrag, XYCoord} from "react-dnd";
import { deleteConstructorElement } from "../../services/actions/ConstructorActions";
import stylesConstructorSortedItem from "../ConstructorSortedItem/ConstructorSortedItem.module.css";
import { TIngredient } from "../../services/types";


type TDragItem = {
    index: number;
    type: string;
    id?: string;
}

type TSortedItems = {
    index: number;
    items?: TIngredient;
    moveIngredientCard: any;
    data: TIngredient;
    id?: string | undefined;
}
const ConstructorSortedItem: FC<TSortedItems> = (props) => {
    const dispatch = useDispatch();
    const ref = useRef<HTMLDivElement>(null);
    const removeIngredient = (removedIngredient: string | undefined) => {
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
            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
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
