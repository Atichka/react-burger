import React from 'react';

import ingredientDetails from './ingredientDetails.module.css'
import close from '../../images/close.svg'
import PropTypes from "prop-types";

const ingredientDetailsPropTypes = PropTypes.shape({
    setModal: PropTypes.bool,
    setWindowIngredient: PropTypes.bool,
    name: PropTypes.string,
    calories: PropTypes.number,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number
});

export default function IngredientDetails(props) {
    return (
        <div>
                    <div className={ingredientDetails.header}>
                        <h1 className={ingredientDetails.title}>Детали ингредиента</h1>
                        <img src={close} alt="" className={ingredientDetails.close} onClick={() => {
                            props.setModal(false);
                            props.setWindowIngredient(false)
                        }}/>
                    </div>
                    <img src={props.ingredient[0].image} alt="" className={ingredientDetails.pic} />
                    <div className={ingredientDetails.box}>
                        <h2 className={ingredientDetails.name}>{props.ingredient[0].name}</h2>
                        <div className={ingredientDetails.block}>
                            <div>
                                <h3 className={ingredientDetails.text}>Калории, ккал</h3>
                                <p className={ingredientDetails.paragraph}>{props.ingredient[0].calories}</p>
                            </div>
                            <div>
                                <h3 className={ingredientDetails.text}>Белки, г</h3>
                                <p className={ingredientDetails.paragraph}>{props.ingredient[0].proteins}</p>
                            </div>
                            <div>
                                <h3 className={ingredientDetails.text}>Жиры, г</h3>
                                <p className={ingredientDetails.paragraph}>{props.ingredient[0].fat}</p>
                            </div>
                            <div>
                                <h3 className={ingredientDetails.text}>Углеводы, г</h3>
                                <p className={ingredientDetails.paragraph}>{props.ingredient[0].carbohydrates}</p>
                            </div>
                        </div>
                    </div>
                </div>
    );
}

