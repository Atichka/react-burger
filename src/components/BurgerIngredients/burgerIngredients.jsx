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
    const data = useSelector(getIngredients);
    const [current, setCurrent] = React.useState('buns')

    const setCurrentAndScroll = (tab) => {
        setCurrent(tab);
        document.querySelector(`#${tab}`)?.scrollIntoView({behavior: 'smooth'});
    };

    const onAdd = (item) => {
        dispatch({ type: ADD_INGREDIENT, payload: item })
        props.setModal(true);
        props.setWindowIngredient(true);
        props.setWindowFinish(false);
    }

        return (
                <div className={css.container}>
                    <div className={css.tabs}>
                        <Tab value="buns" active={current === 'buns'} onClick={ () => setCurrentAndScroll("buns")}>
                            Булки
                        </Tab>
                        <Tab value="sauces" active={current === 'sauces'} onClick={ () => setCurrentAndScroll("sauces")}>
                            Соусы
                        </Tab>
                        <Tab value="mains" active={current === 'mains'} onClick={ () => setCurrentAndScroll("mains")}>
                            Начинки
                        </Tab>
                    </div>
                    <div className={css.content}>
                        <div>
                            <h2 id="buns" className={css.text}>Булки</h2>
                            {!data.isLoading && (<div className={css.cards}>
                                {data.ingredients.filter(ingredient => ingredient.type === "bun").map(ingredient => (
                                        <Card onClick = { () => onAdd(ingredient) }
                                              key={ingredient._id} image={ingredient.image} price={ingredient.price} name={ingredient.name}
                                              id={ingredient._id}
                                              setModal={props.setModal}
                                              setIngredient={props.setIngredient}
                                              setWindowIngredient={props.setWindowIngredient}
                                              setWindowFinish={props.setWindowFinish}
                                              type={ingredient.type}/>
                                ))}
                            </div>)}
                        </div>
                        <div>
                            <h2 id="sauces" className={css.text}>Соусы</h2>
                            {!data.isLoading && (<div className={css.cards}>
                                {data.ingredients.filter(ingredient => ingredient.type === "sauce").map(ingredient => (
                                        <Card key={ingredient._id} image={ingredient.image} price={ingredient.price} name={ingredient.name}
                                              counter={ingredient.counter} id={ingredient._id}
                                              setModal={props.setModal}
                                              setIngredient={props.setIngredient}
                                              setWindowIngredient={props.setWindowIngredient}
                                              setWindowFinish={props.setWindowFinish}
                                              type={ingredient.type} />
                                ))}
                            </div>)}
                        </div>
                        <div>
                            <h2 id="mains" className={css.text}>Начинки</h2>
                            {!data.isLoading && (<div className={css.cards}>
                                {data.ingredients.filter(ingredient => ingredient.type === "main").map(ingredient => (
                                    <Card key={ingredient._id} image={ingredient.image} price={ingredient.price} name={ingredient.name}
                                          counter={ingredient.counter} id={ingredient._id}
                                          setModal={props.setModal}
                                          setIngredient={props.setIngredient}
                                          setWindowIngredient={props.setWindowIngredient}
                                          setWindowFinish={props.setWindowFinish}
                                          type={ingredient.type} />
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

