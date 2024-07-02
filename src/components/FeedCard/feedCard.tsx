import React from 'react';
import {useSelector} from "../../services/store";
import css from './feedCard.module.css'

import {Counter, CurrencyIcon, FormattedDate} from '@ya.praktikum/react-developer-burger-ui-components'
import {TImages, TOrderCard} from "../../utils/types";
import {useLocation} from "react-router-dom";
import {getStatus} from "../../utils/functions";

export default function FeedCard(props: TOrderCard): React.JSX.Element {
    const location = useLocation();
    const { number, createdAt, name, ingredients, _id, status } = props.order;
    const listIngredients = useSelector((store) => store.ingredients.ingredients);
    const images: TImages[] = [];
    ingredients &&
    listIngredients.forEach((ingredient) => {
        ingredients.forEach((i) => {
            if (i === ingredient._id) {
                images.push({
                    image: ingredient.image,
                    name: ingredient.name,
                });
            }
        });
    });

    const checkCount = () => {
        if (images.length > 5) {
            return images.length - 5;
        }
        return null;
    };
    const totalPrice =
        listIngredients &&
        ingredients.reduce((total, id) => {
            listIngredients.forEach((i) => {
                if (i._id === id) {
                    total += i.price;
                }
            });
            return total;
        }, 0);
    return (
        <li className={css.card}>
            <div className={css.caption}>
                <p className="text text_type_digits-default">#{number}</p>
                <div className={css.date}>
                    <FormattedDate
                        className="text text_type_main-default text_color_inactive"
                        date={new Date(createdAt)}
                    />
                </div>
            </div>
            {location.pathname === "/feed" ? (
                <h2 className="text text_type_main-medium">{name}</h2>
            ) : (
                <div className={css.element}>
                    <h2 className="text text_type_main-medium">{name}</h2>
                    <p
                        className={
                            status === "done"
                                ? `${css.status_done} text text_type_main-default`
                                : `${css.status_pending} text text_type_main-default`
                        }
                    >
                        {getStatus(status)}
                    </p>
                </div>
            )}
            <div className={css.box}>
                <ul className={css.ingredients}>
                    {images.slice(0, 5).map((img, i) => (
                        <li key={i} className={css.img_background}>
                            <div className={css.img_container}>
                                <img className={css.img} src={img.image} alt={img.name} />
                            </div>
                        </li>
                    ))}
                    {images.length > 5 ? (
                        <li className={css.img_background}>
                            <div className={css.img_container}>
                                <img
                                    className={css.img}
                                    src={images[5].image}
                                    alt={images[5].name}
                                />
                            </div>
                        </li>
                    ) : null}

                    {checkCount() ? (
                        <p
                            className={`${css.counter} text text_type_main-default`}
                        >{`+${checkCount()}`}</p>
                    ) : (
                        ""
                    )}
                </ul>
                <div className={css.price}>
                    <p className="text text_type_digits-default">{totalPrice}</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </li>
    );
};
