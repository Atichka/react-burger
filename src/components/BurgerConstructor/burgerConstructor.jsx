import React, {useState} from 'react';
import PropTypes from 'prop-types';

import burgerConstructor from './burgerConstructor.module.css'
import ConstructorItem from "../ConstructorItem/constructorItem";
import imageSauce1 from "../../images/sauce-01.png";
import imageBurger1 from "../../images/bun-02.png";
import {CurrencyIcon, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import Card from "../Card/card";

const burgerConstructorPropTypes = PropTypes.shape({
    text: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isLocked: PropTypes.bool
});

export default function BurgerConstructor(props) {

        return (
            <div >
                <div className={burgerConstructor.box}>
                    {props.data.map(item => (
                        <ConstructorItem setModal={props.setModal} key={item._id}
                        image={item.image}
                        text={item.name}
                        price={item.price}
                        isLocked={false}/>
                    ))}
                </div>
                <div className={burgerConstructor.total}>
                    <div className={burgerConstructor.price}>
                        <p className={burgerConstructor.title}>{600}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <Button htmlType="button" type="primary" size="small" extraClass="ml-2">
                        Оформить заказ
                    </Button>
                </div>
            </div>
        );
}
