import React, {useEffect, useState} from 'react';

import AppHeader from './components/AppHeader/appHeader';
import BurgerIngredients from './components/BurgerIngredients/burgerIngredients'
import BurgerConstructor from './components/BurgerConstructor/burgerConstructor'
import ModalOverlay from './components/ModalOverlay/modalOverlay'

import app from './App.module.css';

export default function App() {
    const url ="https://norma.nomoreparties.space/api/ingredients";
    const [state, setState] = useState([]);
    const [isModal, setModal] = useState(false)
    const [ingredient, setIngredient] = useState([])

        useEffect(() => {
            getData()
        }, [])

    function getData() {
            fetch(url)
            .then((result) => result.json())
                .then((data) => setState({ ...state, ingredients: data.data }))
                .catch((error) => console.log(error));
    }
  return (
    <div className="App">
      <AppHeader> </AppHeader>
        <div>
            <h1 className={app.title}>Соберите бургер</h1>
            {state?.ingredients?.length &&  (<div className={app.box}>
                <BurgerIngredients data={state.ingredients}/>
                <BurgerConstructor setModal={setModal} setIngredient={setIngredient} data={state.ingredients}/>
            </div>)
            }
        </div>
        {isModal &&
            <ModalOverlay setModal={setModal} ingredient={state.ingredients.filter(x => x._id === ingredient.id)}/>
        }
    </div>
  );
}
