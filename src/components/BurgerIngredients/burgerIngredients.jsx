import React from 'react';

import burgerIngredients from './burgerIngredients.module.css';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Card from '../../components/Card/card'
import imageBurger1 from '../../images/bun-02.png'
import imageBurger2 from '../../images/bun-01.png'
import imageSauce1 from '../../images/sauce-01.png'
import imageSauce2 from '../../images/sauce-02.png'
import imageSauce3 from '../../images/sauce-03.png'
import imageSauce4 from '../../images/sauce-04.png'
import PropTypes from "prop-types";

const burgerIngredientsPropTypes = PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
});

class BurgerIngredients extends React.Component {
    render() {
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
                                <Card image={imageBurger1} price={"20"} name={"Краторная булка N-200i"} />
                                <Card image={imageBurger2} price={"20"} name={"Флюоресцентная булка R2-D3"} />
                            </div>
                        </div>
                        <div>
                            <h2 className={burgerIngredients.text}>Соусы</h2>
                            <div className={burgerIngredients.cards}>
                                <Card image={imageSauce1} price={"30"} name={"Соус Spicy-X"} counter={"1"} />
                                <Card image={imageSauce2} price={"30"} name={"Соус фирменный Space Sauce"} />
                                <Card image={imageSauce3} price={"30"} name={"Соус Spicy-X"} />
                                <Card image={imageSauce4} price={"30"} name={"Соус фирменный Space Sauce"} />
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default BurgerIngredients;
