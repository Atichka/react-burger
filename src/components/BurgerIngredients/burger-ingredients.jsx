import React, {useRef} from 'react';
import css from './burger-ingredients.module.css';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Card from '../../components/Card/card'
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import {Link, useLocation} from "react-router-dom";

export const getIngredients = state => state.ingredients;

export default function BurgerIngredients(props) {
    const location = useLocation();
    const data = useSelector(getIngredients);

    const bunsRef = useRef(null);
    const saucesRef = useRef(null);
    const mainsRef = useRef(null);

    function handleScrollToBuns() {
        bunsRef.current.scrollIntoView({ behavior: "smooth" });
    }

    function handleScrollToSauces() {
        saucesRef.current.scrollIntoView({ behavior: "smooth" });
    }
    function handleScrollToMains() {
        mainsRef.current.scrollIntoView({ behavior: "smooth" });
    }

    const onAdd = (item) => {
        props.setWindowIngredient(true);
        props.setWindowFinish(false);
    }

        return (
                <div className={css.container}>
                    <div className={css.tabs}>
                        <Tab value="buns" onClick={handleScrollToBuns}>
                            Булки
                        </Tab>
                        <Tab value="sauces" onClick={handleScrollToSauces}>
                            Соусы
                        </Tab>
                        <Tab value="mains" onClick={handleScrollToMains}>
                            Начинки
                        </Tab>
                    </div>
                    <div className={css.content}>
                        <div>
                            <h2 ref={bunsRef} className={css.text}>Булки</h2>
                            {!data.isLoading && (<div className={css.cards}>
                                {data.ingredients.filter(ingredient => ingredient.type === "bun").map(ingredient => (
                                    <Link
                                        to={`/ingredients/${ingredient._id}`}
                                        className={css.link}
                                        key={ingredient._id}
                                        state={{ background: location }}
                                    >
                                            <Card onClick = { () => onAdd(ingredient) }
                                                  key={ingredient._id}
                                                  image={ingredient.image}
                                                  price={ingredient.price}
                                                  name={ingredient.name}
                                                  id={ingredient._id}

                                                  setIngredient={props.setIngredient}
                                                  setWindowIngredient={props.setWindowIngredient}
                                                  setWindowFinish={props.setWindowFinish}
                                                  type={ingredient.type}/>
                                    </Link>
                                ))}
                            </div>)}
                        </div>
                        <div>
                            <h2 ref={saucesRef} className={css.text}>Соусы</h2>
                            {!data.isLoading && (<div className={css.cards}>
                                {data.ingredients.filter(ingredient => ingredient.type === "sauce").map(ingredient => (
                                    <Link
                                        to={`/ingredients/${ingredient._id}`}
                                        className={css.link}
                                        key={ingredient._id}
                                        state={{ background: location }}
                                    >
                                            <Card onClick = { () => onAdd(ingredient) }
                                                  key={ingredient._id}
                                                  image={ingredient.image}
                                                  price={ingredient.price}
                                                  name={ingredient.name}
                                                  id={ingredient._id}

                                                  setIngredient={props.setIngredient}
                                                  setWindowIngredient={props.setWindowIngredient}
                                                  setWindowFinish={props.setWindowFinish}
                                                  type={ingredient.type}/>
                                    </Link>
                                ))}
                            </div>)}
                        </div>
                        <div>
                            <h2 ref={mainsRef} className={css.text}>Начинки</h2>
                            {!data.isLoading && (<div className={css.cards}>
                                {data.ingredients.filter(ingredient => ingredient.type === "main").map(ingredient => (
                                    <Link
                                        to={`/ingredients/${ingredient._id}`}
                                        className={css.link}
                                        key={ingredient._id}
                                        state={{ background: location }}
                                    >
                                            <Card onClick = { () => onAdd(ingredient) }
                                                  key={ingredient._id}
                                                  image={ingredient.image}
                                                  price={ingredient.price}
                                                  name={ingredient.name}
                                                  id={ingredient._id}

                                                  setIngredient={props.setIngredient}
                                                  setWindowIngredient={props.setWindowIngredient}
                                                  setWindowFinish={props.setWindowFinish}
                                                  type={ingredient.type}/>
                                    </Link>
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

