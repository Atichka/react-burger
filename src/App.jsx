import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AppHeader from './components/AppHeader/appHeader';
import Modal from './components/Modal/modal'
import { LoginPage } from './pages/Login/login';
import { MainPage } from './pages/Main/main';

import css from './App.module.css';
import IngredientDetails from "./components/IngredientDetails/ingredientDetails";
import OrderDetails from "./components/OrderDetails/orderDetails";
import {getIngredients} from "./services/actions/ingredientsAction";
import {useDispatch, useSelector} from "react-redux";
import {getConstructor} from "./services/actions/constructorAction";
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

  return (
        <div className="App">
            <AppHeader />
            <main className={css.block}>
                <Router>
                    <Routes>
                        <Route path="/login" element={(<LoginPage />)} />
                        <Route path="/" element={(<MainPage
                            setModal={setModal}
                            setWindowIngredient={setWindowIngredient}
                            setWindowFinish={setWindowFinish} />)} />
                    </Routes>
                </Router>
            </main>
            {isModal && windowIngredient &&
                (<Modal setModal={setModal}
                        onClose={onClose}
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
