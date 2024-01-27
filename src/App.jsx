import React from 'react';

import AppHeader from './components/AppHeader/appHeader';
import BurgerIngredients from './components/BurgerIngredients/burgerIngredients'
import BurgerConstructor from './components/BurgerConstructor/burgerConstructor'

import app from './App.module.css';

export default function App() {
  return (
    <div className="App">
      <AppHeader> </AppHeader>
        <div>
            <h1 className={app.title}>Соберите бургер</h1>
            <div className={app.box}>
                <BurgerIngredients />
                <BurgerConstructor />
            </div>
        </div>
    </div>
  );
}
