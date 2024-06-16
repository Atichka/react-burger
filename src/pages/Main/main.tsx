import BurgerIngredients from '../../components/BurgerIngredients/burger-ingredients'
import BurgerConstructor from '../../components/BurgerConstructor/burger-constructor'
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from "react-dnd-html5-backend";

import css from './main.module.css';
import React from "react";
import {addToConstructor} from "../../services/actions/constructorAction";
import {useDispatch} from "react-redux";
import {TIngredient} from "../../utils/types";

type TMain = {
    isModal: boolean;
}

export function MainPage(props: TMain): React.JSX.Element {
    const dispatch = useDispatch();

    const onDropHandler = (item: TIngredient) => {
        const newItem = {...item};
        delete newItem.onClick;
        dispatch(addToConstructor(newItem));
    }
    return (
        <div className={css.block}>
            <h1 className={css.title}>Соберите бургер</h1>
            <div className={css.box}>
                <DndProvider backend={HTML5Backend}>
                    <BurgerIngredients />
                    <BurgerConstructor onDropHandler={onDropHandler} isModal={props.isModal} />
                </DndProvider>
            </div>
        </div>
    );
}
