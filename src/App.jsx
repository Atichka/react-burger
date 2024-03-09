import React, {useEffect, useState} from 'react';
import {DndProvider, useDrop} from 'react-dnd';
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
import {getConstructor} from "./services/actions/constructorAction";

export const getElements = state => state.ingredients;

export default function App() {
    const [isModal, setModal] = useState(false)
    const [windowIngredient, setWindowIngredient] = useState(false)
    const [windowFinish, setWindowFinish] = useState(false)

    const [elements, setElements] = useState([])
    const [draggedElements, setDraggedElements] = useState([])

    const dispatch = useDispatch();
    const data = useSelector(getElements);

    useEffect(() => {
        dispatch(getIngredients())
        dispatch(getConstructor())
    }, [dispatch]);
    useEffect(() => {
        setElements(data)
    }, [data]);



    const onDropHandler = (item) => {
        setDraggedElements([...draggedElements, item]);
        setElements(elements.filter(elem => elem.id !== item.id));
    }
  return (
        <div className="App">
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
                                               setWindowFinish={setWindowFinish}
                                               elements={elements}/>
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
        </div>
  );
}
