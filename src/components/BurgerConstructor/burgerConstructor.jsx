import React from 'react';
import PropTypes from 'prop-types';

import burgerConstructor from './burgerConstructor.module.css'
import ConstructorItem from "../ConstructorItem/constructorItem";
import {CurrencyIcon, Button} from "@ya.praktikum/react-developer-burger-ui-components";

burgerConstructor.propTypes = {
    text: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isLocked: PropTypes.bool,
    setModal: PropTypes.bool,
    setIngredient: PropTypes.bool,
    setWindowIngredient: PropTypes.bool,
    key: PropTypes.number.isRequired
};

export default function BurgerConstructor(props) {
        return (
            <div >
                <div className={burgerConstructor.box}>
                    {props.ingredients.map(item => (
                        <ConstructorItem setModal={props.setModal}
                                         setIngredient={props.setIngredient}
                                         setWindowIngredient={props.setWindowIngredient}
                                         key={item._id}
                                         image={item.image}
                                         text={item.name}
                                         price={item.price}
                                         isLocked={false} id={item._id}/>
                    ))}
                </div>
                <div className={burgerConstructor.total}>
                    <div className={burgerConstructor.price}>
                        <p className={burgerConstructor.title}>{600}</p>
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
