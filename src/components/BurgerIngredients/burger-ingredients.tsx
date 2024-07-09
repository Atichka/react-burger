import React, {useEffect} from 'react';
import css from './burger-ingredients.module.css';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Card from '../Card/card'
import {useSelector} from "../../services/store";
import {Link, useLocation} from "react-router-dom";
import { useInView } from "react-intersection-observer";
import {TBurgerConstructor} from "../../utils/types";
import { getIngredients, getIngredientsLoading } from '../../services/selectors/ingredients';

export default function BurgerIngredients(): React.JSX.Element {
    const location = useLocation();
    const [current, setCurrent] = React.useState("Булки");
    const ingredients = useSelector(getIngredients);
    const isLoading = useSelector(getIngredientsLoading);

    const setTab = (tab: React.SetStateAction<string>) => {
        setCurrent(tab);
        if (typeof tab === "string") {
            const element = document.getElementById(tab);
            if (element) element.scrollIntoView({ behavior: "smooth" });
        }
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
                    {!isLoading && (<div className={css.cards}>
                        {ingredients.filter((ingredient: { type: string; }) => ingredient.type === "bun").map((ingredient: TBurgerConstructor) => (
                            <Link
                                to={`/ingredients/${ingredient._id}`}
                                className={css.link}
                                key={ingredient._id}
                                state={{ background: location }}
                            >
                                <Card key={ingredient._id}
                                      image={ingredient.image}
                                      price={ingredient.price}
                                      name={ingredient.name}
                                      id={ingredient._id}
                                      type={ingredient.type}/>
                            </Link>
                        ))}
                    </div>)}
                </div>
                <div>
                    <h2 id="sauces" ref={saucesRef} className={css.text}>Соусы</h2>
                    {!isLoading && (<div className={css.cards}>
                        {ingredients.filter((ingredient: { type: string; }) => ingredient.type === "sauce").map((ingredient: TBurgerConstructor) => (
                            <Link
                                to={`/ingredients/${ingredient._id}`}
                                className={css.link}
                                key={ingredient._id}
                                state={{ background: location }}
                            >
                                <Card key={ingredient._id}
                                      image={ingredient.image}
                                      price={ingredient.price}
                                      name={ingredient.name}
                                      id={ingredient._id}
                                      type={ingredient.type}/>
                            </Link>
                        ))}
                    </div>)}
                </div>
                <div>
                    <h2 id="mains" ref={mainsRef} className={css.text}>Начинки</h2>
                    {!isLoading && (<div className={css.cards}>
                        {ingredients.filter((ingredient: { type: string; }) => ingredient.type === "main").map((ingredient: TBurgerConstructor) => (
                            <Link
                                to={`/ingredients/${ingredient._id}`}
                                className={css.link}
                                key={ingredient._id}
                                state={{ background: location }}
                            >
                                <Card key={ingredient._id}
                                      image={ingredient.image}
                                      price={ingredient.price}
                                      name={ingredient.name}
                                      id={ingredient._id}
                                      type={ingredient.type}/>
                            </Link>
                        ))}
                    </div>)}
                </div>
            </div>
        </div>

    );
}

