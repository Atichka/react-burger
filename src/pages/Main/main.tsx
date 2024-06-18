import BurgerIngredients from '../../components/BurgerIngredients/burger-ingredients'
import BurgerConstructor from '../../components/BurgerConstructor/burger-constructor'
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from "react-dnd-html5-backend";

import css from './main.module.css';
import React from "react";

export function MainPage(): React.JSX.Element {
    return (
        <div className={css.block}>
            <h1 className={css.title}>Соберите бургер</h1>
            <div className={css.box}>
                <DndProvider backend={HTML5Backend}>
                    <BurgerIngredients />
                    <BurgerConstructor />
                </DndProvider>
            </div>
        </div>
    );
}
