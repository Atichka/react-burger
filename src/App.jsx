import React, {useEffect, useState} from 'react';
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
import {useDispatch, useSelector} from "react-redux";
import {getConstructor, addToConstructor} from "./services/actions/constructorAction";
import {REMOVE_INGREDIENT} from "./services/actions/detailsAction";

export const getOrderNumber = state => state.order.order;

export default function App() {
    const [isModal, setModal] = useState(false)
    const [windowIngredient, setWindowIngredient] = useState(false)
    const [windowFinish, setWindowFinish] = useState(false)

    const dispatch = useDispatch();
    const orderNumber = useSelector(getOrderNumber);

    useEffect(() => {
        dispatch(getIngredients())
        dispatch(getConstructor())
    }, [dispatch]);

    const onClose = () => {
        dispatch({ type: REMOVE_INGREDIENT })
    }

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
        <div className="App">
            <AppHeader />
                <main className={css.block}>
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
                </main>
            {isModal && windowIngredient &&
                (<Modal setModal={setModal}
                        onClose={onClose}
                        windowIngredient={windowIngredient}
                        title='Детали ингредиента'>
                    <IngredientDetails />
                </Modal>)
            }
            {isModal && windowFinish &&
                (<Modal setModal={setModal} onClose={onClose}>
                    <OrderDetails orderNumber={orderNumber}/>
                </Modal>)
            }
        </div>
  );
}
