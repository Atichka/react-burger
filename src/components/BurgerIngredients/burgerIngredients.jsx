import React from 'react';

import css from './burgerIngredients.module.css';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Card from '../../components/Card/card'
import PropTypes from "prop-types";

export default function BurgerIngredients(props) {
        return (
                <div className={css.container}>
                    <div className={css.tabs}>
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
                    <div className={css.content}>
                        <div>
                            <h2 className={css.text}>Булки</h2>
                                <div className={css.cards}>
                                    {props.ingredients.map(item => (
                                        <Card key={item._id} image={item.image} price={item.price} name={item.name} id={item._id}
                                              setModal={props.setModal}
                                              setIngredient={props.setIngredient}
                                              setWindowIngredient={props.setWindowIngredient}
                                              setWindowFinish={props.setWindowFinish}/>
                                    ))}
                                </div>
                        </div>
                        <div>
                            <h2 className={css.text}>Соусы</h2>
                            <div className={css.cards}>
                                {props.ingredients.map(item => (
                                    <Card key={item._id} image={item.image} price={item.price} name={item.name} counter={item.counter} id={item._id}
                                          setModal={props.setModal}
                                          setIngredient={props.setIngredient}
                                          setWindowIngredient={props.setWindowIngredient}
                                          setWindowFinish={props.setWindowFinish} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
        );
}

BurgerIngredients.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number
};

