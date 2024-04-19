import React, {useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom';

import AppHeader from './components/AppHeader/appHeader';
import Modal from './components/Modal/modal'
import { LoginPage } from './pages/Login/login';
import { MainPage } from './pages/Main/main';
import { RegisterPage } from './pages/Register/register';
import { ForgotPasswordPage } from './pages/ForgotPassword/forgotPassword';
import { ResetPasswordPage } from './pages/ResetPassword/resetPassword';
import { ProfilePage } from "./pages/Profile/profile";
import {UserProfile} from "./components/UserProfile/userProfile"

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
                <Routes>
                    <Route path="/login" element={(<LoginPage />)} />
                    <Route path="/" element={(<MainPage
                        setModal={setModal}
                        setWindowIngredient={setWindowIngredient}
                        setWindowFinish={setWindowFinish} />)} />
                    <Route path="/register" element={(<RegisterPage />)} />
                    <Route path="/forgot-password" element={(<ForgotPasswordPage />)} />
                    <Route path="/reset-password" element={(<ResetPasswordPage />)} />
                    <Route path={'profile'} element={<ProfilePage/>}>
                        <Route index element={<UserProfile/>}/>
                        <Route path={'orders'} element={<div>orders</div>}/>
                        <Route path={'orders/:orderNumber'} element={<div>ordersNumber</div>}/>
                    </Route>
                </Routes>
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
