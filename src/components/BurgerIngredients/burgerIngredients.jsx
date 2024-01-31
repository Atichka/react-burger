import React from 'react';

import burgerIngredients from './burgerIngredients.module.css';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Card from '../../components/Card/card'
import PropTypes from "prop-types";

const burgerIngredientsPropTypes = PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
});

export default function BurgerIngredients(props) {
        return (
                <div className={burgerIngredients.container}>
                    <div className={burgerIngredients.tabs}>
                        <Tab value="one">
                            Булки
                        </Tab>
                        <Tab value="two">
                            Соусы
                        </Tab>
                        <Tab value="three">
                            Начинки
                        </Tab>
                    </div>
                    <div className={burgerIngredients.content}>
                        <div>
                            <h2 className={burgerIngredients.text}>Булки</h2>
                                <div className={burgerIngredients.cards}>
                                    {props.data.map(item => (
                                        <Card key={item._id} image={item.image} price={item.price} name={item.name} />
                                    ))}
                                </div>
                        </div>
                        <div>
                            <h2 className={burgerIngredients.text}>Соусы</h2>
                            <div className={burgerIngredients.cards}>
                                {props.data.map(item => (
                                    <Card key={item._id} image={item.image} price={item.price} name={item.name} counter={item.counter} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
        );
}

