import React, {useEffect, useState} from 'react';
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom';

import AppHeader from './components/AppHeader/app-header';
import Modal from './components/Modal/modal'
import { LoginPage } from './pages/Login/login';
import { MainPage } from './pages/Main/main';
import { RegisterPage } from './pages/Register/register';
import { ForgotPasswordPage } from './pages/ForgotPassword/forgotPassword';
import { ResetPasswordPage } from './pages/ResetPassword/resetPassword';
import { ProfilePage } from "./pages/Profile/profile";
import {UserProfile} from "./components/UserProfile/user-profile"

import css from './App.module.css';
import IngredientDetails from "./components/IngredientDetails/ingredient-details";
import OrderDetails from "./components/OrderDetails/order-details";
import {getIngredients} from "./services/actions/ingredientsAction";
import {useDispatch, useSelector} from "react-redux";
import { OnlyAuth, OnlyUnAuth } from "./components/ProtectedRoute/protected-route";
import {checkUserAuth} from "./services/actions/userAction";
import { combineReducers } from '@reduxjs/toolkit'
const rootReducer = combineReducers({})
export type RootState = ReturnType<typeof rootReducer>

export const ingredients = (state: RootState) => state.ingredients;

export default function App(): React.JSX.Element {
    const [isModal, setModal] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();
    const background = location.state && location.state?.background;
    const data = useSelector(ingredients);

    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(getIngredients())
    }, [dispatch]);

    useEffect(() => {
        // @ts-ignore
        dispatch(checkUserAuth());
    }, []);

    const onClose = () => {
        navigate(-1);
    }

    return (
        <div className="App">
            <>
                <AppHeader />
                {!data.isLoading && data.ingredients.length > 0 ? (
                    <>
                        <main className={css.block}>
                            <Routes location={background || location}>
                                <Route path="/login" element={<OnlyUnAuth component={<LoginPage />} />} />
                                <Route path="/" element={(<MainPage />)} />
                                <Route path="/register" element={<OnlyUnAuth component={<RegisterPage />} />} />
                                <Route path="/forgot-password" element={<OnlyUnAuth component={<ForgotPasswordPage />}/>} />
                                <Route path="/reset-password" element={<OnlyUnAuth component={<ResetPasswordPage />} />
                                } />
                                <Route path="/profile" element={<OnlyAuth component={<ProfilePage />} />}>
                                    <Route index element={<OnlyAuth component={<UserProfile />} />}/>
                                    <Route path={'orders'} element={<OnlyAuth component={<div>orders</div>} />} />
                                    <Route path={'orders/:orderNumber'} element={<OnlyAuth component={<div>ordersNumber</div>} />} />
                                </Route>
                                <Route path="/ingredients/:id" element={<IngredientDetails />}></Route>
                            </Routes>
                            {background && (
                                <Routes>
                                    <Route
                                        path="/ingredients/:id"
                                        element={<Modal
                                            onClose={onClose}
                                            title='Детали ингредиента'>
                                            <IngredientDetails />
                                        </Modal>
                                        }></Route>
                                </Routes>
                            )}
                        </main>
                        {isModal &&
                            (<Modal onClose={() => setModal(false)}>
                                <OrderDetails />
                            </Modal>)
                        }
                    </>
                ) : (
                    <h1>Загрузка данных</h1>
                )}
            </>
        </div>
    );
}
