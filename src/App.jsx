import React, {useEffect, useState} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';

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
import { OnlyAuth, OnlyUnAuth } from "./components/ProtectedRoute/protectedRoute";
import {checkUserAuth} from "./services/actions/userAction";


export default function App() {
    const [isModal, setModal] = useState(false)
    const [windowIngredient, setWindowIngredient] = useState(false)
    const [windowFinish, setWindowFinish] = useState(false)
    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredients())
        dispatch(getConstructor())
    }, [dispatch]);

    useEffect(() => {
        dispatch(checkUserAuth());
    }, []);

    const onClose = () => {
        navigate(-1);
        dispatch({ type: REMOVE_INGREDIENT })
    }

  return (
        <div className="App">
            <AppHeader />
            <main className={css.block}>
                <Routes>
                    <Route path="/login" element={<OnlyUnAuth component={<LoginPage />} />} />
                    <Route path="/" element={(<MainPage
                        setModal={setModal}
                        setWindowIngredient={setWindowIngredient}
                        setWindowFinish={setWindowFinish} />)} />
                    <Route path="/register" element={<OnlyUnAuth component={<RegisterPage />} />} />
                    <Route path="/forgot-password" element={<OnlyUnAuth component={<ForgotPasswordPage />}/>} />
                    <Route path="/reset-password" element={<OnlyUnAuth component={<ResetPasswordPage />} />
                    } />
                    <Route path="/profile" element={<OnlyAuth component={<ProfilePage />} />}>
                        <Route index element={<OnlyAuth component={<UserProfile />} />}/>
                        <Route path={'orders'} element={<OnlyAuth component={<div>orders</div>} />} />
                        <Route path={'orders/:orderNumber'} element={<OnlyAuth component={<div>ordersNumber</div>} />} />
                    </Route>
                </Routes>
                    <Routes>
                        <Route
                            path="/ingredients/:id"
                            element={isModal && windowIngredient &&
                            (<Modal
                                    setModal={setModal}
                                    onClose={onClose}
                                    title='Детали ингредиента'>
                                <IngredientDetails />
                            </Modal>)
                        }></Route>
                </Routes>
            </main>
                {isModal && windowFinish &&
                    (<Modal setModal={setModal} onClose={onClose}>
                        <OrderDetails />
                    </Modal>)
                }
        </div>
  );
}
