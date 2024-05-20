import React from 'react';
import {useDrag, useDrop} from 'react-dnd';
import css from './constructor-item.module.css'

import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from "prop-types";
import {useRef} from "react";

export default function ConstructorItem(props) {
    const id = props.id;
    const moveCard = props.moveCard;
    const index = props.index;
    const ref = useRef(null);
    const [, drop] = useDrop({
        accept: 'card',
        hover: (item, monitor) => {
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

            moveCard(dragIndex, hoverIndex);
            item.index = hoverIndex;
        }
    });

    const [{ isDragging }, drag] = useDrag({
        type: 'card',
        item: () => {
            return { id, index };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });
    const opacity = isDragging ? 0 : 1;
    drag(drop(ref));

        return (
            <div>
                {props.type === "top" || props.type === "bottom" ? (
                    <div className={css.item}>
                            <div />
                        {props.type === "top" && (<ConstructorElement isLocked={true}
                                             text={props.text}
                                             price={props.price}
                                             thumbnail={props.image}
                                             type="top" />)}
                        {props.type === "bottom" && (<ConstructorElement isLocked={true}
                                                                      text={props.text}
                                                                      price={props.price}
                                                                      thumbnail={props.image}
                                                                      type="bottom" />)}
                    </div>) : (
                        <div ref={ref} className={css.item} style={{opacity}}>
                            {!props.isLocked &&
                                <DragIcon type="primary" />}
                                <ConstructorElement text={props.text}
                                                    price={props.price}
                                                    thumbnail={props.image}
                                                    handleClose={() =>
                                                        props.deleteIngredient(props.id)}/>
                        </div>
                    )}
            </div>
        );
}

ConstructorItem.propTypes = {
    setModal: PropTypes.func,
    setIngredient: PropTypes.func,
    setWindowIngredient: PropTypes.func,
    setWindowFinish: PropTypes.func,
    isLocked: PropTypes.bool,
    text: PropTypes.string,
    price: PropTypes.number
};

