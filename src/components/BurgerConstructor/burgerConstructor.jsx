import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useDrop} from 'react-dnd';

import css from './burgerConstructor.module.css'
import ConstructorItem from "../ConstructorItem/constructorItem";
import {CurrencyIcon, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {INGREDIENT_DELETE, BUN_DELETE} from "../../services/actions/constructorAction";

export const getStuffings = state => state.currBurger.stuffings;
export const getBun = state => state.currBurger.bun;

export default function BurgerConstructor(props) {
    const dispatch = useDispatch();
    const stuffings = useSelector(getStuffings);
    const bun = useSelector(getBun);
    console.log('stuffings', stuffings);
    console.log('bun', bun);
    const [, dropRef] = useDrop({
        accept: "ingredient",
        drop(item) {
            props.onDropHandler(item);
        }
    });

    const deleteIngredient = (id) => {
        console.log('id', id);
        dispatch({ type: INGREDIENT_DELETE, payload: id })
    }

        return (
            <div ref={dropRef}>
                <div className={css.box} >
                    {bun && (
                        <ConstructorItem key={bun.id + 'top'}
                                         image={bun.image}
                                         text={bun.name + " (верх)"}
                                         price={bun.price}
                                         type={'top'}
                                         id={bun.id}/>
                    )}
                    {stuffings && (stuffings.map(item => (
                        <ConstructorItem key={item.id}
                                         image={item.image}
                                         text={item.name}
                                         price={item.price}
                                         type={item.type}
                                         id={item.id} deleteIngredient={deleteIngredient}/>
                    )))}
                    {bun && (
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
                        <p className={css.title}>{600}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <Button onClick={() => {
                        props.setModal(true)
                        props.setWindowFinish(true)
                    }} htmlType="button" type="primary" size="small" extraClass="ml-2">
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
