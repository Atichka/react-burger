import React from 'react';

import css from './ingredientDetails.module.css'
// import close from '../../images/close.svg'
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
// import {REMOVE_INGREDIENT} from "../../services/actions/detailsAction";

export default function IngredientDetails(props) {
    const dispatch = useDispatch();
    const data = useSelector(store => store.currIngredient).addedIngredient;
    // const onDel = () => {
    //     dispatch({ type: REMOVE_INGREDIENT })
    //     props.setModal(false);
    //     props.setWindowIngredient(false)
    // }
    return (
        <div>
                    {/*<div className={css.header}>*/}
                    {/*    <h1 className={css.title}>Детали ингредиента</h1>*/}
                    {/*    <img src={close} alt="Закрыть" className={css.close} onClick = { onDel }/>*/}
                    {/*</div>*/}
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
    setModal: PropTypes.func.isRequired,
    // setWindowIngredient: PropTypes.func.isRequired,
    name: PropTypes.string,
    calories: PropTypes.number,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number
};

