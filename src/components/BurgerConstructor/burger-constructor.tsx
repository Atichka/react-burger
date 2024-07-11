import React from 'react';
import {DndProvider, useDrop} from 'react-dnd';
import {HTML5Backend} from "react-dnd-html5-backend";

import css from './burger-constructor.module.css'
import ConstructorItem from "../ConstructorItem/constructor-item";
import {CurrencyIcon, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {shallowEqual} from "react-redux";
import {addToConstructor, INGREDIENT_DELETE} from "../../services/actions/constructorAction";
import {useLocation, useNavigate} from "react-router-dom";
import {TBurgerConstructor} from "../../utils/types";
import { resetOrder, sendOrder } from '../../services/actions/orderAction';
import OrderDetails from '../OrderDetails/order-details';
import Modal from '../Modal/modal';
import ReactLoading from 'react-loading';
import { getOrderNumber } from '../../services/selectors/order';
import { useDispatch, useSelector } from '../../services/store';
import { getBun, getLoading, getStuffings } from '../../services/selectors/constructor';
import { getUser } from '../../services/selectors/user';

export default function BurgerConstructor(): React.JSX.Element {
    const dispatch = useDispatch();
    const stuffings = useSelector(getStuffings);
    const navigate = useNavigate();
    const location = useLocation();
    const user = useSelector(getUser);
    const isLoading = useSelector(getLoading);
    const { orderNumber } = useSelector(getOrderNumber, shallowEqual);

    const bun = useSelector(getBun);
    const [, dropRef] = useDrop({
        accept: "ingredient",
        drop(item: TBurgerConstructor) {
            dispatch(addToConstructor(item));
        },
    });

    const deleteIngredient = (id: string) => {
        dispatch({ type: INGREDIENT_DELETE, payload: id });
    };
    let totalPrice = 0;

    const handleSubmit = () => {
        if (!user) {
            navigate("/login", { state: { from: location } });
            return;
        }

        if (!bun) {
            return;
        }

        const ingredientsId = [bun, ...stuffings, bun].map((item) => item.id!);
        dispatch(sendOrder(ingredientsId));
    };

    const closeOrderModal = () => {
        dispatch(resetOrder());
    }

    return (
        <div ref={dropRef}>
            <div className={css.box}>
                {bun &&
                    ((totalPrice += bun.price),
                        (
                            <ConstructorItem
                                key={bun.id + "top"}
                                image={bun.image}
                                text={bun.name + " (верх)"}
                                price={bun.price}
                                type={"top"}
                                id={bun.id!}
                                isLocked
                            />
                        ))}
                <DndProvider backend={HTML5Backend}>
                    {stuffings &&
                        stuffings.map((item: TBurgerConstructor, index: number) =>
                            item.nanoid ? (
                                ((totalPrice += item.price),
                                    (
                                        <ConstructorItem
                                            key={item.nanoid}
                                            index={index}
                                            image={item.image}
                                            text={item.name}
                                            price={item.price}
                                            type={item.type}
                                            id={item.nanoid}
                                            deleteIngredient={deleteIngredient}
                                            isLocked
                                        />
                                    ))
                            ) : (
                                <></>
                            )
                        )}
                </DndProvider>
                {bun &&
                    ((totalPrice += bun.price),
                        (
                            <ConstructorItem
                                key={bun.id + "bottom"}
                                isLocked
                                image={bun.image}
                                text={bun.name + " (низ)"}
                                price={bun.price}
                                type={"bottom"}
                                id={bun.id!}
                            />
                        ))}
            </div>
            <div className={css.total}>
                <div className={css.price}>
                    <p className={css.title}>{totalPrice}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button
                    onClick={handleSubmit}
                    htmlType="button"
                    type="primary"
                    size="small"
                    extraClass="ml-2"
                >
                    Оформить заказ
                </Button>
            </div>
            {(isLoading || orderNumber) && (
                <Modal onClose={closeOrderModal} title={isLoading ? "Оформляем заказ..." : ""}>
                    {isLoading ? (
                        <div className={css.preloader_box}>
                            <ReactLoading
                                type="spin"
                                color="white"
                                height={100}
                                width={50}
                            />
                        </div>
                    ) : (
                        <OrderDetails />
                    )}
                </Modal>
            )}
        </div>
    );
}
