import React, {useEffect, useState} from 'react';

import AppHeader from './components/AppHeader/appHeader';
import BurgerIngredients from './components/BurgerIngredients/burgerIngredients'
import BurgerConstructor from './components/BurgerConstructor/burgerConstructor'
import Modal from './components/Modal/modal'

import css from './App.module.css';
import IngredientDetails from "./components/IngredientDetails/ingredientDetails";
import OrderDetails from "./components/OrderDetails/orderDetails";
import {getIngredients} from "./services/actions/ingredientsAction";
import {useDispatch} from "react-redux";
import {getConstructor} from "./services/actions/constructorAction";

export default function App() {
    const [isModal, setModal] = useState(false)
    const [ingredient, setIngredient] = useState(null)
    const [windowIngredient, setWindowIngredient] = useState(false)
    const [windowFinish, setWindowFinish] = useState(false)

    const dispatch = useDispatch();

        useEffect(() => {
            dispatch(getIngredients())
            dispatch(getConstructor())
        }, [dispatch]);
  return (
    <div className="App">
      <AppHeader />
        <div className={css.block}>
            <h1 className={css.title}>Соберите бургер</h1>
            <div className={css.box}>
                <BurgerIngredients setModal={setModal}
                                   setIngredient={setIngredient}
                                   setWindowIngredient={setWindowIngredient}
                                   setWindowFinish={setWindowFinish} />
                <BurgerConstructor setModal={setModal}
                                   setWindowFinish={setWindowFinish}/>
            </div>
        </div>
        {/*{isModal && windowIngredient &&*/}
        {/*    (<Modal setModal={setModal}>*/}
        {/*        <IngredientDetails setModal={setModal}*/}
        {/*                           setWindowIngredient={setWindowIngredient}*/}
        {/*                           ingredient={ingredients.ingredients.filter(x => x._id === ingredient.id)} />*/}
        {/*    </Modal>)*/}
        {/*}*/}
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
