import React from 'react';

import modal from './modal.module.css'
import close from '../../images/close.svg'

export default function Modal(props) {
    return (
            <div className={modal.content}>
                <div className={modal.header}>
                    <h1 className={modal.title}>Детали ингредиента</h1>
                    <img src={close} alt="" className={modal.close} onClick={() => props.setModal(false)}/>
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
    );
}

