import React from 'react';

import modal from './modal.module.css'
import close from '../../images/close.svg'

import {CheckMarkIcon} from "@ya.praktikum/react-developer-burger-ui-components";

export default function Modal(props) {
    return (
        <div>
            {props.ingredient &&
                <div className={modal.content}>
                    <div className={modal.header}>
                        <h1 className={modal.title}>Детали ингредиента</h1>
                        <img src={close} alt="" className={modal.close} onClick={() => {
                            props.setModal(false);
                            props.setWindowIngredient(false)
                        }}/>
                    </div>
                    <img src={props.ingredient[0].image} alt="" className={modal.pic} />
                    <div className={modal.box}>
                        <h2 className={modal.name}>{props.ingredient[0].name}</h2>
                        <div className={modal.block}>
                            <div>
                                <h3 className={modal.text}>Калории, ккал</h3>
                                <p className={modal.paragraph}>{props.ingredient[0].calories}</p>
                            </div>
                            <div>
                                <h3 className={modal.text}>Белки, г</h3>
                                <p className={modal.paragraph}>{props.ingredient[0].proteins}</p>
                            </div>
                            <div>
                                <h3 className={modal.text}>Жиры, г</h3>
                                <p className={modal.paragraph}>{props.ingredient[0].fat}</p>
                            </div>
                            <div>
                                <h3 className={modal.text}>Углеводы, г</h3>
                                <p className={modal.paragraph}>{props.ingredient[0].carbohydrates}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {props.windowsFinish &&
                <div className={modal.content}>
                    <div className={modal.buttonClose}>
                        <img src={close} alt="" className={modal.close} onClick={() => {
                            props.setModal(false);
                            props.setWindowFinish(false)
                        }} />
                    </div>
                    <h1 className={modal.number}>034536</h1>
                    <p className={modal.name}>Идентификатор заказа</p>
                    <div className={modal.checkIcon}>
                        <CheckMarkIcon type="primary" />
                    </div>
                    <div>
                        <h3 className={modal.text}>Ваш заказ начали готовить</h3>
                        <p className={modal.name}>Дождитесь готовности на орбитальной станции</p>
                    </div>
                </div>
            }
        </div>

    );
}

