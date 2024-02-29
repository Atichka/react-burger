import React from 'react';

import css from './burgerIngredients.module.css';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Card from '../../components/Card/card'
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {ADD_INGREDIENT} from "../../services/actions/detailsAction";

export const getIngredients = state => state.ingredients;

export default function BurgerIngredients(props) {
    const dispatch = useDispatch();
    const data = useSelector(getIngredients)
    const onAdd = (item) => {
        dispatch({ type: ADD_INGREDIENT, payload: item })
        props.setModal(true);
        props.setIngredient(props);
        props.setWindowIngredient(true);
        props.setWindowFinish(false);
    }
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
                            {!data.isLoading && (<div className={css.cards}>
                                {data.ingredients.map(item => (
                                    <Card onClick = { () => onAdd(item) }
                                          key={item._id} image={item.image} price={item.price} name={item.name}
                                          id={item._id}
                                          setModal={props.setModal}
                                          setIngredient={props.setIngredient}
                                          setWindowIngredient={props.setWindowIngredient}
                                          setWindowFinish={props.setWindowFinish} />
                                ))}
                            </div>)}
                        </div>
                        <div>
                            <h2 className={css.text}>Соусы</h2>
                            {!data.isLoading && (<div className={css.cards}>
                                {data.ingredients.map(item => (
                                    <Card key={item._id} image={item.image} price={item.price} name={item.name}
                                          counter={item.counter} id={item._id}
                                          setModal={props.setModal}
                                          setIngredient={props.setIngredient}
                                          setWindowIngredient={props.setWindowIngredient}
                                          setWindowFinish={props.setWindowFinish} />
                                ))}
                            </div>)}
                        </div>
                    </div>
                </div>
        );
}

BurgerIngredients.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number
};

