import React from 'react';
import PropTypes from 'prop-types';
import {DndProvider, useDrop} from 'react-dnd';
import {HTML5Backend} from "react-dnd-html5-backend";

import css from './burgerConstructor.module.css'
import ConstructorItem from "../ConstructorItem/constructorItem";
import {CurrencyIcon, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {INGREDIENT_DELETE, updateIngredients} from "../../services/actions/constructorAction";
import { sendOrder } from '../../services/actions/orderAction';

export const getStuffings = state => state.currBurger.stuffings;
export const getBun = state => state.currBurger.bun;

export default function BurgerConstructor(props) {
    const dispatch = useDispatch();
    const stuffings = useSelector(getStuffings);

    const moveCard = (dragIndex, hoverIndex) => {
        const dragCard = stuffings[dragIndex];
        const newIngredients = [...stuffings];
        newIngredients.splice(dragIndex, 1);
        newIngredients.splice(hoverIndex, 0, dragCard);
        dispatch(updateIngredients(newIngredients));
    };

    const bun = useSelector(getBun);
    const [, dropRef] = useDrop({
        accept: "ingredient",
        drop(item) {
            props.onDropHandler(item);
        }
    });

    const deleteIngredient = (id) => {
        dispatch({ type: INGREDIENT_DELETE, payload: id })
    }
    let totalPrice = 0;

    const handleSubmit = () => {
        props.setModal(true)
        props.setWindowFinish(true)
        const ingredientsId = [bun, ...stuffings, bun].map(item => item.id);
        dispatch(sendOrder(ingredientsId));
    }

        return (
            <div ref={dropRef}>
                <div className={css.box} >
                    {bun && (
                        totalPrice += bun.price,
                        <ConstructorItem key={bun.id + 'top'}
                                         image={bun.image}
                                         text={bun.name + " (верх)"}
                                         price={bun.price}
                                         type={'top'}
                                         id={bun.id}/>
                    )}
                    <DndProvider backend={HTML5Backend}>
                        {stuffings && (stuffings.map((item, index) => (
                            totalPrice += item.price,
                            <ConstructorItem key={item.id}
                                             index={index}
                                             image={item.image}
                                             text={item.name}
                                             price={item.price}
                                             type={item.type}
                                             id={item.id}
                                             moveCard={moveCard}
                                             deleteIngredient={deleteIngredient}/>
                        )))}
                    </DndProvider>
                    {bun && (
                        totalPrice += bun.price,
                        <ConstructorItem key={bun.id + 'bottom'}
                                         isLocked={bun.isLocked}
                                         image={bun.image}
                                         text={bun.name + " (низ)"}
                                         price={bun.price}
                                         type={'bottom'}
                                         id={bun.id}/>
                    )}
                </div>
                <div className={css.total}>
                    <div className={css.price}>
                        <p className={css.title}>{totalPrice}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <Button onClick={handleSubmit}
                            htmlType="button"
                            type="primary"
                            size="small"
                            extraClass="ml-2">
                        Оформить заказ
                    </Button>
                </div>
            </div>
        );
}

BurgerConstructor.propTypes = {
    text: PropTypes.string,
    price: PropTypes.number,
    isLocked: PropTypes.bool,
    setModal: PropTypes.func,
    setIngredient: PropTypes.func,
    setWindowIngredient: PropTypes.func,
    key: PropTypes.number
};
