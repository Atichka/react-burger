import React from 'react';
import {useDrag, useDrop} from 'react-dnd';
import css from './constructor-item.module.css'

import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import {useRef} from "react";
import { TConstructorItem } from '../../utils/types';

export default function ConstructorItem(props: TConstructorItem): React.JSX.Element {
    const id = props.id;
    const index = props.index;
    const ref = useRef<HTMLInputElement>(null);
    const [, drop] = useDrop({
        accept: 'card',
        hover: (item: { index: number; type: string; id: string }, monitor) => {
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return;
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            if (!hoverBoundingRect) {
                return;
            }
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            if (!clientOffset) {
                return;
            }
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            if(!hoverIndex) {
                return;
            }

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

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
                    <div />
                    {!props.isLocked &&
                        <DragIcon type="primary" />}
                    <ConstructorElement text={props.text}
                                        price={props.price}
                                        thumbnail={props.image}
                                        handleClose={() =>
                                            props.deleteIngredient && props.deleteIngredient(props.id)}/>
                </div>
            )}
        </div>
    );
}

