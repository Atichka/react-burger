import React, {useEffect, useState} from 'react';
import { BurgerContext } from './burgerContext.js';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from "react-dnd-html5-backend";

import AppHeader from './components/AppHeader/appHeader';
import BurgerIngredients from './components/BurgerIngredients/burgerIngredients'
import BurgerConstructor from './components/BurgerConstructor/burgerConstructor'
import Modal from './components/Modal/modal'

import css from './App.module.css';
import IngredientDetails from "./components/IngredientDetails/ingredientDetails";
import OrderDetails from "./components/OrderDetails/orderDetails";
import {getIngredients} from "./services/actions/ingredientsAction";
import {useDispatch} from "react-redux";
import {getConstructor, addToConstructor} from "./services/actions/constructorAction";

export default function App() {
    const [isModal, setModal] = useState(false)
    const [windowIngredient, setWindowIngredient] = useState(false)
    const [windowFinish, setWindowFinish] = useState(false)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredients())
        dispatch(getConstructor())
    }, [dispatch]);



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
        <BurgerContext.Provider className="App">
            <AppHeader />

                <div className={css.block}>
                    <h1 className={css.title}>Соберите бургер</h1>
                    <div className={css.box}>
                        <DndProvider backend={HTML5Backend}>
                            <BurgerIngredients setModal={setModal}
                                               setWindowIngredient={setWindowIngredient}
                                               setWindowFinish={setWindowFinish} />
                            <BurgerConstructor onDropHandler={onDropHandler}
                                               setModal={setModal}
                                               setWindowFinish={setWindowFinish}/>
                        </DndProvider>
                    </div>
                </div>

            {isModal && windowIngredient &&
                (<Modal setModal={setModal}>
                    <IngredientDetails setModal={setModal}
                                       setWindowIngredient={setWindowIngredient}/>
                </Modal>)
            }
            {isModal && windowFinish &&
                (<Modal setModal={setModal}>
                    <OrderDetails setModal={setModal}
                                  windowsFinish={windowFinish}
                                  setWindowFinish={setWindowFinish}/>
                </Modal>)
            }
        </BurgerContext.Provider>
  );
}
