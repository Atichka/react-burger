import React from 'react';
import PropTypes from 'prop-types';

import css from './burgerConstructor.module.css'
import ConstructorItem from "../ConstructorItem/constructorItem";
import {CurrencyIcon, Button} from "@ya.praktikum/react-developer-burger-ui-components";

export default function BurgerConstructor(props) {
        return (
            <div >
                <div className={css.box}>
                    {props.ingredients.map(item => (
                        <ConstructorItem setModal={props.setModal}
                                         setIngredient={props.setIngredient}
                                         setWindowIngredient={props.setWindowIngredient}
                                         setWindowFinish={props.setWindowFinish}
                                         key={item._id}
                                         image={item.image}
                                         text={item.name}
                                         price={item.price}
                                         isLocked={false} id={item._id}/>
                    ))}
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
    setModal: PropTypes.func.isRequired,
    setIngredient: PropTypes.func.isRequired,
    setWindowIngredient: PropTypes.func.isRequired,
    key: PropTypes.number
};
