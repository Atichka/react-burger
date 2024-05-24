import React, {useEffect, useRef} from 'react';
import css from './burger-ingredients.module.css';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Card from '../../components/Card/card'
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import {Link, useLocation} from "react-router-dom";
import { useInView } from "react-intersection-observer";

export const getIngredients = state => state.ingredients;

export default function BurgerIngredients(props) {
    const location = useLocation();
    const data = useSelector(getIngredients);
    const [current, setCurrent] = React.useState("Булки");

    const setTab = (tab) => {
        setCurrent(tab);
        const element = document.getElementById(tab);
        if (element) element.scrollIntoView({ behavior: "smooth" });
    };

    const [bunsRef, bunsInView] = useInView({ threshold: 0.3 });
    const [saucesRef, saucesInView] = useInView({ threshold: 0.3 });
    const [mainsRef, mainInView] = useInView({ threshold: 0.3 });

    useEffect(() => {
        if (bunsInView) {
            setCurrent("Булки");
        } else if (saucesInView) {
            setCurrent("Соусы");
        } else if (mainInView) {
            setCurrent("Начинки");
        }
    }, [bunsInView, saucesInView, mainInView]);

    const onAdd = (item) => {
        props.setModal(true);
        props.setWindowIngredient(true);
        props.setWindowFinish(false);
    }

        return (
                <div className={css.container}>
                    <div className={css.tabs}>
                        <Tab value="buns" active={current === "Булки"} onClick={setTab}>
                            Булки
                        </Tab>
                        <Tab value="sauces" active={current === "Соусы"} onClick={setTab}>
                            Соусы
                        </Tab>
                        <Tab value="mains" active={current === "Начинки"} onClick={setTab}>
                            Начинки
                        </Tab>
                    </div>
                    <div className={css.content}>
                        <div>
                            <h2 id="buns" ref={bunsRef} className={css.text}>Булки</h2>
                            {!data.isLoading && (<div className={css.cards}>
                                {data.ingredients.filter(ingredient => ingredient.type === "bun").map(ingredient => (
                                    <Link
                                        to={`/ingredients/${ingredient._id}`}
                                        className={css.link}
                                        key={ingredient._id}
                                        setModal={props.setModal}
                                        state={{ background: location }}
                                    >
                                            <Card onClick = { () => onAdd(ingredient) }
                                                  key={ingredient._id}
                                                  image={ingredient.image}
                                                  price={ingredient.price}
                                                  name={ingredient.name}
                                                  id={ingredient._id}
                                                  setModal={props.setModal}
                                                  setIngredient={props.setIngredient}
                                                  setWindowIngredient={props.setWindowIngredient}
                                                  setWindowFinish={props.setWindowFinish}
                                                  type={ingredient.type}/>
                                    </Link>
                                ))}
                            </div>)}
                        </div>
                        <div>
                            <h2 id="sauces" ref={saucesRef} className={css.text}>Соусы</h2>
                            {!data.isLoading && (<div className={css.cards}>
                                {data.ingredients.filter(ingredient => ingredient.type === "sauce").map(ingredient => (
                                    <Link
                                        to={`/ingredients/${ingredient._id}`}
                                        className={css.link}
                                        key={ingredient._id}
                                        setModal={props.setModal}
                                        state={{ background: location }}
                                    >
                                            <Card onClick = { () => onAdd(ingredient) }
                                                  key={ingredient._id}
                                                  image={ingredient.image}
                                                  price={ingredient.price}
                                                  name={ingredient.name}
                                                  id={ingredient._id}
                                                  setModal={props.setModal}
                                                  setIngredient={props.setIngredient}
                                                  setWindowIngredient={props.setWindowIngredient}
                                                  setWindowFinish={props.setWindowFinish}
                                                  type={ingredient.type}/>
                                    </Link>
                                ))}
                            </div>)}
                        </div>
                        <div>
                            <h2 id="mains" ref={mainsRef} className={css.text}>Начинки</h2>
                            {!data.isLoading && (<div className={css.cards}>
                                {data.ingredients.filter(ingredient => ingredient.type === "main").map(ingredient => (
                                    <Link
                                        to={`/ingredients/${ingredient._id}`}
                                        className={css.link}
                                        key={ingredient._id}
                                        setModal={props.setModal}
                                        state={{ background: location }}
                                    >
                                            <Card onClick = { () => onAdd(ingredient) }
                                                  key={ingredient._id}
                                                  image={ingredient.image}
                                                  price={ingredient.price}
                                                  name={ingredient.name}
                                                  id={ingredient._id}
                                                  setModal={props.setModal}
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

