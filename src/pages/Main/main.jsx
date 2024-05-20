import BurgerIngredients from '../../components/BurgerIngredients/burger-ingredients'
import BurgerConstructor from '../../components/BurgerConstructor/burger-constructor'
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from "react-dnd-html5-backend";

import css from './main.module.css';
import React from "react";
import {addToConstructor} from "../../services/actions/constructorAction";
import {useDispatch} from "react-redux";

export function MainPage(props) {
    const dispatch = useDispatch();

    const onDropHandler = (item) => {
        const newItem = {...item};
        delete newItem.onClick;
        delete newItem.setModal;
        delete newItem.setWindowIngredient;
        delete newItem.setWindowFinish;
        delete newItem.setIngredient;
        dispatch(addToConstructor(newItem));
    }
    return (
        <div className={css.block}>
            <h1 className={css.title}>Соберите бургер</h1>
            <div className={css.box}>
                <DndProvider backend={HTML5Backend}>
                    <BurgerIngredients setModal={props.setModal}
                                       setWindowIngredient={props.setWindowIngredient}
                                       setWindowFinish={props.setWindowFinish} />
                    <BurgerConstructor onDropHandler={onDropHandler}
                                       setModal={props.setModal}
                                       setWindowFinish={props.setWindowFinish}/>
                </DndProvider>
            </div>
        </div>
    );
}
