import React from 'react';

import css from './ingredient-details.module.css'
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {RootState} from "../../App";

export default function IngredientDetails(): React.JSX.Element {
    const { id } = useParams();
    const data = useSelector((store: RootState) => store.ingredients.ingredients);
    const ingredient = data.find((item: { _id: string | undefined; }) => item._id === id);
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

