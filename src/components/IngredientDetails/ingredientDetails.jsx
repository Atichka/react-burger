import React from 'react';

import css from './ingredientDetails.module.css'
import close from '../../images/close.svg'
import PropTypes from "prop-types";

export default function IngredientDetails(props) {
    return (
        <div>
                    <div className={css.header}>
                        <h1 className={css.title}>Детали ингредиента</h1>
                        <img src={close} alt="" className={css.close} onClick={() => {
                            props.setModal(false);
                            props.setWindowIngredient(false)
                        }}/>
                    </div>
                    <img src={props.ingredient[0].image} alt="" className={css.pic} />
                    <div className={css.box}>
                        <h2 className={css.name}>{props.ingredient[0].name}</h2>
                        <div className={css.block}>
                            <div>
                                <h3 className={css.text}>Калории, ккал</h3>
                                <p className={css.paragraph}>{props.ingredient[0].calories}</p>
                            </div>
                            <div>
                                <h3 className={css.text}>Белки, г</h3>
                                <p className={css.paragraph}>{props.ingredient[0].proteins}</p>
                            </div>
                            <div>
                                <h3 className={css.text}>Жиры, г</h3>
                                <p className={css.paragraph}>{props.ingredient[0].fat}</p>
                            </div>
                            <div>
                                <h3 className={css.text}>Углеводы, г</h3>
                                <p className={css.paragraph}>{props.ingredient[0].carbohydrates}</p>
                            </div>
                        </div>
                    </div>
                </div>
    );
}

IngredientDetails.propTypes = {
    setModal: PropTypes.func.isRequired,
    setWindowIngredient: PropTypes.func.isRequired,
    name: PropTypes.string,
    calories: PropTypes.number,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number
};

