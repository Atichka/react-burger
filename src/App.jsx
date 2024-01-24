import React from 'react';

import AppHeader from './components/AppHeader/appHeader';
import BurgerIngredients from './components/BurgerIngredients/burgerIngredients'

import './App.css';

function App() {
  return (
    <div className="App">
      <AppHeader />
        <div>
            <BurgerIngredients />
            {/*<BurgerConstructor />*/}
        </div>
    </div>
  );
}

export default App;
