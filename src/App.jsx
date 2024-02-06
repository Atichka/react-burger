import React, {useEffect, useState} from 'react';

import AppHeader from './components/AppHeader/appHeader';
import BurgerIngredients from './components/BurgerIngredients/burgerIngredients'
import BurgerConstructor from './components/BurgerConstructor/burgerConstructor'
import Modal from './components/Modal/modal'
import getData from "./functions";

import app from './App.module.css';
import IngredientDetails from "./components/IngredientDetails/ingredientDetails";
import OrderDetails from "./components/OrderDetails/orderDetails";

export default function App() {
    const [ingredients, setIngredients] = useState(null);
    const [isModal, setModal] = useState(false)
    const [ingredient, setIngredient] = useState(null)
    const [windowIngredient, setWindowIngredient] = useState(false)
    const [windowFinish, setWindowFinish] = useState(false)

        useEffect(() => {
            getData().then((data) => {
                setIngredients({ ...ingredients, ingredients: data.data })
            });
        }, []);

  return (
    <div className="App">
      <AppHeader />
        <div className={app.block}>
            <h1 className={app.title}>Соберите бургер</h1>
            {ingredients?.ingredients?.length &&  (<div className={app.box}>
                <BurgerIngredients ingredients={ingredients.ingredients} />
                <BurgerConstructor setModal={setModal}
                                   setIngredient={setIngredient}
                                   ingredients={ingredients.ingredients}
                                   setWindowIngredient={setWindowIngredient}
                                   setWindowFinish={setWindowFinish}/>
            </div>)
            }
        </div>
        {isModal && windowIngredient &&
            (<Modal setModal={setModal}>
                <IngredientDetails setModal={setModal}
                                   setWindowIngredient={setWindowIngredient}
                                   ingredient={ingredients.ingredients.filter(x => x._id === ingredient.id)} />
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
