import React from 'react';

import css from './ingredientDetails.module.css'
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

export default function IngredientDetails(props) {
    const { id } = useParams();
    const data = useSelector((store) => store.ingredients.ingredients);
    const ingredient = data.find((item) => item._id === id);
    return (
        <div className={css.container}>
            {ingredient && (<img src={ingredient.image} alt="Картинка ингредиента" className={css.pic} />)}
                    <div className={css.box}>
                        <h2 className={css.name}>{ingredient.name}</h2>
                        <div className={css.block}>
                            <div>
                                <h3 className={css.text}>Калории, ккал</h3>
                                <p className={css.paragraph}>{data.calories}</p>
                            </div>
                            <div>
                                <h3 className={css.text}>Белки, г</h3>
                                <p className={css.paragraph}>{data.proteins}</p>
                            </div>
                            <div>
                                <h3 className={css.text}>Жиры, г</h3>
                                <p className={css.paragraph}>{data.fat}</p>
                            </div>
                            <div>
                                <h3 className={css.text}>Углеводы, г</h3>
                                <p className={css.paragraph}>{data.carbohydrates}</p>
                            </div>
                        </div>
                    </div>
                </div>
    );
}

IngredientDetails.propTypes = {
    name: PropTypes.string,
    calories: PropTypes.number,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number
};

