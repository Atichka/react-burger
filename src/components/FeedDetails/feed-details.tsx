import React, {useCallback, useEffect} from "react";

import css from "./feed-details.module.css";

import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "../../services/store";
import {getStatus} from "../../utils/functions";
import {TBurgerConstructor} from "../../utils/types";
import { getOrderByNumber } from "../../services/actions/orderAction";


export default function FeedDetails(): React.JSX.Element {
    const dispatch = useDispatch();
    const { number } = useParams();
    const listIngredients = useSelector((store) => store.ingredients.ingredients);

    const order = useSelector(state => {
        let order = state.feedOrders.orders?.orders.find(order => order.number === Number(number));
        if (order) {
            return order;
        }

        order = state.ordersProfile.orders?.orders.find(order => order.number === Number(number));
        if (order) {
            return order;
        }

        return state.order.selectedOrder;
    })


    useEffect(() => {
        if (!order) {
            dispatch(getOrderByNumber(Number(number)));
        }
    }, []);

    if (!order) {
        return <p>Загрузка</p>
    }

    const dataIngredients: TBurgerConstructor[] = [];
    const counter: any = {};
    const totalPrice =
        listIngredients &&
        order.ingredients &&
        order.ingredients.reduce((total, id) => {
            listIngredients.forEach((i) => {
                if (i._id === id) {
                    total += i.price;
                }
            });
            return total;
        }, 0);

    if (listIngredients && order.ingredients) {
        order.ingredients.forEach((i) => {
            if (counter[i] === undefined) {
                counter[i] = 1;
                const addedElement = listIngredients.find(
                    (element) => element._id === i,
                );
                addedElement && dataIngredients.push(addedElement);
            } else {
                counter[i]++;
            }
        });
    }

    return (
        <div className={css.container}>
            <p className={`${css.order} text text_type_digits-default`}>{`#${order.number}`}</p>
            <h1 className="text text_type_main-medium">{order.name}</h1>
            <p
                className={
                    order.status === "done"
                        ? `${order.status} ${css.status_done} text text_type_main-default`
                        : `${order.status} ${css.status_pending} text text_type_main-default`
                }
            >
                {getStatus(order.status)}
            </p>
            <h2 className={`${css.structure} text text_type_main-medium`}>
                Состав
            </h2>
            <ul className={`${css.list} custom-scroll`}>
                {order.ingredients &&
                    listIngredients &&
                    dataIngredients &&
                    dataIngredients.map(el => (
                        <li key={el._id} className={css.element}>
                            <div className={css.img_container}>
                                <div className={css.img_background}>
                                    <div className={css.img_box}>
                                        <img className={css.img} src={el.image} alt={el.name} />
                                    </div>
                                </div>
                                <h3 className={`${css.name} text text_type_main-default`}>
                                    {el.name}
                                </h3>
                            </div>
                            <div className={css.price}>
                                <p className="text text_type_digits-default">
                                    {counter[el._id]}
                                </p>
                                <p className="text text_type_main-default">&nbsp;x&nbsp;</p>
                                <div className={css.caption}>
                                    <p className="text text_type_digits-default">{el.price}</p>
                                    <CurrencyIcon type="primary" />
                                </div>
                            </div>
                        </li>
                    ))}
            </ul>
            <div className={css.box}>
                <div className={css.caption}>
                    <FormattedDate
                        className="text text_type_main-default text_color_inactive"
                        date={new Date(order.createdAt)}
                    />
                </div>
                <div className={css.caption}>
                    <p className="text text_type_digits-default">{totalPrice}</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
    );
}
