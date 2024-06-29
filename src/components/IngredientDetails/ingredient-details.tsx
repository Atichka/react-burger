import React from 'react';

import css from './ingredient-details.module.css'
import {useParams} from "react-router-dom";
import { useSelector } from '../../services/store';
import { getIngredients } from '../../services/selectors/ingredients';

export default function IngredientDetails(): React.JSX.Element {
    const { id } = useParams();
    const data = useSelector(getIngredients);
    const ingredient = data.find((item) => item._id === id)!;
    return (
        <div className={css.container}>
            {ingredient && (<img src={ingredient.image} alt="Картинка ингредиента" className={css.pic} />)}
            <div className={css.box}>
                <h2 className={css.name}>{ingredient.name}</h2>
                <div className={css.block}>
                    <div>
                        <h3 className={css.text}>Калории, ккал</h3>
                        <p className={css.paragraph}>{ingredient.calories}</p>
                    </div>
                    <div>
                        <h3 className={css.text}>Белки, г</h3>
                        <p className={css.paragraph}>{ingredient.proteins}</p>
                    </div>
                    <div>
                        <h3 className={css.text}>Жиры, г</h3>
                        <p className={css.paragraph}>{ingredient.fat}</p>
                    </div>
                    <div>
                        <h3 className={css.text}>Углеводы, г</h3>
                        <p className={css.paragraph}>{ingredient.carbohydrates}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

