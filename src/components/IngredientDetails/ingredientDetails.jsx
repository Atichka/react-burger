import React from 'react';

import css from './ingredientDetails.module.css'
import PropTypes from "prop-types";
import {useSelector} from "react-redux";

export default function IngredientDetails(props) {
    const data = useSelector(store => store.currIngredient).addedIngredient;
    return (
        <div>
            {data.image && (<img src={data.image} alt="Картинка ингредиента" className={css.pic} />)}
                    <div className={css.box}>
                        <h2 className={css.name}>{data.name}</h2>
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

