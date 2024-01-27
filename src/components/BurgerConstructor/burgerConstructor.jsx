import React from 'react';
import PropTypes from 'prop-types';

import burgerConstructor from './burgerConstructor.module.css'
import ConstructorItem from "../ConstructorItem/constructorItem";
import imageSauce1 from "../../images/sauce-01.png";
import imageBurger1 from "../../images/bun-02.png";
import {CurrencyIcon, Button} from "@ya.praktikum/react-developer-burger-ui-components";

const burgerConstructorPropTypes = PropTypes.shape({
    text: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isLoked: PropTypes.bool
});

export default function BurgerConstructor() {
        return (
            <div >
                <div className={burgerConstructor.box}>
                    <ConstructorItem type={"top"}
                                     image={imageSauce1}
                                     text={"Соус традиционный галактический"}
                                     price={"200"}
                                     isLoked={true}/>
                    <ConstructorItem image={imageSauce1}
                                     text={"Соус традиционный галактический"}
                                     price={"200"}
                                     isLoked={true}/>
                    <ConstructorItem image={imageBurger1}
                                     text={"Краторная булка N-200i (верх)"}
                                     price={"20"}
                                     isLoked={false}/>
                    <ConstructorItem image={imageBurger1}
                                     text={"Краторная булка N-200i (верх)"}
                                     price={"20"}
                                     isLoked={false}/>
                    <ConstructorItem image={imageBurger1}
                                     text={"Краторная булка N-200i (верх)"}
                                     price={"20"}
                                     isLoked={false}/>
                    <ConstructorItem type={"bottom"}
                                     image={imageBurger1}
                                     text={"Краторная булка N-200i (верх)"}
                                     price={"20"}
                                     isLoked={false}/>

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
