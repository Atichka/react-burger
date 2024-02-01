import React, {useEffect, useState} from 'react';

import AppHeader from './components/AppHeader/appHeader';
import BurgerIngredients from './components/BurgerIngredients/burgerIngredients'
import BurgerConstructor from './components/BurgerConstructor/burgerConstructor'
import ModalOverlay from './components/ModalOverlay/modalOverlay'

import app from './App.module.css';

import * as constants from '../src/const'
const url = constants.url;

export default function App() {
    const [state, setState] = useState([]);
    const [isModal, setModal] = useState(false)
    const [ingredient, setIngredient] = useState([])
    const [windowIngredient, setWindowIngredient] = useState(false)
    const [windowFinish, setWindowFinish] = useState(false)

        useEffect(() => {
            getData()
            document.addEventListener('keyup', (e) => {
                if (e.keyCode === 27) setModal(false);
            });
        }, [])

    function getData() {
            fetch(url)
            .then((result) => result.json())
                .then((data) => setState({ ...state, ingredients: data.data }))
                .catch((error) => console.log(error));
    }
  return (
    <div className="App">
      <AppHeader />
        <div className={app.block}>
            <h1 className={app.title}>Соберите бургер</h1>
            {state?.ingredients?.length &&  (<div className={app.box}>
                <BurgerIngredients data={state.ingredients} />
                <BurgerConstructor setModal={setModal}
                                   setIngredient={setIngredient}
                                   data={state.ingredients}
                                   setWindowIngredient={setWindowIngredient}
                                   setWindowFinish={setWindowFinish}/>
            </div>)
            }
        </div>
        {isModal && windowIngredient &&
            <ModalOverlay setModal={setModal} setWindowIngredient={setWindowIngredient} ingredient={state.ingredients.filter(x => x._id === ingredient.id)}/>
        }
        {isModal && windowFinish &&
            <ModalOverlay setModal={setModal} windowsFinish={windowFinish} setWindowsFinish={setWindowFinish} />
        }


    </div>
  );
}
